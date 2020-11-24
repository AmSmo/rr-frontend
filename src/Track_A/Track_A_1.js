import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ImageMapper from 'react-image-mapper'
import { Modal } from 'semantic-ui-react'
import Modal_video from '../modals/Modal_video'
import Modal_video_local from '../modals/Modal_video_local'
import Modal_audio from '../modals/Modal_audio'
import Modal_livestream from '../modals/Modal_livestream'



function Track_A_1(props){
  const [open, setOpen] = useState(false)
  const [contents, setContents] = useState(null)

  const modalClose = () => {
    setOpen(false)
  }
  const generateModal = (e) =>{
    switch (e.name){
      case "1":
        setOpen(true)
        setContents(<Modal_video basic size="small" videoId={'7EpSBDPlZn4'} setOpen={modalClose}/>)
      break;
      case "2":
        setOpen(true)
        setContents(<Modal_livestream basic size="small" setOpen={modalClose} />)
      break;
      case "3":
        setOpen(true)
        setContents(<Modal_video basic size="small" videoId={'7EpSBDPlZn4'} setOpen={modalClose}/>)
      break;
      case "4":
        setOpen(true)
        setContents(<Modal_video_local basic size="small" videoId={'https://dl.dropboxusercontent.com/s/l5en1hanguupv1c/Brother%2C%20Mine%20Episode%20Two%20Full%20Mockup%20Two.mp4?dl=0'} setOpen={modalClose}/>)
      break;
      case "5":
        setOpen(true)
        setContents(<Modal_audio basic size="small" audioId={'/assets/audio/Personal_Jesus.mp3'}setOpen={modalClose} />)
      break;
      case "6":
        setOpen(true)
        setContents(<Modal_video basic size="small" videoId={'7EpSBDPlZn4'} setOpen={modalClose}/>)
      break;
      default:
      break;
    }
  }

  const map = {name: "map1",
  areas: [
    {
      name: "1",
      shape: "circle",
      coords:[193,187,49],
      preFillColor: "none",
      fillColor: "none"
    },
    {
      name: "2",
      shape: "circle",
      coords:[414,323,49],
      preFillColor: "none",
      fillColor: "none"
    },
    {
      name: "3",
      shape: "circle",
      coords:[879,251,52],
      preFillColor: "none",
      fillColor: "none"
    },
    {
      name: "4",
      shape: "circle",
      coords:[152,490,51],
      preFillColor: "none",
      fillColor: "none"
    },
    {
      name: "5",
      shape: "circle",
      coords:[711,388,49],
      preFillColor: "none",
      fillColor: "none"
    },
    {
      name: "6",
      shape: "circle",
      coords:[381,663,47],
      preFillColor: "none",
      fillColor: "none"
    },
    {
      name: "7",
      shape: "circle",
      coords:[834,645,47],
      preFillColor: "none",
      fillColor: "none"
    }
  ]
}

return(

  <Background>
  <h1>{props.time}</h1>
  <div className="center_map">
  <ImageMapper
  src={'https://dl.dropboxusercontent.com/s/au6xan8beolro28/map_A_1.png?dl=0'}
  imgWidth={1200}
  width={1200}
  onClick={e=> generateModal(e)}
  map={map}

  />
  </div>
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

export default connect(mapStateToProps)(Track_A_1)

const Background = styled.div`
background-color: #4287f5`
