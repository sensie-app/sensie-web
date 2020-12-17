// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// material-ui
import Grid from '@material-ui/core/Grid'
// containers
import Header from '../../containers/Header'
import UsersList from '../../containers/UsersList'
// components
import { HelmetSEO } from '../../components/Globals'
import TrackAffirmations from '../../components/TrackAffirmations'
import SpiderChart from '../../components/SpiderChart'
import Title from '../../components/Title'
// constants
import { COLORS } from '../../constants/theme'
// constants-routes
import DASHBOARD_ROUTES from '../../constants/routes'
// styles
import styles from './styles.module.scss'

// const
const { home } = DASHBOARD_ROUTES
const { fontColor1, grayColor3 } = COLORS

// * page
/**
 * Client page
 * @component
 */
const Client = () => {
  // hooks
  const [t] = useTranslation('global')

  // const
  /**
   * @type {BTN}
   */
  const btn = {
    title: t('dashboard.Client.author'),
    route: home
  }

  return (
    <section className={styles.ClientContainer}>
      {/* seo */}
      <HelmetSEO title={t('seo.Client.title')} subtitle={t('seo.Client.subtitle')} />
      {/* header */}
      <Header />
      {/* body */}
      <Grid container spacing={1}>
        {/* affirmations */}
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <div className={styles.ClientG1Container}>
            <TrackAffirmations
              chipsUp={true}
              title={t('dashboard.Client.affirmations')}
              btn={btn}
            />
          </div>
        </Grid>
        {/* spider-chart + user-list */}
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <div className={styles.ClientG1Container}>
            <div className={styles.ClientG2Container}>
              {/* header */}
              <div className={styles.ClientSpiderHeaderContainer}>
                <div className={styles.ClientSpiderHeaderTitleContainer}>
                  <Title text={`${t('dashboard.Client.affirmation')}:`} color={fontColor1} margin="0px 10px 0px 0px" />
                  <Title text={t('dashboard.Client.iHaveAllThatNeed')} color={grayColor3} />
                </div>
              </div>
              <div style={{ height: '400px', width: '100%' }}>
                <SpiderChart />
              </div>
            </div>
          </div>
          <div className={styles.ClientG1Container}>
            <UsersList />
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default Client
