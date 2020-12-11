/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: 'auto',
    height: 'auto'
  }
})

const Photos = ({ photo }) => {
  const classes = useStyles()
  return (
            <img className={classes.root} src={photo} />
  )
}

export default Photos
