import React from 'react'
import { makeStyles, Grid, Box, Typography } from '@material-ui/core'
import ContactForm from '../components/ContactForm'

const useStyles = makeStyles({
  background: {
    backgroundColor: '#071215'
  },
  content: {
    textAlign: '-webkit-left',
    width: '100%'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2rem',
    width: '100%',
    textAlign: '-webkit-left',
    color: 'white'
  },
  text: {
    color: 'white',
    fontSize: '1.5rem'
  }
})

const Contact = () => {
  const classes = useStyles()
  return (
      <Grid container className={classes.background}>
        <Grid item xs={1}></Grid>
        <Grid item container xs={10}>
          <Box className={classes.content}>
            <Grid item xs={12} data-aos="zoom-out-up">
              <Box mt={'12rem'} mb={6}>
                <Typography className={classes.title}>Send Us a Message</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} data-aos="zoom-out-up">
                <Typography className={classes.text}>Want to learn more about how Sensie can help?</Typography>
                <Typography className={classes.text}>Shoot us a note:</Typography>
            </Grid>
            <Grid xs={12} data-aos="zoom-out-up">
                <ContactForm />
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
  )
}

export default Contact
