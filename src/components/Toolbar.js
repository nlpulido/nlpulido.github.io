import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { IconButton } from '@material-ui/core'
import history from "../History";
import MenuIcon from '@material-ui/icons/Menu';
import './Toolbar.scss';

const links = [
  {
    title: "home",
    route: "/",
  },
  {
    title: "about",
    route: "/about"
  },
  {
    title: "contact",
    route: "/contact"
  }
]

function Toolbar() {
  const useMobileMenu = useMediaQuery({ query: '(max-width: 768px)' });
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <div className="Toolbar">
        {useMobileMenu ? (
          <div className="header">
            <div className="title">
              <h1>{">"} neil pulido<span className="blink">_</span></h1>
            </div>
            <div className="mobileMenuIcon">
              <IconButton onClick={toggleMenu}>
                <MenuIcon fontSize="large" style={{ color: 'black' }} />
              </IconButton>
            </div>
          </div>
        ) : (
          <div className="header">
            <div className="title">
              <h1>{">"} neil pulido<span className="blink">_</span></h1>
            </div>
            <div className="desktopMenu">
              {links.map((link) => 
                <button 
                  className="buttonWithText"
                  key={link.title}
                  onClick={() => history.push(link.route)}
                >
                  <h1>{link.title}</h1>
                </button>
              )}
            </div>
          </div>
        )}

        {menuVisible && useMobileMenu ? (
          <div className="mobileMenu">
            {links.map((link, index) => 
              <button 
                className="mobileLink"
                key={index}
                onClick={() => history.push(link.route)}
              >
                {link.title}
              </button>
            )}
          </div>
        ) : (
          <></>
        )}
        
    </div>
  );
}

export default withRouter(Toolbar);