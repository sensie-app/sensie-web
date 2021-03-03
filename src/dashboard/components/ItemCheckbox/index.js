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
 * @param {undefined} children
 * @param {boolean} onClick
 * @param {boolean} check
 */
const ItemCheckbox = ({ defaultValue = false, children, onClick, onChange, check, value }) => {
  // ? hooks
  const [_check, setCheck] = useState(defaultValue)

  const ch = (e) => {
    setCheck(!_check)
    onChange && onChange(e)
  }

  return (
    <div className={styles.ItemCheckboxContainer}>
      <Checkbox
        checked={check || _check}
        className={styles.ItemCheckboxCheck}
        // onChange={() => setCheck(!_check)}
        onChange={ ch }
        onClick={() => onClick(_check)}
        value={value}
        />
      <div className={styles.ItemCheckboxTitle}>{children}</div>
    </div>
  )
}

// prop-types
ItemCheckbox.propTypes = {
  /** title */
  children: PropTypes.element,
  /** defaultValue */
  defaultValue: PropTypes.bool.isRequired,
  /** check */
  check: PropTypes.bool,
  /** value */
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default ItemCheckbox
