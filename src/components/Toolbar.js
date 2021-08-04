import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Box, IconButton, Typography } from '@material-ui/core'
import history from "../History";
import MenuIcon from '@material-ui/icons/Menu';
import './Toolbar.css';

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
          <Box component="div" className="header">
            <Box component="div" className="title">
              <button 
                className="desktopLink"
                title="Home"
                onClick={() => history.push("/")}
              >
                <Typography variant="h5">
                  <Box fontWeight="bold">{">"} neil pulido<span class="blink">_</span></Box>
                </Typography>
              </button>
            </Box>
            <div className="mobileMenuIcon">
              <IconButton onClick={toggleMenu}>
                <MenuIcon fontSize="medium" style={{ color: 'black' }} />
              </IconButton>
            </div>
          </Box>
        ) : (
          <Box component="div" className="header">
            <Box component="div" className="title">
              <button 
                className="desktopLink"
                title="Home"
                onClick={() => history.push("/")}
              >
                <Typography variant="h4">
                  <Box fontWeight="bold">{">"} neil pulido<span class="blink">_</span></Box>
                </Typography>
              </button>
            </Box>
            <div className="desktopMenu">
              {links.map((link, index) => 
                <button 
                  className="desktopLink"
                  key={index}
                  onClick={() => history.push(link.route)}
                >
                  <Typography variant="h4">
                    <Box fontWeight="bold">
                      {link.title}
                    </Box>
                  </Typography>
                </button>
              )}
            </div>
          </Box>
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