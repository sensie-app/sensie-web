/* eslint-disable react/prop-types */
import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    fontSize: 20,
    height: 200
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
    color: '#FFFFFF'
  }

})

const Users = ({ title, subtitle, text }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box className={classes.titleStyle} color="primary.main">
        {title}
      </Box>
      <Box mt={1.5}>
        <Box className={classes.subtitleStyle}>{subtitle}</Box>
      </Box>
      <Box mt={0.5} className={classes.textStyle}>{text}</Box>
    </Box>
  )
}

export default Users
