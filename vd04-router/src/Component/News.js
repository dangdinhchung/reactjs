import React, { Component } from 'react';
 import NewItem from './NewItem.js';
 import dulieu from './dulieu.json';

class News extends Component {
    render() {
        return (
            <div>
              <header className="masthead">
                <div className="container h-100">
                  <div className="row h-100">
                    <div className="col-lg-7 my-auto">
                      <div className="header-content mx-auto">
                        <h1 className="mb-5">Trang tin tuc</h1>
                        <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">tin tuc!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
            <div className="container">
              <div className="row mt-3">
               {
                 dulieu.map((value,key) => {
                  return (
                    <NewItem tinID={value.id} key={key} tieude={value.tieude} tomtat={value.tomtat} anh={value.anh}/>
                  )
                 })
               } 
              </div>
          </div>
    </div>
        );
    }
}

export default News;