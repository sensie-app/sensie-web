// react
import React from 'react'
// material-ui
import Grid from '@material-ui/core/Grid'
// components
import Pack from '../Pack'
import CreatePack from '../CreatePack'
// constants
import IMG from '../../constants/images'
// styles
import styles from './styles.module.scss'

// const
const { connectionMomentsImg, joyAffirmationsImg, sleepImg } = IMG

// * component
/**
 * Packs component
 * @component
 */
const Packs = () => {
  return (
    <div className={styles.PacksContainer}>
      <Grid container spacing={1}>
        {/* affirmations */}
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Pack route="route" title="Connection moments" totalAffirmations={10} img={connectionMomentsImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Pack route="route" title="Joy affirmations" totalAffirmations={10} img={joyAffirmationsImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Pack route="route" title="Before sleep ritual" totalAffirmations={10} img={sleepImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <Pack route="route" title="HolaMundo" totalAffirmations={10} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={3}>
          <CreatePack />
        </Grid>
      </Grid>
    </div>
  )
}

export default Packs
