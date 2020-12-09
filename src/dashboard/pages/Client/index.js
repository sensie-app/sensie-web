// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// components
import { HelmetSEO } from '../../components/Globals'
// styles
import styles from './styles.module.scss'

const Client = () => {
  // hooks
  const [t] = useTranslation('global')

  return (
    <section className={styles.ClientContainer}>
      {/* seo */}
      <HelmetSEO title={t('seo.Client.title')} subtitle={t('seo.Client.subtitle')} />
      <h1>Client</h1>
    </section>
  )
}

export default Client
