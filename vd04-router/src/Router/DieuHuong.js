import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import News from './../Component/News.js';
import Home from './../Component/Home.js';
import NewDetail from './../Component/NewDetail.js';
import Contact from './../Component/Contact.js';
class DieuHuong extends Component {
    render() {
        return (
            <div>
                <div>
                {/* truc-tiep-bong-da-rennes---arsenal-bi-phan-tam.1.html */}
                {/* bat console.log(this.props : ben trang detail len de xem) */}
                <Route path="/" exact component={Home} />
                <Route path="/tin/" component={News} />
                <Route path="/tin-chi-tiet/:slug.:id.html" component={NewDetail} />
                <Route path="/lien-he/" component={Contact} />
              </div>
            </div>
        );
    }
}

export default DieuHuong;