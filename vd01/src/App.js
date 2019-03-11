import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Dinh nghia component cach so 1 : kieu ham binh thuong
function One(){
  return (
    <div>
        <h1>Component cach so 1</h1>
    </div>
  )
}

//Dinh nghia component cach so 2 : anonymous function : dung 1 lan
var Two = function(){
  return (
    <div>
      <p>Component cach so 2</p>
    </div>
  );
}

//Dinh nghia component cach so 3 : arrow function
var Three = () => (
  <div>
    <p>Component cach so 3</p>
  </div>
)

//Dinh nghia component cach so 4 : class -> phim tat rcjc
class Four extends Component {
  render() {
    return (
      <div>
        <p>Component cach so 4</p>
      </div>
    );
  }
}

//Su dung props cach so 1 : su dung funtion : props.ten ; props la tu khoa khong duoc thay doi
function NumberOne(props){
  return (
    <div classname="card text-left">
    <div classname="card-body">
      <h4 classname="card-title">{ props.tieude }</h4>
      <p classname="card-text">{ props.noidung }</p>
    </div>
  </div>
  );
}

//Su dung props cach so 2 : su dung class : this.props
class NumberTwo extends Component {
  render() {
    return (
      <div>
        <div classname="card text-left">
        <div classname="card-body">
          <h4 classname="card-title">{ this.props.tieude }</h4>
          <p classname="card-text">{ this.props.noidung }</p>
        </div>
      </div>
      </div>
    );
  }
}

//Vi du ve ham map : lap cac phan tu cua mang
const so1 = [1,2,3,4,5,6,7];
const so2 = so1.map((x) => (
  <li>{x}</li>
));
class App1 extends Component {
  render() {
    return (
      <div>
        {so2}
      </div>
    );
  }
}




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <One/>
          <Two/>
          <Three/>
          <Four/>
          <div className="container">
            <div classname="row">
              <NumberOne tieude='tieu de so 1' noidung='noi dung so 1'/>
              <NumberOne tieude="Tieu de so 2" noidung="noi dung so 2"/>
              <NumberTwo tieude="Tieu de so 3" noidung="noi dung so 3"/>
              <NumberTwo tieude="Tieu de so 4" noidung="Noi dung so 4"/>
              <App1/>
            </div>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
