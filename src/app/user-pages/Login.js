import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Form } from 'react-bootstrap';
// import './loginvalidation.js'
export class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="login container login-transchain">
            <div className="d-flex justify-content-center  align-items-center">
              <div className="row" >
                <div className="col-md-6 vertical-line">
                  <img id="Image1" class="logo-img" src={require("../../assets/images/COMPANYLOGO.png")} alt="logo" />
                </div>

                <div className="loginForm col-md-6 p-r-0 ">
                  <div className="form-signin">
                      <h1 className="text-left">Please sign in</h1>
                      <div className="login-position">
                        <span id="lblUserName" class="FormLabel">User Name <span className="text-danger">*</span></span>
                        <input name="textUserName" type="text" id="textUserName"  className="form-control" placeholder="User Name" />
                      </div>
                      <div className="login-position">
                        <span id="lblPassword" class="FormLabel">Password <span className="text-danger">*</span></span>
                        <input name="textPassword" id="textPassword" class="form-control" autocomplete="off" type="password" placeholder="Password" />
                      </div>
                      <div className="login-position">
                        <span id="lblCompany" className="FormLabel">Company <span className="text-danger">*</span></span>
                        <select name="lstCompany" id="lstCompany" title="Company Name" className="form-control">
                          <option value="2">IMPERIUM - APS PANKI</option>
                          <option value="1">IMPERIUM OVERSEAS PRIVATE LIMITED</option>
                          <option value="3">IMPERIUM - APS JHANSI</option>
                          <option value="4">IMPERIUM - DPS UNNAO</option>
                          <option value="5">IMPERIUM - DPS GOMTI NAGAR</option>
                          <option selected="selected" value="0">---Select---</option>
                        </select>
                      </div>
                      <div className="login-position">
                        <div className="form-group row">
                          <div className="captcha-wth col-md-7 ">
                            <span id="lblCaptch" className="FormLabel">Captcha <span className="text-danger">*</span></span>

                            <input name="txtEntCaptcha" id="txtEntCaptcha" className="form-control" type="text" placeholder="captcha code here" />
                          </div>
                          <div className="codebutton col-md-3 " >
                            <button className='btn-first' ><span id="captcha-code"> 9720</span > </button>
                          </div>
                          <div className="captcha-btn commen-space col-md-2 ">
                            <a href="/"> <img src={require("../../assets/images/refresh.png")} alt="logo" /></a>
                          </div>
                          <Link className="submittbtn btn btn-lg btn-primary btn-block" to="/dashboard">SIGN IN</Link>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <img id="Image1" class="logo-img" src={require("../../assets/images/suyogelogisollogo.jpg")} alt="logo" />
        </div>


      </div>
    )
  }
}

export default Login
