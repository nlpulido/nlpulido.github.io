import React from 'react';
import { withRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MobileHome from "./MoblieHome";
import DesktopHome from "./DesktopHome";

function Home() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div>
            {isMobile ? (
                <MobileHome />
            ) : (
                <DesktopHome />
            )}
        </div>
    ); 
}

export default withRouter(Home);