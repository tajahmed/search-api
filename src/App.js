import React, { Component } from 'react';
import Search from "./components/search/Search";
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component{
  render(){
    return(
      
      <MuiThemeProvider>
      <div id="search">
      <Search />
      </div>
      <div id="gradient"/>
      </MuiThemeProvider>
    )
  }
}

export default App;
