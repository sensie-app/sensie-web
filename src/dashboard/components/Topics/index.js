// react
import React from 'react'
import { useTranslation } from 'react-i18next'
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

// const
const { spirit, health, family, finance, fun, parenting, perfomance, personal, love } = TopicsConstants
const { spiritImg, healthImg, financeImg, funImg, loveImg, familyImg, parentingImg, personalImg, performanceImg } = IMG
const { topic } = DASHBOARD_ROUTES

// * component
/**
 * Topics component
 * @component
 */
const Topics = () => {
  // hooks
  const [t] = useTranslation('global')

  return (
    <div className={styles.TopicsContainer}>
      <Grid container spacing={1}>
        {/* affirmations */}
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Topic route={topic + '/spirit'} title={t(`dashboard.Packs.${spirit}`)} topic={spirit} img={spiritImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Topic route={topic + '/health'} title={t(`dashboard.Packs.${health}`)} topic={health} img={healthImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Topic route={topic + '/finance'} title={t(`dashboard.Packs.${finance}`)} topic={finance} img={financeImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Topic route={topic + '/fun'} title={t(`dashboard.Packs.${fun}`)} topic={fun} img={funImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Topic route={topic + '/love'} title={t(`dashboard.Packs.${love}`)} topic={love} img={loveImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Topic route={topic + '/family'} title={t(`dashboard.Packs.${family}`)} topic={family} img={familyImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Topic route={topic + '/parenting'} title={t(`dashboard.Packs.${parenting}`)} topic={parenting} img={parentingImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Topic route={topic + '/personal'} title={t(`dashboard.Packs.${personal}`)} topic={personal} img={personalImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Topic route={topic + '/perfomance'} title={t(`dashboard.Packs.${perfomance}`)} topic={perfomance} img={performanceImg} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Topics
