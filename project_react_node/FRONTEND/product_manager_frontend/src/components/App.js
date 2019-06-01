import React, { Component } from 'react';
import './App.css';
import HeadTitle from './HeadTitle';
import Product from './Product';
import axios from 'axios';
import AddProduct from './AddProduct';
//lấy dữ liệu
const getProductData = () => axios.get('/getdata01')//http://localhost:4000 - khi thêm proxy trong package.json thì k cần http nữa
                            .then((res) => res.data)
//gửi dữ liệu thêm mới sang cho nodejs
const addProductAction = (product_name, product_price, image) =>
  (axios.post('/add', { product_name, product_price, image }) //http://localhost:4000 - khi thêm proxy trong package.json thì k cần http nữa
    .then((resp) => resp.data))

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
      product_name : '',
      product_price : '',
      image : ''
    }
  }

  
  componentWillMount() {
    if(this.state.data === null){
      getProductData().then((res) => {
        this.setState({
          data : res
        });
      });
    }
  }

  /* component addproduct.js */
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }
  handleClick = () => {
    console.log(JSON.stringify(this.state));
    /* var product_name = this.state.product_name;
    var product_price = this.state.product_price;
    var image = this.state.image; */

    //viết tắt
    var { product_name, product_price, image } = this.state;
    //cập nhật dữ liệu luôn sau khi them
    var dataTemp = [];
    var item = {};
    item.product_name = product_name;
    item.product_price = product_price;
    item.image = image;
    dataTemp = this.state.data;
    if(item.product_name !== ''){//kiểm tra xem có điền tên sản phẩm ko
      dataTemp.push(item);
      this.setState({
        data : dataTemp
      });
    }
    addProductAction(product_name, product_price, image).then((response) => {
      console.log(response);
    })
  }
  /* end component addproduct.js */




  
  //in du lieu ra giao dien
  printData = () => {
    if(this.state.data !== null){
      return this.state.data.map((value,key) => {
        return (
          <Product 
          key={key}
          product_name={value.product_name} 
          product_price={value.product_price}
          image={value.image}/>
        )
      })
    }
  }

  render() {

    console.log(this.state.data);

    //const axios = require('axios');
   /*  axios.get('http://localhost:4000/getdata01')
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      }); */
    return (
      <div>
        <HeadTitle/>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="row">
              {this.printData()}
              </div>
              </div>
          
            <div className="col-4">
              <form action="add" method="post">
                <div className="form-group">
                  <label htmlFor="product_name">Tên sản phẩm</label>
                  <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="product_name" id="product_name" aria-describedby="name" placeholder="Nhập tên sản phẩm" />
                  <small id="name" className="form-text text-muted">Nhập zô</small>
                </div>
                <div className="form-group">
                  <label htmlFor="product_price">Giá sản phẩm</label>
                  <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="product_price" id="product_price" aria-describedby="name" placeholder="Nhập giá sản phẩm" />
                  <small id="name" className="form-text text-muted">Nhập zô</small>
                </div>
                <div className="form-group">
                  <label htmlFor="image">Link ảnh sản phẩm</label>
                  <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="image" id="image" aria-describedby="name" placeholder="Nhập link ảnh sản phẩm" />
                  <small id="name" className="form-text text-muted">Nhập link ảnh zô</small>
                </div>
                <button type="reset" onClick={() => this.handleClick()} className="btn btn-primary">Lưu</button>
              </form>
            </div>
           
          </div>
        </div>
       {/*  <div className="container">
          <div className="row">
            
          </div>
        </div> */}
      </div>
    );
  }
}


export default App;
