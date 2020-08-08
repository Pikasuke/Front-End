import React from 'react'
import "./player.css"
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'
import './player.css'

function Player({spotify}) {
    return (
        <div className="player">
            <h1>Player componenent</h1>

            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify}/>


            </div>

            <div className="player__sidebar">
            </div>

            <div className="player__footer">

                <Footer spotify={spotify}/>
            </div>

        </div>
    )
}

export default Player
