/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './VerticalCarousel.scss'

import { Box } from '@material-ui/core'
import Users from '../Users'

const Carousel = require('react-responsive-carousel').Carousel

const VerticalCarousel = () => {
  return (
    <Box mt={6} mx={4}>
      <Carousel
        showStatus={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        axis="vertical"
        interval='7000'
      >
        <div>
          <Users
            title="Individual / Team Member"
            subtitle="Stress impairs your ability to make good decisions."
            text="Take a step back, use Sensie to give yourself space to think through options, find focus and get in the zone."
          />
        </div>
        <div>
          <Users
            title="Coach"
            subtitle="Overview your clients/team performance and measure engagement around your therapies, practices or training sessions."
            text="Enable them to take the right call in every aspect of their performance."
          />
        </div>
        <div>
          <Users
            title="Corporation"
            subtitle="Assess many teams or groups within your organization."
            text="Improve happiness and relieve over people to help them find their best-selves with Sensie."
          />
        </div>
      </Carousel>
    </Box>
  )
}

export default VerticalCarousel
