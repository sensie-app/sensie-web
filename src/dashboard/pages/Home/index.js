// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// material-ui
import Grid from '@material-ui/core/Grid'
// containers
import Header from '../../containers/Header'
import ClientSnapshot from '../../containers/ClientSnapshot'
// components
import ClientFlow from '../../components/ClientFlow'
import TrackAffirmations from '../../components/TrackAffirmations'
import { HelmetSEO } from '../../components/Globals'
// constants-routes
import DASHBOARD_ROUTES from '../../constants/routes'
// styles
import styles from './styles.module.scss'

// const
const { client } = DASHBOARD_ROUTES

// * page
/**
 * Home page
 * @component
 */
const Home = () => {
  // hooks
  const [t] = useTranslation('global')

  // const
  /** @type {BTN} */
  const btn = {
    title: t('dashboard.Home.viewMore'),
    route: client
  }

  return (
    <section className={styles.HomeContainer}>
      {/* seo */}
      <HelmetSEO title={t('seo.Home.title')} subtitle={t('seo.Home.subtitle')} />
      {/* header */}
      <Header />
      {/* body */}
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <div className={styles.HomeG1Container}>
            <ClientFlow />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <div className={styles.HomeG2Container}>
            <TrackAffirmations
              title={t('dashboard.Home.mindAuthorAndTrackAffirmations')}
              limit={3}
              btn={btn}
              fixHeight={true}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.HomeG3Container}>
            <div className={styles.HomeG3ContainerTitle}>
              <h3>{t('dashboard.Home.ClientSnapshot')}</h3>
              <ClientSnapshot />
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default Home
