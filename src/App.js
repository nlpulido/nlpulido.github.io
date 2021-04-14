import React from "react";
import { useMediaQuery } from 'react-responsive';

import './App.css';
import Toolbar from './components/Toolbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer'

function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })


  return (
    <div className="App">
      <Toolbar isMobile={isTabletOrMobile} orientation={isPortrait} />
      {isTabletOrMobile ? <p>You are sized like a tablet or mobile phone</p> : <p>You are sized like desktop</p>}
      <p>You are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
      {/* <Home />
      <Footer /> */}
    </div>
  );
}

export default App;
