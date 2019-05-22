import React, { Component } from "react";
import "./../App.css";
import Header from "./Header";
import Search from "./Search";
import TableData from "./TableData";
import AddUser from "./AddUser";
import dulieu from "./Data.json";

const uuidv1 = require('uuid/v1');

//xu ly phan id
//const uuidvi = require("uuis/v1");
class App extends Component {
  //xử lý việc 2 nút thêm mới đóng lại nằm ở component khác (SearchForm.js)
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      duLieuUser: dulieu,
      textSearch: "",
      editUserStatus : false,
      userEditObject : {} // đối tượng
    };
  }

  //xử lý việc click button sửa hiện thị form -> ẩn nút sửa và ngược lại
  changeStatusEditUser = () => {
    this.setState({
      editUserStatus : !this.state.editUserStatus
    });
  }


  //lấy dữ liệu trong form search : từ component con
  getTextSearch = dulieu => {
    this.setState({
      textSearch: dulieu
    });
    //console.log(this.state.textSearch);
  };

  //them du lieu
  getNewUser = (name, tel, permission) => {
    //đóng goi thanh dối tượng
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    //push vao state
    var items = this.state.duLieuUser;
    items.push(item);
    this.setState({
      duLieuUser: items
    });
    //console.log(this.state.duLieuUser);
    
  };

  //sua du lieu : app ket noi voi tabledata ket noi voi tabledatarow
  editUser = (user) => {
    console.log("Ket noi thanh cong");
    this.setState({
      userEditObject : user
    });
    console.log(user);

    
  };

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  };
  render() {
    //lưu giá trị tìm kiếm vào mảng trung gian
    var ketQua = [];
    this.state.duLieuUser.forEach(item => {
      if (item.name.indexOf(this.state.textSearch) !== -1) {
        ketQua.push(item);
      }
    });
    //console.log(ketQua);

    return (
      <div className="App">
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
               userEditObject = {this.state.userEditObject} //truyền dữ liệu lên form
                dataSearch={dl => this.getTextSearch(dl)}
                doiTrangThai={() => this.doiTrangThai()}
                hienThiNut={this.state.hienThiForm}
                editUser={this.state.editUserStatus}
                changeStatusEditUser = {() => this.changeStatusEditUser()}
              />
              <TableData
                changeStatusEditUser = {() => this.changeStatusEditUser()}
               editFun={(user) => this.editUser(user)} dulieuProps={ketQua} />
              <AddUser
                add={(name, tel, permission) =>
                  this.getNewUser(name, tel, permission)
                }
                hienThiForm={this.state.hienThiForm}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
