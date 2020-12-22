// react
import React from 'react'
import PropTypes from 'prop-types'
// material-ui
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
// constants
import { COLORS } from '../../constants/theme'

// const
const { grayColor7, grayColor4 } = COLORS

// material-ui-styles
const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none'
  },
  paper: {
    backgroundColor: grayColor7,
    color: grayColor4,
    padding: theme.spacing(1)
  }
}))

// * component
/**
 * MouseOverPopover component
 * @param {undefined} children
 * @param {string} text
 */
const MouseOverPopover = ({ children, text }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {children}
      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>{text}</Typography>
      </Popover>
    </div>
  )
}

// prop-types
MouseOverPopover.propTypes = {
  /** children */
  children: PropTypes.element.isRequired,
  /** text */
  text: PropTypes.string.isRequired
}

export default MouseOverPopover
