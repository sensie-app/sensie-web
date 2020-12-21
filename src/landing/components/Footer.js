import React from 'react'
import {
  makeStyles,
  Grid,
  Box,
  Typography,
  Button,
  Hidden
} from '@material-ui/core'
import LANDING_ROUTES from '../constants/routes'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import Email from './Email'
import { HashLink as Link } from 'react-router-hash-link'

const { home, membership, howitworks, scienceanchor, abs } = LANDING_ROUTES

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
    backgroundColor: '#000'
  },
  blockTwo: {
    minHeight: '55px',
    backgroundColor: '#0A181C'
  },
  textTab: {
    fontSize: '13px',
    color: 'white',
    fontWeight: 'bold'
  },
  btnSuscribe: {
    borderRadius: 10,
    fontSize: '13px',
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
              container
              item
              xs={8}
              sm={8}
              direction="column"
              className={classes.textTab}
            >
              <Link to={howitworks}>
                <Box my={1} mt={4}>
                  HOW IT WORKS
                </Box>
              </Link>

              <Link to={scienceanchor}>
                <Box my={1}>SCIENCE</Box>
              </Link>

              <Link to={membership}>
                <Box my={1}>MEMBERSHIP</Box>
              </Link>

              <Link to={home}>
                <Box my={1}>BLOG</Box>
              </Link>

              <Link to={abs}>
                <Box my={1} mb={4}>
                  ABOUT SENSIE
                </Box>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid item container direction="column" className={classes.textTab}>
              <Box my={1} mt={4}>
                SUSCRIBE TO NEWLESTTER
              </Box>

              <Box mt={2}>
                <Typography>Email</Typography>
                <Box mt={1}>
                  <Email />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Hidden xsDown>
              <Box my={14}></Box>
            </Hidden>
            <Box mt={2} ml={2}>
              <Button
                color="primary"
                variant="outlined"
                className={classes.btnSuscribe}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
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
          <Grid item xs={4}>
            Copyright Sensie. All rights reserved.
          </Grid>
          <Grid item xs={4} style={{ textAlign: '-webkit-center' }}>
            Sensie technology is pantented
          </Grid>
          <Grid item xs={4} container justify="flex-end">
            <Box>
              <InstagramIcon fontSize="small" />
            </Box>
            <Box ml={4}>
              <TwitterIcon fontSize="small" />
            </Box>
            <Box ml={4}>
              <FacebookIcon fontSize="small" />
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  )
}

export default Footer
