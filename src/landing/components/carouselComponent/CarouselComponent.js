import React, { useEffect, useRef } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './CarouselComponent.scss'
import KurtBilups from '../../assets/img/KurtBilups.jpg'
import JTGtorfy from '../../assets/img/JTGtorfy.jpg'
import DanaBaruch from '../../assets/img/DanaBaruch.jpg'
import LauraLea from '../../assets/img/LauraLea.jpg'

import Citation from '../Citation'
import { Box } from '@mui/material'

const Carousel = require('react-responsive-carousel').Carousel

const CarouselComponent = () => {
  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      // Marcamos como desmontado al salir del componente
      isMounted.current = false
    }
  }, [])

  return (
    <Box mt={6} mx={4}>
      <Carousel
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
      >
        <div>
          <Citation
            avatar={KurtBilups}
            text="Sensie is a new way to demonstrate to athletes that anxiety has a physical affect on the body."
            name="Kurt Bilups"
            role="CBT Therapist"
          />
        </div>
        <div>
          <Citation
            avatar={JTGtorfy}
            text="Sensie provides feedback to alert you if stress is present in your muscles, but it is the felt experience that really created an impactful change in my awareness."
            name="J.T. Gyorfy"
            role="Tech Beach Co-Founder"
          />
        </div>
        <div>
          <Citation
            avatar={DanaBaruch}
            text="Sensie can help my clients get more clarity on the connection between their thoughts and feelings."
            name="Dana Baruch"
            role="Executive Coach"
          />
        </div>
        <div>
          <Citation
            avatar={LauraLea}
            text="I help people release trapped emotions to heal theirs bodies and minds. Sensie helps me do this more quickly."
            name="Laura Lea"
            role="Yoga Teacher"
          />
        </div>
      </Carousel>
    </Box>
  )
}

export default CarouselComponent
