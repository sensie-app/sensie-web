// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// styles
import styles from './styles.module.scss'

// * component
/**
 * WrongOrientation component
 * @component
 */
const WrongOrientation = () => {
  // hooks
  const [t] = useTranslation('global')

  return (
    <div className={styles.WrongOrientationContainer}>
      <div className={styles.WrongOrientationImgContainer} />
      <div className={styles.WrongOrientationTextContainer}>
        <b>{t('dashboard.WrongOrientation.message')}</b>
        <span>{t('dashboard.WrongOrientation.description')}</span>
      </div>
    </div>
  )
}

export default WrongOrientation
