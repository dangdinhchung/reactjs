import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permission: this.props.userEditObject.permission
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }

    saveButton = () => {
        //truyền dữ liệu sang Search
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        this.props.getInfoEditUser(info);
        this.props.changeStatusEdit();//an form
    }
    

    render() {
        return (
            <div className="row">
                <div className="col">
                    <form method="POST">
                        <input onChange={(event) => this.isChange(event) } type="text" defaultValue={this.props.userEditObject.name} name="name" className="form-control mt-3" placeholder="Nhập tên user" />
                        <br />
                        <input  onChange={(event) => this.isChange(event) } type="text" defaultValue={this.props.userEditObject.tel} name="tel" className="form-control" placeholder="Nhập số điện thoại" />
                        <br />
                        {/* lưu ý : trong react khác html : chỉ cần đặt trong thẻ select là nó tự selected */}
                        <select  defaultValue={this.props.userEditObject.permission} className="form-control" onChange={(event) => this.isChange(event)} name="permission">
                            <option>Chọn quyền</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Member</option>
                        </select>
                        <br />
                        <input style={{ marginBottom: '50px' }} type="button" value="Lưu" onClick={() => this.saveButton()} className="btn btn-info btn-block" />
                    </form>
                </div>
            </div>
        );
    }
}

export default EditUser;