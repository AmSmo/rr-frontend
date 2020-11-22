import React from 'react'
import { Modal } from 'semantic-ui-react'
import YouTube from 'react-youtube'
function Modal_video(props) {

  return (
      <Modal.Content onClick={()=> props.setOpen(false) }>
          <center>
      <YouTube
              videoId={props.videoId}
              //videoId={'7EpSBDPlZn4'}

              opts={{playerVars: {autoplay: 1}}}
              />
          </center>
    </Modal.Content>
  )
}

export default Modal_video
