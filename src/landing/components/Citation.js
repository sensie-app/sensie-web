import React from 'react'
import { Grid, Avatar, makeStyles, Box } from '@material-ui/core'
import Quotes from '../assets/img/Quotes.svg'

const useStyles = makeStyles({
  quotesStyle: {
    textAlign: '-webkit-center'
  },
  imgStyle: {
    width: '32px',
    height: '28px'
  },
  textStyle: {
    color: 'white',
    margin: 0
  },
  indicatorStyle: {
    height: '140px'
  },
  avatarStyle: {
    textAlign: '-webkit-right'
  },
  nameStyle: {
    textAlign: '-webkit-left'
  },
  profesionStyle: {
    margin: 0
  }
})

const Citation = () => {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item container xs={12}>

      <Grid xs={12} item className={classes.quotesStyle}>
        <Box className={classes.imgStyle}>
          <img src={Quotes} />
        </Box>
      </Grid>
      <Grid xs={1}></Grid>
      <Grid xs={10} item className={classes.textStyle}>
        <Box mt={3}>
        Sensie is a new way to identify stress and a way to demostrate to athletes that anxiety has a physical affect on the body.
        </Box>
      </Grid>
      <Grid xs={1}></Grid>
      <Grid item xs={6} className={classes.avatarStyle}>
        <Box mr={3} mt={4}>
          <Avatar />
        </Box>
      </Grid>
      <Grid item xs={6} className={classes.nameStyle}>
        <Box mt={4.5}>
          <Box>
            <p className={classes.textStyle}>JOHN DOE</p>
          </Box>
          <Box color="primary.main">
            <p className={classes.profesionStyle}>Therapist</p>
          </Box>
        </Box>
      </Grid>
      <div className={classes.indicatorStyle}></div>
      </Grid>
    </Grid>
  )
}

export default Citation
