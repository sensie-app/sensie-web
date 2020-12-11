/* eslint-disable react/prop-types */
// react
import React from 'react'
import PropTypes from 'prop-types'
// constants
import { COLORS } from '../../constants/theme'
// style
import styles from './styles.module.scss'

const BarIndicator = ({ value, title }) => {
  // handle functions
  const handleValue = () => value.toString() + '%'
  const handleColor = () => {
    return value > 75
      ? COLORS.actionColor1
      : value < 50
        ? COLORS.actionColor2
        : COLORS.actionColor3
  }

  return (
    <section className={styles.BarIndicatorContainer}>
      <span className={styles.BarIndicatorText}>{title}</span>
      <div className={styles.BarIndicatorChartContainer}>
        <div className={styles.BarIndicatorChart} style={{ backgroundColor: handleColor(), width: handleValue() }} />
        <span className={styles.BarIndicatorChartText}>{handleValue()}</span>
      </div>
    </section>
  )
}

// prop-types
BarIndicator.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default BarIndicator
