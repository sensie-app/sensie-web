/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import lottie from 'lottie-web'
import animation from '../scripts/data.json'

const useStyles = makeStyles({
  root: {
    height: 1000
  }
})

const Trazado = () => {
  const classes = useStyles()
  const animationContainer = React.createRef()

  useEffect(() => {
    console.log('pase')
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation
    })
  }, [])
  return <div ref={animationContainer} className={classes.root}></div>
}

export default Trazado
