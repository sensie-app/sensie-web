// react
import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
// components
import ImageAvatar from '../ImageAvatar'
import PieChart from '../PieChart'
import IconChart from '../IconChart'
import Separator from '../Separator'
// constants
import { IconChartTypes } from '../../constants/charts'
// utils
import { handleDefaultPictureUser } from '../../utils/functions'
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
 * @param {boolean} withSensies
 */
const UserStatistics = ({ data, withSensies }) => {
  // ? hooks
  const [t] = useTranslation('global')

  // ? handle functions
  /**
   * handleSensiesCount
   * @returns {number} total
   */
  const handleSensiesCount = () => data.sensies.items.length

  const handleLastSensieTimestamp = () => moment(data.sensies.items[0].timestamp).format('DD.MM.yyyy | hh.mm')

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
          <h1>{data.fistName} {data.lastName}</h1>
          {withSensies
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
      {withSensies && <div className={styles.UserStatisticsBodyContainer}>
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
            <IconChart title={t('dashboard.IconChart.sensies')} value={handleSensiesCount()} icon={DOWN} theme={2} />
          </div>
          <Separator />
          <div className={styles.UserStatisticsBodyChartsContainer}>
            <IconChart title={t('dashboard.IconChart.flow')} value={30000} icon={ACTIVITY} theme={2} />
          </div>
        </div>
      </div>}
    </div>
  )
}

// prop-types
UserStatistics.propTypes = {
  /** data */
  data: PropTypes.object.isRequired,
  /** withSensies */
  withSensies: PropTypes.bool.isRequired
}

export default UserStatistics
