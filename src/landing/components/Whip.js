/* eslint-disable react/prop-types */
import React from 'react'
import { Box, Grid } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles({
  boxStyle: {
    fontWeight: 'bold',
    fontSize: '2.6rem',
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
        <span className={classes.boxStyle} style={{ color: '#15E7BC' }}> {textWithColor} </span>{' '}
        {textWithoutColor2}{' '}
      </Box>{' '}
    </Grid>
  )
}

export default Whip
