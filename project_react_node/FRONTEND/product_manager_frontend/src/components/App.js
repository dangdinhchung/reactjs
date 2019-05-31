import React, { Component } from 'react';
import './App.css';
import HeadTitle from './HeadTitle';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div>
        <HeadTitle/>
        <div className="container">
          <div className="row">
            <Product product_name='abc' product_price='111' image='http://kenh14cdn.com/zoom/60_60/2019/5/16/collage-15579968923122001614970-crop-155799692574236739737.png'/>
           
          </div>
        </div>
      </div>
    );
  }
}


export default App;
