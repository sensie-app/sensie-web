/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  boxStyle: {
    fontSize: 50,
    color: 'white',
    textAlign: '-webkit-center',
    fontWeight: 'bold'
  }
})

const HowItWorks = ({
  title,
  textWithColor,
  textWithoutColor,
  textWithoutColor2
}) => {
  const classes = useStyles()
  return (
    <div>
      <Box mx={4} mt={1} className={classes.boxStyle} alignSelf="center">
        {textWithoutColor}

          <span style={{ color: '#15E7BC' }}> {textWithColor} </span>{' '}
          {textWithoutColor2}{' '}

      </Box>
    </div>
  )
}

export default HowItWorks
