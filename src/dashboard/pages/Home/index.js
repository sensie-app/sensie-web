// react
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// material-ui
import Grid from '@mui/material/Grid'
// containers
import Header from '../../containers/Header'
import ClientSnapshot from '../../containers/ClientSnapshot'
// components
// import TrackAffirmations from '../../components/TrackAffirmations'
import Loading from '../../components/Loading'
import Line from '../../components/Line'
import { HelmetSEO } from '../../components/Globals'

import styles from './styles.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { listUsersByOrganizationDatesAction } from '../../../redux/actions/users.actions'
import { listAffirmationsByCoachId } from '../../../redux/actions/affirmations.actions'

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

  useEffect(() => {
    if (user.id) {
      dispatch(listUsersByOrganizationDatesAction(globalDateFilter.value))
      dispatch(listAffirmationsByCoachId(user.id, globalDateFilter.value, 10))
    }
  }, [user.id, globalDateFilter.name])

  useEffect(() => {
  }, [usersReducer.users, affirmationsReducer.affirmations, globalDateFilter.value])

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
            Hola mundo
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
