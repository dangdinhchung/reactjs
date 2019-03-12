import React, { Component } from 'react';

class Search extends Component {
    hienThiNut = () => {
        if(this.props.hienThiNut === true){
            return  <div className="btn btn-block btn-warning" onClick={() => this.props.doiTrangThai()}>Đóng lại</div>;
        }else{
            return  <div className="btn btn-info btn-block" onClick={() => this.props.doiTrangThai()}>Thêm mới</div>;
        }
    }
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                    <input type="text" className="form-control " placeholder="Nhập từ khóa" aria-describedby="helpId" style={{width: '500px'}} />
                    <div className="btn btn-info">Tìm</div>
                    </div>
                    <br/>

                    {this.hienThiNut()}
                   
                    <hr/>
                </div>
            </div>
        );
    }
}

export default Search;