// react
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
// components
import Icon from '../../components/Icon'
import MenuListComposition from '../../components/MenuListComposition'
import Title from '../../components/Title'
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

// * container
/**
 * Header container
 * @component
 * @param {boolean} withBack (default: false)
 * @param {boolean} withPeople (default: true)
 * @param {boolean} withDate (default: true)
 * @param {boolean} withTitle (default: false)
 * @param {string} title (default: ')
 * @param {string} backTo (default: home)
 */
const Header = ({ withBack = false, withPeople = true, withDate = true, withTitle = false, title = '', backTo = home }) => {
  // hooks
  const dispatch = useDispatch()
  const { filtersReducer: { globalDateFilter } } = useSelector(state => state)
  const [t] = useTranslation('global')
  const [datePickerValue, setDatePickerValue] = useState(globalDateFilter.name === 'custom' ? globalDateFilter.value : null)
  const [filter, setFilter] = useState(globalDateFilter)
  const [filterDefault, setFilterDefault] = useState(globalDateFilter)

  useEffect(() => {
    setFilterDefault(filter)
    if (filter.name !== 'custom') {
      handleDates()
      dispatch(setGlobalDateFilterAction(filter))
    }
  }, [filter])

  useEffect(() => {
    if (filter.name === 'custom') {
      datePickerValue !== null
        ? handleCustomDates()
        : setFilter(MenuDateHeaderComponent[0]) // today for default
      dispatch(setGlobalDateFilterAction(filter))
    }
  }, [datePickerValue])

  // ? handle functions
  /**
   * handle dates
   * @returns {undefined} filter.value = date[]
   */
  const handleDates = () => {
    switch (filter.name) {
      case 'today':
        filter.value = [TODAY, TODAY]
        break
      case 'lastDay':
        filter.value = [moment().subtract(1, 'd').format(), TODAY]
        break
      case 'lastWeek':
        filter.value = [moment().subtract(7, 'd').format(), TODAY]
        break
      case 'lastMonth':
        filter.value = [moment().subtract(1, 'M').format(), TODAY]
        break
      case 'lastYear':
        filter.value = [moment().subtract(1, 'y').format(), TODAY]
        break
    }
    return filter
  }

  /**
   * handle custom dates
   * @returns {undefined} filter.value = date[]
   */
  const handleCustomDates = () => {
    filter.value = [moment(datePickerValue[0]).format(), moment(datePickerValue[1]).format()]
  }

  // ? render functions
  /**
   * render date
   * @returns {string} Date with format
   */
  const renderDate = () => {
    const { name, value } = filter
    return name !== 'custom' && value.length === 2
      ? `${moment(value[0]).format('yyyy/MM/DD')} to ${moment(value[1]).format('yyyy/MM/DD')}`
      : `${moment(value).format('yyyy/MM/DD')}`
  }

  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.HeaderLeftContainer}>
        {/* back option */}
        {withBack && !withPeople && !withTitle && <Link to={backTo} className={styles.HeaderBack}>
          <div className={styles.HeaderLeftIcon}><Icon name="arrow-back-outline" size="md" color={fontColor1}/></div>
          <span>{t('dashboard.Header.back')}</span>
        </Link>}

        {/* title */}
        {withTitle && !withBack && !withPeople && <div className={styles.HeaderTitle}>
          <Title text={title} color={fontColor1} />
        </div>}

        {/* invite people options */}
        {withPeople && !withBack && !withTitle && <div className={styles.HeaderPeople}>
          <div className={styles.HeaderLeftIcon}><Icon name="person-add-outline" size="md" color={fontColor1}/></div>
          <span>{t('dashboard.Header.invitePeople')}</span>
        </div>}
      </div>

      {/* date */}
      <div className={styles.HeaderRightContainer}>
        {withDate && <div className={styles.HeaderCalendar}>
          <div className={styles.HeaderCalendarIcon}>
            {filter.name === 'custom'
              ? <DateRangePicker
                  autoFocus={datePickerValue === null}
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
          <MenuListComposition data={MenuDateHeaderComponent} onClickValue={value => setFilter(value)} defaultValue={filterDefault} />
        </div>}
      </div>
    </div>
  )
}

// prop-types
Header.propTypes = {
  /** with back */
  withBack: PropTypes.bool,
  /** with people */
  withPeople: PropTypes.bool,
  /** with date */
  withDate: PropTypes.bool,
  /** with title */
  withTitle: PropTypes.bool,
  /** title */
  title: PropTypes.string,
  /** back to */
  backTo: PropTypes.string
}

export default Header
