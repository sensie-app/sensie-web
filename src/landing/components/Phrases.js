/* eslint-disable react/prop-types */
import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  boxStyle: {
    fontWeight: 'bold',
    fontSize: '36px',
    color: 'white',
    textAlign: '-webkit-center'
  },
  wisdomStyle: {
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
