import React, { Component } from 'react';
import './App.css';
import TopMenu from  './Component/TopMenu/TopMenu.js';
import Header from  './Component/Header/Header.js';
import Content from  './Component/Content/Content.js';
import Footer from  './Component/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="vd02-component">
        <TopMenu/>
        <Header/>
        <Content linkanh="img/01.jpg" tieude="Tieu de so 1" noidung="Noi dung so 1" vitri="order-lg-2"/>
        <Content linkanh="img/02.jpg" tieude="Tieu de so 2" noidung="Noi dung so 2" />
        <Footer noidung="Dinh Chung" />
      </div>
    );
  }
}

export default App;
