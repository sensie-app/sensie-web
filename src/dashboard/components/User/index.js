// react
import React, { Fragment } from 'react'
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
// styles
import styles from './styles.module.scss'

// const
const { UP, USER, ACTIVITY } = IconChartTypes
const { summary } = UserListBtns

// * component
const User = ({ user = { name: 'Harrison Ford', url: '' }, show = summary }) => {
  console.log('show', show)
  console.log('show === summary', show === summary)
  // hooks
  const [t] = useTranslation('global')

  // render functions
  const renderName = () => {
    const _user = user.name.split(' ')
    return <div>
      <span>{_user[0]}</span>
      <span>{_user[1]}</span>
    </div>
  }

  return (
    <div className={styles.UserContainer}>
      {/* avatar */}
      <div className={styles.UserAvatarContainer}>
        <ImageAvatar url="https://www.gstatic.com/tv/thumb/persons/25704/25704_v9_bb.jpg" alt="test" />
        {renderName()}
      </div>
      {/* body */}
      { show.showInfo === summary
        ? <Fragment>
            <div className={styles.UserBodyContainer}>
              <PercentageChart title={t('dashboard.User.awarness')} value={90} />
              <PercentageChart title={t('dashboard.User.resilence')} value={60} />
              <PercentageChart title={t('dashboard.User.trust')} value={45} />
            </div>
            {/* chart */}
            <div className={styles.UserChartContainer}>
              <BarChart miniature={true} />
            </div>
          </Fragment>
        : <div className={styles.UserBodyContainer}>
            <IconChart title={t('dashboard.IconChart.clients')} value={30000} icon={USER} />
            <IconChart title={t('dashboard.IconChart.sensies')} value={10000000} valueType="number" icon={UP} />
            <IconChart title={t('dashboard.IconChart.flow')} value={80} valueType="%" icon={ACTIVITY} />
          </div>
      }
    </div>
  )
}

// prop-types
User.propTypes = {
  show: PropTypes.shape({
    showInfo: PropTypes.string
  }),
  user: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string
  })
}

export default User
