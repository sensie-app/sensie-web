// react
import React from 'react'
// components
import Icon from '../Icon'
// constants
import { COLORS } from '../../constants/theme'
// styles
import './styles.scss'

// const
const { fontColor1 } = COLORS

const Header = ({ withBack = false, withPeople = true }) => {
  return (
    <div className="HeaderContainer">
      <div className="HeaderLeftContainer">
        {withBack && <div className="HeaderBack">
          <div className="HeaderLeftIcon"><Icon name="arrow-back-outline" size="md" color={fontColor1}/></div>
          <span>Back</span>
        </div>}

        {withPeople && <div className="HeaderBack">
          <div className="HeaderLeftIcon"><Icon name="person-add-outline" size="md" color={fontColor1}/></div>
          <span>Invite People</span>
        </div>}
      </div>

      <div className="HeaderRightContainer">
        <div className="HeaderCalendar">
          <div className="HeaderCalendarIcon"><Icon name="calendar-outline" size="md" color={fontColor1} /></div>
          <h4 className="HeaderCalendarDate">OCTOBER 2020</h4>
          <div className="HeaderCalendarArrowIcon"><Icon name="arrow-ios-downward-outline" size="md" color={fontColor1} /></div>
          <span>Last month</span>
        </div>
      </div>
    </div>
  )
}

export default Header
