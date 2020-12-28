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
// hooks
import useGraphQlApi from '../../hooks/useGraphQlApi'
// graphql
import { getUsersAllQuery } from '../../graphql/queries'
// redux
import { useSelector } from 'react-redux'

// const
const { client } = DASHBOARD_ROUTES

// * page
/**
 * Home page
 * @component
 */
const Home = () => {
  // hooks
  const {
    userReducer: { user },
    filtersReducer: { globalDateFilter }
  } = useSelector(state => state)
  const [t] = useTranslation('global')
  const dbGetUsersAll = useGraphQlApi(getUsersAllQuery()) // todo: test
  // const dbGetUsersAll = useGraphQlApi(getUsersAllQuery(user.id, globalDateFilter.value), globalDateFilter) // Todo: use this
  console.log('query:', user, globalDateFilter)

  const handleDataClientFlow = () => {
    const { loading, value } = dbGetUsersAll
    let sensiesCount = 0
    let usersCount = 0
    if (value !== null && !loading) {
      const _users = value.getUser.organization.users.items
      usersCount = _users.length
      _users.map(_user => (
        sensiesCount = sensiesCount + _user.sensies.items.length
      ))
    }
    return {
      client: usersCount,
      sensies: sensiesCount
    }
  }

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
            <ClientFlow client={handleDataClientFlow().client} sensies={handleDataClientFlow().sensies} />
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
