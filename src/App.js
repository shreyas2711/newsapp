import './App.css';
import Navbar from './components/Navbar';

import React, { Component } from 'react'
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=7
  render() {
    return (
      <div>
      <Router>  
     <Navbar/>
     <Routes>
          {/* <Route exact path="/"><News key="general" pageSize={5} country="in" category="general"/></Route>
          <Route exact path="/business"><News key="business" pageSize={5} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={5} country="in" category="entertainment"/></Route>
          <Route exact path="/general"><News key="general" pageSize={5} country="in" category="general"/></Route>
          <Route exact path="/health"><News key="health" pageSize={5} country="in" category="health"/></Route>
          <Route exact path="/science"><News key="science" pageSize={5} country="in" category="science"/></Route>
          <Route exact path="/sports"><News key="sports" pageSize={5} country="in" category="sports"/></Route>
          <Route exact path="/technology"><News key="technology" pageSize={5} country="in" category="technology"/></Route>
     <Routes> */}
     <Route exact path="/" element = {<News key="general" pageSize = {this.pageSize} country = "in" category = "general"/>}/>
     <Route exact path="/business" element= {<News key="business" pageSize = {this.pageSize} country="in" category="business"/>}/>
            <Route exact path="/entertainment" element= {<News key="entertainment" pageSize = {this.pageSize} country="in" category="entertainment"/>}/>
            <Route exact path="/general" element= {<News key="general" pageSize = {this.pageSize} country="in" category="general"/>}/>
            <Route exact path="/health" element= {<News key="health" pageSize = {this.pageSize} country="in" category="health"/>}/>
            <Route exact path="/science" element= {<News key="science" pageSize = {this.pageSize} country="in" category="science"/>}/>
            <Route exact path="/sports" element= {<News key="sports" pageSize = {this.pageSize} country="in" category="sports"/>}/>
            <Route exact path="/technology" element= {<News key="technology" pageSize = {this.pageSize} country="in" category="technology"/>}/>
            
          </Routes>
        </Router>
      </div>
      
      
    )
  }
}

