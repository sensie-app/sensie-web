// react
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
// components
import Icon from '../Icon'
import MenuListComposition from '../MenuListComposition'
// constants
import { COLORS } from '../../constants/theme'
import DASHBOARD_ROUTES from '../../constants/routes'
import { MenuDateHeaderComponent } from '../../constants/menus'
// styles
import styles from './styles.module.scss'

// const
const { fontColor1 } = COLORS
const { home } = DASHBOARD_ROUTES

const Header = ({ withBack = false, withPeople = true }) => {
  // hooks
  const [t] = useTranslation('global')

  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.HeaderLeftContainer}>
        {/* back option */}
        {withBack && <Link to={home} className={styles.HeaderBack}>
          <div className={styles.HeaderLeftIcon}><Icon name="arrow-back-outline" size="md" color={fontColor1}/></div>
          <span>{t('dashboard.HeaderComponent.back')}</span>
        </Link>}

        {/* invite people options */}
        {withPeople && <div className={styles.HeaderPeople}>
          <div className={styles.HeaderLeftIcon}><Icon name="person-add-outline" size="md" color={fontColor1}/></div>
          <span>{t('dashboard.HeaderComponent.invitePeople')}</span>
        </div>}
      </div>

      {/* date */}
      <div className={styles.HeaderRightContainer}>
        <div className={styles.HeaderCalendar}>
          <div className={styles.HeaderCalendarIcon}>
            <Icon name="calendar-outline" size="md" color={fontColor1} />
          </div>
          <h4 className={styles.HeaderCalendarDate}>OCTOBER 2020</h4>
          <MenuListComposition data={MenuDateHeaderComponent} />
        </div>
      </div>
    </div>
  )
}

export default Header
