import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        //su dung state : object
        this.state = {
            trangThai:0
        }
    }

    //xu ly tuong tac trong javascript : neu khong co tham so
    thongbao = () => { alert('Khong co tham so') }
    //neu co tham so co 2 cach
    //chu y : neu dung arrow funtion thi dung cho ca 2 cach deu duoc
     //c1 : dung arrow function () => 
    thongbao2 = (x) => {alert(x)}   
    //c2 : dung bind(this,'thamso')
    thongbao3 = (x) => {alert(x)}

    //thuc hanh state :
    renderButton = () => (
        <div className="row">
            <button type="submit" className="btn btn-success" onClick={() => this.editClick()} >Edit</button>
            <button type="submit" className="btn btn-warning">Remove</button>
        </div>
    )
    renderForm = () => (
        <div className="row">
            <div className="form-group">
                {/* su dung thuoc tinh ref : luwu du lieu trung gian */}

                <input type="text" ref={(dulieunhap) => {this.trunggian = dulieunhap }} defaultValue={this.props.tieude} name="ten" id className="form-control" /><br/>
                <button type="submit" className="btn btn-block btn-warning" onClick={() => this.saveClick()}>Save</button>
            </div>
        </div>
    )

    checkDisplay = () => {
        if(this.state.trangThai === 0){
            return this.renderButton();
        }else{
            return this.renderForm();
        }
    }

    editClick = () => {
        this.setState({trangThai : 1});
    }
    saveClick = () => {
        this.setState({trangThai : 0});
        //hien thi cai bien trung gian consolog
        console.log(this.trunggian.value);
        
    }
    
    render() {
        return (
            <section>
            <div className="container">
                <div className="row align-items-center">
                <div className={"col-lg-6 " + this.props.vitri}>
                    <div className="p-5">
                    <img className="img-fluid rounded-circle" width="400px" height="400px" src={this.props.linkanh} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 order-lg-1">
                    <div className="p-5">
                    <h2 className="display-4">{this.props.tieude}</h2>
                    <p>{this.props.noidung}</p>
                    </div>
                </div>
                </div>
                {/* Thuc hanh voi tuong tac trong rectjs */}
                {/* <div className="row">
                    <button type="submit" className="btn btn-success" onClick={this.thongbao}>Edit</button>
                    <button type="submit" className="btn btn-warning" onClick={() => this.thongbao2('Co tham so - arrow function')}>Remove</button>
                    <button type="submit" className="btn btn-danger" onClick={this.thongbao3.bind(this,'Co tham so bind')}>Detail</button>
                    <button type="submit" className="btn btn-warning" >State</button>
                  </div>
                   */}

                   {/* thuc hanh state */}
                   {this.checkDisplay()}
            </div>
            </section>

        );
    }
}

export default Content;