// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// components
import ListAffirmations from '../../containers/ListAffirmations'
// styles
import styles from './styles.module.scss'

// * component
const TrackAffirmations = () => {
  // hooks
  const [t] = useTranslation('global')

  return (
    <section className={styles.TrackAffirmationsContainer}>
      <div className={styles.TrackAffirmationsBodyContainer}>
        {/* header */}
        <div className={styles.TrackAffirmationsHeaderContainer}>
          <div className={styles.TrackAffirmationsHeaderTitleContainer}>
            <h3>{t('dashboard.TrackAffirmations.title')}</h3>
          </div>
          <div className={styles.TrackAffirmationsHeaderBtnContainer}>
            <button>{t('dashboard.TrackAffirmations.viewMore')}</button>
          </div>
        </div>
        {/* body */}
        <div className={styles.TrackAffirmationsOptionsContainer}>
          <ListAffirmations />
        </div>
      </div>
    </section>
  )
}

export default TrackAffirmations
