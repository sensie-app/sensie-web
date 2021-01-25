// react
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
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
    topicsReducer: { topics },
    checkboxReducer: { all: { affirmationsByTopics } }
  } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [topic, setTopic] = useState(null)
  const [affirmations, setAffirmations] = useState([])
  const [active, setActive] = useState(null)

  useEffect(async () => await handleOnClickProps(), [topic])

  // ? handle functions
  /**
   * handleOnClickProps
   */
  const handleOnClickProps = async () => {
    if (topic) {
      const listaffirmations = topics.filter(item => item.id === topic.id)[0]
      setAffirmations(listaffirmations.affirmations.items)
    }
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
    return topics.map((_topic, index) => {
      return (
        <Slide key={index} index={index}>
          <button
            className={styles.affirmationsByTopicsButton}
            onClick={() => handleOnClickBtn(_topic)}>
            {/* <a href="#listTopics"> */}
              <Topic
                img={handleImageTopics(_topic)}
                title={_topic}
                topic={_topic}
                withLink={false}
                witCheckbox={false}
                size="100px"
                iconSize='25px'
                active={active === _topic.id}
              />
            {/* </a> */}
          </button>
        </Slide>
      )
    })
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
        onAddToPack={onAddToPack}
      />
    })
  }

  return (
    <div className={styles.AffirmationsByTopicsContainer}>
      {/* title */}
      <div className={styles.AffirmationsByTopicsTitleContainer}>
        <Title text={t('dashboard.AffirmationsByTopics.title')} />
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
              <Slider>{renderTopics()}</Slider>
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
                    <span>{t('dashboard.AffirmationsByTopics.addToPack')}</span>
                  </button>
                </div>
              : <h5>{t('dashboard.AffirmationsByTopics.selectAll')}</h5>
            }
          </ItemCheckbox>
        </div>
      </div>
      {/* affirmations list */}
      <div id="listTopics" className={styles.AffirmationsByTopicsListContainer}>
        {renderListAffirmations()}
      </div>
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
