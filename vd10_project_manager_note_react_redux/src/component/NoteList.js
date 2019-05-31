import React, { Component } from 'react';
import { noteData } from './firebaseConnect';
import NoteItem from './NoteItem';

class NoteList extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataFirebase : []
        }
    }
    //trước khi render phải lấy dữ liệu trước
    
    componentWillMount() {
        noteData.on('value', (notes) => {
            var arrayData = [];
            notes.forEach(element => {
                const key = element.key;
                const noteTitle = element.val().noteTitle;
                const noteContent = element.val().noteContent;
                arrayData.push({
                    id: key,
                    noteTitle: noteTitle,
                    noteContent: noteContent
                })
            });
            //tại vì chỉ lây được dữ liệu trong hàm on nên phải cho vào state để ra khỏi hàm cũng có thể dùng được
            this.setState({
                dataFirebase: arrayData
            });
        });
    }
    
    //lấy dữ liệu từ firebase
    getData = () => {
       if(this.state.dataFirebase){
        return this.state.dataFirebase.map((value,key) => {
            return (
                <NoteItem
                key = {key}
                i = {key}
                note = {value}
                noteTitle = {value.noteTitle}
                noteContent = {value.noteContent}
                />
            )
           })
       }
    }
    render() {
        return (
            <div className="col">
                <div id="note-list" role="tablist" aria-multiselectable="true">
                    {this.getData()}
                </div>
            </div>

        );
    }
}

export default NoteList;