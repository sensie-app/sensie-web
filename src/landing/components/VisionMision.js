/* eslint-disable react/prop-types */
import React from 'react'
import { Grid, Box } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles({
  title: {
    fontSize: '2rem'
  },
  text: {
    fontSize: '1.9rem',
    fontStyle: 'italic',
    color: 'white'
  }
})

const VisionMision = ({ title, text }) => {
  const classes = useStyles()
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Box className={classes.title} mt={4} color="primary.main">
          {title}
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box className={classes.text} mt={2}>{text}</Box>
      </Grid>
    </Grid>
  )
}

export default VisionMision
