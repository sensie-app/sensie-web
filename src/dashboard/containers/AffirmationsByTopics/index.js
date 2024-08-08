// react
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { Element, Link } from 'react-scroll'
// contaniners
import NewAffirmation from '../../containers/NewAffirmation'
// components
import Icon from '../../components/Icon'
import Topic from '../../components/Topic'
import Title from '../../components/Title'
import ItemCheckbox from '../../components/ItemCheckbox'
// constants
import TopicsConstants from '../../constants/topics'
import IMG from '../../constants/images'
import { COLORS } from '../../constants/theme'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setCheckboxAllAffirmationsByTopicsAction } from '../../../redux/actions/checkbox.actions'
// utils
import { handleArrTopics } from '../../utils/functions'
// styles
import styles from './styles.module.scss'

import { gqlquery2 } from '../../utils/queries'
import { createTopicPrivate, updateUserTopicId } from '../../graphql/mutations'
import { getTopicByIdQuery } from '../../graphql/queries'
import { getAllTopicsAction } from '../../../redux/actions/topics.action'
// import { useParams } from 'react-router-dom'
// import Grid from "@material-ui/core/Grid";

// const
const { spirit, health, family, finance, fun, parenting, perfomance, personal, love } = TopicsConstants
const { spiritImg, healthImg, financeImg, funImg, loveImg, familyImg, parentingImg, personalImg, performanceImg, noImg } = IMG
const showOldTopics = false
const { fontColor1 } = COLORS

// * component
/**
 * AffirmationsByTopics component
 * @component
 * @param {undefined} onClick
 * @param {boolean} checkAll
 * @param {string} packId
 * @param {undefined} onAddToPack (default: ()=>{})
 */
