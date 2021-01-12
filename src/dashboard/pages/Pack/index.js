// react
import React, { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
// containers
import Header from '../../containers/Header'
import CreateAffirmations from '../../containers/CreateAffirmations'
import NewAffirmation from '../../containers/NewAffirmation'
import AffirmationsByTopics from '../../containers/AffirmationsByTopics'
// components
import Share from '../../components/Share'
// constants
import IMG from '../../constants/images'
import DASHBOARD_ROUTES from '../../constants/routes'
// utils
import { gqlquery, gqlquery2 } from '../../utils/queries'
import { handleArrTopics } from '../../utils/functions'
// graphql queries
import { getPackByIdQuery, listAffirmationsByTopicIdQuery } from '../../graphql/queries'
import { createAffirmationMutation, joinAffirmationWithPack, joinAffirmationWithTopic } from '../../graphql/mutations'
// redux
import { useSelector } from 'react-redux'
// styles
import styles from './styles.module.scss'

// const
const { noImg } = IMG
const { affirmations } = DASHBOARD_ROUTES

// * page
/**
 * Pack page component
 * @component
 */
const Pack = () => {
  // hooks
  const [t] = useTranslation('global')
  const { userReducer: { user } } = useSelector(state => state)
  const { id } = useParams()
  const [pack, setPack] = useState(null)
  const [newAff, setNewAff] = useState(false)
  const [waitQuery, setWaitQuery] = useState(true)

  useEffect(async () => await handlePackQuery(), [])
  useEffect(async () => await handlePackQuery(), [newAff])

  // ? handle functions
  /**
   * handlePackQuery
   */
  const handlePackQuery = async () => {
    const dbPack = await gqlquery(getPackByIdQuery(id))
    const { loading, value } = dbPack
    if (!loading && value !== null) {
      setPack(value.data.getPack)
      setWaitQuery(false)
    } else {
      setWaitQuery(true)
    }
  }

  /**
   * handleCreateAffirmationMutation
   * @param {string} name
   * @param {string} description
   * @param {array.string} topicsId
   * @param {string} packId
   * @returns {string} new pack id
   */
  const handleCreateAffirmationMutation = async (name, description, topicsId, packId) => {
    let successJoinPack
    const newAffirmationTopicJoin = []
    // save affirmation
    const newAffirmation = await gqlquery2(createAffirmationMutation(name, description, user.id))
    const successAffirmation = !newAffirmation.loading && newAffirmation.value !== null

    if (successAffirmation) {
      const newAffirmationId = newAffirmation.value.data.createAffirmation.id
      // join to pack
      const newAffirmationPackJoin = await gqlquery2(joinAffirmationWithPack(newAffirmationId, packId))
      successJoinPack = !newAffirmationPackJoin.loading && newAffirmationPackJoin.value !== null

      // join to topics
      topicsId.map(async topicId => {
        const joinTopic = await gqlquery2(joinAffirmationWithTopic(newAffirmationId, topicId))
        newAffirmationTopicJoin.push(!joinTopic.loading && joinTopic.value !== null)
      })
    }
    setNewAff(successAffirmation && successJoinPack ? !newAff : newAff)
    return successAffirmation && successJoinPack ? newAffirmation.value.data.createAffirmation.id : null
  }

  /**
   * handleCountAffirmations
   * @returns {number}
   */
  const handleCountAffirmations = () => !waitQuery && pack.affirmations.items.length

  /**
   * handleAffirmationsByTopicsQuery
   * @param {strinf} topicId
   * @param {string} userId
   */
  const handleAffirmationsByTopicsQuery = async (topicId, userId) => await gqlquery(listAffirmationsByTopicIdQuery(topicId, userId))

  // ? render functions
  /**
   * renderDbAffirmations
   * @returns {undefined} NewAffirmation container
   */
  const renderDbAffirmations = () => {
    return !waitQuery && pack.affirmations.items.map(item => {
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
      <div className={styles.PackContainer}>
        {/* header */}
        <div className={styles.PackHeaderContainer}>
          <div className={styles.PackHeaderImgContainer}>
            <div className={styles.PackHeaderImg} style={{ backgroundImage: `url(${noImg})` }} />
            <div className={styles.PackHeaderTextContainer}>
              {!waitQuery && <span>{pack.name}</span>}
              <div>
                <span>{handleCountAffirmations()} {t('dashboard.Pack.affirmations')}</span>
              </div>
            </div>
          </div>
          <div className={styles.PackHeaderShareContainer}>
            <Share />
          </div>
        </div>
        {/* body */}
        <div className={styles.PackBodyContainer}>
          <CreateAffirmations initShowForm={false} withAffirmationsByTopics={false} defaultPack={id} onSave={handleCreateAffirmationMutation}/>
          {renderDbAffirmations()}
          <AffirmationsByTopics onClick={handleAffirmationsByTopicsQuery} />
        </div>
      </div>
    </Fragment>
  )
}

export default Pack
