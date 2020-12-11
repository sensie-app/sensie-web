import React from 'react'
import trazado from '../assets/img/Trazado.svg'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '520px',
    height: '588px',
    marginLeft: '40px'
  }
})

const Trazado = () => {
  const classes = useStyles()
  return <img className={classes.root} src={trazado} alt="" />
}

export default Trazado
