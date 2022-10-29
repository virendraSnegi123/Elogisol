import React, { Component } from 'react'
import '../../assets/Cssfile/Finance/OnlinePaymentUpdate.css';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class OnlinePaymentUpdate extends Component {
  render() {
    return (
      <>
        {/* navstart */}
        <div className="Pagenav">
          <div className=" row page-titles ">
            <div className="navleft col-md-4 align-self-center text-left">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"> <Link to="/dashboard">Home</Link></li>
                <li class="breadcrumb-item active">Online Payment</li>
                <span id="ContentPlaceHolder1_lblErrorMessage" class="label"></span>
              </ol>
              <span id="ContentPlaceHolder1_Label5" class="FormLabel" ></span>
            </div>
          </div>
        </div>
        {/* navend */}
        <div className=" row spacing">
          <div className="OnlinePaymentUpdate col-md-9 mobile-spacing pRight0 pl-4">
            <div className="Onlinetable data-spacing list-show p-t-10">
              <div id='StatusBlock' className="table-responsive style-8 ">
                <table id="tblReport" className='table table-striped table-bordered employee-list-table'>
                  <tbody>
                    <tr className='Repheader'>
                      <th><input type="checkbox" id="chkAll" /></th>
                      <th>Billing Category </th>
                      <th>Due </th>
                      <th>Paid </th>
                      <th>Balance </th>
                      <th> Payment</th>
                    </tr>
                  </tbody>
                </table>
              </div>
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

          <div class="OnlinePaymentUpdate col-md-3 mobile-spacing">
              <div class="col-md-12">
                <div className="row row d-flex justify-content-center align-items-center">
                  <img src={require('../../assets/images/pay-img.png')} alt=" pay-img.png" className='col-md-12' />
                </div>
                <div className="row px-3">
                  <input type="text" value="0" class="form-control shadow-none col-md-12 mb-3 mt-2" />
                </div>
                <div className="row px-3">
                  <input type="submit" value="Process Payment" class="btn-first mb-2 col-md-6 pl-0" />
                  <input type="submit" value="Cancel" class="btn-first mb-2  col-md-5" />
                </div>
              </div>
          </div>
        </div>
      </>
    )
  }
}
