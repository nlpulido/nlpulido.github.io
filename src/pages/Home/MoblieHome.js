import React from "react";
import headshot from './headshot_bubble.png';
import "./Home.css";

function MobileHome() {
    return (
        <div className="portraitContainer">
            <div className="eyeCatcherPortrait">
                <h1>Hi there!</h1>
                <h1>My name is Neil.</h1>
                <h2>I'm a software engineer based in the Bay Area.</h2>
                <h2>Let's make something great.</h2>
            </div>
            <img src={headshot} alt="headshot"></img>
        </div>
    );
}

export default MobileHome;