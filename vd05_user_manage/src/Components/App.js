import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import dulieu from './Data.json';

class App extends Component {
  //xử lý việc 2 nút thêm mới đóng lại nằm ở component khác (SearchForm.js)
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm : true,
      duLieuUser : dulieu
    }
  }
 
  doiTrangThai = () => {
    this.setState({
      hienThiForm : !this.state.hienThiForm
    });
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search doiTrangThai={() => this.doiTrangThai()} hienThiNut={this.state.hienThiForm}/>
              <TableData dulieuProps={this.state.duLieuUser}/>
              <AddUser hienThiForm= {this.state.hienThiForm}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
