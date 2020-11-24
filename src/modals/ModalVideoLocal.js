import React, { useEffect} from 'react'
import { Button } from 'semantic-ui-react'

function ModalVideoLocal(props) {
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
export default ModalVideoLocal;
