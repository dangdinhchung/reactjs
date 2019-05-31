import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteItem extends Component {
    towActionEdit = () => {
        //action 1 : hien thi form
        this.props.changEditStatus()
        //action 2 : lay du lieu cho len NoteForm , xử lý : đẩy dữ liệu lấy được vào state trong store(làm việc với store)
        this.props.getEditData(this.props.note);
    }
    deleteData = () => {
        this.props.getDeleteData(this.props.note.id);
        this.props.alertOn('Xóa thành công!','danger');
    }
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#note-list" href={"#number" + this.props.i} aria-expanded="true" aria-controls="notecontent1">
                            {this.props.noteTitle}
                        </a>
                        <div className="btn-group float-right">
                            <button className="btn btn-outline-info" onClick={() => this.towActionEdit() }>Sửa</button>
                            <button className="btn btn-outline-secondary" onClick={() => this.deleteData()}>Xóa</button>
                        </div>
                    </h5>
                </div>
                <div id={"number" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isEdit1: state.isEdit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
        getEditData: (editObject) => {
            dispatch({
                type: "GET_EDIT_DATA",
                editObject
            })
        },
        getDeleteData : (deleteID) => {
            dispatch({
                type: "DELETE",
                deleteID
            })
        }, 
        alertOn: (alertContent,alertType) => {
            dispatch({
                type: "ALERT_ON",
                alertContent, alertType
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)