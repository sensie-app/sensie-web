/* eslint-disable react/prop-types */
import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  boxStyle: {
    fontWeight: 'bold',
    fontSize: '3.1rem',
    color: 'white',
    textAlign: '-webkit-center'
  },
  wisdomStyle: {
    fontWeight: 'bold',
    fontSize: '3.1rem',
    textAlign: '-webkit-center'
  }
})

const Phrases = ({ textWithoutColor, textWithColor }) => {
  const classes = useStyles()
  return (
    <Box m={4} mt={12} className={classes.boxStyle} alignSelf="center">
      {textWithoutColor}
      <Box className={classes.wisdomStyle} color="primary.main">
        {textWithColor}
      </Box>
    </Box>
  )
}

export default Phrases
