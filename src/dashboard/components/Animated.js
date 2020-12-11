/* eslint-disable react/prop-types */
// TODO: REVISAR PROBLEMA CON LA VERSION DE LA LIBRERIA
// ! NO USAR DE MOMENTO

import React, { Fragment } from 'react'
import HeadShake from 'react-reveal/HeadShake'
import Jump from 'react-reveal/Jump'
import Flash from 'react-reveal/Flash'
import Jello from 'react-reveal/Jello'
import Pulse from 'react-reveal/Pulse'
import RubberBand from 'react-reveal/RubberBand'
import Shake from 'react-reveal/Shake'
import Spin from 'react-reveal/Spin'
import Swing from 'react-reveal/Swing'
import Tada from 'react-reveal/Tada'
import Wobble from 'react-reveal/Wobble'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'
import Rotate from 'react-reveal/Rotate'
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'
import Slide from 'react-reveal/Slide'
import Roll from 'react-reveal/Roll'
import LightSpeed from 'react-reveal/LightSpeed'
// constants
import ANIMATIONS from '../constants/animations'

const Animated = ({ children, animation }) => {
  const handleAnimationChildren = () => {
    switch (animation) {
      case ANIMATIONS.HeadShake: return <HeadShake>{children}</HeadShake>
      case ANIMATIONS.Jump: return <Jump>{children}</Jump>
      case ANIMATIONS.Flash: return <Flash>{children}</Flash>
      case ANIMATIONS.Jello: return <Jello>{children}</Jello>
      case ANIMATIONS.Pulse: return <Pulse>{children}</Pulse>
      case ANIMATIONS.RubberBand: return <RubberBand>{children}</RubberBand>
      case ANIMATIONS.Shake: return <Shake>{children}</Shake>
      case ANIMATIONS.Spin: return <Spin>{children}</Spin>
      case ANIMATIONS.Swing: return <Swing>{children}</Swing>
      case ANIMATIONS.Tada: return <Tada>{children}</Tada>
      case ANIMATIONS.Wobble: return <Wobble>{children}</Wobble>
      case ANIMATIONS.Fade: return <Fade>{children}</Fade>
      case ANIMATIONS.Flip: return <Flip>{children}</Flip>
      case ANIMATIONS.Rotate: return <Rotate>{children}</Rotate>
      case ANIMATIONS.Zoom: return <Zoom>{children}</Zoom>
      case ANIMATIONS.Bounce: return <Bounce>{children}</Bounce>
      case ANIMATIONS.Slide: return <Slide>{children}</Slide>
      case ANIMATIONS.Roll: return <Roll>{children}</Roll>
      case ANIMATIONS.LightSpeed: return <LightSpeed>{children}</LightSpeed>
      default: return children
    }
  }
  return (
    <Fragment>
      {handleAnimationChildren()}
    </Fragment>
  )
}

export default Animated
