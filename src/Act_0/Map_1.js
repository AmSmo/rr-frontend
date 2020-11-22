import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ImageMapper from 'react-image-mapper'
import { Modal } from 'semantic-ui-react'







function Welcome(props){
  const [open, setOpen] = useState(false)
  const [contents, setContents] = useState(null)

  const modalClose = () => {
    setOpen(false)
  }
  const generateModal = (e) =>{
    switch (e.name){
      case "1":
      props.history.push("/Track_A");
      break;
      case "2":
      props.history.push("/Track_B");
      break;
      case "3":
      props.history.push("/Track_C");
      break;
      case "4":
      props.history.push("/Track_D");
      break;case "5":
      props.history.push("/Track_E");
      break;
      default:
      break;
    }
  }

  const map = {name: "map1",
  areas: [
    {name: "1",
    shape: "poly",
    coords:[260,175,498,206,470,442,347,424,250,391,249,289],
    preFillColor: "none",
    fillColor: "none",

  },
  {name: "2",
  shape:"poly",
  coords: [536,214,765,128,848,357,733,398,675,406,627,408],
  preFillColor: "none",
  fillColor: "none",

},
  {name: "3",
  shape:"poly",
  coords: [129,550,357,472,438,698,278,745,214,746],
  preFillColor: "none",
  fillColor: "none"
},
  {name: "4",
  shape:"poly",
  coords: [469,505,708,518,695,759,584,752,505,733,471,718],
  preFillColor: "none",
  fillColor: "none"
},
  {name: "5",
  shape:"poly",
  coords: [723,473,948,386,1031,615,930,650,864,667,811,666,763,576],
  preFillColor: "none",
  fillColor: "none"
}
]}

//timed events in sec
if(props.time > 20){
  props.history.push("/Rolled")
}

  return(
    <Background>
    <h1>{props.time}</h1>
    <ImageMapper
    src={'/assets/backgrounds/act_0_map.png'}
    imgWidth={1200}
    width={1200}
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

export default connect(mapStateToProps)(Welcome)

const Background = styled.div`
background:url('/assets/backgrounds/Rio.png');
background-size: contain;
background-repeat: no-repeat;
height: 100%;
width: 100%;`
