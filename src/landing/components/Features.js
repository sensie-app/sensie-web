/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles, Grid, Box, Typography } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
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
      <Grid item container xs={1} justify='center'>
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
