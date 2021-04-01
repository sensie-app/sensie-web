// react
import React, { Fragment } from 'react'
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
// utils
// import { gqlquery } from '../../utils/queries'
// styles
import styles from './styles.module.scss'

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
const Topics = ({ data }) => {
  // ? hooks
  const [t] = useTranslation('global')

  // ? render functions
  /**
   * renderTopics
   * @returns {undefined} Topic componnet
   */
  const renderTopics = () => {
    return data && data.map(item => {
      const countAffirmation = item.affirmations.items.length
      return (
        <Grid key={item.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Topic img={item.picture} icon={item.icon} route={topic + '/' + item.id} title={item.name} topic={item} count={countAffirmation} />
        </Grid>
      )
    })
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
        {renderTopics()}
      </Grid>
    </div>
  )
}

// prop types
Topics.propTypes = {
  /** data */
  data: PropTypes.array
}

export default Topics
