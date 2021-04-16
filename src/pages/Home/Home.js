import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import headshot from './headshot_bubble.png'
import "./Home.css";

function Home() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

    return (
        <div>
            {isPortrait ? (
                <div className="portraitContainer">
                    {isTabletOrMobile ? (<p>You are sized like a tablet or mobile phone</p>) : (<p>You are sized like desktop</p>)}
                    <p>You are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
                </div>
            ) : (
                <></>
            )}
        </div>
    ); 
}

export default withRouter(Home);