const AffirmationsByTopics = ({ onClick, checkAll, packId, onAddToPack = () => {} }) => {
  // ? hooks
  const dispatch = useDispatch()
  const {
    userReducer: { user },
    topicsReducer: { topics },
    checkboxReducer: { all: { affirmationsByTopics } }
  } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [topic, setTopic] = useState(null)
  const [affirmations, setAffirmations] = useState([])
  const [active, setActive] = useState(null)

  useEffect(async () => await handleOnClickProps(), [topic])

  useEffect(() => {
    if (user.id !== null) {
      if (user.data.userTopicId === null) {
        handleCreateTopicPrivate().then(v => {
          const idTopic = v.value.data.createTopic.id
          handleUpdateUserTopicId(user.id, idTopic).then(h => {
            user.data.userTopicId = idTopic
            dispatch(getAllTopicsAction(user.data.userTopicId))
          })
        })
      }
    }
  }, [])

  const handleCreateTopicPrivate = async () => {
    const result = await gqlquery2(createTopicPrivate('topics/private.svg', 'Private', 'topics/private.jpg'))
    return result
  }

  const handleUpdateUserTopicId = async (id, idTopic) => {
    const result = await gqlquery2(updateUserTopicId(id, idTopic))
    return result
  }

  // ? handle functions
  /**
   * handleOnClickProps
   */
  const handleOnClickProps = async () => {
    if (topic) {
      let listaffirmations = topics.filter(item => item.id === topic.id)[0]

      if (typeof listaffirmations === 'undefined') {
        const r = await gqlquery2(getTopicByIdQuery(topic.id))
        listaffirmations = r.value.data.getTopic
      }

      const listUniqueAffirmations = getUniqueListAffirmations(listaffirmations.affirmations.items)
      setAffirmations(listUniqueAffirmations)
    }
  }

  const getUniqueListAffirmations = (items) => {
    return items.filter((item, index, self) => {
      return self.findIndex(selfVal => selfVal.affirmation.id === item.affirmation.id) === index
    })
  }

  /**
   * handle image topics
   * @param {string} topic
   * @returns {string} url-image
   */
  const handleImageTopics = topic => {
    switch (topic) {
      case spirit: return spiritImg
      case health: return healthImg
      case family: return familyImg
      case finance: return financeImg
      case fun: return funImg
      case parenting: return parentingImg
      case perfomance: return performanceImg
      case personal: return personalImg
      case love: return loveImg
      default: return noImg
    }
  }

  const handleOnClickSelectAll = value => dispatch(setCheckboxAllAffirmationsByTopicsAction(value))

  const handleOnClickBtn = (_topic) => {
    setTopic(_topic)
    setActive(_topic.id)
  }

  // ? render functions
  /**
   * render image box
   * @returns {undefined} Topic component
   */
  const renderImagesBox = () => {
    const arrTopics = Object.keys(TopicsConstants).map((key) => TopicsConstants[key])
    return arrTopics.map((_topic, index) => (
      <button
        key={index}
        onClick={() => handleOnClickBtn(_topic)}>
        <Topic
          img={handleImageTopics(_topic)}
          icon={_topic.icon}
          title={_topic}
          topic={_topic}
          withLink={false}
          witCheckbox={false}
          size="100px"
          iconSize='25px'
        />
      </button>)
    )
  }

  /**
   * render topics
   * @returns {undefined} Topic component
   */
  const renderTopics = () => {
    if (topics !== null) {
      return topics.map((_topic, index) => {
        return (
          <Slide key={index} index={index}>
            <Link className={styles.affirmationsByTopicsButton}
              to="listTopics" smooth={true} offset={-150}
              onClick={() => handleOnClickBtn(_topic)}>
              <Topic
                  img={_topic.picture}
                  icon={_topic.icon}
                  title={_topic}
                  topic={_topic}
                  withLink={false}
                  witCheckbox={false}
                  min={true}
                  iconSize='25px'
                  active={active === _topic.id}
              />
            </Link>
          </Slide>
        )
      })
    } else {
      return null
    }
  }

  /**
   * render list affirmations
   * @returns {undefined} Affirmations component
   */
  const renderListAffirmations = () => {
    return affirmations.length > 0 && affirmations.map(item => {
      return <NewAffirmation
        packId={packId}
        data={item.affirmation}
        checkAll={affirmationsByTopics}
        key={item.affirmation.id}
        title={item.affirmation.name}
        selectedTopics={handleArrTopics(item.affirmation.topics.items)}
        withRemoveBtn={false}
        withAddBtn={true}
        withDeleteBtn={false}
        onAddToPack={onAddToPack}
      />
    })
  }

  return (
    <div className={styles.AffirmationsByTopicsContainer}>
      {/* title */}
      <div className={styles.AffirmationsByTopicsTitleContainer}>
        <Title text={t('dashboard.IntentionsByTopics.title')} />
        <span className={styles.AffirmationsByTopicsTitleTopic}>{topic !== null && `- ${topic.name}`}</span>
      </div>
      {/* header images */}
      <div className={styles.AffirmationsByTopicsHeaderContainer}>
        <div className={styles.AffirmationsByTopicsBoxesContainer}>
          {showOldTopics && renderImagesBox()}
          {/* <div className={styles.affirmationsByTopicsCaruselContainer}> */}
            <CarouselProvider
              visibleSlides={10}
              totalSlides={topics.length}
              step={2}
              naturalSlideWidth={25}
              naturalSlideHeight={30}
              // hasMasterSpinner
              infinite
            >
              <Slider>
                {renderTopics()}
              </Slider>
              <ButtonBack className={styles.affirmationsByTopicsCaruselBtn}><Icon name="arrow-ios-back-outline" color={fontColor1} size="md" /></ButtonBack>
              <ButtonNext className={styles.affirmationsByTopicsCaruselBtn}><Icon name="arrow-ios-forward-outline" color={fontColor1} size="md" /></ButtonNext>
            </CarouselProvider>
          {/* </div> */}
        </div>
        <div className={styles.AffirmationsByTopicsActionContainer}>
          <ItemCheckbox check={checkAll} defaultValue={false} onClick={value => handleOnClickSelectAll(!value)}>
            {affirmationsByTopics
              ? <div className={styles.CreateAffirmationsHeaderActions}>
                  <button>
                    <span>{t('dashboard.IntentionsByTopics.addToPack')}</span>
                  </button>
                </div>
              : <h5>{t('dashboard.IntentionsByTopics.selectAll')}</h5>
            }
          </ItemCheckbox>
        </div>
      </div>
      {/* affirmations list */}
      <Element id="listTopics" name="listTopics" className={styles.AffirmationsByTopicsListContainer}>
        {renderListAffirmations()}
      </Element>
    </div>
  )
}

// prop-types
AffirmationsByTopics.propTypes = {
  /** onClick */
  onClick: PropTypes.func,
  /** checkALl */
  checkAll: PropTypes.bool,
  /** packId */
  packId: PropTypes.string,
  /** onAddToPack */
  onAddToPack: PropTypes.func
}

export default AffirmationsByTopics
