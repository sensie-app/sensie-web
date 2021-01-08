// react
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
// components
import ImageAvatar from '../ImageAvatar'
import PercentageChart from '../PercentageChart'
import BarChart from '../BarChart'
import IconChart from '../IconChart'
// constants
import { IconChartTypes } from '../../constants/charts'
import { UserListBtns } from '../../constants/globals'
import DASHBOARD_ROUTES from '../../constants/routes'
// styles
import styles from './styles.module.scss'
// prop-types
import { UserPropTypes } from '../../prop-types'

// const
const { USER, UP, DOWN } = IconChartTypes
const { summary } = UserListBtns

// * component
/**
 * User component
 * @component
 * @param {User} user
 * @param {string} show
 */
const User = ({ user, show }) => {
  // hooks
  const [t] = useTranslation('global')

  // ? render functions
  /**
   * render user name
   * @return  {undefined} name + lastname (html)
   */
  const renderName = () => {
    const _user = user.name.split(' ')
    return <div className={styles.UserAvatarContainerRenderName}>
      <span>{_user[0]}</span>
      <span>{_user[1]}</span>
    </div>
  }

  return (
    <div className={styles.UserContainer}>
      {/* avatar */}
      <Link to={DASHBOARD_ROUTES.user}>
        <div className={styles.UserAvatarContainer}>
          <ImageAvatar url={user.url} alt="test" />
          {renderName()}
        </div>
      </Link>
      {/* body */}
      { show === summary
        ? <div className={styles.UserBodySummary}>
            <div className={styles.UserBodyContainer}>
              <PercentageChart title={t('dashboard.User.awarness')} value={90} />
              <PercentageChart title={t('dashboard.User.resilence')} value={60} />
              <PercentageChart title={t('dashboard.User.trust')} value={45} />
            </div>
            {/* chart */}
            <div className={styles.UserChartContainer}>
              <BarChart miniature={true} />
            </div>
          </div>
        : <div className={styles.UserBodyContainer}>
            <IconChart title={t('dashboard.IconChart.engagement')} value={30000} icon={UP} theme={2} />
            <IconChart title={t('dashboard.IconChart.sensies')} value={10000000} valueType="number" icon={DOWN} theme={2} />
            <IconChart title={t('dashboard.IconChart.flow')} value={80} valueType="%" icon={USER} theme={2} />
          </div>
      }
    </div>
  )
}

// prop-types
User.propTypes = {
  /** show: { showInfo } */
  show: PropTypes.string,
  user: UserPropTypes
}

export default User
