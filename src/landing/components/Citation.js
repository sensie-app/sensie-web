/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Avatar, makeStyles, Box } from '@material-ui/core'
import Quotes from '../assets/img/Quotes.svg'

const useStyles = makeStyles({
  quotesStyle: {
    textAlign: '-webkit-center'
  },
  imgStyle: {
    width: '3rem',
    height: '2.9rem'
  },
  textStyle: {
    color: 'white',
    margin: 0,
    fontSize: '1.2rem'
  },
  indicatorStyle: {
    height: '10rem'
  },
  avatarStyle: {
    textAlign: '-webkit-right',
    width: '3.5rem',
    height: '3.5rem'
  },
  nameStyle: {
    textAlign: '-webkit-left'
  },
  roleStyle: {
    margin: 0
  }
})

const Citation = ({ avatar, text, name, role }) => {
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
        <Grid xs={10} item>
          <Box mt={3} className={classes.textStyle}>
            {text}
          </Box>
        </Grid>
        <Grid xs={1}></Grid>
        <Grid item xs={6} className={classes.avatarStyle}>
          <Box mr={3} mt={4}>
            <Avatar src={avatar} />
          </Box>
        </Grid>
        <Grid item xs={6} className={classes.nameStyle}>
          <Box mt={4.5}>
            <Box>
              <p className={classes.textStyle}>{name}</p>
            </Box>
            <Box color="primary.main">
              <p className={classes.roleStyle}>{role}</p>
            </Box>
          </Box>
        </Grid>
        <div className={classes.indicatorStyle}></div>
      </Grid>
    </Grid>
  )
}

export default Citation
