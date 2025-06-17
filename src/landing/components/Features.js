/* eslint-disable react/prop-types */
import React from 'react'
import { Grid, Box, Typography } from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
const useStyle = makeStyles({
  icon: {
    fontSize: '0.7rem'
  },
  text: {
    color: 'white',
    alignSelf: '-webkit-left',
    fontSize: '1.7rem',
    fontWeight: 'lighter'
  }
})

const Features = ({ text }) => {
  const classes = useStyle()
  return (
    <Grid container>
      <Grid item container xs={1} justifyContent='center'>
        <Box mt={0.5} color="primary.main">
          <FiberManualRecordIcon className={classes.icon} />
        </Box>
      </Grid>
      <Grid item container xs={11}>
        <Box>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Features
