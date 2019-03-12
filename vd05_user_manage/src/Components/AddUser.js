import React, { Component } from 'react';

class AddUser extends Component {
     //xử lý hiển thị button thêm mới đóng lại
    //Lưu ý : 2 nút button thêm mới  và đóng lại nằm trong cùng component AddUser thì sử dụng state : làm được rồi
    //Trường hợp : nếu 2 nút này nằm ở component SearchForm.js => sử dụng props => thông qua thằng component cha App.js

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         trangThaiChinhSua : true
    //     }
    // }
   
    // thayDoiTrangThai = () => {
    //     this.setState({
    //         trangThaiChinhSua : !this.state.trangThaiChinhSua
    //     });
    // }
    // hienThiNut  = () => {
    //     if(this.state.trangThaiChinhSua === true){
    //         return <div className="btn btn-block btn-warning" onClick={() => this.thayDoiTrangThai()}>Đóng lại</div>;
    //     }else{
    //         return <div className="btn btn-info btn-block" onClick={() => this.thayDoiTrangThai()}>Thêm mới</div>;
    //     }
    // }
    // hienThiForm = () => {
    //     if(this.state.trangThaiChinhSua === true){
    //         return (
    //             <div>
    //             <input type="text"  className="form-control mt-3" placeholder="Nhập tên user" />
    //             <br />
    //             <input type="password"  className="form-control" placeholder="Nhập password" />
    //             <br />
    //             <select className="form-control" >
    //             <option>Chọn quyền</option>
    //             <option>Admin</option>
    //             <option>User</option>
    //             </select>
    //             <br />
    //             <div className="btn btn-info btn-block">Thêm mới</div>
    //             </div>
    //         )
    //     }
    // }


    kiemTraForm = () => {
        if(this.props.hienThiForm === true){
            return (
                <div>
                    <input type="text"  className="form-control mt-3" placeholder="Nhập tên user" />
                    <br />
                    <input type="password"  className="form-control" placeholder="Nhập password" />
                    <br />
                    <select className="form-control" >
                    <option>Chọn quyền</option>
                    <option>Admin</option>
                    <option>User</option>
                    </select>
                    <br />
                    <div className="btn btn-info btn-block">Thêm mới</div>
                 </div>
            )
        }
    }
    
    render() {
        return (
            <div className="col-3">
                <div className="form-group">
                    
                    {/* {this.hienThiNut()}
                    {this.hienThiForm()} */}
                    {this.kiemTraForm()}
                 

                    
                </div>
            </div>

        );
    }
}

export default AddUser;