// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// redux
import { useSelector } from 'react-redux'
// components
import Title from '../../components/Title'
import SpiderChart from '../../components/SpiderChart'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { fontColor1, grayColor3 } = COLORS

// * container
/**
 * Affirmation container
 * @component
 */
const Affirmation = () => {
  // hooks
  const [t] = useTranslation('global')
  const { filtersReducer: { affirmations: { affirmation } } } = useSelector(state => state)

  return (
    <div className={styles.AffirmationContainer}>
      {/* header */}
      <div className={styles.AffirmationSpiderHeaderContainer}>
        <div className={styles.AffirmationSpiderHeaderTitleContainer}>
          <Title text={`${t('dashboard.Affirmation.affirmation')}:`} color={fontColor1} margin="0px 10px 0px 0px" />
          <Title text={affirmation !== null ? `"${affirmation.title}"` : t('dashboard.Affirmation.selectAOption')} color={grayColor3} />
        </div>
      </div>
      <div style={{ height: '400px', width: '100%' }}>
        <SpiderChart />
      </div>
    </div>
  )
}

export default Affirmation
