/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
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
  const animationContainer = React.createRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
      loop: true,
      autoplay: false
    })
  }, [])
  return <div ref={animationContainer} className={classes.root}></div>
}

export default VideoLottie
