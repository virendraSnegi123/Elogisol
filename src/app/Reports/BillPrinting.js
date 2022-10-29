import React, { Component } from 'react'
import '../../assets/Cssfile/Reports/BillPrinting.css';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class BillPrinting extends Component {
  render() {
    return (
      <>
        {/* navstart */}
        <div className='Pagenav'>
          <div className=" row page-titles ">
            <div className="navleft col-md-4 align-self-center text-left">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"> <Link to="/dashboard">Home</Link></li>
                <li class="breadcrumb-item active">Bill Printing</li>
                <lable id="ContentPlaceHolder1_lblErrorMessage" class="label"></lable>
              </ol>
              <lable id="ContentPlaceHolder1_Label5" class="FormLabel" ></lable>
            </div>

            <div id="ContentPlaceHolder1_dvButton" className="col-md-8 align-self-center text-right top-btn-space">
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnAdd" value="Dispaly" id="ContentPlaceHolder1_btnAdd" className="btn-first" />
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnEdit" value="Print" id="ContentPlaceHolder1_btnEdit" className="btn-first" />
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnSave" value="Download" id="ContentPlaceHolder1_btnSave" className="btn-first" />
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnExit" value="Exit" id="ContentPlaceHolder1_btnExit" className="btn-first" />
            </div>
          </div>
        </div>
        {/* navend */}

    
          <div className=" billprinting row spacing">
            <div className="col-md-12 mobile-spacing pRight0 ">
              <div className="row mt-2 mb-5">
                <lable id="ContentPlaceHolder1_lblFromDate" class="col-sm-1 col-form-label">From Date <lable class="text-danger">*</lable></lable>
                <div class="col-sm-2">
                  <input name="ctl00$ContentPlaceHolder1$textFromDate" type="date" id="ContentPlaceHolder1_textFromDate" title="From Date" class="shadow-none form-control input-group date" placeholder="dd/mm/yyyy" autocomplete="off" />
               
                </div>

                <lable id="ContentPlaceHolder1_lblFromDate" class="col-sm-1 col-form-label">To Date  <lable class="text-danger">*</lable></lable>
                <div class="col-sm-2">
                  <input name="ctl00$ContentPlaceHolder1$textFromDate" type="date" id="ContentPlaceHolder1_textFromDate" title="From Date" class=" shadow-none form-control input-group date" placeholder="dd/mm/yyyy" autocomplete="off" />
               
                </div>

                <lable id="ContentPlaceHolder1_lblFromDate" class="col-sm-1 col-form-label">Fee Head   <lable class="text-danger">*</lable></lable>
                <div class="col-sm-4">
                  <select class="form-select">
                    <option selected>--select--</option>

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
