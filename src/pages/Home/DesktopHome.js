import React from "react";
import { Typography } from '@material-ui/core';
import headshot from './headshot_bubble.png';
import OutlinedCard from '../../components/OutlinedCard';
import "./Home.css";

/* Icons for each project */
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

function DesktopHome() {
    const projects = [
        {
            title: "Oasis Mobile for iOS",
            language: "React Native + Expo", 
            description: "an iOS implementation of Oasis New Tab",
        },
        {
            title: "DPS Lost & Found",
            language: "React.JS", 
            description: "a React.JS Web App for USF's Public Safety",
        },
        {
            title: "Shadow Thief",
            language: "Python + Selenium", 
            description: "blah",
        },
        {
            title: "iPARQ Permit Validator",
            language: "Python + Selenium", 
            description: "blah",
        },
    ]


    return (
        <div className="landscapeContainer">
            <div className="eyeCatcherLandscape">
                <div className="eyeCatcherTextLandscape">
                    <Typography variant="h1" gutterBottom>Hi there!</Typography>
                    <Typography variant="h1" gutterBottom>My name is Neil.</Typography>
                    <Typography variant="h2" gutterBottom>I'm a software engineer based in the Bay Area.</Typography>
                    <Typography variant="h2" gutterBottom>Let's make something great.</Typography>
                </div>
                <img src={headshot} alt="headshot"></img>
            </div>
            <div className="projects">
                <header>
                    <h3>Latest Projects</h3>
                </header>
                <ul className="carousel">
                    {projects.map((project) => {
                        return (
                            <li>
                                <OutlinedCard project={project}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default DesktopHome;