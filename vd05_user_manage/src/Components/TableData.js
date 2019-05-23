import React, { Component } from "react";
import TableDataRow from "./TableDataRow";

class TableData extends Component {
  deleteUserClick = (idUser) => {
    this.props.deleteUserClick(idUser);
    
  }
  mappingDataUser = () =>
    this.props.dulieuProps.map((value, key) => (
      <TableDataRow
      deleteUser = {(idUser) => this.deleteUserClick(idUser)}
       changeStatusEditUser = {() => this.props.changeStatusEditUser()}
        editFunClick={user => this.props.editFun(value)}
        key={key}
        stt={key}
        name={value.name}
        tel={value.tel}
        permission={value.permission}
        id={value.id}
      />
    ));
  render() {
    return (
      <div className="col">
        <table className="table table-striped table-hover">
          <thead className="thead-inverse|thead-default">
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>{this.mappingDataUser()}</tbody>
        </table>
      </div>
    );
  }
}

export default TableData;
