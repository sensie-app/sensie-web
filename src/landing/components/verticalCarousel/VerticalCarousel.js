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
    <Box mx={2}>
      <Carousel
        showStatus={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
        showArrows={false}
        // showIndicators={false}
        interval="7000"
      >
        <div>
          <Users
            title="Individual / Team Member"
            subtitle="Assess your state of mind to gauge game time readiness."
            text="Identify blindspots and performance blockages, clear them, find focus and get in the zone."
          />
        </div>
        <div>
          <Users
            title="Coach"
            subtitle="Provide clients or your team with personalized care 24/7 virtually."
            text="Assess your coaching clients and teams performance state, resilience, and symptoms of health at a glance. Measure engagement around your therapies, practices and training sessions.
            Empower your clients to self heal and make the right call in every aspect of their performance."
          />
        </div>
        <div>
          <Users
            title="Corporation"
            subtitle="Upgrading executive health to optimal wellness translates into success."
            text="Improve employee engagement, productivity, focus and creativity while simultaneously driving down sick time, injury, and absenteeism. Create an engaged corporate culture that cares and fosters deep team connection."
          />
        </div>
      </Carousel>
    </Box>
  )
}

export default VerticalCarousel
