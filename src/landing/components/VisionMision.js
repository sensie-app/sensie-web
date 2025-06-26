/* eslint-disable react/prop-types */
import React from 'react'
import { Grid, Typography, styled } from '@mui/material'

const StyledTitle = styled(Typography)({
  fontSize: '2rem'
})

const StyledText = styled(Typography)({
  fontSize: '1.9rem',
  fontStyle: 'italic',
  color: 'white'
})

const VisionMision = ({ title, text }) => {
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <StyledTitle mt={4} color="primary.main">
          {title}
        </StyledTitle>
      </Grid>
      <Grid item xs={12}>
        <StyledText mt={2}>{text}</StyledText>
      </Grid>
    </Grid>
  )
}

export default VisionMision
