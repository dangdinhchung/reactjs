import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import { firebaseConnect } from "./firebaseConnect";
import  { Component } from 'react';

class App extends Component {
  pushData = () => {
    var connectData = firebase.database().ref('dataForNote');
    connectData.push({
      title: "Title thêm mới",
      content: "Content thêm mới"
    });
    console.log('Thêm mới thành công!');
  }
  deleteData = (id) => {
    var connectData = firebase.database().ref('dataForNote');
    connectData.child(id).remove();
    console.log('Xóa thành công id là: ' + id);
  }
  render() {
    console.log(firebaseConnect);
    return (
           <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <button onClick={() => this.pushData()}>Click để thêm mới vào firebase</button>
         <hr/>
          <button onClick={() => this.deleteData('note1')}>Click để xóa dữ liệu trong firebase</button>
        </header>
      </div>
    );
  }
}

export default App;
