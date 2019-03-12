import React, { Component } from 'react';

class TableDataRow extends Component {
    checkPermission =  () => {
        if(this.props.permission === 1){
            return "Admin";
        }else{
            return "Member";
        }
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
                    <div className="btn btn-warning sua">
                    <i className="fa fa-edit">Sửa</i>
                    </div>
                    <div className="btn btn-danger xoa">
                    <i className="fa fa-delete">Xóa</i>
                    </div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;