import React, { Component } from 'react';

class NoteItem extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#note-list" href={"#number" + this.props.i} aria-expanded="true" aria-controls="notecontent1">
                           {this.props.noteTitle}
                        </a>
                    </h5>
                </div>
                <div id={"number" + this.props.i}  className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteItem;