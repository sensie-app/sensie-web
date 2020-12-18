// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// material-ui
import Grid from '@material-ui/core/Grid'
// containers
import Header from '../../containers/Header'
// components
import { HelmetSEO } from '../../components/Globals'
import UserStatistics from '../../components/UserStatistics'
import Symbol from '../../components/Symbol'
import TrackAffirmations from '../../components/TrackAffirmations'
// styles
import styles from './styles.module.scss'

// * page
/**
 * User page
 * @component
 */
const User = () => {
  // hooks
  const [t] = useTranslation('global')

  return (
    <section className={styles.UserContainer}>
      {/* seo */}
      <HelmetSEO title={t('seo.User.title')} subtitle={t('seo.User.subtitle')} />
      {/* header */}
      <Header />
      {/* body */}
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <div className={styles.UserG1Container}>
            <UserStatistics />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <div className={styles.UserG2Container}>
            <Symbol />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.UserG3Container}>
            <TrackAffirmations
              theme={2}
              title={t('dashboard.User.trackAffirmations')}
              chipsUp={true}
            />
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default User
