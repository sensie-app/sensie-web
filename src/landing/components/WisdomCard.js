/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: 160
  },
  level: {
    fontSize: 11,
    fontWeight: '400',
    textTransform: 'uppercase',
    textAlign: '-webkit-center'
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: '-webkit-center'
  },
  box: {
    alignSelf: 'center'
  }
})

const WisdomCard = ({ ImageW, level, text, width, height }) => {
  const classes = useStyles()

  return (
      <Box className={classes.root}>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Box textAlign="-webkit-center">
              <img style={{ width: width, height: height }} src={ImageW} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.level} color="primary.main">
              {level}
            </Box>
            <Box mt={0.5} className={classes.text}>
              {text}
            </Box>
          </Grid>
        </Grid>
      </Box>
  )
}

export default WisdomCard
