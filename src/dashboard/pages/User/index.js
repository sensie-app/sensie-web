// react
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Redirect, useParams } from 'react-router-dom'
// material-ui
import Grid from '@material-ui/core/Grid'
// containers
import Header from '../../containers/Header'
import UserStatistics from '../../containers/UserStatistics'
// components
import { HelmetSEO } from '../../components/Globals'
// import Symbol from '../../components/Symbol'
import Loading from '../../components/Loading'
import TrackAffirmations from '../../components/TrackAffirmations'
// const
import DASHBOARD_ROUTES from '../../constants/routes'
// redux
import { useSelector } from 'react-redux'
// queries
import { listUsersWithSensiesByUserId } from '../../graphql/queries'
// utils
import { gqlquery } from '../../utils/queries'
// styles
import styles from './styles.module.scss'

// const
const { home } = DASHBOARD_ROUTES

// * page
/**
 * User page component
 * @component
 */
const User = () => {
  // ? hooks
  const { id } = useParams()
  console.log('User page: ', id)
  const { filtersReducer: { globalDateFilter } } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [user, setUser] = useState({})
  const [redirect, setRedirect] = useState(false)
  // const [affirmations, setAffirmations] = useState([])
  const [waitQuery, setWaitQuery] = useState(true)

  useEffect(() => user === undefined ? setRedirect(true) : setRedirect(false), [globalDateFilter])
  useEffect(async () => {
    await handleUserQuery()
    // await handleAffirmationsQuery()
  }, [id, globalDateFilter])

  // ? handle functions
  /**
   * handleUserQuery
   */
  const handleUserQuery = async () => {
    console.log(user)
    if (user && globalDateFilter) {
      const dbUser = await gqlquery(listUsersWithSensiesByUserId(id, globalDateFilter.value))
      console.log(dbUser)
      if (!dbUser.loading && dbUser.value !== null) {
        const _user = dbUser.value.data.getUser
        setUser(_user)
        setWaitQuery(false)
      } else { setWaitQuery(true) }
    }
  }

  /**
   * handleUsersQuery
   */
  // const handleAffirmationsQuery = async () => {
  //   if (user && globalDateFilter) {
  //     const dbAffirmations = await gqlquery(listAffirmationsByUserIdAndTopicId(user.id, 10))
  //     if (!dbAffirmations.loading && dbAffirmations.value !== null) {
  //       setAffirmations(dbAffirmations.value.data.listAffirmations.items)
  //       setWaitQuery(false)
  //     } else { setWaitQuery(true) }
  //   }
  // }

  /**
   * handleSensies
   * @return {boolean}
   */
  const handleSensies = () => user.sensies.items.length > -1

  return (
    <section className={styles.UserContainer}>
      {redirect && <Redirect to={home} />}
      {/* seo */}
      <HelmetSEO title={t('seo.User.title')} subtitle={t('seo.User.subtitle')} />
      {/* header */}
      <Header withBack={true} withPeople={false} />
      {/* body */}
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={styles.UserG1Container}>
            {waitQuery ? <Loading /> : <UserStatistics data={user} />}
          </div>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div className={styles.UserG2Container}>
            {!waitQuery && handleSensies && <Symbol level={0} />}
          </div>
        </Grid> */}
        <Grid item xs={12}>
          <div className={styles.UserG3Container}>
            {!waitQuery && handleSensies &&
              <TrackAffirmations
                // data={}
                theme={2}
                title={t('dashboard.User.trackAffirmations')}
                chipsUp={true}
              />
            }
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default User
