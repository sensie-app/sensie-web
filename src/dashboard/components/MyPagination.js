// react
import React from 'react'
import PropTypes from 'prop-types'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

// material-styles
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2)
    }
  }
}))

// * component
/**
 * Pagination component
 * @component
 * @param {number} count
 */
const MyPagination = ({ count }) => {
  // hooks
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Pagination count={count} variant="outlined" shape="rounded" />
    </div>
  )
}

// prop-tpes
MyPagination.propTypes = {
  /** count */
  count: PropTypes.number.isRequired
}

export default MyPagination
