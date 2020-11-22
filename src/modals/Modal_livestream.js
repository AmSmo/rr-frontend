import React from 'react'
import { Modal } from 'semantic-ui-react'
import ReactLivestream from 'react-livestream'
function Modal_livestream(props) {

  return (
      <Modal.Content onClick={()=> props.setOpen(false) }>
          <center>
          <ReactLivestream
  platform="youtube"
  youtubeApiKey={'API_KEY_HERE'}
  youtubeChannelId="UCwMTu04flyFwBnLF0-_5H-w"
/>
          </center>
    </Modal.Content>
  )
}

export default Modal_livestream
