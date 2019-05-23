import React, { Component } from 'react';

class TableDataRow extends Component {
    checkPermission =  () => {
        if(this.props.permission === 1){
            return "Admin";
        }else{
            return "Member";
        }
    }
    editFunCLickUser = () => {
        this.props.editFunClick(); //lấy về thông tin người
        this.props.changeStatusEditUser();
    }
    deleteCLick = (idUser) => {
        this.props.deleteUser(idUser);
        
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>
                    {this.checkPermission()}
                </td>
                <td>
                <div className="btn-group">
                    <div className="btn btn-warning sua" onClick={() => this.editFunCLickUser()}>
                    <i className="fa fa-edit">Sửa</i>
                    </div>
                    <div className="btn btn-danger xoa">
                        <i className="fa fa-delete" onClick={(idUser) => this.deleteCLick(this.props.id) }>Xóa</i>
                    </div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;