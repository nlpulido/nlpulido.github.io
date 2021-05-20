import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Box, IconButton, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import './Toolbar.css';

const links = [
  {
    title: "about",
    alert: "going to about!"
  },
  {
    title: "social",
    alert: "going to social!"
  },
  {
    title: "contact",
    alert: "going to contact!"
  }
]

function Toolbar() {
  const useMobileMenu = useMediaQuery({ query: '(max-width: 768px)' });
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <div className="Toolbar">
        <Box component="div" className="header">
            <Box component="div" className="title">
              <button 
                className="desktopLink"
                title="Home"
                onClick={() => alert("going to home!")}
              >
                <Typography variant="h4">
                  <Box fontWeight="bold">{">"} neil pulido<span class="blink">_</span></Box>
                </Typography>
              </button>
            </Box>

            {useMobileMenu ? (
              <div className="mobileMenuIcon">
                <IconButton onClick={toggleMenu}>
                  <MenuIcon fontSize="medium" style={{ color: 'black' }} />
                </IconButton>
              </div>
            ) : (
              <div className="desktopMenu">
                {links.map((link, index) => 
                  <button 
                    className="desktopLink"
                    key={index}
                    onClick={() => alert(link.alert)}
                  >
                    <Typography variant="h4">
                      <Box fontWeight="bold">
                        {link.title}
                      </Box>
                    </Typography>
                  </button>
                )}
              </div>
            )}
        </Box>

        {menuVisible && useMobileMenu ? (
          <div className="mobileMenu">
            {links.map((link, index) => 
              <button 
                className="mobileLink"
                key={index}
                onClick={() => alert(link.alert)}
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