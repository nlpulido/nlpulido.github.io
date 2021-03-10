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
        <div className="title">
            <h3>{">"} neil pulido<span class="blink">_</span></h3>
            <div className="socials">
              <IconButton href="https://www.github.com/nlpulido/">
                <FontAwesomeIcon icon={faGithub} style={{ color: 'white' }}/>
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/nlpulido/">
                <FontAwesomeIcon icon={faLinkedinIn} style={{ color: 'white' }}/>
              </IconButton>
              <IconButton href="https://www.youtube.com/channel/UCN22en-BT8nzxksa5us0BGw/">
                <FontAwesomeIcon icon={faYoutube} style={{ color: 'white' }}/>
              </IconButton>
              <IconButton href="https://www.instagram.com/neilisnext/">
                <FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }}/>
              </IconButton>
              <IconButton href="mailto:neilpphoto@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white' }}/>
              </IconButton>
            </div>
        </div>
    </div>
  );
}

export default withRouter(Toolbar);