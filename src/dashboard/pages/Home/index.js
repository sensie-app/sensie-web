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
import Line from '../../components/Line'
import { HelmetSEO } from '../../components/Globals'
// constants-routes
import DASHBOARD_ROUTES from '../../constants/routes'
// styles
import styles from './styles.module.scss'
// graphql
import {
  listSensiesByAffirmationId
} from '../../graphql/queries'
// utils
import { gqlquery } from '../../utils/queries'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { listUsersByOrganizationIdAction } from '../../../redux/actions/users.actions'
import { listAffirmationsByCoachId } from '../../../redux/actions/affirmations.actions'
// import usersReducer from '../../../redux/reducers/users.reducer'

// const
const { client } = DASHBOARD_ROUTES

// * page
/**
 * Home page component
 * @component
 */
const Home = () => {
  // ? hooks
  const dispatch = useDispatch()
  const {
    usersReducer,
    affirmationsReducer,
    userReducer: { user },
    filtersReducer: { globalDateFilter }
  } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [totalUsers, setTotalUsers] = useState(0)
  const [totalSensies, setTotalSensies] = useState(0)
  const [totalFlow, setTotalFlow] = useState(0)

  const [awarenessScore, setAwarenessScore] = useState(0)
  const [resilienceScore, setResilienceScore] = useState(0)
  const [trustScore, setTrustScore] = useState(0)

  useEffect(() => {
    dispatch(listUsersByOrganizationIdAction(user.data.userOrganizationId, globalDateFilter.value))
    dispatch(listAffirmationsByCoachId(user.id, globalDateFilter.value, 10))
  }, [])

  useEffect(() => {
    setTotalUsers(handleTotalClients())
    setTotalSensies(handleTotalSensies())
    setTotalFlow(handleTotalFlow())

    setAwarenessScore(handleAwarenessScore())
    setResilienceScore(handleResilienceScore())
    setTrustScore(handleTrustScore())
  }, [usersReducer.users, globalDateFilter])

  // ? handle functions
  /**
   * handleSensiesByAffirmationIdQuery
   */
  // TODO: check query
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
  const handleTotalClients = () => !usersReducer.loading && usersReducer.users.length > 0 ? usersReducer.users.length : 0

  const handleAwarenessScore = () => Math.ceil(Math.random() * 99)

  const handleResilienceScore = () => Math.ceil(Math.random() * 99)

  const handleTrustScore = () => {
    if (!usersReducer.loading && handleTotalClients() > 0) {
      return Math.ceil(Math.random() * 99)
    } else {
      return 0
    }
  }
  /**
   * handle total sensies
   * @returns {number} total
   */
  const handleTotalSensies = () => {
    let count = 0
    count = !usersReducer.loading && handleTotalClients() > 0
      ? usersReducer.users.map(user => count + user.sensies.items.length)
      : 0
    return count === 0 ? count : count.reduce((total, value) => total + value)
  }

  /**
   * handle total flow
   * @returns {number} flow
   */
  const handleTotalFlow = () => {
    if (!usersReducer.loading && handleTotalClients() > 0) {
      let flow = 0
      flow = usersReducer.users.map(user => {
        const totalSensies = user.sensies.items.length
        const sensies = user.sensies.items.filter(value => value.result === '1')
        const flow = totalSensies > 0 ? sensies.length / totalSensies : 0
        return flow * 100
      })
      return flow === 0 ? flow : flow.reduce((total, value) => total + value) / usersReducer.users.length
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
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <div className={styles.HomeG1Container}>
            <ClientFlow client={totalUsers} sensies={totalSensies}
                        flow={totalFlow} awareness={awarenessScore} resilience={resilienceScore} trust={trustScore} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <div className={styles.HomeG2Container}>
          {affirmationsReducer.loading
            ? <Loading />
            : <TrackAffirmations
                getSensies={handleSensiesByAffirmationIdQuery}
                title={t('dashboard.Home.mindAuthorAndTrackAffirmations')}
                btn={btn}
                limit={5}
                fixHeight={true}
              />
            }
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.HomeG3Container}>
            <div className={styles.HomeG3ContainerTitle}>
              <h3>{t('dashboard.Home.ClientSnapshot')}</h3>
              <Line />
              {usersReducer.loading
                ? <Loading />
                : <ClientSnapshot />
              }
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default Home
