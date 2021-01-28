import React from 'react'
import LogoSensie from '../assets/img/Sensie_Logo.svg'
import { makeStyles, Box } from '@material-ui/core'

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
