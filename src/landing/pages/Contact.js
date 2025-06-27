import React from 'react'
import { Grid, Box, Typography, styled } from '@mui/material'
import ContactForm from '../components/ContactForm'

// Styled components
const Background = styled(Grid)({
  backgroundColor: '#071215'
})

const ContentBox = styled(Box)({
  textAlign: '-webkit-left',
  width: '100%'
})

const Title = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '2rem',
  width: '100%',
  textAlign: '-webkit-left',
  color: 'white'
})

const Text = styled(Typography)({
  color: 'white',
  fontSize: '1.5rem'
})

const Contact = () => {
  return (
      <Background container>
        <Grid item xs={1}></Grid>
        <Grid item container xs={10}>
          <ContentBox>
            <Grid item xs={12} data-aos="zoom-out-up">
              <Box mt={'12rem'} mb={6}>
                <Title>Send Us a Message</Title>
              </Box>
            </Grid>
            <Grid item xs={12} data-aos="zoom-out-up">
                <Text>Want to learn more about how Sensie can help?</Text>
                <Text>Shoot us a note:</Text>
            </Grid>
            <Grid item xs={12} data-aos="zoom-out-up">
                <ContactForm />
            </Grid>
          </ContentBox>
        </Grid>
        <Grid item xs={1}></Grid>
      </Background>
  )
}

export default Contact
