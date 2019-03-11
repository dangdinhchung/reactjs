import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import './../App.css';
import Nav from './Nav.js';
import Footer from './Footer.js';
//import Home from './Component/Home.js';
// import Contact from './Component/Contact.js';
//  import News from './Component/News.js';
 // import NewDetail from './Component/NewDetail.js';
import DieuHuong from '../Router/DieuHuong';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <DieuHuong />
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
