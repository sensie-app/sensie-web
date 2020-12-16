// react
import React from 'react'
import PropTypes from 'prop-types'
// component
import Icon from '../Icon'
// constants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { fontColor1 } = COLORS

// * component
/**
 * Chip component
 * @component
 * @param {string} label
 * @param {boolean} withClose
 * @param {undefined} onClose
 */
const Chip = ({ label, withClose = true, onClose = () => {} }) => {
  return (
    <div className={styles.ChipContainer}>
      <span>{label.value}</span>
      <button onClick={() => onClose(label)}>
        {withClose && <span>
          <Icon name="close-outline" size="sm" color={fontColor1} />
        </span>}
      </button>
    </div>
  )
}

// prop-types
Chip.propTypes = {
  /** label */
  label: PropTypes.object.isRequired,
  /** withClose */
  withClose: PropTypes.bool,
  /** onClose action */
  onClose: PropTypes.func
}

export default Chip
