import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue : "",
            userObj : {}
        }
    }

    //truyền qua edit 1 cái props để nhận dữ liệu
    getInfoEditUser = (info) => {
        this.setState({
            userObj: info
        });
        //truyen qua app
        this.props.getEditUserInfo(info);
    }
    isShowEditForm = () => {
        if (this.props.editUser === true){
            return <EditUser
            getInfoEditUser = {(info) => this.getInfoEditUser(info)}
            userEditObject={this.props.userEditObject}
            changeStatusEdit={() => this.props.changeStatusEditUser()}/>
            
        }
    }
    
    isChange = (event) => {
        //console.log(event.target.value);
        this.setState({
            tempValue : event.target.value
        });
        //khi tim kiem thi se tim luon khong can an submit cung duoc
        this.props.dataSearch(this.state.tempValue);
    }
    hienThiNut = () => {
        if(this.props.hienThiNut === true){
            return  <div className="btn  btn-warning" onClick={() => this.props.doiTrangThai()}>Đóng lại</div>;
        }else{
            return  <div className="btn btn-info" onClick={() => this.props.doiTrangThai()}>Thêm mới</div>;
        }
    }
    render() {
        return (
            <div className="col-12">
               {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group">
                    <input type="text" className="form-control" onChange={(event) => this.isChange(event)} placeholder="Nhập từ khóa" aria-describedby="helpId" style={{width: '500px'}} />
                    <div className="btn btn-info" onClick={(dulieu) => this.props.dataSearch(this.state.tempValue) }>Tìm</div>
                    </div>
                    <br/>

                    {this.hienThiNut()}
                   
                    <hr/>
                </div>
            </div>
            
        );
    }
}

export default Search;