import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle : '',
            noteContent : '',
            id : ''
        }
    }

    //edit : xử lý việc nếu mà k sửa thì vãn phải lấy nội dung cũ
    //bật react trong trình duyet len xem
    componentWillMount() {
        if(this.props.editDataItem){
            this.setState({
                noteTitle: this.props.editDataItem.noteTitle,
                noteContent: this.props.editDataItem.noteContent,
                id: this.props.editDataItem.id
            });
        }
    }
    
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
    }

    addData = (noteTitle,noteContent) => {
       //check form sua hay them moi
       //neu co id la sua
       if(this.state.id){
           //sua
           var editObject = {};
           editObject.id = this.state.id;
           editObject.noteTitle = this.state.noteTitle;
           editObject.noteContent = this.state.noteContent;
           this.props.editDataForStore(editObject);
           //tat form
           this.props.changeEditStatus();
           //hien thi thong bao
           this.props.alertOn("Sửa thành công!","success");

       }else{
           //them
           var item = {};
           item.noteTitle = noteTitle;
           item.noteContent = noteContent;
           //item = JSON.stringify(item);
           this.props.addDataForStore(item);
           //hien thi thong bao
           this.props.alertOn("Thêm mới thành công!","success");
       }
    }
    changeTitle = () => {
        if(this.props.addStatus){
            return <h3> Thêm mới</h3>
        }else{
            return <h3> Sửa </h3>
        }
    }
    render() {
        return (
            <div className="col-4">
               {this.changeTitle()}
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề Note</label>
                        <input defaultValue={this.props.editDataItem.noteTitle} type="text" onChange={(event) => this.isChange(event) } className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpNote" placeholder="Nhập tiêu đề note" />
                        <small id="helpNote" className="form-text text-muted">Điền tiêu đề note</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Nội dung Note</label>
                        <textarea defaultValue={this.props.editDataItem.noteContent} onChange={(event) => this.isChange(event) } className="form-control" name="noteContent" id="noteid" cols={30} rows={5}  />
                        <small id="helpNote" className="form-text text-muted">Điền nội dung note</small>
                    </div>
                    <button type="reset" onClick={() => this.addData(this.state.noteTitle,this.state.noteContent)} className="btn btn-primary btn-block">Lưu</button>
                </form>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editDataItem: state.editDataItem,
        addStatus: state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataForStore: (getItem) => {
            dispatch({
                type: "ADD_DATA", getItem
            })
        },
        editDataForStore: (getItem) => {
            dispatch({
                type: "EDIT", getItem
            })
        },
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
        alertOn: (alertContent,alerType) => {
            dispatch({
                type: "ALERT_ON",
                alertContent, alerType
            })
        },
        alertOff: () => {
            dispatch({
                type: "ALERT_OFF"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
