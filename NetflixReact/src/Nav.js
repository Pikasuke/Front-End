import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://libreentreprise.ma/wp-content/uploads/2020/07/netflixjpg.png" alt="netfix logo" />

            <img className="nav__avatar" src="https://c7.uihere.com/files/85/114/466/avatar-user-profile-male-logo-profile-icon.jpg" alt="player logo" />

            <h1>nav</h1>
        </div>
    )
}

export default Nav
