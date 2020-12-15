// react
import React from 'react'
import PropTypes from 'prop-types'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

// * component
const ImageAvatar = ({ url, alt, size = 'medium' }) => {
  // hooks
  const classes = useStyles()

  // handle functions
  const handleSizeAvatar = size => {
    switch (size) {
      case 'small': return classes.small
      case 'medium': return classes.medium
      case 'large': return classes.medium
      default: return classes.medium
    }
  }

  return (
    <div className={classes.root}>
      <Avatar alt={alt} src={url} className={handleSizeAvatar(size)} />
    </div>
  )
}

// prop-types
ImageAvatar.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string
}

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  medium: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}))

export default ImageAvatar
