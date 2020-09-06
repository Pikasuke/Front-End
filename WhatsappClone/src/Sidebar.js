import React from 'react'
import './Sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src="https://avatars0.githubusercontent.com/u/12965321?s=60&u=38f31cbe0a588bd7172f15523c9917e1f30015f8&v=4"/>
                <div className="header_headerRight">
                    <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                    <ChatIcon/>
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchIcon />
                    <input placeholder="Search or start naw chat" typ="text" />
                </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
