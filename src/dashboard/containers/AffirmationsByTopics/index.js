// react
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// material-ui
import Checkbox from '@material-ui/core/Checkbox'
// contaniners
import NewAffirmation from '../../containers/NewAffirmation'
// components
import Topic from '../../components/Topic'
import Title from '../../components/Title'
// constants
import TopicsConstants from '../../constants/topics'
import IMG from '../../constants/images'
import { COLORS } from '../../constants/theme'
// redux
import { useSelector } from 'react-redux'
// utils
import { handleArrTopics } from '../../utils/functions'
// styles
import styles from './styles.module.scss'

// const
const { spirit, health, family, finance, fun, parenting, perfomance, personal, love } = TopicsConstants
const { spiritImg, healthImg, financeImg, funImg, loveImg, familyImg, parentingImg, personalImg, performanceImg, noImg } = IMG
const { actionColor1 } = COLORS

// * component
/**
 * AffirmationsByTopics component
 * @component
 * @param {undefined} onClick
 */
const AffirmationsByTopics = ({ onClick }) => {
  // hooks
  const { userReducer: { user }, topicsReducer: { topics } } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [topic, setTopic] = useState(null)
  const [affirmations, setAffirmations] = useState([])
  const [selectAllCheckbox, setSelectAllCheckbox] = useState(false)

  useEffect(async () => {
    if (topic && user) {
      const listaffirmations = await onClick(topic.id, user.id)
      if (!listaffirmations.loading && listaffirmations.value !== null) setAffirmations(listaffirmations.value.data.listAffirmations.items)
    }
  }, [topic])

  console.log('affirmations', affirmations)

  // ? handle functions
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
          <Topic
            img={handleImageTopics(_topic)}
            title={_topic}
            topic={_topic}
            withLink={false}
            witCheckbox={false}
            size="100px"
            iconSize='25px'
          />
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
          {renderImagesBox()}
          {renderTopics()}
        </div>
        <div className={styles.AffirmationsByTopicsActionContainer}>
          <Checkbox checked={selectAllCheckbox} onChange={() => setSelectAllCheckbox(!selectAllCheckbox)} color={actionColor1} className={styles.AffirmationsByTopicsCheckbox} />
          {selectAllCheckbox
            ? <div className={styles.CreateAffirmationsHeaderActions}>
                <button>
                  <span>{t('dashboard.AffirmationsByTopics.addToPack')}</span>
                </button>
              </div>
            : <h5>Select all</h5>
          }
        </div>
      </div>
      {/* affirmations list */}
      <div className={styles.AffirmationsByTopicsListContainer}>
        {renderListAffirmations()}
      </div>
    </div>
  )
}

// prop-types
AffirmationsByTopics.propTypes = {
  /** onClick */
  onClick: PropTypes.func
}

export default AffirmationsByTopics
