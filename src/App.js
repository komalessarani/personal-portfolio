import React, { Component } from "react";
import './css/App.css';
import './App.sass';
import Home from './contents/Home'
import About from './contents/About'
import Resume from './contents/Resume'
import Project from './contents/Project'
import Contact from './contents/Contact'


class App extends Component {
  render(){
    return (
        <div className="App">
          <Home />
          <About />
          <Resume />
          <Project />
          <Contact />
        </div>
    );
  }
}

export default App;
