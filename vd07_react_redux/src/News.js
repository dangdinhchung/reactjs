import React, { Component } from 'react';
import { connect } from 'react-redux';
//truy nhập đến hàm trong  store


class News extends Component {
    userEditStatus = () => {
        /* var dispatch = this.props.dispatch; */
        //ngắn gọn hơn
        var {dispatch} = this.props; //được truyền dưới dạng props
        dispatch({
            type: "CHANGE_EDIT_STATUS"
        })


    }
    render() {
        return (
            <div>
                <h1>Hello chung</h1>  
                <button className="btn" onClick={() => this.userEditStatus()}>
                      Click đi
                </button>
            </div>
        );
    }
}
//lấy dữ liệu về state : lấy 1 cái là editStatus
const mapStateToProps = (state, ownProps) => {
    return {
        editStatu: state.editStatus
    }
}
export default connect(mapStateToProps)(News)
