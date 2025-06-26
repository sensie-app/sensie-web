/* eslint-disable react/prop-types */
import React from 'react'
import { Grid, Box, Typography, styled } from '@mui/material'

import Quotes from '../assets/img/Quotes.svg'

// Styled components usando @emotion/styled
const StyledTypography = styled(Typography)(({ theme }) => ({
  color: 'white',
  alignSelf: 'center',
  fontSize: '1.7rem'
}))

const StyledFeelTypography = styled(Typography)(({ theme }) => ({
  color: 'white',
  alignSelf: 'center',
  fontSize: '1.7rem',
  fontStyle: 'italic'
}))

const StyledTitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: '1.7rem'
}))

const StyledFeelSpan = styled('span')(({ theme }) => ({
  fontSize: '1.7rem',
  color: '#15E7BC'
}))

const Manifesto = ({ title, text, feel, feel2 }) => {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={12}>
          <Box color="primary.main">
            <StyledTitleTypography color="primary">
              {title}
            </StyledTitleTypography>
          </Box>
        </Grid>
      </Grid>{' '}
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <Box mt={2} style={{ textAlign: 'left' }}>
            <StyledTypography>{text}</StyledTypography>
          </Box>
        </Grid>
      </Grid>
      <Grid xs={12} item>
        <Box mt={6}>
          <img src={Quotes} alt="Quotes" />
        </Box>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={0} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Box mt={3}>
            <StyledFeelTypography>
              {feel}<br/>{feel2}
              <StyledFeelSpan>feel</StyledFeelSpan>.
            </StyledFeelTypography>
          </Box>
        </Grid>
        <Grid item xs={0} sm={2}></Grid>
      </Grid>
    </Grid>
  )
}

export default Manifesto
