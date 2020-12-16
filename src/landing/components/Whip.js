/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles, Box, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  boxStyle: {
    fontWeight: 'bold',
    fontSize: '30px',
    color: 'white'
  }
})

const Whip = ({ textWithoutColor, textWithColor, textWithoutColor2 }) => {
  const classes = useStyles()
  return (
    <Grid container>
      <Box className={classes.boxStyle}>
        {' '}
        {textWithoutColor}{' '}
        <span style={{ color: '#15E7BC' }}> {textWithColor} </span>{' '}
        {textWithoutColor2}{' '}
      </Box>{' '}
    </Grid>
  )
}

export default Whip
