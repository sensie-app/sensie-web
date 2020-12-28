import React from 'react'
import videoWebAndMobile from '../assets/video/Sensie.mp4'
// import VideoLottie from './VideoLottie'

const BackgroundVideo = () => {
  return (
      <div id="videosensie">
        {/* <VideoLottie /> */}
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
