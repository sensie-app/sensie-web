import React from 'react'
import { styled } from '@mui/material'

const StyledForm = styled('form')({
  width: '100%'
})

const StyledInput = styled('input')({
  backgroundColor: '#151E1F',
  borderRadius: '10px',
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

const Email = () => {
  return (
    <StyledForm
      id="mc-embedded-subscribe-form"
      action="https://Sensieapp.us14.list-manage.com/subscribe/post?u=1d3a330059900e75b4cbd38d4&ampid=292a1f4049"
      method="post"
      noValidate
      autoComplete="off"
    >
      <StyledInput
        type="email"
        name="MERGE0"
        required
      />
    </StyledForm>
  )
}

export default Email
