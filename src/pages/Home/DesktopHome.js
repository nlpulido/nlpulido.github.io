import React from "react";
import headshot from './headshot_bubble.png';
import "./Home.css";

function DesktopHome() {
    return (
        <div className="landscapeContainer">
            <div className="eyeCatcherLandscape">
                <div className="eyeCatcherTextLandscape">
                    <h1>Hi there!</h1>
                    <h1>My name is Neil.</h1>
                    <h2>I'm a software engineer based in the Bay Area.</h2>
                    <h2>Let's make something great.</h2>
                </div>
                <img src={headshot} alt="headshot"></img>
            </div>
            <div className="projects">
                <header>
                    <h3>Latest Projects</h3>
                </header>
                <ul className="carousel">
                    <li><h4>Project 1</h4></li>
                    <li><h4>Project 2</h4></li>
                    <li><h4>Project 3</h4></li>
                    <li><h4>Project 4</h4></li>
                </ul>
            </div>
        </div>
    );
}

export default DesktopHome;