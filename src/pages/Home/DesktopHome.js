import React from "react";
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import headshot from './headshot_bubble.png';
import OutlinedCard from '../../components/OutlinedCard';
import "./Home.css";

/* Icons for each project */

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
                    <Typography variant="h1">
                        <Box>
                            Hi there!
                        </Box>
                        <Box>
                            My name is Neil.
                        </Box>
                    </Typography>
                    <Typography variant="h2">
                        <Box>
                            I'm a software engineer based in the Bay Area.
                        </Box>
                        <Box>
                            Let's make something great.
                        </Box>
                    </Typography>
                </div>
                <img src={headshot} alt="headshot"></img>
            </div>
            <Box component="div" className="projects" bgcolor="primary.light">
                <header>
                    <Typography variant="h3" color="secondary">
                        <Box fontWeight="500">
                            Latest Projects
                        </Box>
                    </Typography>
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
            </Box>
        </div>
    );
}

export default DesktopHome;