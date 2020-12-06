// react
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
// components
import Icon from '../../components/Icon'
import MenuListComposition from '../../components/MenuListComposition'
// constants
import { COLORS } from '../../constants/theme'
import DASHBOARD_ROUTES from '../../constants/routes'
import { MenuDateHeaderComponent } from '../../constants/menus'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setGlobalDateFilterAction } from '../../../redux/actions/filters.actions'
// styles
import styles from './styles.module.scss'
// others
const moment = require('moment')

// const
const { fontColor1 } = COLORS
const { home } = DASHBOARD_ROUTES

const Header = ({ withBack = false, withPeople = true }) => {
  // hooks
  const dispatch = useDispatch()
  const { filtersReducer } = useSelector(state => state)
  const [t] = useTranslation('global')
  // const [datePickerValue, datePickeronChange] = useState([new Date(), new Date()])
  const [datePickerValue, datePickeronChange] = useState([null, null])
  const [filter, setFilter] = useState(filtersReducer.globalDateFilter)

  useEffect(() => {
    handleDates()
  }, [])

  // handle functions
  const handleClickMenuValue = value => {
    setFilter(value)
    dispatch(setGlobalDateFilterAction(value))
  }

  const handleDates = () => {
    let date = moment().format()
    console.log('date', date)
    // switch (filter.key) {
    //   case 'today': return date
    //   case ''

    //   default: return date
    // }
  }

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
            {filter.key === 'custom'
              ? <DateRangePicker
                  autoFocus={true}
                  className={styles.test}
                  onChange={datePickeronChange}
                  format="yyyy/MM/dd"
                  rangeDivider=" to "
                  showLeadingZeros={true}
                  value={datePickerValue}
                  yearPlaceholder="yyyy"
                  monthPlaceholder="mm"
                  dayPlaceholder="dd"
                  calendarIcon={<Icon name="calendar-outline" size="md" color={fontColor1} />}
                  clearIcon={<Icon name="close-outline" size="md" color={fontColor1} />}
                />
              : <span>Acá va el texto de las fechas </span>
            }
          </div>
          <span className={styles.HeaderSeparator}> | </span>
          <MenuListComposition data={MenuDateHeaderComponent} onClickValue={value => handleClickMenuValue(value)} defaultValue={filter} />
        </div>
      </div>
    </div>
  )
}

// prop-types
Header.propTypes = {
  withBack: PropTypes.bool,
  withPeople: PropTypes.bool
}

export default Header
