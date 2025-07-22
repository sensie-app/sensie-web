/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
import React from 'react'
import { Box, Avatar, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  '& > *': {
    margin: theme.spacing(1)
  },
  textAlign: '-webkit-center'
}))

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(25),
  height: theme.spacing(25)
}))

const StyledName = styled(Box)({
  fontSize: '1.7rem',
  fontWeight: 'bold',
  color: 'white'
})

const StyledRole = styled(Box)({
  fontSize: '1.4rem',
  color: 'white'
})

const StyledIcon = styled(Box)({
  color: 'white'
})

const Member = ({ avatar, name, role, urlLinkedin }) => {
  return (
    <StyledBox>
      <Grid container direction="column">
        <Grid item xs={12}>
          <StyledAvatar alt={name} src={avatar} />
        </Grid>
        <Grid item xs={12}>
          <StyledName mt={2}>
            {name}
          </StyledName>
        </Grid>
        {role && (
          <Grid item xs={12}>
            <StyledRole mt={1}>
              {role}
            </StyledRole>
          </Grid>
        )}
        <Grid item container justifyContent="center">
          <Grid item xs={12}>
            <StyledIcon mt={2}>
              <a href={urlLinkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize="small" />
              </a>
            </StyledIcon>
          </Grid>
        </Grid>
      </Grid>
    </StyledBox>
  )
}

export default Member
