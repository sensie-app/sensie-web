// react
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
// material-ui
import Grid from '@material-ui/core/Grid'
// containers
import Header from '../../containers/Header'
// components
import { HelmetSEO } from '../../components/Globals'
import UserStatistics from '../../components/UserStatistics'
import Symbol from '../../components/Symbol'
import Loading from '../../components/Loading'
import TrackAffirmations from '../../components/TrackAffirmations'
// redux
import { useSelector } from 'react-redux'
// queries
import { getUserWithSensiesByIdQuery, listAffirmationsByUserIdAndTopicId } from '../../graphql/queries'
// utils
import { gqlquery } from '../../utils/queries'
// styles
import styles from './styles.module.scss'

// * page
/**
 * User page component
 * @component
 */
const User = () => {
  // ? hooks
  const { id } = useParams()
  const { filtersReducer: { globalDateFilter } } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [user, setUser] = useState({})
  const [withSensies, setWithSensies] = useState(false)
  const [affirmations, setAffirmations] = useState([])
  const [waitQuery, setWaitQuery] = useState(true)
  console.log('waitQuery', waitQuery)

  useEffect(async () => {
    await handleUserQuery()
    await handleAffirmationsQuery()
  }, [id, globalDateFilter])
  console.log('user', user)

  // ? handle functions
  /**
   * handleUserQuery
   */
  const handleUserQuery = async () => {
    if (user && globalDateFilter) {
      const dbUser = await gqlquery(getUserWithSensiesByIdQuery(id, globalDateFilter.value))
      console.log('dbUser', dbUser)
      if (!dbUser.loading && dbUser.value !== null) {
        const _user = dbUser.value.data.getUser
        setUser(_user)
        setWaitQuery(false)
        setWithSensies(_user.sensies.items.length > 0)
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

  return (
    <section className={styles.UserContainer}>
      {/* seo */}
      <HelmetSEO title={t('seo.User.title')} subtitle={t('seo.User.subtitle')} />
      {/* header */}
      <Header withBack={true} withPeople={false} />
      {/* body */}
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <div className={styles.UserG1Container}>
            {waitQuery ? <Loading /> : <UserStatistics data={user} withSensies={withSensies} />}
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <div className={styles.UserG2Container}>
            {!waitQuery && withSensies && <Symbol level={0} />}
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.UserG3Container}>
            {!waitQuery && withSensies &&
              <TrackAffirmations
                data={affirmations}
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
