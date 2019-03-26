import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id : "",
            name : "",
            tel : "",
            permission : ""
        }
    }
    
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

    //them moi user
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
       this.setState({
           [name] : value
       });

       //đóng gói thành 1 đối tượng
       var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.permission = this.state.permission;
        //console.log(item);
        
         
    }


    kiemTraForm = () => {
        if(this.props.hienThiForm === true){
            return (
                <div className="col">
                    <input type="text" name="name" onChange={(event) =>  this.isChange(event)} className="form-control mt-3" placeholder="Nhập tên user" />
                    <br />
                    <input type="text" onChange={(event) => this.isChange(event)} name="tel"  className="form-control" placeholder="Nhập số điện thoại" />
                    <br />
                    <select className="form-control" onChange={(event) => this.isChange(event)} name="permission" >
                    <option>Chọn quyền</option>
                    <option value={1}>Admin</option>
                    <option value={2}>User</option>
                    </select>
                    <br />
                    <div className="btn btn-info btn-block" onClick={(name,tel,permission) =>this.props.add(this.state.name,this.state.tel,this.state.permission) }>Thêm mới</div>
                 </div>
            )
        }
    }
    
    render() {
        //console.log(this.state);
        
        return (
            
                <div className="form-group">
                    
                    {/* {this.hienThiNut()}
                    {this.hienThiForm()} */}
                    {this.kiemTraForm()}
                 

                    
                </div>
           

        );
    }
}

export default AddUser;