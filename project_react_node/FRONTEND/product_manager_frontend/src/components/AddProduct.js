import React, { Component } from 'react';
import axios from 'axios';

//gửi dữ liệu thêm mới sang cho nodejs
const addProductAction = (product_name, product_price, image) => 
    (axios.post('/add', { product_name, product_price, image }) //http://localhost:4000 - khi thêm proxy trong package.json thì k cần http nữa
        .then((resp) => resp.data))


class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            product_name : '',
            product_price : '',
            image : ''
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
    }
    handleClick = () => {
        console.log(JSON.stringify(this.state));
        /* var product_name = this.state.product_name;
        var product_price = this.state.product_price;
        var image = this.state.image; */

        //viết tắt
        var {product_name,product_price,image} = this.state;
        addProductAction(product_name, product_price, image).then((response) => {
            console.log(response);
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">
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

        );
    }
}

export default AddProduct;