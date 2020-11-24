import React, { useEffect} from 'react'
import { Button } from 'semantic-ui-react'

function Modal_video_local(props) {
  const playVideo = () => {
    const videoEl = document.getElementsByClassName("video-element")[0]
    videoEl.play()
  }

  useEffect(()=>{playVideo()}, [])
  return (
    <center>
    <div onClick={null} >


    <video className="video-element">
    <source src={props.videoId}></source>
    </video>

    </div>
    </center>
  )
}
export default Modal_video_local;
