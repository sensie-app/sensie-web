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
// import TrackAffirmations from '../../components/TrackAffirmations'
import Loading from '../../components/Loading'
import Line from '../../components/Line'
import { HelmetSEO } from '../../components/Globals'
// constants-routes
// import DASHBOARD_ROUTES from '../../constants/routes'
// styles
import styles from './styles.module.scss'
// graphql
// import {
//   listSensiesByAffirmationId
// } from '../../graphql/queries'
// utils
// import { gqlquery } from '../../utils/queries'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { listUsersByOrganizationIdAction } from '../../../redux/actions/users.actions'
import { listAffirmationsByCoachId } from '../../../redux/actions/affirmations.actions'
const moment = require('moment')
// import usersReducer from '../../../redux/reducers/users.reducer'

// const
// const { client } = DASHBOARD_ROUTES

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
    console.log('GETTING INFO')
    dispatch(listUsersByOrganizationIdAction(user.id, globalDateFilter.value))
    dispatch(listAffirmationsByCoachId(user.id, globalDateFilter.value, 10))
  }, [user.loading, globalDateFilter])

  useEffect(() => {
    setTotalUsers(handleTotalClients())
    setTotalSensies(handleTotalSensies())
    setTotalFlow(handleTotalFlow())

    setAwarenessScore(handleAwarenessScore())
    setResilienceScore(handleResilienceScore())
    setTrustScore(handleTrustScore())
    setGraphData(handleGraphData())
  }, [usersReducer.users, affirmationsReducer.affirmations, globalDateFilter.value])

  // ? handle functions
  /**
   * handleSensiesByAffirmationIdQuery
   */
  // TODO: check query
  /* const handleSensiesByAffirmationIdQuery = async affirmationId => {
    const dbSensiesByAffirmationId = await gqlquery(listSensiesByAffirmationId(affirmationId))
    if (!dbSensiesByAffirmationId.loading && dbSensiesByAffirmationId.value !== null) {
      return (dbSensiesByAffirmationId.value.data.listSensies.items)
    } else {
      return null
    }
  } */

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
    // let count = 0
    // count = !usersReducer.loading && handleTotalClients() > 0
    //   ? usersReducer.users.map(user => count + user.sensies.items.length)
    //   : 0
    // return count === 0 ? count : count.reduce((total, value) => total + value)
    let count = 0
    const clientIds = usersReducer.users.map(client => client.id)
    count = !affirmationsReducer.loading && handleTotalClients() > 0
      ? affirmationsReducer.affirmations.map(aff => count + aff.sensies.items.filter(s => clientIds.indexOf(s.userId) > -1).length)
      : 0
    return count === 0 ? count : count.reduce((total, value) => total + value)
  }

  /**
   * handle total flow
   * @returns {number} flow
   */
  // const handleTotalFlow = () => {
  //   if (!usersReducer.loading && handleTotalClients() > 0) {
  //     let flow = 0
  //     flow = usersReducer.users.map(user => {
  //       const totalSensies = user.sensies.items.length
  //       const sensies = user.sensies.items.filter(value => parseInt(value.result) === 1)
  //       const flow = totalSensies > 0 ? sensies.length / totalSensies : 0
  //       return flow * 100
  //     })
  //     return flow === 0 ? flow : flow.reduce((total, value) => total + value) / usersReducer.users.length
  //   } else {
  //     return 0
  //   }
  // }

  const handleTotalFlow = () => {
    if (!affirmationsReducer.loading && handleTotalClients() > 0) {
      const clientIds = usersReducer.users.map(client => client.id)
      const s = [].concat(...affirmationsReducer.affirmations.map(aff => aff.sensies.items)).filter(s => clientIds.indexOf(s.userId) > 0)
      if (s.length === 0) return 0
      const sensies = s.filter(s => s.result === 1)
      const flow = sensies.length / s.length * 100
      return flow
    }
    return 0
  }

  const generateDateList = (start, n) => {
    const arr = []
    for (let i = 0; i <= n + 1; i++) {
      const d = new Date(start.setDate(start.getDate() + 1))
      arr.push(d)
    }
    return arr
  }

  const handleGraphData = () => {
    const dates = globalDateFilter.value
    const diff = moment(dates[1]).diff(moment(dates[0]), 'days')
    console.log('diff: ', diff)
    const dateList = generateDateList(new Date(dates[0]), diff)
    const format = diff <= 30 ? 'MM/DD/YYYY' : 'MM/YYYY'
    // let data = [{ id: 'low', data: [{ x: new Date(dates[0]), y: 0 }, { x: new Date(dates[1]), y: 0 }] }]
    let data = [{ id: 'low', data: dateList.map(d => { return { x: new Date(d), y: 0 } }) }]
    if (!affirmationsReducer.loading && handleTotalClients() > 0) {
      // const userSensies = usersReducer.users.map(user => user.sensies.items)
      const userSensies = affirmationsReducer.affirmations.map(affs => affs.sensies.items)
      // console.log(userSensies)
      // const acc = {}
      const accCount = {}
      const accUserCount = {}
      const flowsByDate = userSensies.reduce((acc, sensieList) => {
        // console.log(sensieList, Array.isArray(sensieList))
        if (!sensieList || !Array.isArray(sensieList)) return acc
        sensieList.forEach(e => {
          // console.log(acc)
          // console.log(e)
          const d = moment(new Date(e.timestamp))
          const date = d.format(format)
          // let date = d.getMonth()
          // if (diff <= 30) {
          //   date = d.toLocaleDateString()
          // }
          // if (diff <= 3) { // 3 days
          //   date += d.getHours()
          // }
          // console.log(date)
          const result = e.result === 1 ? 1 : 0
          acc[date] = (acc[date] ? (acc[date] + result) : result)
          accCount[date] = (accCount[date] ? (accCount[date] + 1) : 1)
          accUserCount[date] = (accUserCount[date] ? ((accUserCount[date])) : 1)
        })
        return acc
      }, {})
      // console.log(flowsByDate)
      if (Object.keys(flowsByDate).length === 0) return data
      // let totalDates = Object.keys(flowsByDate).length
      // const data = [{ id: 'low', data: [{ x: 0, y: 0 }] }]
      const d = []
      let i = 0
      // const orderedDates = Object.keys(flowsByDate).sort((a, b) => { return new Date(a) - new Date(b) })
      console.log(dateList)
      console.log(accCount)
      for (const k of dateList) {
        const m = moment(k).format(format)
        console.log(m)
        d.push({ _d: k, _x: i++, x: new Date(k), y: (flowsByDate[m] / accCount[m] / accUserCount[m] * 100) || 0 })
      }
      data = [{ id: 'low', data: d }]
    }
    return data
  }

  // ? const
  // const btn = {
  //   title: t('dashboard.Home.viewMore'),
  //   route: client
  // }

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
        {/* <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <div className={styles.HomeG2Container}>
          {affirmationsReducer.loading
            ? <Loading />
            : <TrackAffirmations
                getSensies={handleSensiesByAffirmationIdQuery}
                title={t('dashboard.Home.mindAuthorAndTrackAffirmations')}
                btn={btn}
                limit={4}
                fixHeight={true}
              />
            }
          </div>
        </Grid> */}
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
