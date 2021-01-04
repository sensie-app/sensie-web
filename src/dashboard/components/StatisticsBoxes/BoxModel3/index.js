// react
import React from 'react'
import PropTypes from 'prop-types'
// constants
import { COLORS } from '../../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { actionColor1, actionColor2, grayColor3 } = COLORS

// * component
/**
 * StatisticsBoxes/BoxModel3 component
 * @component
 * @param {number} value
 * @param {number} value2
 * @param {string} title
 * @param {string} text
 */
const BoxModel3 = ({ value, value2, title, text }) => {
  // ? handle functions
  /**
   * handle color
   * @returns {string} return actionColor1, actionColor2, grayColor3
   */
  const handleColor = () => {
    return value > value2
      ? actionColor1
      : value < value2
        ? actionColor2
        : grayColor3
  }

  return (
    <div className={styles.BoxModel3Container}>
      <div className={styles.BoxModel3ValueContainer}>
        <span style={{ color: handleColor() }}>{value}</span>
      </div>
      <div className={styles.BoxModel3InfoContainer}>
        <div className={styles.BoxModelInfoTitle}>
          <span>{title}</span>
        </div>
        <div className={styles.BoxModel3InfoText}>
          <span>{value2} {text}</span>
        </div>
      </div>
    </div>
  )
}

// prop-types
BoxModel3.propTypes = {
  /** value */
  value: PropTypes.number.isRequired,
  /** value2 */
  value2: PropTypes.number.isRequired,
  /** title */
  title: PropTypes.string.isRequired,
  /** text */
  text: PropTypes.string.isRequired
}

export default BoxModel3
