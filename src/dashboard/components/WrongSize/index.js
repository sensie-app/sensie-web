// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// styles
import styles from './styles.module.scss'

// * component
/**
 * WrongSize component
 * @component
 */
const WrongSize = () => {
  // ? hooks
  const [t] = useTranslation('global')

  return (
    <div className={styles.WrongSizeContainer}>
      <div className={styles.WrongSizeTextContainer}>
        <b>{t('dashboard.WrongSize.message')}</b>
        <span>{t('dashboard.WrongSize.description')}</span>
      </div>
    </div>
  )
}

export default WrongSize
