import React, { useState, useRef, useEffect } from 'react';
import './css/styles.css';

const WelcomeMedia = () => {
    return (
        <div className="welcome-page">
            <div className="video-background">
                <video autoPlay loop muted playsInline>
                    <source src="/media/neurons1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="overlay"></div>
            <div className="modal">
                <img src="/media/neurons-grey.png" alt="neurons" width="89" />
                <h2><strong>neurons.me</strong></h2>
                <h3><strong>media</strong></h3>
                <div className="buttons">
                <a href="/media" className="btn">View</a>
                </div>
            </div>

        </div>
    );
};

export default WelcomeMedia;