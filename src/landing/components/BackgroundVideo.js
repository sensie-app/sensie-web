import React from 'react'
import videoWebAndMobile from '../assets/video/Sensie.mp4'

const BackgroundVideo = () => {
  return (
      <div id="videosensie">
        <video
          width="100%"
          height="100%"
          autoPlay
          muted
        src={videoWebAndMobile}
        >
          <source src={videoWebAndMobile} type="video/mp4" />
        </video>
      </div>
  )
}

export default BackgroundVideo
