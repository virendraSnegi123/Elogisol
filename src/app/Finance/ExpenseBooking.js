import React, { Component } from 'react'
import '../../assets/Cssfile/Finance/ExpenseBooking.css';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class ExpenseBooking extends Component {
    render() {
        return (

            <>
                {/* navstart */}
                <div className="Pagenav">
                    <div className=" row page-titles ">
                        <div className="navleft col-md-4 align-self-center text-left">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"> <Link to="/dashboard">Home</Link></li>
                                <li class="breadcrumb-item active">Expense Booking</li>
                                <span id="ContentPlaceHolder1_lblErrorMessage" class="label"></span>
                            </ol>
                            <span id="ContentPlaceHolder1_Label5" class="FormLabel" ></span>
                        </div>

                        <div id="ContentPlaceHolder1_dvButton" className="col-md-8 align-self-center text-right top-btn-space">
                            <input type="submit" name="ctl00$ContentPlaceHolder1$btnAdd" value="Save" id="ContentPlaceHolder1_btnAdd" className="btn-first" />
                            <input type="submit" name="ctl00$ContentPlaceHolder1$btnEdit" value="Cancel" id="ContentPlaceHolder1_btnEdit" className="btn-first" />
                        </div>
                    </div>
                </div>
                {/* navend */}
                <div className="ExpenseBooking row spacing">
                    <div className="col-md-12 mobile-spacing pl-4">
                        <div className="row select-vendor mb-4 ">
                            <div className="col-sm-12 form-inline inline-space mtop10">
                                <label>Vehicle Number <span className='text-danger'>*</span></label>
                                <select class="form-select shadow-none mx-4" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <button className='btn-first '><img src={require('../../assets/images/search-icon.png')} alt="Logo" /></button>
                            </div>
                        </div>
                        <hr></hr>


                        <div className="row vehiclenum mb-3">
                            <div class="col-md-2">
                                <label>Voucher Number </label>
                                <input type="text" class="form-control shadow-none" placeholder="City" />
                            </div>
                            <div class="col-md-2">
                                <label>Voucher Date </label>
                                <input type="date" class="form-control shadow-none" placeholder="City" />
                            </div>
                        </div>


                        <div className="row">
                            <div class="col-md-2 commen-padding pRight0">
                                <div class="form-group">
                                    <label>Odometer Reading </label>
                                    <input type="text" maxlength="10" title="Enter Odometer Reading" class="form-control shadow-none" autocomplete="off" />
                                </div>
                            </div>
                            <div class="col-md-2 commen-padding pRight0">
                                <div class="form-group">
                                    <label>Vendor / Self</label>
                                    <select title="Vendor/Self" class="form-control shadow-none" autocomplete="off" maxlength="200">
                                        <option value="0">---Select---</option>
                                        <option value="2">Vendor</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label>Creditor/Vendor</label>
                                    <select title="Vendor Name" class="form-control shadow-none" autocomplete="off" maxlength="200">
                                        <option value="59">AMIT SAHU TRAVLES</option>
                                        <option value="79">BHARAT CNG  CYLINDER TESTING PANKI</option>
                                        <option value="50">BMS MOTORS</option>
                                        <option value="26">Central UP Gas Ltd.</option>
                                        <option value="49">POORVA AUTOWEELS</option>
                                        <option value="27">RPM SALES</option>
                                        <option value="78">SELF</option>
                                        <option value="51">SWASTIK AUTO TEC &amp; TRADING</option>
                                        <option selected="selected" value="0">---Select---</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-5 commen-padding pl-3">
                                <div class="form-group">
                                    <label>Remarks / Narration</label>
                                    <textarea rows="1" cols="20" class="form-control shadow-none" autocomplete="off"></textarea>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div class="col-md-2 commen-padding pRight0">
                                <div class="form-group">
                                    <label>Bill No / Cash Memo</label>
                                    <input type="text" class="form-control shadow-none" autocomplete="off" />
                                </div>
                            </div>
                            <div class="col-md-2 commen-padding pRight0">
                                <div class="form-group">
                                    <label>Bill Date</label>
                                    <input type="date" class="form-control shadow-none" autocomplete="off" />
                                </div>
                            </div>
                            <div class="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label>Upload Document</label>
                                    <input class="form-control shadow-none" type="file" id="formFile" />
                                </div>
                            </div>
                            <div class="col-md-5 commen-padding pl-3">
                                <div class="form-group">
                                    <label>Expense Head <span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control shadow-none" autocomplete="off" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
