// react
import React from 'react'
// material-ui
import Grid from '@material-ui/core/Grid'
// containers
import Header from '../../containers/Header'
// components
import ClientFlow from '../../components/ClientFlow'
import TrackAffirmations from '../../components/TrackAffirmations'
// import BarChart from '../../components/BarChart'
// styles
import styles from './styles.module.scss'

const Home = () => {
  return (
    <section>
      <Header />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <div className={styles.HomeG1Container}>
            <ClientFlow />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <div className={styles.HomeG2Container}>
            <TrackAffirmations />
            {/* <BarChart /> */}
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.HomeG3Container}>
            {/* <BarChart /> */}
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default Home
