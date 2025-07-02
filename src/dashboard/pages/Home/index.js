// react
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
// material-ui
import { Grid } from '@mui/material'
// containers
import Header from '../../containers/Header'
import ClientSnapshot from '../../containers/ClientSnapshot'
// components
import ClientFlow from '../../components/ClientFlow'
// import TrackAffirmations from '../../components/TrackAffirmations'
import Loading from '../../components/Loading'
import Line from '../../components/Line'
import { HelmetSEO } from '../../components/Globals'
import styles from './styles.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { listUsersByOrganizationDatesAction } from '../../../redux/actions/users.actions'
import { listAffirmationsByCoachId } from '../../../redux/actions/affirmations.actions'
const moment = require('moment')
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

  const [graphData, setGraphData] = useState([{ id: 'low', data: [{ x: new Date(), y: 0 }, { x: new Date(), y: 100 }] }])

  useEffect(() => {
    if (user.id) {
      dispatch(listUsersByOrganizationDatesAction(globalDateFilter.value))
      dispatch(listAffirmationsByCoachId(user.id, globalDateFilter.value, 10))
    }
  }, [user.id, globalDateFilter.name])

  useEffect(() => {
    setTotalUsers(handleTotalClients())
    setTotalSensies(handleTotalSensies())
    setTotalFlow(handleTotalFlow())

    setAwarenessScore(handleAwarenessScore())
    setResilienceScore(handleResilienceScore())
    setTrustScore(handleTrustScore())
    setGraphData(handleGraphData())
  }, [usersReducer.users, affirmationsReducer.affirmations, globalDateFilter.value])

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
    const clientIds = usersReducer.users.map(client => client.id)
    count = !affirmationsReducer.loading && handleTotalClients() > 0
      ? (affirmationsReducer.affirmations.length === 0 ? 0 : affirmationsReducer.affirmations.map(aff => count + aff.sensies.items.filter(s => clientIds.indexOf(s.userId) > -1).length))
      : 0
    return count === 0 ? count : count.reduce((total, value) => total + value)
  }

  const handleTotalFlow = () => {
    if (!affirmationsReducer.loading && handleTotalClients() > 0) {
      const clientIds = usersReducer.users.map(client => client.id)
      const s = [].concat(...affirmationsReducer.affirmations.map(aff => aff.sensies.items)).filter(s => clientIds.indexOf(s.userId) !== -1)
      if (s.length === 0) return 0
      const sensies = s.filter(s => s.result === 1)
      const flow = sensies.length / s.length * 100
      return flow
    }
    return 0
  }

  const generateDateList = (start, n) => {
    const arr = []

    for (let i = 1; i <= n; i++) {
      const d = moment(start).add(i, 'h')
      arr.push(d)
    }

    return arr
  }

  const handleGraphData = () => {
    const dates = globalDateFilter.value.map(d => moment(d).startOf('hour'))
    const diff = dates[1].diff(dates[0], 'hours')
    const dateList = generateDateList(dates[0], diff)
    const format = diff <= 100 ? 'MM/DD HH' : (diff <= 1000 ? 'MM/DD' : 'MM/DD/YY')
    let data = [{ id: 'low', data: dateList.map(d => { return { x: d._d, y: 0 } }) }]

    if (!affirmationsReducer.loading && handleTotalClients() > 0) {
      const userSensies = affirmationsReducer.affirmations.map(affs => affs.sensies.items)
      const accCount = {}
      const accUserCount = {}
      const flowsByDate = userSensies.reduce((acc, sensieList) => {
        // console.log(sensieList, Array.isArray(sensieList))
        if (!sensieList || !Array.isArray(sensieList)) return acc
        sensieList.forEach(e => {
          const d = moment(new Date(e.timestamp))
          const date = d.format(format)
          const result = e.result === 1 ? 1 : 0
          acc[date] = (acc[date] ? (acc[date] + result) : result)
          accCount[date] = (accCount[date] ? (accCount[date] + 1) : 1)
          accUserCount[date] = (accUserCount[date] ? ((accUserCount[date])) : 1)
        })
        return acc
      }, {})
      if (Object.keys(flowsByDate).length === 0) return data
      const d = []
      let i = 0
      for (const k of dateList) {
        const m = moment(k).format(format)
        d.push({ _d: k, _x: i++, x: new Date(k), y: Math.ceil(flowsByDate[m] / accCount[m] / accUserCount[m] * 100) || 0 })
      }
      data = [{ id: 'low', data: d }]
    }

    return data
  }

  return (
    <section className={styles.HomeContainer}>
      {/* seo */}
      <HelmetSEO title={t('seo.Home.title')} subtitle={t('seo.Home.subtitle')} />
      {/* header */}
      <Header />
      {/* body */}
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={styles.HomeG1Container}>
            {!affirmationsReducer.loading && !usersReducer.loading
              ? <ClientFlow graph={graphData} client={totalUsers} sensies={totalSensies}
                  flow={totalFlow} awareness={awarenessScore} resilience={resilienceScore} trust={trustScore} />
              : <Loading />}
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={styles.HomeG3Container}>
            <div className={styles.HomeG3ContainerTitle}>
              <h3>{t('dashboard.Home.ClientSnapshot')}</h3>
              <Line />
              {!affirmationsReducer.loading && !usersReducer.loading
                ? <ClientSnapshot />
                : <Loading />
              }
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default Home
