import React from "react";

import './App.css';
import Toolbar from './components/Toolbar'
import Routes from "./Routes";
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Toolbar />
      <Routes />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
