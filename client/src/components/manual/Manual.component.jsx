import React from 'react';

import "./Manual.styles.scss"

const Manual = ({bg, theme}) => {


    return (
        <div className="manual-container" style={theme === "light" ? {backgroundColor: "#333141", color: "#dcd4d4"} : null} tabIndex="1">
            <div className="shh-box">
                <h1>&#129323;</h1>
                <div className="warnings">
                    <span>shhh..!</span>
                    <span className="friends">Don't tell anyone. Just only friends!</span>
                </div>
            </div>

            <div className="main-content">
                <div className="content-header">
                    <span>This is a Roomer.</span>
                    <p>A secret chatting app</p>
                </div>

                <ul className="list">
                    <div className="list-tr">
                        <h1>&#128126;</h1>
                        <span>Pick any random room-name like <i>rubidium</i>.</span>
                    </div>
                    <div className="list-tr">
                        <h1>&#128126;</h1>
                        <span>Share with friends.</span>
                    </div>
                    <div className="list-tr">
                        <h1>&#128126;</h1>
                        <span> Have a safe chat! </span>
                    </div>

                </ul>
            </div>
        </div>
    );
};

export default Manual;