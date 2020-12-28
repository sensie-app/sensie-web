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
        <Grid item xs={4}></Grid>
        <Grid item container xs={4} direction="column" className={classes.textTab}>
            <Box my={1} mt={4}>
              SUSCRIBE TO NEWLESTTER
            </Box>

            <Box mt={2}>
              <Typography>Email</Typography>
              <Box mt={1}>
                <Email />
              </Box>
              <Box mt={2} mb={4}>
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
        <Grid item xs={4}></Grid>
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
