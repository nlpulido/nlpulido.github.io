import React from 'react';
import { withRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MobileHome from "./MoblieHome";
import DesktopHome from "./DesktopHome";
import "./Home.css";

function Home() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
    // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    // const traits = ["software engineer", "photographer", "music lover", "gamer"];

    return (
        <div>
            {isTabletOrMobile ? (
                <MobileHome />
            ) : (
                <DesktopHome />
            )}
        </div>
    ); 
}

export default withRouter(Home);