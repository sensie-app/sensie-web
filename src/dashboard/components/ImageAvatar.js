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
 * @param {string} size (small | medium | large | xlarge) (default: 'medium')
 */
const ImageAvatar = ({ url, alt, size = 'medium' }) => {
  // ? hooks
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
    width: '5vh',
    height: '5vh'
  },
  medium: {
    width: '7.5vh',
    height: '7.5vh'
  },
  large: {
    width: '15vh',
    height: '15vh'
  },
  xlarge: {
    width: '20vh',
    height: '20vh'
  }
}))

export default ImageAvatar
