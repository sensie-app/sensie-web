/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import lottie from 'lottie-web'
import animation from '../scripts/lottie/data.json'

const useStyles = makeStyles({
  root: {
    // opacity: '0.1',
    // position: 'absolute',
    width: '100%',
    height: '100vh',
    mixBlendMode: 'lighten'
    // marginTop: ''
    // marginLeft: '-10%'
  }
})

const VideoLottie = () => {
  const classes = useStyles()
  const animationContainer = useRef(null)
  const animInstance = useRef(null)

  useEffect(() => {
    animInstance.current = lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
      loop: true,
      autoplay: false
    })
    return () => {
      if (animInstance.current) {
        animInstance.current.destroy()
      }
    }
  }, [])
  return <div ref={animationContainer} className={classes.root}></div>
}

export default VideoLottie
