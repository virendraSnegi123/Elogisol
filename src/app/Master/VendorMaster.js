import React, { Component } from 'react';
import '../../assets/Cssfile/Master/VendorMaster.css';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class VendorMaster extends Component {
    render() {
        return (
            <>
                {/* navstart */}
                <div className='Pagenav'>
                    <div className=" row page-titles ">
                        <div className="navleft col-md-4 align-self-center text-left">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"> <Link to="/dashboard">Home</Link></li>
                                <li class="breadcrumb-item active">Vendor Master</li>
                                <span id="ContentPlaceHolder1_lblErrorMessage" class="label"></span>
                            </ol>
                            <span id="ContentPlaceHolder1_Label5" class="FormLabel" ></span>
                        </div>

                        <div id="ContentPlaceHolder1_dvButton" className="col-md-8 align-self-center text-right top-btn-space">
                            <input type="submit" name="ctl00$ContentPlaceHolder1$btnAdd" value="Add" id="ContentPlaceHolder1_btnAdd" className="btn-first" />
                            <input type="submit" name="ctl00$ContentPlaceHolder1$btnEdit" value="Exit" id="ContentPlaceHolder1_btnEdit" className="btn-first" />
                        </div>
                    </div>
                </div>
                {/* navend */}
                <div className="VehicleMaster row EquipmentMaster spacing">
                    <div className="col-md-10 mobile-spacing  mb-4">
                        <div className="Inputfield row pl-2">
                            <div className="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="input.">Vendor Code<span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control shadow-none" placeholder="Vendor Code" />
                                </div>
                            </div>
                            <div className="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="input.">Vendor Name<span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control shadow-none" placeholder="Vendor Name" />
                                </div>
                            </div>
                            <div className="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="input.">Contact Person<span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control shadow-none" placeholder="Contact Person" />
                                </div>
                            </div>
                            <div className="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="input.">Contact No.<span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control shadow-none" placeholder="Contact No." />
                                </div>
                            </div>

                            {/* second row */}
                            <div className="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="input.">Mobile No (SMS)<span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control shadow-none" placeholder="Vendor Code" />
                                </div>
                            </div>
                            <div className="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="input.">Operation Email<span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control shadow-none" placeholder="Vendor Name" />
                                </div>
                            </div>
                            <div className="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="input.">Finance Email<span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control shadow-none" placeholder="Contact Person" />
                                </div>
                            </div>
                            <div className="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="input.">Address<span className='text-danger'>*</span></label>
                                    <textarea class="form-control shadow-none shadow-none" id="exampleFormControlTextarea1" rows="1"></textarea>
                                </div>
                            </div>

                            {/* Third row */}



                            <div class="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="input.">Country <span className='text-danger'>*</span></label>
                                    <select name="ctl00$ContentPlaceHolder1$lstEuipmentType" id="ContentPlaceHolder1_lstEuipmentType" title="Vehicle Type" class="aspNetDisabled form-control shadow-none">
                                        <option selected="selected" value="0">Select</option>
                                        <option value="1">India</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="inputRouteNo.">State <span className='text-danger'>*</span></label>
                                    <select name="ctl00$ContentPlaceHolder1$lstEuipmentType" id="ContentPlaceHolder1_lstEuipmentType" title="Vehicle Type" class="aspNetDisabled form-control shadow-none">
                                        <option selected="selected" value="0">DELHI</option>
                                        <option value="1">UP</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="input.">Pin Code<span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control shadow-none" placeholder="Contact Person" />
                                </div>
                            </div>
                            <div className="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="input.">PAN <span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control shadow-none" placeholder="Contact Person" />
                                </div>
                            </div>

                            {/* fourth row */}
                            <div className="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="input.">GSTIN<span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control shadow-none" placeholder="GSTIN" />
                                </div>
                            </div>
                            <div class="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="inputRouteNo.">Payment Terms <span className='text-danger'>*</span></label>
                                    <select name="ctl00$ContentPlaceHolder1$lstEuipmentType" id="ContentPlaceHolder1_lstEuipmentType" title="Vehicle Type" class="aspNetDisabled form-control shadow-none">
                                        <option selected="selected" value="0">Cash</option>
                                        <option value="1">Credit</option>
                                        <option value="2">PDA</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="inputRouteNo.">Bank Name <span className='text-danger'>*</span></label>
                                    <select name="ctl00$ContentPlaceHolder1$lstBankName" id="ContentPlaceHolder1_lstBankName" title="Bank Name" class="form-control shadow-none">
                                        <option selected="selected" value="S">Select</option>
                                        <option value="R">SBI</option>
                                        <option value="R">HDFC</option>
                                        <option value="R">ICICI</option>
                                        <option value="R">AXIS</option>
                                        <option value="R">INDIAN BANK</option>
                                        <option value="R">BANK OF BARODA</option>
                                        <option value="R">PUNJAB NATIONAL BANK</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="input.">Branch<span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control shadow-none" placeholder="Branch" />
                                </div>
                            </div>

                            {/* five row */}
                            <div className="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="input.">IFS CODE<span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control shadow-none" placeholder="IFS CODE" />
                                </div>
                            </div>
                            <div className="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="input.">Account No<span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control shadow-none" placeholder="Account No" />
                                </div>
                            </div>
                            <div className="col-md-3 commen-padding pRight0">
                                <div class="form-group">
                                    <label for="input.">Account Map Code<span className='text-danger'>*</span></label>
                                    <input type="text" class="form-control shadow-none" placeholder="Account Map Code" />
                                </div>
                            </div>


                        </div>
                    </div>



                    <div className="VendorMasterTable col-md-2 views ">
                        <h1>Vendor list</h1>
                        <table class="table table-bordered  border-secondary-50">
                            <thead>
                                <tr><th><Link to="#">AMIT SAHU TRAVLES</Link>  </th></tr>
                                <tr><th><Link to="#">B</Link>  </th></tr>
                                <tr><th><Link to="#">C</Link>  </th></tr>
                                <tr><th><Link to="#">D</Link>  </th></tr>
                                <tr><th><Link to="#">E</Link>  </th></tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}
