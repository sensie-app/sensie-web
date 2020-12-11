/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles, Grid, Box, Typography } from '@material-ui/core'

const useStyle = makeStyles({
  icon: {
    width: '35px',
    height: '35px'
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: '20px',
    fontWeight: 'lighter'
  }
})

const Features = ({ icon, text }) => {
  const classes = useStyle()
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={12}>
          <Box color="primary.main">
            <img src={icon} className={classes.icon} />
          </Box>
        </Grid>
      </Grid>{' '}
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <Box mt={2}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Features
