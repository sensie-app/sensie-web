/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: '-webkit-center',
    color: 'white'
  },
  boxStyle: {
    fontWeight: 400,
    fontSize: '20px',
    color: 'white',
    textAlign: '-webkit-center'
  }
})

const AboutUs = ({
  title,
  textWithColor,
  textWithoutColor,
  textWithoutColor2
}) => {
  const classes = useStyles()
  return (
    <div>
      <Box mt={12} className={classes.title} alignSelf="center">
        {title}
      </Box>
      <Box mx={4} mt={1} className={classes.boxStyle} alignSelf="center">
        {textWithoutColor}
        <Box className={classes.boxStyle}>
          <span style={{ color: '#15E7BC' }}> {textWithColor} </span>{' '}
          {textWithoutColor2}{' '}
        </Box>{' '}
      </Box>
    </div>
  )
}

export default AboutUs
