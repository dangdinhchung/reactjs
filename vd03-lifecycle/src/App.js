import React, { Component } from 'react';
import './App.css';
import Test from './Test.js';
class App extends Component {
  
//Thuc hang lifecycle
//B1 : khoi tao : initialization
constructor(props) {
  super(props);
  this.state = {
    trangthai : "khoitao",
    trangthai2 : "khoitao2"
  }
}

//b2 : Mounting

componentWillMount() {
  console.log('Componentwillmount da chay roi'); //chay dau tien
}
componentDidMount() {
  console.log('ComponentDidMount da chay roi');//chay cuoi cung
  
}

//b3 : updation
shouldComponentUpdate(nextProps, nextState) { //tra ve true va false : true thi chay tiep
  console.log('shouldComponentUpdate da chay roi');
  return true;
}
componentWillUpdate(nextProps, nextState) {
  console.log('componentWillUpdate da chay roi');
}
componentDidUpdate(prevProps, prevState) {
  console.log('componentDidUpdate da chay roi');
}
capNhatState = () => {
  this.setState({
    trangthai : "Cap nhat 1",
    trangthai2 : "Cap nhat 2"
  });
}



  
  render() {
    //console.log('Day la ham render da chay roi'); //chay thu hai
    //console.log(this.state.trangthai);
    
    return (
      <div className="App">
      <Test trangthai={this.state.trangthai2}/>
        <button onClick={() => this.capNhatState()}>Click here</button>
      </div>
    );
  }
}

export default App;
