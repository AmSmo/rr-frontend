import React from 'react'

import YouTube from 'react-youtube'
function Rolled(props) {

    return (
        <div onClick={() => props.setOpen(false)}>
            <YouTube
                videoId={'dQw4w9WgXcQ'}
            />
        </div>
    )
}

export default Rolled