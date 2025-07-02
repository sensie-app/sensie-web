import React from 'react'
import LogoSensie from '../assets/img/Sensie_Logo.svg'
import { Box } from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    width: '9rem',
    marginBottom: '1rem'
  }
})

const Logo = () => {
  const classes = useStyles()
  return (
    <Box>
      <img className={classes.root} src={LogoSensie} />
    </Box>
  )
}

export default Logo
