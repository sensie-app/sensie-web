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
// import { useSelector } from 'react-redux'
// utils
import { handleDefaultPictureUser, handleFlow /*, handleEngagement */ } from '../../utils/functions'
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
const User = ({ user, sensies, show, affirmation }) => {
  // ? hooks
  const [t] = useTranslation('global')
  // const { filtersReducer: { globalDateFilter } } = useSelector(state => state)

  const filterSensies = (data) => {
    if (!affirmation) return data
    return data.filter((sensie) => {
      return sensie.affirmationId === affirmation.id
    })
  }

  const handleAwareness = () => {
    const sortedScores = user.selfAwarenessScores.items.sort((a, b) => b.timestamp - a.timestamp)
    const latest = sortedScores.length > 0 ? sortedScores[0].score : 0
    return latest
  }

  // ? handle functions
  /**
   * handleTotalSensies
   * @returns {number} total sensies
   */
  const handleTotalSensies = () => {
    return filterSensies(sensies).length
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
  const flow = handleFlow(filterSensies(sensies))

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
          <div>
            {flow === 'NO_SENSIES'
              ? <IconChart title={t('dashboard.IconChart.flow')} value={'Null'} valueType="" icon={null} theme={2} />
              : <IconChart title={t('dashboard.IconChart.flow')} value={flow} valueType="%" icon={ACTIVITY} theme={2} />}
          </div>
          <PercentageChart title={t('dashboard.User.awarness')} value={handleAwareness()} />
          {/* <div><IconChart title={t('dashboard.IconChart.engagement')} value={handleEngagement(globalDateFilter.value, handleTotalSensies())} icon={UP} theme={2} /></div> */}
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
  sensies: PropTypes.object,
  affirmation: PropTypes.object
}

export default User
