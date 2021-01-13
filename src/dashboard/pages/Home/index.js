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
import Loading from '../../components/Loading'
import { HelmetSEO } from '../../components/Globals'
// constants-routes
import DASHBOARD_ROUTES from '../../constants/routes'
// styles
import styles from './styles.module.scss'
// graphql
import { listUsersByOrganizationId, listAffirmationsByUserIdAndTopicId } from '../../graphql/queries'
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
  // ? hooks
  const {
    userReducer: { user },
    filtersReducer: { globalDateFilter }
  } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [users, setUsers] = useState([])
  const [affirmations, setAffirmations] = useState([])
  const [waitQuery, setWaitQuery] = useState(true)

  useEffect(async () => {
    await handleUsersQuery()
    await handleAffirmationsQuery()
  }, [users, globalDateFilter])

  // ? handle functions
  /**
   * handleUsersQuery
   */
  const handleUsersQuery = async () => {
    if (user && globalDateFilter) {
      const dbUsers = await gqlquery(listUsersByOrganizationId(user.data.userOrganizationId, globalDateFilter.value))
      if (!dbUsers.loading && dbUsers.value !== null) {
        setUsers(dbUsers.value.data.listUsers.items)
        setWaitQuery(false)
      } else { setWaitQuery(true) }
    }
  }

  /**
   * handleUsersQuery
   */
  const handleAffirmationsQuery = async () => {
    if (user && globalDateFilter) {
      const dbAffirmations = await gqlquery(listAffirmationsByUserIdAndTopicId(user.id, 10))
      if (!dbAffirmations.loading && dbAffirmations.value !== null) {
        setAffirmations(dbAffirmations.value.data.listAffirmations.items)
        setWaitQuery(false)
      } else { setWaitQuery(true) }
    }
  }

  /**
   * handle total clients
   * @returns {number} total
   */
  const handleTotalClients = () => !waitQuery && users.length

  /**
   * handle total sensies
   * @returns {number} total
   */
  const handleTotalSensies = () => {
    let count = 0
    count = !waitQuery && handleTotalClients() > 0
      ? users.map(user => count + user.sensies.items.length)
      : 0
    return count === 0 ? count : count.reduce((total, value) => total + value)
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
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <div className={styles.HomeG2Container}>
            <TrackAffirmations
              data={affirmations}
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
              {waitQuery
                ? <Loading />
                : <ClientSnapshot data={users} />
              }
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default Home
