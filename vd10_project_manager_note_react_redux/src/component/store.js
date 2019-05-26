import { noteData } from './firebaseConnect';

var redux = require('redux');
const noteInitialState = {
    testConnect : 'testthoi'
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.getItem);
            alert('thêm ' + JSON.stringify(action.getItem) + " thành công");
            //console.log('Kết nối thành công, biến nhận vào là : ' + action.getItem);
            return state
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
export default store;