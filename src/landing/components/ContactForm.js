import React from 'react'
import { Box, Typography, Button, styled } from '@mui/material'

// Styled components
const StyledForm = styled('form')({
  fontSize: '1.2rem',
  color: '#FFFFFF',
  fontWeight: 'bold'
})

const StyledInput = styled('input')({
  backgroundColor: '#151E1F',
  borderRadius: '0.9rem',
  border: 'none',
  color: '#fff',
  fontSize: '1rem',
  padding: '14px',
  width: '100%',
  marginTop: '8px',
  marginBottom: '8px',
  boxSizing: 'border-box',
  outline: 'none',
  transition: 'border 0.2s',
  '&:focus': {
    border: '2px solid #15E7BC'
  },
  '::placeholder': {
    color: '#aaa',
    opacity: 1
  }
})

const StyledTextarea = styled('textarea')({
  backgroundColor: '#151E1F',
  borderRadius: '0.9rem',
  border: 'none',
  color: '#fff',
  fontSize: '1rem',
  padding: '14px',
  width: '100%',
  minHeight: '80px',
  marginTop: '8px',
  marginBottom: '8px',
  boxSizing: 'border-box',
  outline: 'none',
  resize: 'vertical',
  transition: 'border 0.2s',
  '&:focus': {
    border: '2px solid #15E7BC'
  },
  '::placeholder': {
    color: '#aaa',
    opacity: 1
  }
})

const StyledButton = styled(Button)({
  borderRadius: '0.8rem',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  width: '16rem'
})

const FormFooter = () => {
  return (
    <StyledForm
      action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSc3uiuw-EFUw891nzMPPiQPLeq25lWC0zc4S10PCvj7z8yUNw/formResponse"
      method="POST"
      noValidate
      autoComplete="off"
    >
      <Box my={5}>
        <Box mt={1}>
          <Typography style={{ fontSize: '1.3rem' }}>
            First and last name
          </Typography>
          <StyledInput
            type="text"
            name="entry.2005620554"
            required
          />
        </Box>
        <Box mt={1}>
          <Typography style={{ fontSize: '1.3rem' }}>Email</Typography>
          <StyledInput
            type="email"
            name="entry.1045781291"
            required
          />
        </Box>
        <Box mt={1}>
          <Typography style={{ fontSize: '1.3rem' }}>Message</Typography>
          <StyledTextarea
            name="entry.1641793364"
            required
          />
        </Box>
        <Box mt={2} style={{ textAlign: 'right' }}>
          <StyledButton
            color="primary"
            variant="outlined"
            type="submit"
          >
            Send
          </StyledButton>
        </Box>
      </Box>
    </StyledForm>
  )
}

export default FormFooter
