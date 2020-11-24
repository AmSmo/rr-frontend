import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ImageMapper from 'react-image-mapper'
import { Modal } from 'semantic-ui-react'
import ModalVideo from '../modals/ModalVideo'
import ModalVideoLocal from '../modals/ModalVideoLocal'
import ModalAudio from '../modals/ModalAudio'
import ModalLivestream from '../modals/ModalLivestream'

function TrackE1(props){
  const [open, setOpen] = useState(false)
  const [contents, setContents] = useState(null)

  const modalClose = () => {
    setOpen(false)
  }
  const generateModal = (e) =>{
    switch (e.name){
      case "1":
        setOpen(true)
        setContents(<ModalVideo basic size="small" setOpen={modalClose}/>)
      break;
      case "2":
        setOpen(true)
        setContents(<ModalLivestream basic size="small" setOpen={modalClose} />)
      break;
      case "3":
        setOpen(true)
        setContents(<ModalVideo basic size="small" videoId={'7EpSBDPlZn4'} setOpen={modalClose}/>)
      break;
      case "4":
        setOpen(true)
        setContents(<ModalVideo basic size="small" videoId={'jjUjrE19eyw'} setOpen={modalClose}/>)
      break;
      case "5":
        setOpen(true)
        setContents(<ModalAudio basic size="small" setOpen={modalClose} />)
      break;
      case "6":
        setOpen(true)
        setContents(<ModalVideo basic size="small" videoId={'7EpSBDPlZn4'} setOpen={modalClose}/>)
      break;
      default:
      break;
    }
  }

  const map = {name: "map1",
  areas: [
    {
      name: "1",
      shape: "rect",
      coords:[27, 27, 301, 183],
      preFillColor: "none",
      fillColor: "none"
    },
    {
      name: "2",
      shape:"rect",
      coords: [398, 54, 602, 285],
      preFillColor: "none",
      fillColor: "none"
    },

    {
      name: "3",
      shape:"rect",
      coords:[77, 265, 260, 439],
      preFillColor: "none",
      fillColor: "red"

    },
    {
      name: "4",
      shape:"poly",
      coords:[699,75,738,73,741,39,769,38,953,43,952,250,697,257],
      preFillColor: "none",
      fillColor: "red"

    }
  ]
}
let width = window.innerWidth * 0.6;
return(
  <Background>

  <ImageMapper
  src={'https://dl.dropboxusercontent.com/s/3jncw5ztorvep3n/clue%20board.jpg?dl=0'}
  imgWidth={1000}
  width={width}
  onClick={e=> generateModal(e)}
  map={map}

  />
  <Modal
  onClose={() => setOpen(false)}
  onOpen={() => setOpen(true)}
  open={open}

  basic
  >
  {contents}
  </Modal>
  </Background>
)
}

const mapStateToProps = state => {
  return state.users
}

export default connect(mapStateToProps)(TrackE1)

const Background = styled.div`
background-color: #4287f5`
