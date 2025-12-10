// react
import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@mui/styles/makeStyles'
import Pagination from '@mui/material/Pagination'
// styles
import styles from './styles.module.scss'

// material-ui styles
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2)
    }
  }
}))

// * component
/**
 * PaginationMUI component
 * @param {number} count
 * @param {undefined} onChange function()
 * @param {number} defaultPage
 */
const PaginationMUI = ({ count, onChange, defaultPage }) => {
  // ? hooks
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Pagination className={styles.test} defaultPage={defaultPage} count={count} onChange={onChange} variant="outlined" shape="rounded" />
    </div>
  )
}

// prop-types
PaginationMUI.propTypes = {
  /** count */
  count: PropTypes.number,
  /** onChange */
  onChange: PropTypes.func,
  /** defaultPage */
  defaultPage: PropTypes.number
}

export default PaginationMUI
