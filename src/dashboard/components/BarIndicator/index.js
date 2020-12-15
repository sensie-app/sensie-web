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
const BarIndicator = ({ value, title }) => {
  // handle functions
  const handleValue = () => value.toString() + '%'

  const handleColor = () => {
    return value > 75
      ? actionColor1
      : value < 50
        ? actionColor2
        : actionColor3
  }

  const handleValue0 = (ifTrue, ifFalse) => value === 0 ? ifTrue : ifFalse

  return (
    <section className={styles.BarIndicatorContainer}>
      <span className={styles.BarIndicatorText}>{title}</span>
      <div className={styles.BarIndicatorChartContainer}>
        <div
          className={styles.BarIndicatorChart}
          style={{
            backgroundColor: handleValue0('red', handleColor()),
            width: handleValue0('1%', handleValue())
          }}
        />
        <span className={styles.BarIndicatorChartText}>{handleValue0('0%', handleValue())}</span>
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
