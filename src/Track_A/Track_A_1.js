import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ImageMapper from 'react-image-mapper'
import { Modal } from 'semantic-ui-react'
import Modal_video from '../modals/Modal_video'
import Modal_audio from '../modals/Modal_audio'

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
                setContents(<Modal_video basic size="small" setOpen={modalClose}/>)
                break;
            case "2":
                setOpen(true)
                setContents(<Modal_audio basic size="small" setOpen={modalClose} />)
                break;
            case "3":
                    setOpen(true)
                    setContents(<Modal_video basic size="small" videoId={'7EpSBDPlZn4'} setOpen={modalClose}/>)
                    break;
            default:
                break;
        }
    }

    const map = {name: "map1",
areas: [
    {name: "1",
        shape: "poly",
        coords:[204, 257, 330, 211, 279, 91, 166, 136, 190, 208, 195, 231],
         fillColor: "none"
    },
    {name: "2",
        shape:"rect",
        coords: [648, 531, 526, 406],
        preFillColor: "none",
        fillColor: "blue"
      },

    {name: "3",
        shape:"rect",
        coords:[77, 265, 260, 439],
        preFillColor: "none",
        fillColor: "red"

      }
]}
  
    return(
        <Background>
            <h1>{props.time}</h1>
            <ImageMapper
                src={'https://dl.dropboxusercontent.com/s/3jncw5ztorvep3n/clue%20board.jpg?dl=0'}
                width={1250}
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

export default connect(mapStateToProps)(Track_A_1)

const Background = styled.div`
background:url('/assets/backgrounds/Rio.png');
background-size: contain;
background-repeat: no-repeat;
height: 100vh;
width: 100vw;`
