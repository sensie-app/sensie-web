/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const ImageAvatar = ({ url, size }) => {
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
      <Avatar alt="Remy Sharp" src={url} className={handleSizeAvatar(size)} />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  small: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  medium: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}))

export default ImageAvatar
