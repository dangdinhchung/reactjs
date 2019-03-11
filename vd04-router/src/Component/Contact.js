import React, { Component } from 'react';
import  Redirect from "react-router-dom/Redirect";


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect : false,
      ngay : "ngaythu5"
    }
  }

  isChange = (event) => {
    const ten = event.target.name;
    const giatri = event.target.value;
    this.setState({
      [ten] : giatri
    });
  }

  //file
  isChangeFile = (event) => {
    const anh = event.target.files[0].name;
    this.setState({
      tenanh : anh
    });
  }

  getGiaTri = () => {
    var noiDung = "";
    noiDung += "Ten nhan duoc la : " + this.state.name;
    noiDung += "email nhan duoc la : " + this.state.email;
    noiDung += "phone nhan duoc la : " + this.state.phone;
    noiDung += "mess nhan duoc la : " + this.state.mess;
    noiDung += "Ngay nhan duoc la : " + this.state.ngay;
    noiDung += "Tên anh nhan duoc la : " + this.state.tenanh;
    return noiDung;
  }
  
  submitForm = (event) => {
    event.preventDefault();
    this.setState({
      isRedirect : true
    });
  }
    render() {
      if(this.state.isRedirect){
        console.log(this.getGiaTri());
        
        return <Redirect to="/"></Redirect>
      }
        return (
            <div>
            <header className="masthead">
              <div className="container h-100">
                <div className="row h-100"> 
                  <div className="col-lg-7 my-auto">
                    <div className="header-content mx-auto">
                      <h1 className="mb-5">Trang contact</h1>
                      <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Contact</a>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* contactc */}
            <section id="contact">
              <div className="container">
                <h2 className="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                <hr className="star-dark mb-5" />
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                    {/* The form should work on most web servers, but if the form is not working you may need to configure your web server differently. */}
                    <form name="sentMessage" id="contactForm" noValidate="novalidate">
                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                          <label>Name</label>
                          <input name="name" onChange={(event) => this.isChange(event)} className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                          <label>Email Address</label>
                          <input name="email" onChange={(event) => this.isChange(event)} className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                          <label>Phone Number</label>
                          <input name="phone" onChange={(event) => this.isChange(event)} className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                          <label>Message</label>
                          <textarea name="mess" onChange={(event) => this.isChange(event)} className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <br />
                      
                      <div className="control-group">
                          <label for="">Chọn ngày</label>
                          <select value={this.state.ngay} className="form-control" name="ngay" onChange={(event) => this.isChange(event)}>
                            <option value="ngaythu3">Ngày thứ 3</option>
                            <option value="ngaythu5">Ngày thứ 5</option>
                            <option value="ngaythu7">Ngày thứ 7</option>
                          </select>
                      </div>
                      <br />
                      <div className="control-group">
                          <label for="">Chọn ảnh</label>
                          <input type="file" className="form-control" onChange={(event) => this.isChangeFile(event)} name="anh"></input>
                      </div>
                      <br />
                      <div id="success" />
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-xl" onClick={(event) => this.submitForm(event)} id="sendMessageButton">Send</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            {/* end contactc */}
          </div>
          
        );
    }
}

export default Contact;