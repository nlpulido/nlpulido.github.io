import React from 'react';
import { IconButton } from '@material-ui/core'
import { withRouter } from 'react-router-dom';

import './Toolbar.css';


function Toolbar(props) {
  return (
    <div className="Toolbar">
        <div className="title">
            <h3>{">"} neil pulido<span class="blink">_</span></h3>
            <div className="socials">
              <IconButton href="https://www.github.com/nlpulido/">
                {/* <GitHubIcon fontSize="large" className="toolbar_icon"></GitHubIcon> */}
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/nlpulido/">
                {/* <LinkedInIcon fontSize="large" className="toolbar_icon"></LinkedInIcon> */}
              </IconButton>
              <IconButton href="https://www.instagram.com/neilisnext/">
                {/* <InstagramIcon fontSize="large" className="toolbar_icon"></InstagramIcon> */}
              </IconButton>
              <IconButton href="mailto:neilpphoto@gmail.com">
                {/* <MailOutlineIcon fontSize="large" className="toolbar_icon"></MailOutlineIcon> */}
              </IconButton>
            </div>
        </div>
    </div>
  );
}

export default withRouter(Toolbar);