/* eslint-disable react/prop-types */
import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    fontSize: 30
  },
  titleStyle: {
    fontWeight: 500
  },
  subtitleStyle: {
    fontWeight: 500,
    color: '#FFFFFF'
  },
  textStyle: {
    fontWeight: 200,
    color: 'white'
  }

})

const Users = ({ title, subtitle, text }) => {
  const classes = useStyles()
  return (
    <Box>
      <Box className={classes.titleStyle} color="primary.main">
        {title}
      </Box>
      <Box mt={1}>
        <Typography className={classes.subtitleStyle}>{subtitle}</Typography>
      </Box>
      <Box className={classes.textStyle}>{text}</Box>
    </Box>
  )
}

export default Users
