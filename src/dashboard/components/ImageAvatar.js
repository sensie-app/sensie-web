// react
import React from 'react'
import PropTypes from 'prop-types'
// material-ui
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

// * component
/**
 * ImageAvatar component
 * @component
 * @param {string} url
 * @param {string} alt
 * @param {string} size (small | medium | large | xlarge)
 */
const ImageAvatar = ({ url, alt, size = 'medium' }) => {
  // hooks
  const classes = useStyles()

  // ? handle functions
  /**
   * @param {string} size  size of the avatar (string)
   * @return {string} size value (small, medium, large, xlarge)
   */
  const handleSizeAvatar = size => {
    switch (size) {
      case 'small': return classes.small
      case 'medium': return classes.medium
      case 'large': return classes.large
      case 'xlarge': return classes.xlarge
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
  /** Image url */
  url: PropTypes.string.isRequired,
  /** Image alt prop */
  alt: PropTypes.string,
  /** Image size [small, medium, large] */
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
  medium: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  xlarge: {
    width: theme.spacing(18),
    height: theme.spacing(18)
  }
}))

export default ImageAvatar
