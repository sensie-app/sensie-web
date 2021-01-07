// react
import React, { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
// containers
import Header from '../../containers/Header'
import CreateAffirmations from '../../containers/CreateAffirmations'
import NewAffirmation from '../../containers/NewAffirmation'
// components
import Share from '../../components/Share'
import SvgIcon from '../../components/SvgIcon'
// constants
import IMG from '../../constants/images'
import DASHBOARD_ROUTES from '../../constants/routes'
import TopicsConstants from '../../constants/topics'
// utils
import { gqlquery, gqlmutation } from '../../utils/queries'
// graphql queries
import { getTopicByIdQuery } from '../../graphql/queries'
import { createAffirmationMutation, createAffirmation } from '../../graphql/mutations'
// styles
import styles from './styles.module.scss'

// const
const {
  noImg,
  // connectionMomentsImg,
  spiritImg,
  healthImg,
  financeImg,
  funImg,
  loveImg,
  familyImg,
  parentingImg,
  personalImg,
  performanceImg
} = IMG
const { affirmations } = DASHBOARD_ROUTES
const { spirit, health, family, finance, fun, parenting, perfomance, personal, love } = TopicsConstants

// * page
/**
 * Topic page component
 * @component
 */
const Topic = () => {
  // hooks
  const [t] = useTranslation('global')
  const { id } = useParams()
  const [dbTopic, setDbTopic] = useState([])
  const [defaultTopic, setDefaultTopic] = useState({})
  const [waitQuery, setWaitQuery] = useState(true)

  useEffect(async () => {
    const { loading, value } = await gqlquery(getTopicByIdQuery(id))
    if (!loading && value !== null) {
      setDbTopic(value.data.getTopic)
      const defTopic = [{
        name: value.data.getTopic.name,
        description: value.data.getTopic.description,
        id: value.data.getTopic.id
      }]
      setDefaultTopic(defTopic)
      setWaitQuery(false)
    } else {
      setWaitQuery(true)
    }
  }, [])

  // ? handle functions
  /**
   * handle img
   * @returns {string} img
   */
  const handleImg = () => {
    switch (id) {
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

  /**
   * handleCountAffirmations
   * @returns {number}
   */
  const handleCountAffirmations = () => !waitQuery && dbTopic.affirmations.items.length

  /**
   * handleArrTopics
   * @returns {Array}
   */
  const handleArrTopics = topics => topics.map(item => item.topic)

  /**
   * handleSaveAffirmation
   * @param {string} name
   * @param {string} description
   * @param {string} packId
   * @param {string} topicId
   * @param {string} userId
   * @returns {string} new affirmation id
   */
  const handleSaveAffirmation = async (name, description, packId, topicId, userId) => {
    const newAffirmation = await gqlquery(createAffirmationMutation(name, description, packId, topicId, userId))
    console.log('newAffirmation', newAffirmation)
    // return !newAffirmation.loading && newAffirmation.value !== null ? newAffirmation.value.data.createAffirmation.id : null

    const response = { name, description, packId, topicId, userId }
    const newAffirmation2 = await gqlmutation(createAffirmation, { input: response })
    return !newAffirmation2.loading && newAffirmation2.value !== null ? newAffirmation2.value.data.createAffirmation.id : null
  }

  // ? render functions
  /**
   * renderDbAffirmations
   * @returns {undefined} NewAffirmation container
   */
  const renderDbAffirmations = () => {
    return !waitQuery && dbTopic.affirmations.items.map(item => {
      const { id, name, topics } = item.affirmation
      return <NewAffirmation
        key={id}
        title={name}
        selectedTopics={handleArrTopics(topics.items)}
        withRemoveBtn={false}
        withAddBtn={false}
      />
    })
  }

  return (
    <Fragment>
      <Header withBack={true} withPeople={false} withDate={false} backTo={affirmations} />
      <div className={styles.TopicContainer}>
        {/* header */}
        <div className={styles.TopicHeaderContainer}>
          <div className={styles.TopicHeaderImgContainer}>
            <div className={styles.TopicHeaderImg} style={{ backgroundImage: `url(${handleImg()})` }} />
            <div className={styles.TopicHeaderTextContainer}>
              <div className={styles.TopicHeaderTextTitle}>
                <SvgIcon icon={id} size="30px" />
                {!waitQuery && <span>{dbTopic.name}</span>}
              </div>
              {/* <div className={styles.TopicHeaderTextDescription}>
                <h6>{dbTopic.description}</h6>
              </div> */}
              <div className={styles.TopicHeaderTextAffirmations}>
                <span>{handleCountAffirmations()} {t('dashboard.Topic.affirmations')}</span>
              </div>
            </div>
          </div>
          <div className={styles.TopicHeaderShareContainer}>
            <Share />
          </div>
        </div>
        {/* body */}
        <div className={styles.TopicBodyContainer}>
          <CreateAffirmations
            defaultTopic={defaultTopic}
            initShowForm={false}
            withAffirmationsByTopics={false}
            addToPack={true}
            onSave={handleSaveAffirmation}
          />
          {renderDbAffirmations()}
        </div>
      </div>
    </Fragment>
  )
}

export default Topic
