// react
import React from 'react'
import PropTypes from 'prop-types'
// componet
import PieChart from '../../../components/PieChart'
// styles
import styles from './styles.module.scss'

// * component
/**
 * StatisticsBoxes/BoxModel2 component
 * @component
 * @param {Array.undefined} data
 * @param {number} value
 * @param {string} text
 */
const BoxModel2 = ({ data, value, text }) => {
  return (
    <div className={styles.BoxModel2Container}>
      <div className={styles.BoxModel2IconContainer}>
        <PieChart sage={true}/>
      </div>
      <div className={styles.BoxModel2InfoContainer}>
        <div className={styles.BoxModelInfoValue}>
          <span>{value}</span>
        </div>
        <div className={styles.BoxModel2InfoText}>
          <span>{text}</span>
        </div>
      </div>
    </div>
  )
}

// prop-types
BoxModel2.propTypes = {
  /** data */
  data: PropTypes.array,
  /** value */
  value: PropTypes.number.isRequired,
  /** text */
  text: PropTypes.string.isRequired
}

export default BoxModel2
