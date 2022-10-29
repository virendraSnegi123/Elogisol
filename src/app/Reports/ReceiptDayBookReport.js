import React, { Component } from 'react'
import '../../assets/Cssfile/Reports/ReceiptDayBookReport.css';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class ReceiptDayBookReport extends Component {
    render() {
        return (
            <>
                {/* navstart */}
                <div className='Pagenav'>
                    <div className=" row page-titles ">
                        <div className="navleft col-md-4 align-self-center text-left">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"> <Link to="/dashboard">Home</Link></li>
                                <li class="breadcrumb-item active">Receipt Day Book</li>
                                <span id="ContentPlaceHolder1_lblErrorMessage" class="label"></span>
                            </ol>
                            <span id="ContentPlaceHolder1_Label5" class="FormLabel" ></span>
                        </div>

                        <div id="ContentPlaceHolder1_dvButton" className="col-md-8 align-self-center text-right top-btn-space">
                            <input type="submit" name="ctl00$ContentPlaceHolder1$btnAdd" value="Add" id="ContentPlaceHolder1_btnAdd" className="btn-first" />
                            <input type="submit" name="ctl00$ContentPlaceHolder1$btnEdit" value="Edit" id="ContentPlaceHolder1_btnEdit" className="btn-first" />
                            <input type="submit" name="ctl00$ContentPlaceHolder1$btnSave" value="Save" id="ContentPlaceHolder1_btnSave" className="btn-first" />
                            <input type="submit" name="ctl00$ContentPlaceHolder1$btnExit" value="Exit" id="ContentPlaceHolder1_btnExit" className="btn-first" />
                        </div>
                    </div>
                </div>
                {/* navend */}
                <div className="ReceiptDayBookReport row spacing">
                    <div className="col-md-12">
                        <div className="day-book mb-4">
                            <div className="form-group row">
                                <span id="repostFromdate" class="col-sm-1 col-form-label">From Date</span>
                                <div className="col-sm-2">
                                    <input name="ctl00$ContentPlaceHolder1$textFromDate" type="date" id="ContentPlaceHolder1_textFromDate" title="From Date" class="form-control shadow-none input-group date" placeholder="dd/mm/yyyy" autocomplete="off"></input>
                                </div>
                                <span id="repostFromdate2" class=" col-form-label">To Date</span>
                                <div className="col-sm-2 mb-4">
                                    <input name="ctl00$ContentPlaceHolder1$textFromDate" type="date" id="ContentPlaceHolder1_textFromDate" title="From Date" class="form-control shadow-none input-group date" placeholder="dd/mm/yyyy" autocomplete="off"></input>
                                </div>
                                <div className=" col-sm-5">
                                    <button className='btn-second' >Dispaly</button>
                                    <button className='btn-second' >Download</button>
                                    <button className='btn-second' >Exit</button>
                                </div>
                            </div>
                        </div>
                        <div className="data-spacing list-show p-t-10">
                            <div id='StatusBlock' className="table-responsive style-8 ">
                                <table id="tblReport" className='table table-striped table-bordered employee-list-table'>
                                    <tbody>
                                        <tr className='Repheader'>
                                            <th>Enlor No/CRN </th>
                                            <th>Student Name </th>
                                            <th>Receipt No.</th>
                                            <th>Receipt Date</th>
                                            <th>Amount</th>
                                            <th> Instrument No</th>
                                            <th>Instrument Date </th>
                                            <th> Payment Mode </th>
                                            <th>EDUSOFT Status </th>
                                            <th>Post Date </th>
                                            <th>User ID </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <table  className='table table-striped table-bordered employee-list-table col-md-4 mt-4'>
                            <tbody>
                                <tr className='Repheader'>
                                    <th>Payment Mode </th>
                                    <th>Amount </th>
                                </tr>
                                <tr>
                                    <td> <span>total</span></td>
                                    <td> <span></span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}
