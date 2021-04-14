import React from 'react';
import { IconButton } from '@material-ui/core'
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import './Toolbar.css';


function Toolbar(props) {
  return (
    <div className="Toolbar">
        <div className="header">
            <div className="title">
              <h3>{">"} neil pulido<span class="blink">_</span></h3>
            </div>

            <div className="menu">
              <h3>about</h3>
              <h3>social</h3>
              <h3>contact</h3>
            </div>
        </div>
    </div>
  );
}

export default withRouter(Toolbar);