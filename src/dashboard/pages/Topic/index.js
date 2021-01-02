// react
import React, { Fragment, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
// containers
import Header from '../../containers/Header'
import CreateAffirmations from '../../containers/CreateAffirmations'
// components
import Share from '../../components/Share'
import TopicItem from '../../components/TopicItem'
// constants
import IMG from '../../constants/images'
import DASHBOARD_ROUTES from '../../constants/routes'
import TopicsConstants from '../../constants/topics'
// styles
import styles from './styles.module.scss'

// const
const {
  noImg,
  connectionMomentsImg,
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
const TopicDefault = {
  id: 1,
  title: 'Connection moments',
  img: connectionMomentsImg,
  affirmations: 5
}

// * page
/**
 * Topic page component
 * @component
 */
const Topic = () => {
  // hooks
  const [t] = useTranslation('global')
  const { id } = useParams() // todo: use id for get Topic info
  const [Topic, setTopic] = useState(TopicDefault)
  console.log('setTopic', setTopic)
  console.log('id', id)

  // ? handle functions
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
                <TopicItem topic={id} width="30px" />
                <span>{id}</span>
              </div>
              <div className={styles.TopicHeaderTextAffirmations}>
                <span>{Topic.affirmations} {t('dashboard.Topic.affirmations')}</span>
              </div>
            </div>
          </div>
          <div className={styles.TopicHeaderShareContainer}>
            <Share />
          </div>
        </div>
        {/* body */}
        <div className={styles.TopicBodyContainer}>
          <CreateAffirmations initShowForm={false} />
        </div>
      </div>
    </Fragment>
  )
}

export default Topic
