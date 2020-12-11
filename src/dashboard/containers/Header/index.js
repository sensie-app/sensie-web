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
import { TODAY } from '../../constants/globals'
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
  const [datePickerValue, setDatePickerValue] = useState(null)
  const [filter, setFilter] = useState(filtersReducer.globalDateFilter)
  const [filterDefault, setFilterDefault] = useState(filtersReducer.globalDateFilter)

  useEffect(() => {
    datePickerValue === null
      ? handleClickMenuValue(MenuDateHeaderComponent[0])
      : handleCustomDates()
  }, [datePickerValue])

  useEffect(() => { setFilterDefault(filter) }, [filter])

  // handle functions
  const handleClickMenuValue = value => {
    handleDates(value)
    setFilter(value)
    dispatch(setGlobalDateFilterAction(value))
  }

  const handleDates = data => {
    switch (data.key) {
      case 'today':
        data.value = TODAY
        break
      case 'lastDay':
        data.value = [moment().subtract(1, 'd').format(), TODAY]
        break
      case 'lastWeek':
        data.value = [moment().subtract(7, 'd').format(), TODAY]
        break
      case 'lastMonth':
        data.value = [moment().subtract(1, 'M').format(), TODAY]
        break
      case 'lastYear':
        data.value = [moment().subtract(1, 'y').format(), TODAY]
        break
    }
    return data
  }

  const handleCustomDates = () => {
    if (filter.key === 'custom' && datePickerValue !== null) {
      filter.value = [moment(datePickerValue[0]).format(), moment(datePickerValue[1]).format()]
      dispatch(setGlobalDateFilterAction(filter))
    }
  }

  // render functions
  const renderDate = () => {
    const { key, value } = filter
    return key !== 'custom' && value.length === 2
      ? `${moment(value[0]).format('yyyy/MM/DD')} to ${moment(value[1]).format('yyyy/MM/DD')}`
      : `${moment(value).format('yyyy/MM/DD')}`
  }

  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.HeaderLeftContainer}>
        {/* back option */}
        {withBack && <Link to={home} className={styles.HeaderBack}>
          <div className={styles.HeaderLeftIcon}><Icon name="arrow-back-outline" size="md" color={fontColor1}/></div>
          <span>{t('dashboard.Header.back')}</span>
        </Link>}

        {/* invite people options */}
        {withPeople && <div className={styles.HeaderPeople}>
          <div className={styles.HeaderLeftIcon}><Icon name="person-add-outline" size="md" color={fontColor1}/></div>
          <span>{t('dashboard.Header.invitePeople')}</span>
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
                  onChange={setDatePickerValue}
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
              : <span>{renderDate()}</span>
            }
          </div>
          <span className={styles.HeaderSeparator}> | </span>
          <MenuListComposition data={MenuDateHeaderComponent} onClickValue={value => handleClickMenuValue(value)} defaultValue={filterDefault} />
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
