import React from 'react'
import './Home.css'
import AppsIcon from '@material-ui/icons/Apps';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import SearchComponent from './SearchComponent';

function Home() {
    return (
        <div className="home">
            <h1>This is home page</h1>

            <div className="home_header">
                <div className="home_headerleft">
                    <Link to='/about'> About </Link>
                    <Link to='/store'> Store </Link>
                </div>
                <div className="home_headerRight">
                    <Link to='/gmail'> Gmail </Link>
                    <Link to='/images'> Images </Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="home_body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo"/>
                <div className="body_searchContainer"></div>
                <SearchComponent hideButtons/>
            </div>
        </div>
    )
}

export default Home
