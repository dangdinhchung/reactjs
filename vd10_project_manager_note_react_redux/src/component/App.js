import './App.css';
import React, { Component } from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

class App extends Component {
  showFormEdit = () => {
    if(this.props.isEdit){
      return <NoteForm/>
    }
  }
  render() {
    return (
      <div>
        <Nav/>
        <div className="container">
          <div className="row">
            <NoteList/>
            {this.showFormEdit()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changEditStatus: () => {
      dispatch({
        type: "CHANGE_EDIT_STATUS"
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
