// react
import React from 'react'
import PropTypes from 'prop-types'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { actionColor1, actionColor2, actionColor3 } = COLORS

// * component
/**
 * PercentageChart component
 * @component
 * @param {string} title
 * @param {number} value
 */
const PercentageChart = ({ title, value }) => {
  // ? render functions
  /**
   * render value with color
   * @return  {undefined} value (html)
   */
  const renderValue = () => {
    return value > 75
      ? <h4 style={{ color: actionColor1 }}>{value}%</h4>
      : value <= 75 && value > 50
        ? <h4 style={{ color: actionColor3 }}>{value}%</h4>
        : value <= 50 && <h4 style={{ color: actionColor2 }}>{value}%</h4>
  }

  return (
    <div className={styles.PercentageChartContainer}>
      <span>{title}</span>
      {renderValue()}
    </div>
  )
}

// prop-types
PercentageChart.propTypes = {
  /** title */
  title: PropTypes.string.isRequired,
  /** value */
  value: PropTypes.number.isRequired
}

export default PercentageChart
