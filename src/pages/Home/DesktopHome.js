import React from "react";

// local file
import headshot from './headshot_bubble.png';
import "./Home.css";

// components
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ProjectCards from "./ProjectCards";

function DesktopHome() {

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
                    <Typography variant="h2" gutterBottom>
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
                <ProjectCards />
            </Box>
        </div>
    );
}

export default DesktopHome;