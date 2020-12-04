import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
// styles
import styles from './styles.module.scss'

export const ChangeLngBtn = () => {
  const [t, i18n] = useTranslation('global')
  const [lngEN, setLngEN] = useState(true)

  // handle functions
  const handleClick = () => {
    lngEN ? i18n.changeLanguage('es') : i18n.changeLanguage('en')
    setLngEN(!lngEN)
  }

  return (
    <button onClick={() => handleClick()} className={styles.ChangeLngButton}>
      { lngEN ? t('app.lng.ES') : t('app.lng.EN') }
    </button>
  )
}
