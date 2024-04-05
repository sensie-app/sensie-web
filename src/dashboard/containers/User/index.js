// react
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
// components
import ImageAvatar from '../../components/ImageAvatar'
// import PercentageChart from '../../components/PercentageChart'
// import BarChart from '../../components/BarChart'
import IconChart from '../../components/IconChart'
// constants
import { IconChartTypes } from '../../constants/charts'
// import { UserListBtns } from '../../constants/globals'
import DASHBOARD_ROUTES from '../../constants/routes'
// redux
// import { useSelector } from 'react-redux'
// utils
import { handleDefaultPictureUser } from '../../utils/functions'
// styles
import styles from './styles.module.scss'
// prop-types
import { UserPropTypes } from '../../prop-types'
import { Storage } from 'aws-amplify'

import IMG from '../../constants/images'
const { avatarFemale, avatarMale } = IMG

// const
const { ACTIVITY, UP } = IconChartTypes
// const { summary } = UserListBtns

// * component
/**
 * User component
 * @component
 * @param {User} user
 * @param {number} flow
 * @param {number} awareness
 * @param {number} totalSensies
 */
const User = ({ user, flow, awareness, totalSensies }) => {
  // ? hooks
  const [t] = useTranslation('global')
  // const { filtersReducer: { globalDateFilter } } = useSelector(state => state)
  const [picture, setPicture] = useState()

  // ? render functions
  /**
   * render user name
   * @return  {undefined} name + lastname (html)
   */
  const renderName = () => {
    return <div className={styles.UserAvatarContainerRenderName}>
      <span>{user.firstName}</span>
      <span>{user.lastName}</span>
    </div>
  }

  const defaultAvatar = user.gender === 'Male' ? avatarMale : avatarFemale

  const getImage = async function (k) {
    return (k && k !== 'null') ? await Storage.get(k) : defaultAvatar
  }

  useEffect(() => {
    getImage(user.picture).then(d => setPicture(d))
  }, [])

  return (
    <div className={styles.UserContainer}>
      {/* avatar */}
      <div className={styles.UserAvatarContainer}>
        <Link to={DASHBOARD_ROUTES.user + '/' + user.id}>
          <div>
            <ImageAvatar url={picture || handleDefaultPictureUser(user.gender)} alt={user.lastName} />
            {renderName()}
          </div>
        </Link>
      </div>
      {/* body */}
      <div className={styles.UserBodySummary}>
        <div className={styles.UserBodyContainer}>
          <div>
            {flow === 'NO_SENSIES'
              ? <IconChart title={t('dashboard.IconChart.flow')} value={'0'} valueType="" icon={null} theme={2} />
              : <IconChart title={t('dashboard.IconChart.flow')} value={flow.toString()} valueType="%" icon={ACTIVITY} theme={2} />}
          </div>
          {/* <PercentageChart title={t('dashboard.User.awarness')} value={handleAwareness()} /> */}
          <div>
            {awareness === 'NO_AWARENESS'
              ? <IconChart title={t('dashboard.User.awarness')} value={'0'} valueType="" icon={null} theme={2} />
              : <IconChart title={t('dashboard.User.awarness')} value={awareness + '/20'} valueType="" icon={UP} theme={2} />}
          </div>
          {/* <div><IconChart title={t('dashboard.IconChart.engagement')} value={handleEngagement(globalDateFilter.value, handleTotalSensies())} icon={UP} theme={2} /></div> */}
          <div><IconChart title={t('dashboard.IconChart.sensies')} value={totalSensies.toString()} valueType="number" icon={UP} theme={2} /></div>
        </div>
      </div>
      {/* { show === summary
        ? <div className={styles.UserBodySummary}>
            <div className={styles.UserBodyContainer}>
              <PercentageChart title={t('dashboard.User.awarness')} value={90} />
              <PercentageChart title={t('dashboard.User.resilence')} value={60} />
              <PercentageChart title={t('dashboard.User.trust')} value={45} />
            </div>
            <div className={styles.UserChartContainer}>
              <BarChart miniature={true} />
            </div>
          </div>
        : <div className={styles.UserBodyContainer}>
            <div><IconChart title={t('dashboard.IconChart.engagement')} value={handleEngagement(globalDateFilter.value, handleTotalSensies())} icon={UP} theme={2} /></div>
            <div><IconChart title={t('dashboard.IconChart.sensies')} value={handleTotalSensies()} valueType="number" icon={UP} theme={2} /></div>
            <div><IconChart title={t('dashboard.IconChart.flow')} value={handleFlow(user.sensies.items)} valueType="%" icon={ACTIVITY} theme={2} /></div>
          </div>
      } */}
    </div>
  )
}

// prop-types
User.propTypes = {
  /** show: { showInfo } */
  show: PropTypes.string,
  user: UserPropTypes,
  sensies: PropTypes.object,
  affirmation: PropTypes.object,
  flow: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  awareness: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  totalSensies: PropTypes.number
}

export default User
