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
      hienThiForm : false,
      duLieuUser : dulieu,
      textSearch : ""
    }
  }
  //lấy dữ liệu trong form search : từ component con
  getTextSearch = (dulieu) => {
    this.setState({
      textSearch : dulieu
    });
    //console.log(this.state.textSearch);
  }

  //them du lieu 
  getNewUser = (name,tel,permission) =>  {
    //đóng goi thanh dối tượng
    var item = {};
    item.id = "";
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    //push vao state
    var items = this.state.duLieuUser;
    items.push(item);
    this.setState({
      duLieuUser : items
    });
    
        
    
  }
 
  doiTrangThai = () => {
    this.setState({
      hienThiForm : !this.state.hienThiForm
    });
  }
  render() {
    //lưu giá trị tìm kiếm vào mảng trung gian
    var ketQua = [];
    this.state.duLieuUser.forEach((item) => {
      if(item.name.indexOf(this.state.textSearch) !== -1){
        ketQua.push(item);
      }
    });
    //console.log(ketQua);
    
    return (
      <div className="App">
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search dataSearch={(dl) => this.getTextSearch(dl) } doiTrangThai={() => this.doiTrangThai()} hienThiNut={this.state.hienThiForm}/>
              <TableData dulieuProps={ketQua}/>
              <AddUser add={(name,tel,permission) => this.getNewUser(name,tel,permission)} hienThiForm= {this.state.hienThiForm}/>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
