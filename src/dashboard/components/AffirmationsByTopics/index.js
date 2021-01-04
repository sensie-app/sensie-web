// react
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
// components
import Topic from '../Topic'
import Title from '../Title'
// constants
import TopicsConstants from '../../constants/topics'
import IMG from '../../constants/images'
// styles
import styles from './styles.module.scss'

// const
const { spirit, health, family, finance, fun, parenting, perfomance, personal, love } = TopicsConstants
const { spiritImg, healthImg, financeImg, funImg, loveImg, familyImg, parentingImg, personalImg, performanceImg, noImg } = IMG

// * component
/**
 * AffirmationsByTopics component
 * @component
 */
const AffirmationsByTopics = () => {
  // hooks
  const [t] = useTranslation('global')
  const [topic, setTopic] = useState(null)

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

  return (
    <div className={styles.AffirmationsByTopicsContainer}>
      {/* title */}
      <div className={styles.AffirmationsByTopicsTitleContainer}>
        <Title text={t('dashboard.AffirmationsByTopics.title')} />
        <span className={styles.AffirmationsByTopicsTitleTopic}>{topic !== null && `- ${topic}`}</span>
      </div>
      {/* header images */}
      <div className={styles.AffirmationsByTopicsHeaderContainer}>
        {renderImagesBox()}
      </div>
      {/* affirmations list */}
      <div className={styles.AffirmationsByTopicsListContainer}>

      </div>
    </div>
  )
}

export default AffirmationsByTopics
