import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
            <li>
            <NavLink  to="/">Home</NavLink >
            </li>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul>
                    <li>
                    {/* neu muon thay doi thi them activeClassName="tenclass" */}
                    <NavLink  to="/tin">Tin tuc</NavLink >
                    </li>
                    <li>
                    <NavLink  to="/lien-he">Lien he</NavLink >
                    </li>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}

export default Nav;