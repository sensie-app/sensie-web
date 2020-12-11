import React from 'react'
import {
  makeStyles,
  Grid,
  Box
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import LANDING_ROUTES from '../constants/routes'

const { home, science, aboutsensie } = LANDING_ROUTES

const useStyles = makeStyles({
  footerStyle: {
    height: '186px'
  },
  footerText: {
    fontSize: '10px',
    color: 'white',
    fontWeight: 'lighter'
  },
  blockOne: {
    backgroundColor: '#071215'
  },
  blockTwo: {
    minHeight: '55px',
    backgroundColor: '#0A181C'
  },
  textTab: {
    fontSize: '13px',
    color: 'white',
    fontWeight: 'bold'
  }
})

const Footer = () => {
  const classes = useStyles()
  return (
    <div>
      <Grid container className={classes.blockOne}>
        <Grid item xs={1}></Grid>
        <Grid item container xs={10}>
          <Grid item xs={6} style={{ alignSelf: 'center' }}>
          <Grid
                item
                container
                xs={8}
                sm={8}
                direction="column"
                className={ classes.textTab }
              >
                    <NavLink to={home}>
                      <Box my={1} mt={4}>

                       HOW IT WORKS
                      </Box>
                    </NavLink>

                    <NavLink to={science}>
                    <Box my={1}>

                        SCIENCE
                        </Box>

                    </NavLink>

                    <NavLink to={science}>
                    <Box my={1}>

                       MEMBERSHIP
                       </Box>

                    </NavLink>

                    <NavLink to={science}>
                    <Box my={1}>

                        BLOG
                        </Box>

                    </NavLink>

                    <NavLink to={aboutsensie}>
                    <Box my={1} mb={4}>

                        ABOUT SENSIE
                        </Box>

                    </NavLink>
                  </Grid>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <Grid container className={classes.blockTwo}>
        <Grid item xs={1}></Grid>
        <Grid
          item
          container
          xs={10}
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.footerText}
        >
          <Grid item xs={4}>Copyright Sensie. All rights reserved.</Grid>
          <Grid item xs={4} style={{ textAlign: '-webkit-center' }}>Sensie technology is pantented</Grid>
          <Grid item xs={4} style={{ textAlign: '-webkit-right' }}>Logos</Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  )
}

export default Footer
