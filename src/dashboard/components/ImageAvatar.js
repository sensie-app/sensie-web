/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const ImageAvatar = ({ url, alt, size }) => {
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
