// react
import React, { useEffect, useState } from 'react'
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
// import { useSelector } from 'react-redux'
// utils
import { handleDefaultPictureUser, handleFlow, handleAwareness } from '../../utils/functions'
// styles
import styles from './syles.module.scss'
import { Storage } from 'aws-amplify'

import IMG from '../../constants/images'
const { avatarFemale, avatarMale } = IMG

// const
const moment = require('moment')
const { ACTIVITY, UP } = IconChartTypes

// * component
/**
 * UserStatistics component
 * @component
 * @param {object} data
 */
const UserStatistics = ({ data, sensies }) => {
  // ? hooks
  const [t] = useTranslation('global')
  const [picture, setPicture] = useState()
  // const { filtersReducer: { globalDateFilter } } = useSelector(state => state)

  // ? handle functions
  /**
   * handleSensiesCount
   * @returns {number} total
   */
  const handleSensiesCount = () => sensies.length

  /**
   * handleLastSensieTimestamp
   * @returns {string}
   */
  const handleLastSensieTimestamp = () => sensies && moment((sensies[0] || {}).createdAt).format('MM/DD/yyyy | hh:mm')

  const awareness = handleAwareness(data.selfAwarenessScores.items)

  const defaultAvatar = data.gender === 'Male' ? avatarMale : avatarFemale

  const getImage = async function (k) {
    return (k && k !== 'null') ? await Storage.get(k) : defaultAvatar
  }

  useEffect(() => {
    getImage(data.picture).then(d => setPicture(d))
  }, [data])

  return (
    <div className={styles.UserStatisticsContainer}>
      {/* header */}
      <div className={styles.UserStatisticsHeaderContainer}>
        {/* avatar */}
        <div className={styles.UserStatisticsHeaderAvatar}>
          <ImageAvatar size="xlarge" url={picture || handleDefaultPictureUser(data.gender)} alt={data.lastName} />
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
            <IconChart title={t('dashboard.IconChart.flow')} value={handleFlow(sensies).toString()} valueType="%" icon={ACTIVITY} theme={2} />
          </div>
          <Separator />
          <div className={styles.UserStatisticsBodyChartsContainer}>
            {awareness === 'NO_AWARENESS'
              ? <IconChart title={t('dashboard.User.awarness')} value={'Null'} valueType="" icon={null} theme={2} />
              : <IconChart title={t('dashboard.User.awarness')} value={awareness + '/18'} valueType="" icon={UP} theme={2} />}
          </div>
          {/* <Separator />
          <div className={styles.UserStatisticsBodyChartsContainer}>
            <IconChart title={t('dashboard.IconChart.engagement')} value={handleEngagement(globalDateFilter.value, handleSensiesCount())} icon={UP} theme={2} />
          </div> */}
          <Separator />
          <div className={styles.UserStatisticsBodyChartsContainer}>
            <IconChart title={t('dashboard.IconChart.sensies')} value={handleSensiesCount().toString()} icon={UP} theme={2} />
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
  /** data */
  sensies: PropTypes.object
}

export default UserStatistics
