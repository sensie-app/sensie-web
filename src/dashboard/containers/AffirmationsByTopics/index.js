// react
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
// material-ui
import Checkbox from '@material-ui/core/Checkbox'
// components
import Topic from '../../components/Topic'
import Title from '../../components/Title'
// constants
import TopicsConstants from '../../constants/topics'
import IMG from '../../constants/images'
import { COLORS } from '../../constants/theme'
// redux
// import { useSelector } from 'react-redux'
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
 */
const AffirmationsByTopics = () => {
  // hooks
  // const { userReducer: { user }, topicsReducer: { topics } } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [topic, setTopic] = useState(null)
  const [selectAllCheckbox, setSelectAllCheckbox] = useState(false)

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

  // const renderTopics = () => {
  //   return topics.map((_topic, index) => (
  //     <button
  //       key={index}
  //       onClick={() => setTopic(_topic)}>
  //       <Topic
  //         img={handleImageTopics(_topic)}
  //         title={_topic}
  //         topic={_topic}
  //         withLink={false}
  //         witCheckbox={false}
  //         size="100px"
  //         iconSize='25px'
  //       />
  //     </button>)
  //   )
  // }

  return (
    <div className={styles.AffirmationsByTopicsContainer}>
      {/* title */}
      <div className={styles.AffirmationsByTopicsTitleContainer}>
        <Title text={t('dashboard.AffirmationsByTopics.title')} />
        <span className={styles.AffirmationsByTopicsTitleTopic}>{topic !== null && `- ${topic}`}</span>
      </div>
      {/* header images */}
      <div className={styles.AffirmationsByTopicsHeaderContainer}>
        <div className={styles.AffirmationsByTopicsBoxesContainer}>
          {renderImagesBox()}
          {/* {renderTopics()} */}
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

      </div>
    </div>
  )
}

export default AffirmationsByTopics
