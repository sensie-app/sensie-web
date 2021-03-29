// react
import React from 'react'
import PropTypes from 'prop-types'
// constants
import { COLORS } from '../../constants/theme'
// style
import styles from './styles.module.scss'

// const
const { actionColor1, actionColor2, actionColor3 } = COLORS

// * component
/**
 * AffirmationChart component
 * @component
 * @param {AffirmationChart} data
 * @param {undefined} onClickValue
 * @param {boolean} isActive (default: false)
 * @param {number} value
 */
const AffirmationChart = ({ data, multiUser = true, value, onClickValue = () => {}, isActive = false }) => {
  // ? handle functions
  /**
   * handle value
   * @return {string} value + %
   */
  const handleValue = () => value.toString() + '%'

  /**
   * handle color
   * @return {string} color (actionColor1, actionColor2, actionColor3)
   */
  const handleColor = () => {
    return value > 75
      ? actionColor1
      : value < 50
        ? actionColor2
        : actionColor3
  }

  /**
   * handle value (value = 0)
   * @param {string} ifTrue value = 0
   * @param {string} ifFalse value != 0
   * @return {string}
   */
  const handleValue0 = (ifTrue, ifFalse) => value === 0 ? ifTrue : ifFalse

  return (
    <section className={styles.AffirmationChartContainer}>
      <button onClick={() => onClickValue(data)} className={isActive ? styles.AffirmationChartBtnActive : undefined}>
        <span className={styles.AffirmationChartText}>{data.name}</span>
        <div className={styles.AffirmationChartChartContainer}>
          <div
            className={styles.AffirmationChartChart}
            style={{
              backgroundColor: handleColor(),
              width: handleValue0('0.5%', handleValue())
            }}
          />
          <span className={styles.AffirmationChartChartText}>{handleValue0('0%', handleValue())}</span>
        </div>
        <div style={{ width: '100%' }}>
          <span className={styles.AffirmationChartText} style={{ float: 'right' }}><i>{multiUser && (data._userCount + ' users') } ({data.sensies.items.length} Sensies)</i></span>
        </div>
      </button>
    </section>
  )
}

// prop-types
AffirmationChart.propTypes = {
  /** value */
  data: PropTypes.object.isRequired,
  /** onClickValue */
  onClickValue: PropTypes.func,
  /** multiUser */
  multiUser: PropTypes.bool,
  /** isActive */
  isActive: PropTypes.bool,
  /** value */
  value: PropTypes.number.isRequired
}

export default AffirmationChart
