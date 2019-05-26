import React, { Component } from 'react';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle : '',
            noteContent : ''
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name);
        //console.log(value);
        
        this.setState({
            [name] : value
        });
    }

    addData = (noteTitle,noteContent) => {
        var item = {};
        item.noteTitle = noteTitle;
        item.noteContent = noteContent;
        this.props.getData(item);
    }
    render() {
        return (
            <div className="col-4">
                <h3>
                    Sửa nội dung note
                </h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề Note</label>
                        <input type="text" onChange={(event) => this.isChange(event) } className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpNote" placeholder="Nhập tiêu đề note" />
                        <small id="helpNote" className="form-text text-muted">Điền tiêu đề note</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Nội dung Note</label>
                        <textarea onChange={(event) => this.isChange(event) } className="form-control" name="noteContent" id="noteid" cols={30} rows={5} defaultValue={""} />
                        <small id="helpNote" className="form-text text-muted">Điền nội dung note</small>
                    </div>
                    <button type="reset" onClick={() => this.addData(this.state.noteTitle,this.state.noteContent)} className="btn btn-primary btn-block">Lưu</button>
                </form>
            </div>

        );
    }
}

export default NoteForm;