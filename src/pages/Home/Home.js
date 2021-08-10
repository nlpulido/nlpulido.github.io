import React from 'react';
import { withRouter } from 'react-router-dom';
import headshot from './headshot_bubble.png';
import ProjectCards from "./ProjectCards";
import "./Home.scss";

function Home() {
    return (
        <div className="home-container">
            <div className="intro-container">
                <div className="desktop-intro">
                    <h1>Hi there!</h1>
                    <h1>My name is Neil.</h1>
                    <h2>I'm a software engineer based in the Bay Area.</h2>
                    <h2>Let's make something great.</h2>
                </div>
                <img src={headshot} alt="headshot" id="headshot"></img>
            </div>
            <div className="projects-container">
                <h1>Latest Projects</h1>
                <ProjectCards />
            </div>
        </div>
    );
}

export default withRouter(Home);