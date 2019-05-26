import './App.css';
import React, { Component } from 'react';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { noteData } from './firebaseConnect';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  //nhận dữ liệu từ noteForm gửi lên
  addDataForNoteForm = (item) => {
    noteData.push(item);//inset vào firebase luôn
  }
  render() {
    //console.log(noteData);//test xem kết nối được chưa
    //lấy dữ liệu
   /*  noteData.once('value').then(function(snapshot){
      console.log(snapshot.val());
    }) */
    return (
      <div>
        <Nav/>
        <div className="container">
          <div className="row">
            <NoteList/>
            <NoteForm getData = {(item) => this.addDataForNoteForm(item) }/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
