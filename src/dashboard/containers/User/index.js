// react
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
// components
import ImageAvatar from '../../components/ImageAvatar'
import PercentageChart from '../../components/PercentageChart'
// import BarChart from '../../components/BarChart'
import IconChart from '../../components/IconChart'
// constants
import { IconChartTypes } from '../../constants/charts'
// import { UserListBtns } from '../../constants/globals'
import DASHBOARD_ROUTES from '../../constants/routes'
// redux
import { useSelector } from 'react-redux'
// utils
import { handleDefaultPictureUser, handleFlow, handleEngagement } from '../../utils/functions'
// styles
import styles from './styles.module.scss'
// prop-types
import { UserPropTypes } from '../../prop-types'

// const
const { ACTIVITY, UP } = IconChartTypes
// const { summary } = UserListBtns

// * component
/**
 * User component
 * @component
 * @param {User} user
 * @param {string} show
 */
const User = ({ user, show, affirmation }) => {
  // ? hooks
  const [t] = useTranslation('global')
  const { filtersReducer: { globalDateFilter } } = useSelector(state => state)

  const filterSensies = (sensies) => {
    console.log(user.sensies.items)
    if (!affirmation) return sensies
    console.log(affirmation)
    return sensies.filter((sensie) => {
      console.log(sensie.affirmationId === affirmation.id)
      return sensie.affirmationId === affirmation.id
    })
  }

  // ? handle functions
  /**
   * handleTotalSensies
   * @returns {number} total sensies
   */
  const handleTotalSensies = () => {
    return filterSensies(user.sensies.items).length
  }

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

  return (
    <div className={styles.UserContainer}>
      {/* avatar */}
      <div className={styles.UserAvatarContainer}>
        <Link to={DASHBOARD_ROUTES.user + '/' + user.id}>
          <div>
            <ImageAvatar url={user.picture || handleDefaultPictureUser(user.gender)} alt={user.lastName} />
            {renderName()}
          </div>
        </Link>
      </div>
      {/* body */}
      <div className={styles.UserBodySummary}>
        <div className={styles.UserBodyContainer}>
          <div><IconChart title={t('dashboard.IconChart.flow')} value={handleFlow(filterSensies(user.sensies.items))} valueType="%" icon={ACTIVITY} theme={2} /></div>
          <PercentageChart title={t('dashboard.User.awarness')} value={user.selfAwareness} />
          <div><IconChart title={t('dashboard.IconChart.engagement')} value={handleEngagement(globalDateFilter.value, handleTotalSensies())} icon={UP} theme={2} /></div>
          <div><IconChart title={t('dashboard.IconChart.sensies')} value={handleTotalSensies()} valueType="number" icon={UP} theme={2} /></div>
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
  affirmation: PropTypes.object
}

export default User
