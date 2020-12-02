/* eslint-disable react/prop-types */
// react
import React from 'react'
// components
import Icon from '../Icon'
// constants
import { COLORS } from '../../constants/theme'
import { ArrowChartTypes } from '../../constants/charts'
// styles
import styles from './styles.module.scss'

const { actionColor1, actionColor2, actionColor3, fontColor1 } = COLORS
const { UP, DOWN, USER } = ArrowChartTypes

// icon: up | down | user
const ArrowChart = ({ title, value, valueType = 'number', icon }) => {
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
      case DOWN: return <Icon name="trending-down-outline" size="md" color={actionColor2}/>
      case USER: return <Icon name="person-outline" size="md" color={actionColor3}/>
      default: return <Icon name="question-mark-circle-outline" size="md" color={fontColor1}/>
    }
  }
  return (
    <div className={styles.ArrowChartContainer}>
      <span>{title}</span>
      <div>
        <span>{handleValue()}{valueType === '%' && valueType}</span>
        {renderIcon()}
      </div>
    </div>
  )
}

export default ArrowChart
