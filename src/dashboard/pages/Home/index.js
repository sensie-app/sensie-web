// react
import React, { useEffect, useState } from 'react'
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
// hooks
// import useGraphQlApi from '../../hooks/useGraphQlApi'
// graphql
import { getOrganizationById } from '../../graphql/queries'
// utils
import { gqlquery } from '../../utils/queries'
// redux
import { useSelector } from 'react-redux'

// const
const { client } = DASHBOARD_ROUTES

// * page
/**
 * Home page component
 * @component
 */
const Home = () => {
  // hooks
  const {
    userReducer: { user },
    filtersReducer: { globalDateFilter }
  } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [dbOrganization, setDbOrganization] = useState(null)

  useEffect(async () => {
    const response = await gqlquery(
      getOrganizationById(
        user && user.data.userOrganizationId,
        globalDateFilter && globalDateFilter.value
      )
    )
    setDbOrganization(response)
  }, [globalDateFilter])

  // ? handle functions
  /**
   * handle total clients
   * @returns {number} total
   */
  const handleTotalClients = () => {
    if (dbOrganization !== null) {
      console.log('dbOrganization', dbOrganization)
      const { loading, value: { data } } = dbOrganization
      return !loading && data !== null && data.getOrganization !== null
        ? data.getOrganization.users.items.length
        : 0
    } else {
      return 0
    }
  }

  /**
   * handle total sensies
   * @returns {number} total
   */
  const handleTotalSensies = () => {
    if (dbOrganization !== null) {
      const { loading, value: { data } } = dbOrganization
      let count = 0
      count = !loading && data !== null && data.getOrganization !== null && data.getOrganization.users.items.length !== 0
        ? data.getOrganization.users.items.map(item => count + item.sensies.items.length)
        : 0
      return count === 0
        ? count
        : count.reduce((total, value) => total + value)
    } else {
      return 0
    }
  }

  // ? const
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
            <ClientFlow client={handleTotalClients()} sensies={handleTotalSensies()} />
            {/* <ClientFlow client={1} sensies={1} /> */}
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <div className={styles.HomeG2Container}>
            <TrackAffirmations
              title={t('dashboard.Home.mindAuthorAndTrackAffirmations')}
              btn={btn}
              limit={3}
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
