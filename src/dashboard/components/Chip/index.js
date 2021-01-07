// react
import React from 'react'
import PropTypes from 'prop-types'
// import { useTranslation } from 'react-i18next'
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
 * @param {boolean} disabled (default: false)
 */
const Chip = ({ label, withClose = true, onClose = () => {}, disabled = false }) => {
  // hooks
  // const [t] = useTranslation('global')
  console.log('label', label)

  // ? handle functions
  /**
   * handle large name
   * @param {string} name
   * @param {number} large
   */
  const handleLargeName = (name, large) => name.substr(0, large) + '...'

  return (
    <div className={styles.ChipContainer}>
      <span>{handleLargeName(label.name, 6)}</span>
      <button onClick={() => onClose(label)} disabled={disabled}>
        {withClose && !disabled && <span>
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
  onClose: PropTypes.func,
  /** disabled */
  disabled: PropTypes.bool
}

export default Chip
