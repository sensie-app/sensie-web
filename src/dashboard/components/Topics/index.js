// react
import React, { Fragment, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// material-ui
import Grid from '@material-ui/core/Grid'
// components
import Topic from '../Topic'
// constants
import TopicsConstants from '../../constants/topics'
import IMG from '../../constants/images'
import DASHBOARD_ROUTES from '../../constants/routes'

// styles
import styles from './styles.module.scss'

import { gqlquery2 } from '../../utils/queries'
import { createTopicPrivate, updateUserTopicId } from '../../graphql/mutations'
import { getTopicByIdQuery } from '../../graphql/queries'
// redux
import { useDispatch } from 'react-redux'
import { setTopicsAction } from '../../../redux/actions/topics.action'

// const
const { spirit, health, family, finance, fun, parenting, perfomance, personal, love } = TopicsConstants
const { spiritImg, healthImg, financeImg, funImg, loveImg, familyImg, parentingImg, personalImg, performanceImg } = IMG
const { topic } = DASHBOARD_ROUTES
const showOldTopics = false

// * component
/**
 * Topics component
 * @component
 * @param {array} data
 */
const Topics = ({ data, user }) => {
  // ? hooks
  const dispatch = useDispatch()
  const [t] = useTranslation('global')
  const [topicsComplete, saveTopicsComplete] = useState(null)
  useEffect(() => {
    if (user.data.userTopicId === null) {
      console.log('No tengo ningun topico ...')
      handleCreateTopicPrivate().then(v => {
        const idTopic = v.value.data.createTopic.id
        handleUpdateUserTopicId(user.id, idTopic).then(h => {
          user.data.userTopicId = idTopic
          handleGetTopicById(idTopic).then(topic => {
            const topicP = topic.value.data.getTopic
            const dataTopics = data
            dataTopics.push(topicP)
            dispatch(setTopicsAction(dataTopics))
            saveTopicsComplete(data)
          })
        })
      })
    } else {
      const idTopic = user.data.userTopicId
      console.log('User:', user)
      console.log('Tengo un topico ...' + idTopic)
      handleGetTopicById(idTopic).then(topic => {
        const topicP = topic.value.data.getTopic
        const dataTopics = data
        dataTopics.push(topicP)
        dispatch(setTopicsAction(dataTopics))
        saveTopicsComplete(data)
      })
    }
    // eslint-disable-next-line
  }, []);

  // ? render functions
  /**
   * renderTopics
   * @returns {undefined} Topic componnet
   */
  const renderTopics = () => {
    if (topicsComplete !== null) {
      console.log(topicsComplete)
      return topicsComplete && topicsComplete.map(item => {
        const countAffirmation = item.affirmations.items.length
        return (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Topic img={item.picture} icon={item.icon} route={topic + '/' + item.id} title={item.name} topic={item} count={countAffirmation} />
          </Grid>
        )
      })
    } else {
      return null
    }
  }

  const handleCreateTopicPrivate = async () => {
    const result = await gqlquery2(createTopicPrivate('topics/private.svg', 'Private', 'topics/private.jpg'))
    return result
  }

  const handleUpdateUserTopicId = async (id, idTopic) => {
    const result = await gqlquery2(updateUserTopicId(id, idTopic))
    return result
  }

  const handleGetTopicById = async (id) => {
    return await gqlquery2(getTopicByIdQuery(id))
  }

  return (
    <div className={styles.TopicsContainer}>
      <Grid container spacing={1}>
      {showOldTopics &&
        <Fragment>
          {/* affirmations */}
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <Topic withLink={false} route={null} title={t(`dashboard.Packs.${spirit}`)} topic={spirit} img={spiritImg} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <Topic withLink={false} route={null} title={t(`dashboard.Packs.${health}`)} topic={health} img={healthImg} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <Topic withLink={false} route={null} title={t(`dashboard.Packs.${finance}`)} topic={finance} img={financeImg} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <Topic withLink={false} route={null} title={t(`dashboard.Packs.${fun}`)} topic={fun} img={funImg} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <Topic withLink={false} route={null} title={t(`dashboard.Packs.${love}`)} topic={love} img={loveImg} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <Topic withLink={false} route={null} title={t(`dashboard.Packs.${family}`)} topic={family} img={familyImg} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <Topic withLink={false} route={null} title={t(`dashboard.Packs.${parenting}`)} topic={parenting} img={parentingImg} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <Topic withLink={false} route={null} title={t(`dashboard.Packs.${personal}`)} topic={personal} img={personalImg} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={3}>
            <Topic withLink={false} route={null} title={t(`dashboard.Packs.${perfomance}`)} topic={perfomance} img={performanceImg} />
          </Grid>
        </Fragment>}
        {/* // bd topics */}
        <Fragment>
          {renderTopics()}
        </Fragment>
      </Grid>
    </div>
  )
}

// prop types
Topics.propTypes = {
  /** data */
  data: PropTypes.array,
  user: PropTypes.object
}

export default Topics
