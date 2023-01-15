import React from 'react';

import "./InstanceMapAnimation.styles.scss"
const TypeAnimation = ({instanceMap}) => {
    return (
        <div className="instance-map-animation-container">
            <span> {`host: ${instanceMap.headers.host}`}</span>
            <span> {`connection: ${instanceMap.headers.connection}`}</span>
            <span>{`sec-ch-ua: ${instanceMap.headers['sec-ch-ua']}`}</span>
            <span> {`user-agent: ${instanceMap.headers['user-agent']}`}</span>
            <span>sec-ch-ua-platform: {instanceMap.headers['sec-ch-ua-platform']}</span>
            <span>accept-language: {instanceMap.headers['accept-language']} </span>
            <span>accept-encoding: {instanceMap.headers['accept-encoding']}</span>
            <span>time: {instanceMap['time']}</span>
            <span>secure: {instanceMap['secure']}</span>
            <span>url: {instanceMap.url}</span>
        </div>
    );
};

export default TypeAnimation;