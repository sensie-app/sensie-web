/* eslint-disable react/prop-types */
import React from 'react'
import { Box, makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    fontSize: '16px',
    height: 200
  },
  titleStyle: {
    fontSize: '16px',
    fontWeight: 500
  },
  subtitleStyle: {
    fontSize: '16px',
    fontWeight: 500,
    color: '#FFFFFF'
  },
  textStyle: {
    fontSize: '16px',
    fontWeight: 200,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  indicatorStyle: {
    height: '40px'
  }
})

const Users = ({ title, subtitle, text }) => {
  const classes = useStyles()
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
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
        <div className={classes.indicatorStyle}></div>
      </Grid>
    </Grid>
  )
}

export default Users
