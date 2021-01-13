// ! ------------
// ! DON'T USE!!!
// ! ------------

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
import AffirmationsByTopics from '../../containers/AffirmationsByTopics'
// constants
import IMG from '../../constants/images'
import DASHBOARD_ROUTES from '../../constants/routes'
// utils
import { gqlquery } from '../../utils/queries'
// graphql queries
import { getPackByIdQuery, listAffirmationsByTopicIdQuery } from '../../graphql/queries'
// styles
import styles from './styles.module.scss'

// const
const { noImg } = IMG
const { affirmations } = DASHBOARD_ROUTES

// * page
/**
 * AddPack page component
 * @component
 */
const AddPacks = () => {
  // ? hooks
  const [t] = useTranslation('global')
  const { id } = useParams()
  const [dbPack, setDbPack] = useState(null)
  const [waitQuery, setWaitQuery] = useState(true)

  useEffect(async () => {
    const { loading, value } = await gqlquery(getPackByIdQuery(id))
    if (!loading && value !== null) {
      setDbPack(value.data.getPack)
      setWaitQuery(false)
    } else {
      setWaitQuery(true)
    }
  }, [])

  // ? handle functions
  /**
   * handleCountAffirmations
   * @returns {number}
   */
  const handleCountAffirmations = () => !waitQuery && dbPack.affirmations.items.length

  /**
   * handleArrTopics
   * @returns {Array}
   */
  const handleArrTopics = topics => topics.map(item => item.topic)

  /**
   * handleListAffirmationsByTopic
   * @param {strinf} topicId
   * @param {string} userId
   */
  const handleListAffirmationsByTopic = async (topicId, userId) => await gqlquery(listAffirmationsByTopicIdQuery(topicId, userId))

  // ? render functions
  /**
   * renderDbAffirmations
   * @returns {undefined} NewAffirmation container
   */
  const renderDbAffirmations = () => {
    return !waitQuery && dbPack.affirmations.items.map(item => {
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
      <div className={styles.AddPacksContainer}>
        {/* header */}
        <div className={styles.AddPacksHeaderContainer}>
          <div className={styles.AddPacksHeaderImgContainer}>
            <img src={noImg} />
            <div className={styles.AddPacksHeaderTextContainer}>
              {!waitQuery && <span>{dbPack.name}</span>}
              <div>
                <span>{handleCountAffirmations()} {t('dashboard.Pack.affirmations')}</span>
              </div>
            </div>
          </div>
          <div className={styles.AddPacksHeaderShareContainer}>
            <Share />
          </div>
        </div>
        {/* body */}
        <div className={styles.AddPacksBodyContainer}>
          <CreateAffirmations />
          {renderDbAffirmations()}
          <AffirmationsByTopics onClick={handleListAffirmationsByTopic} />
        </div>
      </div>
    </Fragment>
  )
}

export default AddPacks
