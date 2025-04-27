import React from 'react'
import videoSchort from "../assets/videoNba.mp4"
const VideoComponent = () => {
  return (
    <div>
      <video alt="Video" src={videoSchort} />
    </div>
  )
}

export default VideoComponent