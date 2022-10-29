import React, { Component } from 'react'
import '../../assets/Cssfile/Reports/ExpenseReport.css';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class ExpenseReport extends Component {
    render() {
        return (
            <>
                {/* navstart */}
                <div className='Pagenav'>
                    <div className=" row page-titles ">
                        <div className="navleft col-md-4 align-self-center text-left">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"> <Link to="/dashboard">Home</Link></li>
                                <li class="breadcrumb-item active">Expense Report</li>
                                <lable id="ContentPlaceHolder1_lblErrorMessage" class="label"></lable>
                            </ol>
                            <lable id="ContentPlaceHolder1_Label5" class="FormLabel" ></lable>
                        </div>

                        <div id="ContentPlaceHolder1_dvButton" className="col-md-8 align-self-center text-right top-btn-space">
                            <input type="submit" name="ctl00$ContentPlaceHolder1$btnAdd" value="Dispaly" id="ContentPlaceHolder1_btnAdd" className="btn-first" />
                            <input type="submit" name="ctl00$ContentPlaceHolder1$btnSave" value="Download" id="ContentPlaceHolder1_btnSave" className="btn-first" />
                            <input type="submit" name="ctl00$ContentPlaceHolder1$btnExit" value="Exit" id="ContentPlaceHolder1_btnExit" className="btn-first" />
                        </div>
                    </div>
                </div>
                {/* navend */}

                <div className=" ExpenseReport row spacing">
                    <div className="col-md-12 mobile-spacing pRight0 ">
                        <div className="row mt-2 mb-5">
                            <lable id="ContentPlaceHolder1_lblFromDate" class="col-sm-1 col-form-label">From Date <lable class="text-danger">*</lable></lable>
                            <div class="col-sm-2">
                                <input name="ctl00$ContentPlaceHolder1$textFromDate" type="date" id="ContentPlaceHolder1_textFromDate" title="From Date" class="shadow-none form-control input-group date" placeholder="dd/mm/yyyy" autocomplete="off" />

                            </div>

                            <lable id="ContentPlaceHolder1_lblFromDate" class=" col-form-label">To Date  <lable class="text-danger">*</lable></lable>
                            <div class="col-sm-2">
                                <input name="ctl00$ContentPlaceHolder1$textFromDate" type="date" id="ContentPlaceHolder1_textFromDate" title="From Date" class=" shadow-none form-control input-group date" placeholder="dd/mm/yyyy" autocomplete="off" />

                            </div>
                            <lable id="ContentPlaceHolder1_lblFromDate" class="col-form-label">Company   <lable class="text-danger">*</lable></lable>
                            <div class="col-sm-2">
                                <select name="ctl00$ContentPlaceHolder1$lstCompany" id="ContentPlaceHolder1_lstCompany" class="shadow-none form-control" >
                                    <option selected="selected" value="0">--- Select ---</option>
                                    <option value="1">IMPERIUM OVERSEAS PRIVATE LIMITED H.O</option>
                                    <option value="2">Imperium Transport-A Unit of IOPL</option>
                                    <option value="3">Imperium Transport-Jhansi-A Unit of IOPL</option>
                                    <option value="5">Imperium Transport-Lucknow- A Unit of IOPL</option>
                                    <option value="4">Imperium Transport-Unnao -A Unit of IOPL</option>
                                </select>
                            </div>
                            <lable id="ContentPlaceHolder1_lblFromDate" class="col-form-label">Vehicle No <lable class="text-danger">*</lable></lable>
                            <div class="col-sm-2">
                                <select name="ctl00$ContentPlaceHolder1$lstCompany" id="ContentPlaceHolder1_lstCompany" class="shadow-none form-control" >
                                    <option selected="selected" value="0">--- Select ---</option>
                                    <option value="1">UP78FM9251</option>
                                    <option value="12">UP78FM9251</option>
                                    <option value="3">UP78FM9251</option>
                                    <option value="4">UP78FM9251</option>
                                    <option value="5">UP78FM9251</option>
                                </select>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                </div>
            </>
        )
    }
}
