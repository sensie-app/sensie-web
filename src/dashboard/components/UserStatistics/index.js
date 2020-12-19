// react
import React from 'react'
import { useTranslation } from 'react-i18next'
// components
import ImageAvatar from '../ImageAvatar'
import PieChart from '../PieChart'
import IconChart from '../IconChart'
import Separator from '../Separator'
// constants
import { IconChartTypes } from '../../constants/charts'
// styles
import styles from './syles.module.scss'

// const
const { ACTIVITY, UP, DOWN } = IconChartTypes

// * component
/**
 * UserStatistics component
 * @component
 */
const UserStatistics = () => {
  // hooks
  const [t] = useTranslation('global')

  return (
    <div className={styles.UserStatisticsContainer}>
      {/* header */}
      <div className={styles.UserStatisticsHeaderContainer}>
        {/* avatar */}
        <div className={styles.UserStatisticsHeaderAvatar}>
          <ImageAvatar size="xlarge" url="https://www.gstatic.com/tv/thumb/persons/25704/25704_v9_bb.jpg" alt="test" />
        </div>
        {/* body */}
        <div className={styles.UserStatisticsHeaderBody}>
          <h1>Harrison Ford</h1>
          <div>
            <span className={styles.UserStatisticsHeaderBodySubtitle}>Last sensie</span>
            <span className={styles.UserStatisticsHeaderBodyDate}>20.01.2020 | 12:00</span>
          </div>
        </div>
      </div>
      {/* body */}
      <div className={styles.UserStatisticsBodyContainer}>
        <div className={styles.UserStatisticsBorder} />
        {/* pie charts */}
        <div className={styles.UserStatisticsBodyCharts1Container}>
          <div className={styles.UserStatisticsBodyChartsContainer}>
            <PieChart title={t('dashboard.PieChart.awarness')} />
          </div>
          <div className={styles.UserStatisticsBodyChartsContainer}>
            <PieChart title={t('dashboard.PieChart.resilence')} />
          </div>
          <div className={styles.UserStatisticsBodyChartsContainer}>
            <PieChart title={t('dashboard.PieChart.trust')} />
          </div>
        </div>
        {/* icon charts */}
        <div className={styles.UserStatisticsBodyCharts2Container}>
          <div className={styles.UserStatisticsBodyChartsContainer}>
            <IconChart title={t('dashboard.IconChart.engagement')} value={30000} icon={UP} theme={2} />
          </div>
          <Separator />
          <div className={styles.UserStatisticsBodyChartsContainer}>
            <IconChart title={t('dashboard.IconChart.sensies')} value={30000} icon={DOWN} theme={2} />
          </div>
          <Separator />
          <div className={styles.UserStatisticsBodyChartsContainer}>
            <IconChart title={t('dashboard.IconChart.flow')} value={30000} icon={ACTIVITY} theme={2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserStatistics
