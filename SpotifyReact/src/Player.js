import React from 'react'
import "./player.css"
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'
import './player.css'

function Player() {
    return (
        <div className="player">
            <h1>Player componenent</h1>

            <div className="player__body">
                <Sidebar />
                <Body />


            </div>

            <div className="player__sidebar">
            </div>

            <div className="player__footer">

                <Footer/>
            </div>

        </div>
    )
}

export default Player
