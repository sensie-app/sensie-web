// react
import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// components
import ImageAvatar from '../../components/ImageAvatar'
// import PieChart from '../../components/PieChart'
import IconChart from '../../components/IconChart'
import Separator from '../../components/Separator'
// constants
import { IconChartTypes } from '../../constants/charts'
// redux
import { useSelector } from 'react-redux'
// utils
import { handleDefaultPictureUser, handleFlow, handleEngagement } from '../../utils/functions'
// styles
import styles from './syles.module.scss'

// const
const moment = require('moment')
const { ACTIVITY, UP, DOWN } = IconChartTypes

// * component
/**
 * UserStatistics component
 * @component
 * @param {object} data
 */
const UserStatistics = ({ data }) => {
  // ? hooks
  const [t] = useTranslation('global')
  const { filtersReducer: { globalDateFilter } } = useSelector(state => state)

  // ? handle functions
  /**
   * handleSensiesCount
   * @returns {number} total
   */
  const handleSensiesCount = () => data.sensies.items.length

  /**
   * handleLastSensieTimestamp
   * @returns {string}
   */
  const handleLastSensieTimestamp = () => moment(data.sensies.items[0].createdAt).format('MM/DD/yyyy | hh:mm')

  return (
    <div className={styles.UserStatisticsContainer}>
      {/* header */}
      <div className={styles.UserStatisticsHeaderContainer}>
        {/* avatar */}
        <div className={styles.UserStatisticsHeaderAvatar}>
          <ImageAvatar size="xlarge" url={data.picture || handleDefaultPictureUser(data.gender)} alt={data.lastName} />
        </div>
        {/* body */}
        <div className={styles.UserStatisticsHeaderBody}>
          <h1>{data.firstName} {data.lastName}</h1>
          {handleSensiesCount() > 0
            ? <div>
              <span className={styles.UserStatisticsHeaderBodySubtitle}>{t('dashboard.UserStatistics.lastSensie')}</span>
              <span className={styles.UserStatisticsHeaderBodyDate}>{handleLastSensieTimestamp()}</span>
            </div>
            : <div>
              <span className={styles.UserStatisticsHeaderBodySubtitle}>{t('dashboard.UserStatistics.noSensies')}</span>
            </div>
          }
        </div>
      </div>
      {/* body */}
      {handleSensiesCount() > 0 && <div className={styles.UserStatisticsBodyContainer}>
        <div className={styles.UserStatisticsBorder} />
        {/* pie charts
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
        </div> */}
        {/* icon charts */}
        <div className={styles.UserStatisticsBodyCharts2Container}>
          <div className={styles.UserStatisticsBodyChartsContainer}>
            <IconChart title={t('dashboard.PieChart.awarness')} value={Math.ceil(Math.random() * 100)} icon={UP} theme={2}/>
          </div>
          <Separator />
          <div className={styles.UserStatisticsBodyChartsContainer}>
            <IconChart title={t('dashboard.IconChart.engagement')} value={handleEngagement(globalDateFilter.value, handleSensiesCount())} icon={UP} theme={2} />
          </div>
          <Separator />
          <div className={styles.UserStatisticsBodyChartsContainer}>
            <IconChart title={t('dashboard.IconChart.sensies')} value={handleSensiesCount()} icon={DOWN} theme={2} />
          </div>
          <Separator />
          <div className={styles.UserStatisticsBodyChartsContainer}>
            <IconChart title={t('dashboard.IconChart.flow')} value={handleFlow(data.sensies.items)} valueType="%" icon={ACTIVITY} theme={2} />
          </div>
        </div>
      </div>}
    </div>
  )
}

// prop-types
UserStatistics.propTypes = {
  /** data */
  data: PropTypes.object.isRequired
}

export default UserStatistics
