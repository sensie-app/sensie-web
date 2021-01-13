// react
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// contaniners
import NewAffirmation from '../../containers/NewAffirmation'
// components
import Topic from '../../components/Topic'
import Title from '../../components/Title'
import ItemCheckbox from '../../components/ItemCheckbox'
// constants
import TopicsConstants from '../../constants/topics'
import IMG from '../../constants/images'
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

// * component
/**
 * AffirmationsByTopics component
 * @component
 * @param {undefined} onClick
 * @param {boolean} checkAll
 */
const AffirmationsByTopics = ({ onClick, checkAll }) => {
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

  useEffect(async () => await handleOnClickProps(), [topic])

  // ? handle functions
  /**
   * handleOnClickProps
   */
  const handleOnClickProps = async () => {
    if (topic && user) {
      const listaffirmations = await onClick(topic.id, user.id)
      if (!listaffirmations.loading && listaffirmations.value !== null) setAffirmations(listaffirmations.value.data.listAffirmations.items)
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
        onClick={() => setTopic(_topic)}>
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
        <button
          key={index}
          onClick={() => setTopic(_topic)}>
          <a href="#listTopics">
            <Topic
              img={handleImageTopics(_topic)}
              title={_topic}
              topic={_topic}
              withLink={false}
              witCheckbox={false}
              size="100px"
              iconSize='25px'
            />
          </a>
        </button>
      )
    })
  }

  /**
   * render list affirmations
   * @returns {undefined} Affirmations component
   */
  const renderListAffirmations = () => {
    return affirmations.length > 0 && affirmations.map(affirmation => {
      return <NewAffirmation
        checkAll={affirmationsByTopics}
        key={affirmation.id}
        title={affirmation.name}
        selectedTopics={handleArrTopics(affirmation.topics.items)}
        withRemoveBtn={false}
        withAddBtn={true}
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
          {renderTopics()}
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
  checkAll: PropTypes.bool
}

export default AffirmationsByTopics
