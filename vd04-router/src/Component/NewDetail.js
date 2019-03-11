import React, { Component } from 'react';
import dl from './dulieu.json';
import NewsRelated from './NewsRelated.js';

class NewDetail extends Component {
    render() {
      //lấy ra id cua tin
      //console.log(this.props.match.params.id);
      //xử lý việc in tin liên quan
      var dem = 1;
        return (
            <div>
            <header className="masthead">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-7 my-auto">
                    <div className="header-content mx-auto">
                      <h1 className="mb-5">Trang chi tiet tin tuc</h1>
                      <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Chi tiet tin tuc!</a>
                    </div>
                  </div>
                </div>
              </div>
            </header>
           {
             dl.map((value,key) => {
                //Lưu ý : trước khi kiểm tra thì kiểm tra xem id có kiểu dữ liệu là gì : typeOf
                if(value.id === parseInt(this.props.match.params.id,20)){
                return (
                    <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                      <img src={value.anh} className="img-fluid" alt="" />
                      <p className="lead">{value.tieude}</p>
                      <hr className="my-2" />
                      <p>{value.tomtat}</p>
                    </div>
                  </div>
                )
              }
             })
           }
            <div className="container">
              <div className="card-body">
                <h4 className="card-title">Tin lien quan</h4>
              </div>
              <div className="row">
                <div className="card-deck">
                {
                  dl.map((value,key) => {
                          if(value.id !== parseInt(this.props.match.params.id,20)){
                            if(dem <= 4){
                              dem++;
                        return (
                          <NewsRelated tinID={value.id} key={key} tieude={value.tieude}  anh={value.anh}/>
                        )
                      }
                    }
                  })
               }    
                </div>    
              </div>
            </div>
            {/* tin tuc */}
            <div className="container">
            </div>
            {/* end tin tuc */}
          </div>  
        );
    }
}

export default NewDetail;