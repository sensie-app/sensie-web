/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles, Grid, Box, Typography } from '@material-ui/core'
import Quotes from '../assets/img/Quotes.svg'

const useStyle = makeStyles({

  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: '1.7rem'
  },
  feel: {
    color: 'white',
    alignSelf: 'center',
    fontSize: '1.7rem',
    fontStyle: 'italic'
  },
  title: {
    fontSize: '1.7rem'
  }
})

const Manifesto = ({ title, text, feel, feel2 }) => {
  const classes = useStyle()
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={12}>
          <Box color="primary.main">
            <Typography className={classes.title} color="primary">
              {title}
            </Typography>
          </Box>
        </Grid>
      </Grid>{' '}
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <Box mt={2} style={{ textAlign: 'justify' }}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid xs={12} item className={classes.quotesStyle}>
        <Box mt={6} className={classes.imgStyle}>
          <img src={Quotes} />
        </Box>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={0} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Box mt={3}>
            <Typography className={classes.feel}>
              {feel}<br/>{feel2}
              <span className={classes.title} style={{ color: '#15E7BC' }}>feel</span>.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={0} sm={2}></Grid>
      </Grid>
    </Grid>
  )
}

export default Manifesto
