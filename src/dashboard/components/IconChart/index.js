/* eslint-disable react/prop-types */
// react
import React from 'react'
import PropTypes from 'prop-types'
// components
import Icon from '../Icon'
// constants
import { COLORS } from '../../constants/theme'
import { IconChartTypes } from '../../constants/charts'
// styles
import styles from './styles.module.scss'

// const
const { actionColor1, fontColor1 } = COLORS
const { UP, DOWN, USER, ACTIVITY } = IconChartTypes

// * component
const IconChart = ({ title, value, valueType = 'number', icon }) => {
  // handle functions
  const handleValue = () => {
    const handleString = (data, limit, letter) => data.substr(0, data.length - limit) + letter

    let _value = value
    if (valueType === 'number') {
      _value = _value.toString()
      const units = _value.length
      if (units > 3 && units <= 6) _value = handleString(_value, 3, 'K')
      if (units > 6) _value = handleString(_value, 6, 'M')
    }
    return _value
  }

  // render functions
  const renderIcon = () => {
    switch (icon) {
      case UP: return <Icon name="trending-up-outline" size="md" color={actionColor1}/>
      case DOWN: return <Icon name="trending-down-outline" size="md" color={actionColor1}/>
      case USER: return <Icon name="person-outline" size="md" color={actionColor1}/>
      case ACTIVITY: return <Icon name="activity-outline" size="md" color={actionColor1}/>
      default: return <Icon name="question-mark-circle-outline" size="md" color={fontColor1}/>
    }
  }
  return (
    <div className={styles.IconChartContainer}>
      <span>{title}</span>
      <div>
        <span>{handleValue()}{valueType === '%' && valueType}</span>
        {renderIcon()}
      </div>
    </div>
  )
}

// prop-types
IconChart.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  valueType: PropTypes.string,
  icon: PropTypes.string.isRequired
}

export default IconChart
