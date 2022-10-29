import React, { Component } from 'react'
import '../../assets/Cssfile/Finance/OfflinePaymentUpdate.css';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class OfflinePaymentUpdate extends Component {
  render() {
    return (
      <>
        {/* navstart */}
        <div className="Pagenav">
          <div className=" row page-titles ">
            <div className="navleft col-md-4 align-self-center text-left">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"> <Link to="/dashboard">Home</Link></li>
                <li class="breadcrumb-item active">Offline Payment Update</li>
                <span id="ContentPlaceHolder1_lblErrorMessage" class="label"></span>
              </ol>
              <span id="ContentPlaceHolder1_Label5" class="FormLabel" ></span>
            </div>
          </div>
        </div>
        {/* navend */}
        <div className=" row spacing">
          <div className="OfflinePaymentUpdate col-md-9 mobile-spacing pRight0 pl-4">
            <div className="Onlinetable data-spacing list-show p-t-10">
              <div className="row select-vendor mb-4 ">
                <div className="col-sm-12 form-inline inline-space mtop10">
                  <label>Search By  <span className='text-danger'>*</span></label>
                  <select class="form-control shadow-none mx-4" id='crn' aria-label="Default select example">
                    <option selected>By CRN</option>
                    <option value="1">By Name</option>
                    <option value="2">By Mobile</option>
                  </select>
                  <label for="inputEmail4">Search Value <span className='text-danger'> *</span></label>
                  <input type="text" class="form-control shadow-none ml-3 " id="searchbar"/>
                  <button className='btn-first '><img src={require('../../assets/images/search-icon.png')} alt="Logo" /></button>
                </div>
              </div>
              <hr></hr>
            </div>

            <div className="ContentPlaceHolder1_frmError"></div>
            <div class="remarks">
              <p>
                <b>Note:-</b>
                <br></br>
                i Please tick the respective Billing Category box to pay the due.<br></br>
                ii For any changes in amount to be paid, first alter the amount then tick the respective box to pay due.
              </p>
            </div>
          </div>

          <div class="OfflinePayRight col-md-3 mobile-spacing px-0 ">
            <div className="col-md-12 commen-space">
              <h5>OFFLINE PAYMENT</h5>
              <div class="form-group col-md-12 px-0 mb-0">
                <label >Amount</label>
                <input type="text" class="form-control shadow-none" value='0' />
              </div>
              <div class="form-group col-md-12 px-0 mb-0">
                <label >Payment Mode<span className='text-danger'>*</span></label>
                <select className='form-control shadow-none'>
                  <option selected>--Select Modo--</option>
                  <option value="1">Cash </option>
                  <option value="2">Cheque</option>
                  <option value="2">Online</option>
                  <option value="2">DD</option>
                  <option value="2">Remarks</option>
                </select>
              </div>
              <div class="form-group col-md-12 px-0 mb-0">
                <label >Instument No. <span className='text-danger'>*</span></label>
                <input type="text" class="form-control shadow-none" placeholder='Instument No.' />
              </div>
              <div class="form-group col-md-12 px-0 mb-0">
                <label >Instument Date <span className='text-danger'>*</span></label>
                <input type="date" class="form-control shadow-none" placeholder='Instument Date dd/mm/yy' />
              </div>
              <div class="form-group col-md-12 px-0 ">
                <label >Remarks </label>
                <textarea row='1' class="form-control shadow-none" placeholder='Remarks'></textarea>
              </div>
              <div class="form-group col-md-12 px-0 mb-0">
                <button className='btn-first'>Save</button>
                <button className='btn-first'>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
