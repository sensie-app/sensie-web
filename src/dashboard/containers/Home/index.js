// react
import React from 'react'
import Grid from '@material-ui/core/Grid'
// components
import Header from '../../components/Header'
import ClientFlow from '../../components/ClientFlow'
import TrackAffirmations from '../../components/TrackAffirmations'
// styles
import styles from './styles.module.scss'
// test
import { useTranslation } from 'react-i18next'

const Home = () => {
  const [t] = useTranslation('global')
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
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.HomeG3Container}>
            <span>{t('header.hello-world')}</span>
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default Home
