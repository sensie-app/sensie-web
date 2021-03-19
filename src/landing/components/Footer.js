import React from 'react'
import {
  makeStyles,
  Grid,
  Box,
  Typography,
  Button,
  Hidden
} from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import { NavLink } from 'react-router-dom'

import LANDING_ROUTES from '../constants/routes'

import Email from './Email'

const { privacy, terms } = LANDING_ROUTES

const useStyles = makeStyles({
  footerText: {
    fontSize: '1rem',
    color: 'white',
    fontWeight: 'lighter'
  },
  blockOne: {
    backgroundColor: '#000',
    minHeight: '20rem'
  },
  blockTwo: {
    minHeight: '5rem',
    backgroundColor: '#0A181C'
  },
  textTab: {
    color: 'white',
    fontWeight: 'bold'
  },
  btnSuscribe: {
    borderRadius: '0.8rem',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  }
})

const Footer = () => {
  const classes = useStyles()
  return (
    <div>
      <Grid container className={classes.blockOne}>
        <Grid item xs={2} sm={4}></Grid>
        <Grid
          item
          container
          xs={8}
          sm={4}
          direction="column"
          className={classes.textTab}
        >
          <Box my={1} mt={'5rem'} style={{ fontSize: '1.3rem' }}>
            SUSCRIBE TO NEWSLETTER
          </Box>

          <Box mt={2}>
            <Typography style={{ fontSize: '1.3rem' }}>Email</Typography>
            <Box mt={1}>
              <Email />
            </Box>
            <Box mt={2} mb={6}>
              <Button
                color="primary"
                type="submit"
                form="mc-embedded-subscribe-form"
                variant="outlined"
                className={classes.btnSuscribe}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2} sm={4}></Grid>
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
          {' '}
          <Hidden xsDown>
            <Grid item xs={2} sm={2}>
              <NavLink to={privacy}>
                <Box xs={1}>Privacy Policy</Box>
              </NavLink>
              <NavLink to={terms}>
                <Box xs={1}>Terms of Use</Box>
              </NavLink>
            </Grid>
            <Grid item xs={3} sm={4}>
              Copyright Sensie. All rights reserved.
            </Grid>
            <Grid item xs={3} sm={3} style={{ textAlign: '-webkit-center' }}>
              Sensie technology is patented
            </Grid>
            <Grid item xs={5} sm={3} container justify="flex-end">
              <Box>
                <a
                  href="https://www.instagram.com/sensieapp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon fontSize="small" />
                </a>
              </Box>
              <Box ml={3}>
                <a
                  href="https://twitter.com/sensie_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon fontSize="small" />
                </a>
              </Box>
              <Box ml={3}>
                <a
                  href="https://www.facebook.com/sensieapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon fontSize="small" />
                </a>
              </Box>
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid container direction="row">
            <Grid item xs={4} style={{ textAlign: 'center' }}>
                <NavLink to={privacy}>
                  <Box mt={2}>Privacy Policy</Box>
                </NavLink>
                <NavLink to={terms}>
                  <Box mt={2}>Terms of Use</Box>
                </NavLink>
              </Grid>
              <Grid item xs={5} style={{ textAlign: 'center' }}>
                <Box mt={2}>Copyright Sensie. All rights reserved.</Box>
              </Grid>
              <Grid item xs={5} style={{ textAlign: 'center' }}>
                <Box mt={2}>Sensie technology is patented</Box>
              </Grid>
              <Grid
                item
                container
                xs={10}
                direction="row"
                style={{ justifyContent: 'space-evenly' }}
              >
                <Box my={2}>
                  <a
                    href="https://www.instagram.com/sensieapp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon fontSize="small" />
                  </a>
                </Box>
                <Box my={2}>
                  <a
                    href="https://twitter.com/sensie_app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon fontSize="small" />
                  </a>
                </Box>
                <Box my={2}>
                  <a
                    href="https://www.facebook.com/sensieapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon fontSize="small" />
                  </a>
                </Box>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  )
}

export default Footer
