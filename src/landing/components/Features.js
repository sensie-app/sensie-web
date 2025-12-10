/* eslint-disable react/prop-types */
import React from 'react'
import { Grid, Box, Typography, styled } from '@mui/material'

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const StyledText = styled(Typography)({
  color: 'white',
  alignSelf: '-webkit-left',
  fontSize: '1.7rem',
  fontWeight: 'lighter'
})

const Features = ({ text }) => {
  return (
    <Grid container>
      <Grid item container xs={1} justifyContent="center">
        <Box mt={0.5} color="primary.main">
          <FiberManualRecordIcon />
        </Box>
      </Grid>
      <Grid item container xs={11}>
        <Box>
          <StyledText>{text}</StyledText>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Features
