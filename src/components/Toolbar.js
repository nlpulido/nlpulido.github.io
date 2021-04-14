import React from 'react';
import { withRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import './Toolbar.css';

function Toolbar({ isMobile, orientation }) {
  const useMobileMenu = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="Toolbar">
        <div className="header">
            <div className="title">
              <button className="link" title="about" onClick={() => alert("going to home!")}>{">"} neil pulido<span class="blink">_</span></button>
            </div>

            {useMobileMenu ? (
              <div className="mobileMenu">
                <IconButton>
                  <MenuIcon fontSize="medium" style={{ color: 'black' }} />
                </IconButton>
              </div>
            ) : (
              <div className="desktopMenu">
                <button className="link" title="about" onClick={() => alert("going to about!")}>about</button>
                <button className="link" title="social" onClick={() => alert("going to social!")}>social</button>
                <button className="link" title="contact" onClick={() => alert("going to contact!")}>contact</button>
              </div>
            )}
        </div>
    </div>
  );
}

export default withRouter(Toolbar);