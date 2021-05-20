import React from "react";
import './App.css';
import Toolbar from './components/Toolbar'
import Routes from "./Routes";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      default: "#ffffff"
    },
    primary: {
      main: "#a9c4c0",
      contrastText: "#3f4f4c"
    },
    secondary: {
      main: "#3f4f4c",
      contrastText: "#ffffff"
    },
  },
  typography: {
    fontFamily: [
      'Fira Sans',
      'sans-serif'
    ].join(','),
  }
});


function App() {

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Toolbar />
      <Routes />
    </MuiThemeProvider>
  );
}

export default App;
