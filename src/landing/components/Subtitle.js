/* eslint-disable react/prop-types */
import React from 'react'
import { Typography, makeStyles, Box } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  subtitle: {
    fontSize: '2.6rem'
  }
}))

const Subtitle = ({ subtitle }) => {
  const classes = useStyle()
  return (
    <Typography className={classes.subtitle} color="primary">
      <Box className={classes.subtitle}>{ subtitle }</Box>
    </Typography>
  )
}

export default Subtitle
