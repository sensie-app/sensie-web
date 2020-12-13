// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// material-ui
import Grid from '@material-ui/core/Grid'
// components
import { HelmetSEO } from '../../components/Globals'
// styles
import styles from './styles.module.scss'

// * page
const Client = () => {
  // hooks
  const [t] = useTranslation('global')

  return (
    <section className={styles.ClientContainer}>
      {/* seo */}
      <HelmetSEO title={t('seo.Client.title')} subtitle={t('seo.Client.subtitle')} />
      <h1>Client</h1>
      <Grid container spacing={1}>
        {/* affirmations */}
        <Grid item xs={12} sm={12} md={6} xl={6}>
        </Grid>
        {/* spider-chart */}
        <Grid item xs={12} sm={12} md={6} xl={6}>
        </Grid>
      </Grid>

    </section>
  )
}

export default Client
