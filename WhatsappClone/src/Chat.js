import React, { useState } from 'react'
import './Chat.css'
import { SearchOutlined, SettingsInputAntenna } from '@material-ui/icons'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault()
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Laste seen at ...</p>
                </div>
                <div className="chatheaderRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name"> Toto </span>
                    This is a message
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>

                </p>
                <p className="chat_message chat_receiver">
                    <span className="chat_name"> Toto </span>
                    This is a message
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>

                </p>

                <p className="chat_message ">
                    <span className="chat_name"> Toto </span>
                    This is a message
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>

                </p>

                <p className="chat_message chat_receiver">
                    <span className="chat_name"> Toto </span>
                    This is a message
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input}
                        onChange={(e) => SettingsInputAntenna(e.target.value)}
                        placeholder="Type a message"
                        type="text"
                    />
                    <button onClick={sendMessage}
                        type="submit">
                        Send message
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
