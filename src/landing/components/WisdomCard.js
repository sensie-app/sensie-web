/* eslint-disable react/prop-types */
import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Grid } from '@mui/material'

const StyledBox = styled(Box)({
  width: '15rem',
  '& .level': {
    fontSize: '1rem',
    fontWeight: '400',
    textTransform: 'uppercase',
    textAlign: '-webkit-center'
  },
  '& .text': {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'white',
    textAlign: '-webkit-center'
  },
  '& .box': {
    alignSelf: 'center'
  }
})

const WisdomCard = ({ ImageW, level, text, width, height }) => {
  return (
    <StyledBox>
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <Box textAlign="-webkit-center">
            <img style={{ width, height }} src={ImageW} alt={text} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className="level" color="primary.main">
            {level}
          </Box>
          <Box mt={0.5} className="text">
            {text}
          </Box>
        </Grid>
      </Grid>
    </StyledBox>
  )
}

export default WisdomCard
