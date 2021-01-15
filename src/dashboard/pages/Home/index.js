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
import { TODAY } from '../../constants/globals'
// styles
import styles from './styles.module.scss'
// graphql
import {
  listUsersByOrganizationId,
  listAffirmationsByUserIdAndTopicId,
  listSensiesByAffirmationId,
  listUsersByOrganizationIdClientSnapshot
} from '../../graphql/queries'
// utils
import { gqlquery } from '../../utils/queries'
// redux
import { useSelector } from 'react-redux'

// const
const { client } = DASHBOARD_ROUTES
const moment = require('moment')

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
  const [users2, setUsers2] = useState([])
  const [affirmations, setAffirmations] = useState([])
  const [waitQuery, setWaitQuery] = useState(true)
  const [totalUsers, setTotalUsers] = useState(0)
  const [totalSensies, setTotalSensies] = useState(0)
  const [totalFlow, setTotalFlow] = useState(0)

  useEffect(async () => {
    await handleUsersQuery()
    await handleAffirmationsQuery()
    await handleUsersQueryListSnapshot()
  }, [globalDateFilter])

  useEffect(() => {
    setTotalUsers(handleTotalClients())
    setTotalSensies(handleTotalSensies())
    setTotalFlow(handleTotalFlow())
  }, [users])

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
   * handleUsersQueryListSnapshot
   */
  const handleUsersQueryListSnapshot = async () => {
    const rangeDates = [moment(TODAY).subtract(7, 'd').format(), moment(TODAY).format()]
    if (user && globalDateFilter) {
      const dbUsers = await gqlquery(listUsersByOrganizationIdClientSnapshot(user.data.userOrganizationId, globalDateFilter.value, rangeDates))
      if (!dbUsers.loading && dbUsers.value !== null) {
        setUsers2(dbUsers.value.data.listUsers.items)
        setWaitQuery(false)
      } else { setWaitQuery(true) }
    }
  }

  /**
   * handleAffirmationsQuery
   */
  const handleAffirmationsQuery = async () => {
    if (user && globalDateFilter) {
      const dbAffirmations = await gqlquery(listAffirmationsByUserIdAndTopicId(user.id, globalDateFilter.value, 10))
      if (!dbAffirmations.loading && dbAffirmations.value !== null) {
        setAffirmations(dbAffirmations.value.data.listAffirmations.items)
        setWaitQuery(false)
      } else { setWaitQuery(true) }
    }
  }

  /**
   * handleSensiesByAffirmationIdQuery
   */
  const handleSensiesByAffirmationIdQuery = async affirmationId => {
    const dbSensiesByAffirmationId = await gqlquery(listSensiesByAffirmationId(affirmationId))
    if (!dbSensiesByAffirmationId.loading && dbSensiesByAffirmationId.value !== null) {
      return (dbSensiesByAffirmationId.value.data.listSensies.items)
    } else {
      return null
    }
  }

  /**
   * handle total clients
   * @returns {number} total
   */
  const handleTotalClients = () => !waitQuery && users.length > 0 ? users.length : 0

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

  /**
   * handle total flow
   * @returns {number} flow
   */
  const handleTotalFlow = () => {
    if (!waitQuery && handleTotalClients() > 0) {
      let flow = 0
      flow = users.map(user => {
        const totalSensies = user.sensies.items.length
        const sensies = user.sensies.items.filter(value => value.result === '1')
        const flow = totalSensies > 0 ? sensies.length / totalSensies : 0
        return flow * 100
      })
      return flow === 0 ? flow : flow.reduce((total, value) => total + value) / users.length
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
            <ClientFlow client={totalUsers} sensies={totalSensies} flow={totalFlow}/>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <div className={styles.HomeG2Container}>
          {waitQuery
            ? <Loading />
            : <TrackAffirmations
                data={affirmations}
                getSensies={handleSensiesByAffirmationIdQuery}
                title={t('dashboard.Home.mindAuthorAndTrackAffirmations')}
                btn={btn}
                limit={3}
                fixHeight={true}
              />
            }
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.HomeG3Container}>
            <div className={styles.HomeG3ContainerTitle}>
              <h3>{t('dashboard.Home.ClientSnapshot')}</h3>
              {waitQuery
                ? <Loading />
                : <ClientSnapshot data={users2} />
              }
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default Home
