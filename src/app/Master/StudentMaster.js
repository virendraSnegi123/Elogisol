import React, { Component } from 'react';
import '../../assets/Cssfile/Master/StudentMaster.css';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class StudentMaster extends Component {
  render() {
    return (
      <>
        {/* navstart */}
        <div className='Pagenav'>
          <div className=" row page-titles ">
            <div className="navleft col-md-4 align-self-center text-left">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"> <Link to="/dashboard">Home</Link></li>
                <li class="breadcrumb-item active">Student Master</li>
                <span id="ContentPlaceHolder1_lblErrorMessage" class="label"></span>
              </ol>
              <span id="ContentPlaceHolder1_Label5" class="FormLabel" ></span>
            </div>

            <div id="ContentPlaceHolder1_dvButton" className="col-md-8 align-self-center text-right top-btn-space">
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnAdd" value="Add New" id="ContentPlaceHolder1_btnAdd" className="btn-first" />
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnEdit" value="Cancel" id="ContentPlaceHolder1_btnEdit" className="btn-first" />
            </div>
          </div>
        </div>
        {/* navend */}
        <div className="StudentMaster row spacing">
          <div className="col-md-12 Fee-Master mobile-spacing pl-4">
            <div className="row select-vendor">
              <div className="search-bar col-sm-12 form-inline inline-space">
                <span class="control-label pt-1 text-secondary pr10">Student Information <span class="text-danger">*</span></span>
                <div className="col-md-4 form-group role-name pleft0">
                  <input type="text" class="form-control shadow-none" />
                  <button className='btn-first'><img src={require('../../assets/images/search-icon.png')} alt="searchimg" /></button>
                </div>
              </div>
            </div>
            <div className="welcome-top">
              <div className="row spacing">
                {/*Start leftside */}
                <div className="leftside col-md-7 commen-space pr-0">
                  <div className="row">
                    <div class="col-md-12 commen-space">
                      <h4 class="student-heading">Student Information</h4>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 text-center commen-space ">
                      <div class="student-profile">
                        <img src={require('../../assets/images/user.png')} alt="" />
                      </div>
                    </div>

                    {/* left right teble */}
                    <div className="student-table col-md-12 mt-2">
                      <div className="row">
                        <div className="col-md-6 pr-0" id='collegeinfo'>
                          <table class="studenTable1 table">
                            <tbody>
                              <tr>
                                <th>Collage</th>
                                <td>
                                  <select class="form-select" >
                                    <option value="1">IMPERIUM OVERSEAS PRIVATE LIMITED H.O</option>
                                    <option selected="selected" value="2">Imperium Transport-A Unit of IOPL</option>
                                    <option value="3">Imperium Transport-Jhansi-A Unit of IOPL</option>
                                    <option value="5">Imperium Transport-Lucknow- A Unit of IOPL</option>
                                    <option value="4">Imperium Transport-Unnao -A Unit of IOPL</option>
                                  </select>
                                </td>
                              </tr>
                              <tr>
                                <th>Enrl/CRN</th>
                                <td>
                                  <input type="text" />
                                </td>
                              </tr>
                              <tr>
                                <th>Gender</th>
                                <td>
                                  <select class="form-select" >
                                    <option selected>---Select---</option>
                                    <option value="1">One</option>
                                  </select>
                                </td>
                              </tr>
                              <tr>
                                <th>Session</th>
                                <td>
                                  <select class="form-select" >
                                    <option selected>---Select---</option>
                                    <option value="1">One</option>
                                  </select>
                                </td>
                              </tr>
                              <tr>
                                <th>Section</th>
                                <td>
                                  <select class="form-select" >
                                    <option selected>---Select---</option>
                                    <option value="1">One</option>
                                  </select>
                                </td>
                              </tr>
                              <tr>
                                <th>Mobile No.</th>
                                <td>
                                  <input type="text" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-md-6 pl-0" id='studentinfo'>
                          <table class="studenTable1 table">
                            <tbody>
                              <tr>
                                <th>Student Name</th>
                                <td>
                                  <input type="text" />
                                </td>
                              </tr>
                              <tr>
                                <th>DOB</th>
                                <td>
                                  <input type="date" placeholder='dd/mm/yyyy' />
                                </td>
                              </tr>
                              <tr>
                                <th>Date of Adm.</th>
                                <td>
                                  <input type="date" placeholder='dd/mm/yyyy' />
                                </td>
                              </tr>
                              <tr>
                                <th>Student Class</th>
                                <td>
                                  <select class="form-select" >
                                    <option selected>--Select--</option>
                                    <option value="1">One</option>
                                  </select>
                                </td>
                              </tr>
                              <tr>
                                <th>Email Id</th>
                                <td>
                                  <input type="email" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Father ,mother Information img*/}
                  <div className="Father-mother row">
                    {/* Fatherside */}
                    <div class="col-md-6 commen-space pr-1">
                      <div className="row">
                        <div className="col-md-12 text-center commen-space ">
                          <div class="student-profile">
                            <img src={require('../../assets/images/user.png')} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div class="col-md-12 commen-space">
                          <h4 class="student-heading">Father Information</h4>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 commen-space">
                          <table class="studenTable1 table ">
                            <tbody>
                              <tr>
                                <th>Name</th>
                                <td>
                                  <input type="text" />
                                </td>
                              </tr>
                              <tr>
                                <th>Occupation </th>
                                <td>
                                  <input type="text" />
                                </td>
                              </tr>
                              <tr>
                                <th>Mobile No.</th>
                                <td>
                                  <input type="text" />
                                </td>
                              </tr>
                              <tr>
                                <th>Email</th>
                                <td>
                                  <input type="Email" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* Mother side */}
                    <div class="col-md-6 commen-space pl-0">
                      <div className="row">
                        <div className="col-md-12 text-center commen-space ">
                          <div class="student-profile">
                            <img src={require('../../assets/images/user.png')} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div class="col-md-12 commen-space">
                          <h4 class="student-heading">Mother Information</h4>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 commen-space">
                          <table class="studenTable1 table">
                            <tbody>
                              <tr>
                                <th>Name</th>
                                <td>
                                  <input type="text" />
                                </td>
                              </tr>
                              <tr>
                                <th>Occupation </th>
                                <td>
                                  <input type="text" />
                                </td>
                              </tr>
                              <tr>
                                <th>Mobile No.</th>
                                <td>
                                  <input type="text" />
                                </td>
                              </tr>
                              <tr>
                                <th>Email</th>
                                <td>
                                  <input type="Email" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*END leftside */}

                {/*start rightside */}
                <div className="rightside col-md-5 commen-padding ">
                  <div className='row'>
                    <div class="col-md-12 commen-space">
                      <h4 class="student-heading">Transport Facility
                        <span class="checkOff">
                          <span class="aspNetDisabled"><input id="ContentPlaceHolder1_chkTptStatus" type="checkbox" name="ctl00$ContentPlaceHolder1$chkTptStatus" /><label for="ContentPlaceHolder1_chkTptStatus">Transport Facility</label></span>
                        </span>
                      </h4>
                    </div>
                    <div class="col-md-12 commen-space">
                      <table class="studenTable1 table mb-0">
                        <tbody>
                          <tr>
                            <th>Bus Route </th>
                            <td>
                              <select class="form-select" >
                                <option selected>---Select---</option>
                                <option value="1">One</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <th>Pickup Point </th>
                            <td>
                            <select class="form-select" >
                                <option selected>---Select---</option>
                                <option value="1">One</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <th>Vihicle No</th>
                            <td>
                              <select class="form-select" >
                                <option selected>---Select---</option>
                                <option value="1">One</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <th>Free Category </th>
                            <td>
                              <select class="form-select" >
                                <option selected>---Select---</option>
                                <option value="1">One</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <th>Free Discount (%)</th>
                            <td>
                              <select class="form-select" >
                                <input type="text" name="" id="" />
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <th>Discount Remarks </th>
                            <td>
                              <input type="text" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-md-12 commen-space">
                      <h4 class="student-heading mb-0">Address</h4>
                    </div>
                    <div class="col-md-12 commen-space">
                      <h6 className='mt-1'>Present Address</h6>
                    </div>
                    <div class="col-md-12 commen-space">
                      <table class="studenTable1 table mb-0">
                      <tbody>
                          <tr>
                            <th>Address </th>
                            <td>
                              <textarea name="" id="" rows="1"></textarea>
                            </td>
                          </tr>
                          <tr>
                            <th>City</th>
                            <td>
                              <textarea name="" id="" rows="1"></textarea>
                            </td>
                          </tr>
                          <tr>
                            <th>State </th>
                            <td>
                              <textarea name="" id="" rows="1"></textarea>
                            </td>
                          </tr>
                          <tr>
                            <th>Country </th>
                            <td>
                              <textarea name="" id="" rows="1"></textarea>
                            </td>
                          </tr>
                          <tr>
                            <th>Pincode</th>
                            <td>
                              <textarea name="" id="" rows="1"></textarea>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-md-12 commen-space">
                      <h6 className='mt-1'>Permanent Address
                        <span class="checkOff">
                          <span class="aspNetDisabled"><input id="ContentPlaceHolder1_chkTptStatus" type="checkbox" name="ctl00$ContentPlaceHolder1$chkTptStatus" /><label for="ContentPlaceHolder1_chkTptStatus">Same As Present Address</label></span>
                        </span>
                      </h6>
                    </div>
                    <div class="col-md-12 commen-space">
                      <table class="studenTable1 table mb-0">
                        <tbody>
                          <tr>
                            <th>Address </th>
                            <td>
                              <textarea name="" id="" rows="1"></textarea>
                            </td>
                          </tr>
                          <tr>
                            <th>City</th>
                            <td>
                              <textarea name="" id="" rows="1"></textarea>
                            </td>
                          </tr>
                          <tr>
                            <th>State </th>
                            <td>
                              <textarea name="" id="" rows="1"></textarea>
                            </td>
                          </tr>
                          <tr>
                            <th>Country </th>
                            <td>
                              <textarea name="" id="" rows="1"></textarea>
                            </td>
                          </tr>
                          <tr>
                            <th>Pincode</th>
                            <td>
                              <textarea name="" id="" rows="1"></textarea>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/*end rightside */}
              </div>
            </div>

          </div>
        </div>
      </>
    )
  }
}
