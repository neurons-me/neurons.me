import React from 'react';
import './css/styles.css'; // Import your scoped CSS file here

const Welcome = () => {
    return (
        <div className="welcome-page">
            <div className="video-background">
                <video autoPlay loop muted playsInline>
                    <source src="/media/neurons.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="overlay"></div>

            <div className="modal">
                <img src="/media/neurons-grey.png" alt="neurons" width="89" />
                <h2><strong>neurons.me</strong></h2>
                <p>Go Algorithmic</p>

                <div className="buttons">
                    <a href="https://neurons-me.github.io/portfolio" className="btn">About</a>
                    <a href="/docs" className="btn">Docs</a>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
