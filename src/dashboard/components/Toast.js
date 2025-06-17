// react
import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@mui/styles/makeStyles'
import Alert from '@mui/material/Alert'

// materil-styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}))

// * component
/**
 * Toast component
 * @param {string} type types: error, warning, info, success - (default: success)
 * @param {undefined} children
 * @param {undefined} onClose (default: () => {}))
 */
const Toast = ({ type = 'success', children, onClose = () => {} }) => {
  // ? hooks
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Alert variant="filled" severity={type} onClose={onClose}>
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
