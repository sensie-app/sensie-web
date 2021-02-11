// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// material-ui
import Grid from '@material-ui/core/Grid'
// containers
import Header from '../../containers/Header'
// import UsersList from '../../containers/UsersList'
import Affirmation from '../../containers/Affirmation'
// components
import { HelmetSEO } from '../../components/Globals'
import TrackAffirmations from '../../components/TrackAffirmations'
import Loading from '../../components/Loading'
// constants-routes
import DASHBOARD_ROUTES from '../../constants/routes'
// redux
import { useSelector } from 'react-redux'
// styles
import styles from './styles.module.scss'

// * page
/**
 * Client page component
 * @component
 */
const Client = () => {
  // ? hooks
  const {
    usersReducer,
    affirmationsReducer
  } = useSelector(state => state)
  const [t] = useTranslation('global')

  // ? const
  const btn = {
    title: t('dashboard.Client.author'),
    route: DASHBOARD_ROUTES.affirmations
  }

  return (
    <section className={styles.ClientContainer}>
      {/* seo */}
      <HelmetSEO title={t('seo.Client.title')} subtitle={t('seo.Client.subtitle')} />
      {/* header */}
      <Header withBack={false} withPeople={true} />
      {/* body */}
      <Grid container spacing={1}>
        {/* affirmations */}
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <div className={styles.ClientG1Container}>
            {affirmationsReducer.loading
              ? <Loading />
              : <TrackAffirmations
                  chipsUp={true}
                  title={t('dashboard.Client.affirmations')}
                  btn={btn}
                  theme={3}
                />
            }
          </div>
        </Grid>
        {/* spider-chart + user-list */}
        <Grid item xs={12} sm={12} md={12} lg={16} xl={6}>
          <div className={styles.ClientG1Container}>
            {usersReducer.loading
              ? <Loading />
              : <Affirmation />
            }
          </div>
          {/* <div className={styles.ClientG1Container}>
            {usersReducer.loading
              ? <Loading />
              : <UsersList />
            }
          </div> */}
        </Grid>
      </Grid>
    </section>
  )
}

export default Client
