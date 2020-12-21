// react
import React from 'react'
import PropTypes from 'prop-types'
// components
import Icon from '../Icon'
// constants
import { COLORS } from '../../constants/theme'
// material-ui
import { usePagination } from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core/styles'
// styles
import styles from './styles.module.scss'

// const
const { fontColor1 } = COLORS

// material styles
const useStyles = makeStyles({
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center'
  }
})

// * component
/**
 * Pagination component
 * @param {number} count
 * @param {undefined} onClickValue function
 */
const Pagination = ({ count, onClickValue }) => {
  // hooks
  const classes = useStyles()
  const { items } = usePagination({
    count
  })

  // ? handle functions
  /**
   * handle types
   * @param {string} type
   * @returns {undefined} Icon component
   */
  const handleTypes = type => {
    if (type === 'next') return <Icon color={fontColor1} name="arrow-ios-forward-outline" />
    if (type === 'previous') return <Icon color={fontColor1} name="arrow-ios-back-outline" />
  }

  return (
    <nav className={styles.PaginationContainer}>
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…'
          } else if (type === 'page') {
            children = (
              <button onClick={selected && onClickValue(page)} className={selected ? styles.PaginationButtonSelected : styles.PaginationButton} type="button" {...item}>
                {page}
              </button>
            )
          } else {
            children = (
              <button onClick={selected && onClickValue(page)} className={styles.PaginationButtonArrow} type="button" {...item}>
                {handleTypes(type)}
              </button>
            )
          }

          return <li key={index}>{children}</li>
        })}
      </ul>
    </nav>
  )
}

// prop-types
Pagination.propTypes = {
  /** count */
  count: PropTypes.number.isRequired,
  /** onClickValue */
  onClickValue: PropTypes.func.isRequired
}

export default Pagination
