/* eslint-disable react/prop-types */
import React from 'react'
import { Box, makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    fontSize: 16,
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
    color: '#FFFFFF',
    textAlign: 'center'
  }

})

const Users = ({ title, subtitle, text }) => {
  const classes = useStyles()
  return (
    <Grid container direction='column'>
        <Box className={classes.root}>
          <Grid item xs={12}>
            <Box className={classes.titleStyle} color="primary.main">
              {title}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mt={1.5}>
              <Box className={classes.subtitleStyle}>{subtitle}</Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mt={0.5} className={classes.textStyle}>
              {text}
            </Box>
          </Grid>
        </Box>
    </Grid>
  )
}

export default Users
