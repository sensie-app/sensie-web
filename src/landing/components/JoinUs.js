/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles, Grid, Box, Typography } from '@material-ui/core'

const useStyle = makeStyles({
  title: {
    fontWeight: 'bold',
    fontSize: '2.6rem'
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: '2.6rem'
  }
})

const JoinUs = ({ title, text }) => {
  const classes = useStyle()
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={12}>
          <Box color="primary.main">
          <Typography className={classes.title} color='primary'>{title}</Typography>
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

export default JoinUs
