import React from 'react';

import "./Message.styles.scss"

const Message = ({message: {message, username, status, hsl}}) => {
    return (
        <div className="message-wrapper">
            <div className="message-username" style={status  === "connected" ? {color: "#60ac39"} : status  === "disconnected" ? {color: "brown"} : {color: `${hsl}`}}>{username}</div>
            <div className="right-side">
                <div className="line"/>
                <div className="message-text" style={status  === "connected" ? {color: "#60ac39"} : status  === "disconnected" ? {color: "brown"} : {}}>{message}</div>
            </div>
        </div>
    );
};

export default Message;