/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react'
import { Box, makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  boxStyle: {
    fontSize: 50,
    color: 'white',
    textAlign: '-webkit-center',
    fontWeight: 'bold'
  }
})

const WebAndMobileTitle = ({
  title,
  textWithColor,
  textWithoutColor,
  textWithoutColor2
}) => {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
      <Box mx={4} mt={1} mb={10} className={classes.boxStyle} alignSelf="center">
        {textWithoutColor}
        <span style={{ color: '#15E7BC' }}> {textWithColor} </span>{' '}
        {textWithoutColor2}{' '}
      </Box>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  )
}

export default WebAndMobileTitle
