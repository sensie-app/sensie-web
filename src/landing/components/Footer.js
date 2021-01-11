import React from 'react'
import {
  makeStyles,
  Grid,
  Box,
  Typography,
  Button
} from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import Email from './Email'

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
        <Grid item xs={2} sm={4}></Grid>
        <Grid
          item
          container
          xs={8} sm={4}
          direction="column"
          className={classes.textTab}
        >
          <Box my={1} mt={6}>
            SUSCRIBE TO NEWSLETTER
          </Box>

          <Box mt={2}>
            <Typography>Email</Typography>
            <Box mt={1}>
              <Email />
            </Box>
            <Box mt={2} mb={6}>
              <Button
                color="primary"
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
          <Grid item xs={4} sm={4}>
            Copyright Sensie. All rights reserved.
          </Grid>
          <Grid item xs={3} sm={4} style={{ textAlign: '-webkit-center' }}>
            Sensie technology is pantented
          </Grid>
          <Grid item xs={5} sm={4} container justify="flex-end">
            <Box>
              <a
                href="https://www.instagram.com/sensieapp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon fontSize="small" />
              </a>
            </Box>
            <Box ml={4}>
              <a
                href="https://twitter.com/sensie_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon fontSize="small" />
              </a>
            </Box>
            <Box ml={4}>
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
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  )
}

export default Footer
