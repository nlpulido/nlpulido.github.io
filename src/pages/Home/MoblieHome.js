import React from "react";
import headshot from './headshot_bubble.png';
import "./Home.scss";

function MobileHome() {
    return (
        <div className="home-container">
            <div className="intro-container">
                <div className="disclaimer">
                    <p>The mobile version of this site is currently a work in progress! 🌱</p>
                </div>
                <div className="desktop-intro">
                    <h1>Hi there!</h1>
                    <h1>My name is Neil.</h1>
                    <h2>I'm a software engineer based in the Bay Area.</h2>
                    <h2>Let's make something great.</h2>
                </div>
                <img src={headshot} alt="headshot" id="headshot"></img>
            </div>
        </div>
    );
}

export default MobileHome;