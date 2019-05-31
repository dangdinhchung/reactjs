import { noteData } from './firebaseConnect';

var redux = require('redux');
const noteInitialState = {
    isEdit : false,
    isAdd : false,
    isAlert : false,
    alertContent : '',
    alertType : '',
    editDataItem : {}
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.getItem);
            //alert('thêm ' + JSON.stringify(action.getItem) + " thành công");
            //console.log('Kết nối thành công, biến nhận vào là : ' + action.getItem);
            return state
        case "CHANGE_EDIT_STATUS":
            return {...state,isEdit:!state.isEdit}
        case "CHANGE_ADD_STATUS":
            return { ...state, isAdd: !state.isAdd }
        case "ALERT_ON":
            return { ...state, isAlert: true, alertContent: action.alertContent, alertType: action.alertType }
        case "ALERT_OFF":
            return { ...state, isAlert: false }
        case "GET_EDIT_DATA":
            return {...state, editDataItem: action.editObject }
        case "DELETE":
            noteData.child(action.deleteID).remove();
            //alert('Xóa thành công có id là : ' + action.deleteID);
            return state;
        case "EDIT":
            //cap nhat du lieu vao firebase
            noteData.child(action.getItem.id).update({
                noteTitle : action.getItem.noteTitle,
                noteContent: action.getItem.noteContent
            })
            //alert('Cập nhật dữ liệu thành công!')
            //console.log('Du lieu nhan dươc la : ' + JSON.stringify(action.getItem));
            
            return {...state}
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
//thoi dõi state
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()))
})
export default store;