// react
import React from 'react'
import PropTypes from 'prop-types'
// componet
import Icon from '../../../components/Icon'
import SvgIcon from '../../../components/SvgIcon'
// constants
import { COLORS } from '../../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { actionColor1 } = COLORS

// * component
/**
 * StatisticsBoxes/BoxModel1 component
 * @component
 * @param {string} evaIcon (default: null)
 * @param {string} customIcon (default: null)
 * @param {number} value
 * @param {string} text
 */
const BoxModel1 = ({ evaIcon = null, customIcon = null, value, text }) => {
  return (
    <div className={styles.BoxModel1Container}>
      <div className={styles.BoxModel1IconContainer}>
        {evaIcon !== null && customIcon === null && <Icon name={evaIcon} size="xl" color={actionColor1} />}
        {evaIcon === null && customIcon !== null && <SvgIcon icon={customIcon} size="xl" color={actionColor1} />}
      </div>
      <div className={styles.BoxModel1InfoContainer}>
        <div className={styles.BoxModelInfoValue}>
          <span>{value}</span>
        </div>
        <div className={styles.BoxModel1InfoText}>
          <span>{text}</span>
        </div>
      </div>
    </div>
  )
}

// prop-types
BoxModel1.propTypes = {
  /** evaIcon */
  evaIcon: PropTypes.string,
  /** customIcon */
  customIcon: PropTypes.string,
  /** value */
  value: PropTypes.number.isRequired,
  /** text */
  text: PropTypes.string.isRequired
}

export default BoxModel1
