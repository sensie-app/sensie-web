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
const { actionColor1, actionColor2, actionColor3, fontColor1 } = COLORS
const { UP, DOWN, USER, ACTIVITY } = IconChartTypes

// * component
/**
 * IconChart component
 * @component
 * @param {string} title
 * @param {number} value
 * @param {string} valueType (default: 'number')
 * @param {string} icon
 * @param {number} theme theme: (1 | 2) (default: 1)
 * @param {string} forcedColor (default: null)
 */
const IconChart = ({ title, value, valueType = 'number', icon, theme = 1, forcedColor = null }) => {
  // ? handle functions
  /**
   * handle value
   * @return {undefined} value
   */
  const handleValue = () => {
    let _value = value
    if (valueType === 'number') {
      _value = _value.toString()
      const units = _value.length
      if (units > 3 && units <= 6) _value = (_value / 1000).toString() + 'K'
      if (units > 6) _value = (_value / 1000000).toString() + 'M'
    }
    return _value
  }

  // ? render functions
  /**
   * render icon
   * @return  {undefined} Icon (component)
   */
  const renderIcon = () => {
    switch (icon) {
      case UP: return <Icon name="trending-up-outline" size="md" color={forcedColor !== null ? forcedColor : actionColor1}/>
      case DOWN: return <Icon name="trending-down-outline" size="md" color={forcedColor !== null ? forcedColor : actionColor2}/>
      case USER: return <Icon name="person-outline" size="md" color={forcedColor !== null ? forcedColor : actionColor3}/>
      case ACTIVITY: return <Icon name="activity-outline" size="md" color={forcedColor !== null ? forcedColor : actionColor1}/>
      default: return <Icon name="question-mark-circle-outline" size="md" color={forcedColor !== null ? forcedColor : fontColor1}/>
    }
  }
  return (
    <div className={`${styles.IconChartContainer} ${theme === 1 ? styles.IconChartBackground1 : styles.IconChartBackground2}`}>
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
  /** title */
  title: PropTypes.string.isRequired,
  /** value */
  value: PropTypes.string.isRequired,
  /** value type */
  valueType: PropTypes.string,
  /** icon (UP, DOWN, USER, ACTIVITY) */
  icon: PropTypes.string.isRequired,
  /** theme (1, 2) */
  theme: PropTypes.number,
  /** forcedColor */
  forcedColor: PropTypes.string
}

export default IconChart
