/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import lottie from 'lottie-web'
import animation from '../scripts/data.json'

const useStyles = makeStyles({
  root: {
    opacity: '0.1',
    position: 'absolute',
    width: '59%',
    marginTop: '-21%',
    marginLeft: '-10%'
  }
})

const Trazado = () => {
  const classes = useStyles()
  const animationContainer = React.createRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation
    })
  }, [])
  return <div ref={animationContainer} className={classes.root}></div>
}

export default Trazado
