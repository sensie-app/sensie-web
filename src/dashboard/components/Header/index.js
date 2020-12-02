// react
import React from 'react'
// components
import Icon from '../Icon'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { fontColor1 } = COLORS

const Header = ({ withBack = false, withPeople = true }) => {
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.HeaderLeftContainer}>
        {withBack && <div className={styles.HeaderBack}>
          <div className={styles.HeaderLeftIcon}><Icon name="arrow-back-outline" size="md" color={fontColor1}/></div>
          <span>Back</span>
        </div>}

        {withPeople && <div className={styles.HeaderBack}>
          <div className={styles.HeaderLeftIcon}><Icon name="person-add-outline" size="md" color={fontColor1}/></div>
          <span>Invite People</span>
        </div>}
      </div>

      <div className={styles.HeaderRightContainer}>
        <div className={styles.HeaderCalendar}>
          <div className={styles.HeaderCalendarIcon}><Icon name="calendar-outline" size="md" color={fontColor1} /></div>
          <h4 className={styles.HeaderCalendarDate}>OCTOBER 2020</h4>
          <div className={styles.HeaderCalendarArrowIcon}><Icon name="arrow-ios-downward-outline" size="md" color={fontColor1} /></div>
          <span>Last month</span>
        </div>
      </div>
    </div>
  )
}

export default Header
