// react
import React, { useState } from 'react'
import PropTypes from 'prop-types'
// material-ui
import Checkbox from '@material-ui/core/Checkbox'
// styles
import styles from './styles.module.scss'

// * component
/**
 * ItemCheckbox component
 * @component
 * @param {boolean} defaultValue
 * @param {string} title
 * @param {boolean} onClick
 * @param {boolean} check
 */
const ItemCheckbox = ({ defaultValue = false, title, onClick, check }) => {
  // hooks
  const [_check, setCheck] = useState(defaultValue)

  return (
    <div className={styles.ItemCheckboxContainer}>
      <Checkbox
        checked={check || _check}
        className={styles.ItemCheckboxCheck}
        onChange={() => setCheck(!_check)}
        onClick={() => onClick(_check)}
        />
      <span className={styles.ItemCheckboxTitle}>{title}</span>
    </div>
  )
}

// prop-types
ItemCheckbox.propTypes = {
  /** title */
  title: PropTypes.string.isRequired,
  /** defaultValue */
  defaultValue: PropTypes.bool.isRequired,
  /** check */
  check: PropTypes.bool,
  /** value */
  onClick: PropTypes.func.isRequired
}

export default ItemCheckbox
