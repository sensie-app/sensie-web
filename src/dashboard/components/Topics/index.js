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
// styles
import styles from './styles.module.scss'

// const
const { spirit, health, family, finance, fun, parenting, perfomance, personal, love } = TopicsConstants
const { spiritImg, helathImg, financeImg, funImg, loveImg, familyImg, parentingImg, personalImg, performanceImg } = IMG

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
          <Topic route="route" title={t(`dashboard.Packs.${spirit}`)} topic={spirit} img={spiritImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Topic route="route" title={t(`dashboard.Packs.${health}`)} topic={health} img={helathImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Topic route="route" title={t(`dashboard.Packs.${finance}`)} topic={finance} img={financeImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Topic route="route" title={t(`dashboard.Packs.${fun}`)} topic={fun} img={funImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Topic route="route" title={t(`dashboard.Packs.${love}`)} topic={love} img={loveImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Topic route="route" title={t(`dashboard.Packs.${family}`)} topic={family} img={familyImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Topic route="route" title={t(`dashboard.Packs.${parenting}`)} topic={parenting} img={parentingImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Topic route="route" title={t(`dashboard.Packs.${personal}`)} topic={personal} img={personalImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Topic route="route" title={t(`dashboard.Packs.${perfomance}`)} topic={perfomance} img={performanceImg} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Topics
