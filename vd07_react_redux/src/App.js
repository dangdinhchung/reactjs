import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import News from './News';
import { connect } from 'react-redux';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.dulieu}
        <News />
      </div>
    );
  }
}


//bố là index.js -> app.js -> News.js
//để lấy dữ liệu từ store truyền lên component app thì phải chuyển hết state thành props thì mới truyền được dữ liêu vì state là private
//sau khi truyền được thì bên app sẽ nhận được this.props.dulieu
//sau đó phải kết nối : sửa phần export
//sau đó bên phần index.js nhận được
//=> thằng app đã lấy được dữ liệu từ Store
const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num //dulieu la props
  }
}

export default connect(mapStateToProps)(App)
