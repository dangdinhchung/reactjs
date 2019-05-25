import numReducer from './reducers/numReducer';
import editStatusReducer from './reducers/editStatusReducer';

//viết bình thường : viết chung reducer sẽ như thế này
/* var oldState = {
    num: ["man hinh", "chuot", "ban phim"],
    editStatus: true
}
var reducer1 = (state = oldState, action) => { 
    switch (action.type) { 
        case "CHANGE_EDIT_STATUS": 
            return { ...state, editStatus: !state.editStatus }
        case "ADD_NEW":
            return { ...state, num: [...state.num, action.newItem] } 
        case "DELETE":
            return { ...state, num: state.num.filter((value, key) => key !== action.index) } 
        default:
            return state;
    }

} */


var redux = require('redux'); 
//tách nhỏ reducer: tạo folder reducers
//kết hợp 2 reducer với nhau 
var allReducers = redux.combineReducers({
    num: numReducer,
    editStatus: editStatusReducer
})


var store1 = redux.createStore(allReducers); 
//thoi doi trang thai state
store1.subscribe(() => {
    console.log(JSON.stringify(store1.getState()));
});
//thay doi status
store1.dispatch({ type: "CHANGE_EDIT_STATUS" }) 
//them
store1.dispatch({
    type: "ADD_NEW",
    newItem: "Tai Nghe"
})

//xoa
store1.dispatch({
    type: "DELETE",
    index: 0 
})

export default store1;