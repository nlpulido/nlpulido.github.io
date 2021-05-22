import React from "react";

// local file
import headshot from './headshot_bubble.png';
import "./Home.css";

// components
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import OutlinedCard from '../../components/OutlinedCard';

/* Icons for each project */
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

function DesktopHome() {
    const projects = [
        {
            title: "Oasis Mobile for iOS",
            language: "React Native + Expo", 
            description: "an iOS implementation of Oasis New Tab",
            route: "/projects/oasis",
            icon: AccessibilityNewIcon,
        },
        {
            title: "DPS Lost & Found",
            language: "React.JS", 
            description: "a React.JS Web App for USF's Public Safety",
            route: "/projects/lost-and-found",
            icon: AccessibilityNewIcon,
        },
        {
            title: "Shadow Thief",
            language: "Python + Selenium", 
            description: "An automated add to cart service built on Python for Shopify websites",
            route: "/projects/shadow-thief",
            icon: AccessibilityNewIcon,
        },
        {
            title: "iPARQ Permit Validator",
            language: "Python + Selenium", 
            description: "An automated program used to validate 50+ permits for the University of San Francisco",
            route: "/projects/permit-validator",
            icon: AccessibilityNewIcon,
        },
    ];


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