// react
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// material-ui
import Grid from '@material-ui/core/Grid'
// containers
import Header from '../../containers/Header'
import UsersList from '../../containers/UsersList'
import Affirmation from '../../containers/Affirmation'
// components
import { HelmetSEO } from '../../components/Globals'
import TrackAffirmations from '../../components/TrackAffirmations'
import Loading from '../../components/Loading'
// constants-routes
import DASHBOARD_ROUTES from '../../constants/routes'
// graphql
import { listUsersByOrganizationId } from '../../graphql/queries'
// redux
import { useSelector } from 'react-redux'
// utils
import { gqlquery } from '../../utils/queries'
// styles
import styles from './styles.module.scss'

// const
const { affirmations } = DASHBOARD_ROUTES

// * page
/**
 * Client page component
 * @component
 */
const Client = () => {
  // hooks
  const {
    userReducer: { user },
    filtersReducer: { globalDateFilter }
  } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [users, setUsers] = useState([])
  const [waitQuery, setWaitQuery] = useState(true)

  useEffect(async () => await handleUsersQuery(), [users, globalDateFilter])

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

  // ? const
  const btn = {
    title: t('dashboard.Client.author'),
    route: affirmations
  }

  return (
    <section className={styles.ClientContainer}>
      {/* seo */}
      <HelmetSEO title={t('seo.Client.title')} subtitle={t('seo.Client.subtitle')} />
      {/* header */}
      <Header withBack={true} withPeople={false} />
      {/* body */}
      <Grid container spacing={1}>
        {/* affirmations */}
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <div className={styles.ClientG1Container}>
            <TrackAffirmations
              chipsUp={true}
              title={t('dashboard.Client.affirmations')}
              btn={btn}
              theme={3}
            />
          </div>
        </Grid>
        {/* spider-chart + user-list */}
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <div className={styles.ClientG1Container}>
            <Affirmation />
          </div>
          <div className={styles.ClientG1Container}>
            {waitQuery
              ? <Loading />
              : <UsersList data={users} />
            }
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default Client
