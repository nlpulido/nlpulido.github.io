import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { IconButton } from '@material-ui/core'
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
        <div className="header">
            <div className="title">
              <button 
                className="desktopLink"
                title="about" onClick={() => alert("going to home!")}
              >
                {">"} neil pulido<span class="blink">_</span>
              </button>
            </div>

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
                    {link.title}
                  </button>
                )}
              </div>
            )}
        </div>

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