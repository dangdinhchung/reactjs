import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    mappingDataUser = () => this.props.dulieuProps.map((value,key) => (
        <TableDataRow key={key} stt={key} name={value.name} tel={value.tel} permission={value.permission}/>
    ))
    render() {
        return (
            <div className="col-9">
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
                    <tbody>
                    

                   {this.mappingDataUser()}
                    
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;