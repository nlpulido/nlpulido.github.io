import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import headshot from './headshot_bubble.png'
import "./Home.css";

function Home() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    const traits = ["software engineer", "photographer", "music lover", "gamer"];

    return (
        <div>
            {isTabletOrMobile ? (
                <div className="portraitContainer">
                    <div className="eyeCatcherPortrait">
                        <h1>Hi there!</h1>
                        <h1>My name is Neil.</h1>
                        <h2>I'm a software engineer based in the Bay Area.</h2>
                        <h2>Let's make something great.</h2>
                    </div>
                </div>
            ) : (
                <div className="landscapeContainer">
                    <div className="eyeCatcherLandscape">
                        <h1>Hi there!</h1>
                        <h1>My name is Neil.</h1>
                        <h2>I'm a software engineer based in the Bay Area.</h2>
                        <h2>Let's make something great.</h2>
                    </div>
                    <img src={headshot} alt="headshot"></img>
                </div>
            )}
        </div>
    ); 
}

export default withRouter(Home);