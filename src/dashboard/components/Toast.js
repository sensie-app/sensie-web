// react
import React from 'react'
import PropTypes from 'prop-types'
import Alert from '@mui/material/Alert'

// * component
/**
 * Toast component
 * @param {string} type types: error, warning, info, success - (default: success)
 * @param {undefined} children
 * @param {undefined} onClose (default: () => {}))
 */
const Toast = ({ type = 'success', children, onClose = () => {} }) => {
  return (
    <div
      style={{ width: '100%' }}
    >
      <Alert
        variant="filled"
        severity={type}
        onClose={onClose}
        sx={{ mt: 2 }}
      >
        {children}
      </Alert>
    </div>
  )
}

// prop-types
Toast.propTypes = {
  /** type */
  type: PropTypes.string,
  /** children */
  children: PropTypes.element.isRequired,
  /** onCLose */
  onClose: PropTypes.func
}

export default Toast
