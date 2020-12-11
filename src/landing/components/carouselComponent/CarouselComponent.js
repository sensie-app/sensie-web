import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './CarouselComponent.scss'

import Citation from '../Citation'

import { Box } from '@material-ui/core'

const Carousel = require('react-responsive-carousel').Carousel

const CarouselComponent = () => {
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
          <Citation />
        </div>
        <div>
          <Citation />
        </div>
        <div>
          <Citation />
        </div>
        <div>
          <Citation />
        </div>
      </Carousel>
    </Box>
  )
}

export default CarouselComponent
