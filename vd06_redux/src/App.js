import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //VD1 : đối tượng
  /*  var p1 = {
      ten : "man hinh",
      gia : 90
    }
    console.log(p1);
    var p2 = {...p1};
    p2.gia = 100;
    console.log(p1);
    console.log(p2); */

  //VD2 : Mảng
/*   var a1 = [1,2,3,4];
  var a2 = [...a1];
  console.log(a1);
  a2[0] = 999;
  console.log(a1);
  console.log(a2); */

  //VD3 : viết tắt toán từ 3 chấm
 /*  var b1 = {
    num : [12,13,14],
    status : true
  }
  var b2 = {...b1,status:false};
  console.log(b2);
  //thêm phần tử vào mảng num
  var b3 = {...b1,num:[...b1.num,100]}; //viết tắt
  //b3.num[3] = 100; viết thường
  console.log(b3); */
  

  // VD redux
  var redux = require('redux'); // thu viện
  var oldState = {
    num        : ["man hinh","chuot","ban phim"],
    editStatus : true
  }
  var reducer1 = (state = oldState,action) => { //2 tham số oldState và action , Khi mk khai báo action ntn thì mặc định sẽ có 2 thuộc tính type và item
    switch (action.type) { //đặt tên cho action, đặt công việc cho nó rồi cho reducer thực hiện
      case "CHANGE_EDIT_STATUS": // nếu mà tên như này thì thực thi dispatch
          return {...state,editStatus:!state.editStatus}
        break;
      case "ADD_NEW":
          return { ...state, num: [...state.num, action.newItem] } //copy num sau đó thêm phần tử mới vào, thuộc tính newItem do mk tự định nghĩa
        break;
    
      default:
        break;
    }
    return state;
  }
  var store1 = redux.createStore(reducer1); // quản lý reducer và state nhưng reducer quản lý state nên store chỉ cần quản lý reducer
  console.log(store1.getState());
  store1.dispatch({type:"CHANGE_EDIT_STATUS"}) // thực thi cái action kia
  console.log(store1.getState());
  store1.dispatch({
    type: "ADD_NEW",
    newItem : "Tai Nghe"
  })
  console.log(store1.getState());
  
  

  
  
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
