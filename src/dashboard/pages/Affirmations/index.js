// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// components
import Title from '../../components/Title'
import Share from '../../components/Share'

// styles
import styles from './styles.module.scss'

// * page
/**
 * Affirmations page
 * @component
 */
const Affirmations = () => {
  // hooks
  const [t] = useTranslation('global')

  return (
    <div className={styles.AffirmationsContainer}>
      <div className={styles.AffirmationsContentContainer}>
        {/* header */}
        <div className={styles.AffirmationsHeaderContainer}>
          <div className={styles.AffirmationsHeaderTitleContainer}>
            <Title text={t('dashboard.Affirmations.affirmations')} />
          </div>
          <div className={styles.AffirmationsHeaderTabsContainer}>
            <div>
              <button><span>{t('dashboard.Affirmations.packs')}</span></button>
              <button><span>{t('dashboard.Affirmations.topics')}</span></button>
            </div>
            <Share />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Affirmations
