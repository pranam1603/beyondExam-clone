import React from 'react';
import { FiClock } from "react-icons/fi";

const ModuleSections = ({ videos }) => {
    return (
        <div className="module-section">
            {videos.map((video, index) => {
                const {title, thumbnails, channelTitle} = video
                return (
                <div key={index} className="modules">
                <div className="module-img">
                    <img className="module-img" src={thumbnails} />
                </div>
                <div className="module-info">
                    <h2>{title}</h2>
                    <h5>{channelTitle}</h5>
                    <p><span><FiClock/></span> 14 minutes</p>
                </div>
            </div>
                )
            })}
        </div>
    )
}

export default ModuleSections
