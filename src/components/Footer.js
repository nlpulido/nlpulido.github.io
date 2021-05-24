import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div class="footer">
              <IconButton href="https://www.github.com/nlpulido/">
                <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }}/>
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/nlpulido/">
                <FontAwesomeIcon icon={faLinkedinIn} style={{ color: 'black' }}/>
              </IconButton>
              <IconButton href="https://www.youtube.com/c/NeilP">
                <FontAwesomeIcon icon={faYoutube} style={{ color: 'black' }}/>
              </IconButton>
              <IconButton href="https://www.instagram.com/neilisnext/">
                <FontAwesomeIcon icon={faInstagram} style={{ color: 'black' }}/>
              </IconButton>
              <IconButton href="mailto:neilpphoto@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: 'black' }}/>
              </IconButton>
            </div>
        );
    }
}