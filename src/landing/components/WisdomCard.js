/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  level: {
    fontSize: 14,
    fontWeight: '400',
    textTransform: 'uppercase'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  box: {
    alignSelf: 'center'
  }
})

const WisdomCard = ({ ImageW, level, text, width, height }) => {
  const classes = useStyles()

  return (
      <Box my={3} className={classes.root}>
        <Grid container alignItems="center">
          <Grid item xs={5}>
            <Box textAlign="-webkit-center">
              <img style={{ width: width, height: height }} src={ImageW} />
            </Box>
          </Grid>
          <Grid item xs={7}>
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
