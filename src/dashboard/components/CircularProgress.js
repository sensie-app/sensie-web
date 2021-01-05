// react
import React from 'react'
import PropTypes from 'prop-types'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

// * component
/**
 * CircularIndeterminate component
 * @param {string} color (default: 'white')
 * @param {number} size (default: 20)
 */
const CircularIndeterminate = ({ color = 'white', size = 20 }) => {
  // material-ui-styles
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: 5,
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2)
      }
    },
    button: {
      color: color
    }
  }))

  // hooks
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.button} size={size} />
    </div>
  )
}

// prop-types
CircularIndeterminate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}

export default CircularIndeterminate
