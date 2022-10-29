import React, { Component } from 'react';
import '../../assets/Cssfile/Master/VehicleMaster.css'
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class VehicleMaster extends Component {
  render() {
    return ( 
      <>
      {/* navstart */}
        <div className='Pagenav'>
          <div className=" row page-titles ">
            <div className="navleft col-md-4 align-self-center text-left">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"> <Link to="/dashboard">Home</Link></li>
                <li class="breadcrumb-item active">Vehicle Master</li>
                <span id="ContentPlaceHolder1_lblErrorMessage" class="label"></span>
              </ol>
              <span id="ContentPlaceHolder1_Label5" class="FormLabel" ></span>
            </div>

            <div id="ContentPlaceHolder1_dvButton" className="col-md-8 align-self-center text-right top-btn-space">
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnAdd" value="Add" id="ContentPlaceHolder1_btnAdd" className="btn-first" />
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnExit" value="Edit" id="ContentPlaceHolder1_btnExit" className="btn-first" />
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnExit" value="Exit" id="ContentPlaceHolder1_btnExit" className="btn-first" />
            </div>
          </div>
        </div>
        {/* navend */}
        <div className="VehicleMaster row EquipmentMaster spacing">
          <div className="  col-md-10 mobile-spacing pRight0 pl-4">
              <div className="Inputfield row ">
                <div className="col-md-3 commen-padding pRight0">
                  <div class="form-group">
                    <label for="inputRouteNo.">Vehicle No <span className='text-danger'>*</span></label>
                    <input type="text" class="form-control" placeholder="Vehicle No." />
                  </div>
                </div>
                <div class="col-md-3 commen-padding pRight0">
                  <div class="form-group">
                    <label for="inputRouteNo.">Vehicle Type  <span className='text-danger'>*</span></label>
                    <select name="ctl00$ContentPlaceHolder1$lstEuipmentType" id="ContentPlaceHolder1_lstEuipmentType" title="Vehicle Type" class="aspNetDisabled form-control">
                      <option selected="selected" value="0">----Select----</option>
                      <option value="1">Bus</option>
                      <option value="2">Mini Bus</option>
                      <option value="3">Car</option>
                      <option value="4">Tempo</option>
                      <option value="5">Van</option>
                      <option value="6">Others</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-3 commen-padding pRight0">
                  <div class="form-group">
                    <label for="inputRouteNo.">Vehicle Type  <span className='text-danger'>*</span></label>
                    <select name="ctl00$ContentPlaceHolder1$lstEuipmentType" id="ContentPlaceHolder1_lstEuipmentType" title="Vehicle Type" class="aspNetDisabled form-control">
                      <option selected="selected" value="0">----Select----</option>
                      <option value="1">Bus</option>
                      <option value="2">Mini Bus</option>
                      <option value="3">Car</option>
                      <option value="4">Tempo</option>
                      <option value="5">Van</option>
                      <option value="6">Others</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-3 commen-padding pRight0">
                  <div class="form-group">
                    <label for="ContentPlaceHolder1_lblPucrchageDate">Purchase Date  <span className='text-danger'>*</span></label>
                    <input type="date" id="ContentPlaceHolder1_textPucrchageDate" className=" form-control input-group date" placeholder="dd/mm/yyyy" />
                    <i class="fa fa-calendar"></i>
                  </div>
                </div>
                {/* second row */}
                <div className="col-md-3 commen-padding pRight0">
                  <div class="form-group">
                    <label for="inputRouteNo.">Insurance No<span className='text-danger'>*</span></label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-md-3 commen-padding pRight0">
                  <div class="form-group">
                    <label for="inputRouteNo.">Insurance Vendor  <span className='text-danger'>*</span></label>
                    <select title="Insurance" class="form-control">
                      <option selected="selected" value="0">---Select---</option>
                      <option value="3">HDFC</option>
                      <option value="1">ICICI Lomabrd</option>
                      <option value="2">LIC</option>
                      <option value="4">The United India Insurance</option>
                      <option value="5">The New India Assurance</option>
                      <option value="6">Reliance Insurance</option>
                      <option value="7">IFFCO-TOKIO</option>
                      <option value="8">NATIONAL INSURANCE</option>
                      <option value="9">UNIVERSAL SOMPO GENRAL INSURANCE</option>
                      <option value="10">ROYAL SUNDRAM</option>
                      <option value="11">TATA AIG</option>
                      <option value="12">Bajaj Allianze</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-3 commen-padding pRight0">
                  <div class="form-group">
                  <label for="inputRouteNo.">Insurance Validity Date<span className='text-danger'>*</span></label>
                    <input type="date" className=" form-control input-group date" placeholder="dd/mm/yyyy" />
                  </div>
                </div>
                <div className="col-md-3 commen-padding pRight0 ">
                  <div class="form-group">
                    <label for="inputRouteDistance ">Engine No(Km) <span className='text-danger'>*</span> </label>
                    <input type="text" class="form-control" />
                  </div>
                </div>

                {/* row third */}

                <div class="col-md-3 commen-padding pRight0">
                  <div class="form-group">
                    <label for="inputRouteNo.">Engine  Type <span className='text-danger'>*</span></label>
                    <select name="ctl00$ContentPlaceHolder1$lstEngtype" id="ContentPlaceHolder1_lstEngtype" title="enginetype" class="aspNetDisabled form-control">
                      <option selected="selected" value="0">---Select---</option>
                      <option value="1">CNG</option>
                      <option value="2">Petrol</option>
                      <option value="3">Diesel</option>
                      <option value="4">CNG/Petrol</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3 commen-padding pRight0 ">
                  <div class="form-group">
                    <label for="inputRouteDistance ">VIN/Chassis No <span className='text-danger'>*</span> </label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div className="col-md-3 commen-padding pRight0 ">
                  <div class="form-group">
                    <label for="inputRouteDistance ">Manufacturing Year <span className='text-danger'>*</span> </label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-md-3 commen-padding pRight0">
                  <div class="form-group">
                    <label for="inputRouteNo.">Registration Date<span className='text-danger'>*</span></label>
                    <input type="date" className=" form-control input-group date" placeholder="dd/mm/yyyy" />
                  </div>
                </div>

                {/* row fourth */}
                <div class="col-md-3 commen-padding pRight0">
                  <div class="form-group">
                    <label for="input">Manufacturer <span className='text-danger'>*</span></label>
                    <select name="ctl00$ContentPlaceHolder1$lstManufacturer" id="ContentPlaceHolder1_lstManufacturer" title="Manufacturer" class="aspNetDisabled form-control">
                      <option selected="selected" value="0">-------Select-------</option>
                      <option value="1">TATA</option>
                      <option value="2">ASHOK LEYLAND</option>
                      <option value="3">EICHER</option>
                      <option value="4">S M L</option>
                      <option value="5">Force Motors</option>
                      <option value="6">Maruti Suzuki</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3 commen-padding pRight0 ">
                  <div class="form-group">
                    <label for="inputRouteDistance ">Model <span className='text-danger'>*</span></label> 
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-md-3 commen-padding">
                  <div class="form-group">
                    <label for="input">Owner <span className='text-danger'>*</span></label>
                    <select name="ctl00$ContentPlaceHolder1$lstCondition" id="ContentPlaceHolder1_lstCondition" title="Owner" class="aspNetDisabled form-control">
                      <option selected="selected" value="E">---Select---</option>
                      <option value="F">Hired</option>
                      <option value="G">Own</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-3 commen-padding pRight0">
                  <div class="form-group">
                    <label for="inputRouteNo.">National Permit <span className='text-danger'>*</span></label>
                    <input type="date" className=" form-control input-group date" placeholder="dd/mm/yyyy" />
                  </div>
                </div>

                {/* five row */}
                <div class="col-md-3 commen-padding pRight0">
                  <div class="form-group">
                    <label for="inputRouteNo.">State Permit Valid To <span className='text-danger'>*</span></label>
                    <input type="date" className=" form-control input-group date" placeholder="dd/mm/yyyy" />
                  </div>
                </div>
                <div className="col-md-3 commen-padding pRight0 ">
                  <div class="form-group">
                    <label for="input">Bus Capacity <span className='text-danger'>*</span></label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div className="col-md-3 commen-padding pRight0 ">
                  <div class="form-group">
                    <label for="input">Pollution Validity  <span className='text-danger'>*</span></label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div className="col-md-3 commen-padding pRight0 ">
                  <div class="form-group">
                    <label for="input">RTO <span className='text-danger'>*</span></label>
                    <input type="text" class="form-control" />
                  </div>
                </div>

                {/* sixth row */}
                <div class="col-md-3 commen-padding pRight0">
                  <div class="form-group">
                    <label for="input">Transporter <span className='text-danger'>*</span></label>
                    <select name="ctl00$ContentPlaceHolder1$LstTransporter" id="ContentPlaceHolder1_LstTransporter" title="RTO" class="aspNetDisabled form-control" maxlength="30">
                      <option selected="selected" value="0">---Select---</option>
                      <option value="59">AMIT SAHU TRAVLES</option>
                      <option value="79">BHARAT CNG  CYLINDER TESTING PANKI</option>
                      <option value="50">BMS MOTORS</option>
                      <option value="26">Central UP Gas Ltd.</option>
                      <option value="49">POORVA AUTOWEELS</option>
                      <option value="27">RPM SALES</option>
                      <option value="78">SELF</option>
                      <option value="51">SWASTIK AUTO TEC &amp; TRADING</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3 commen-padding pRight0 ">
                  <div class="form-group">
                    <label for="input">Fitness Validity <span className='text-danger'>*</span></label>
                    <input type="date" class="form-control" />
                  </div>
                </div>
                <div class="col-md-3 commen-padding pRight0">
                  <div class="form-group">
                    <label for="input">National Permit  <span className='text-danger'>*</span></label>
                    <input type="file" id="ContentPlaceHolder1_FilePermitPartA" class=" form-control" />
                  </div>
                </div>
                <div class="col-md-3 commen-padding pRight0">
                  <div class="form-group">
                    <label for="input"> State Permit  <span className='text-danger'>*</span></label>
                    <input type="file" id="ContentPlaceHolder1_FilePermitPartA" class=" form-control" />
                  </div>
                </div>

                {/* seven row */}
                <div class="col-md-3 commen-padding pRight0">
                  <div class="form-group">
                    <label for="input"> RC Document  <span className='text-danger'>*</span></label>
                    <input type="file" id="ContentPlaceHolder1_FilePermitPartA" class=" form-control" />
                  </div>
                </div>
                <div class="col-md-3 commen-padding pRight0">
                  <div class="form-group">
                    <label for="input"> Insurance Document   <span className='text-danger'>*</span></label>
                    <input type="file" id="ContentPlaceHolder1_FilePermitPartA" class=" form-control" />
                  </div>
                </div>
                <div class="col-md-3 commen-padding pRight0">
                  <div class="form-group">
                    <label for="input"> Fitness Document<span className='text-danger'>*</span></label>
                    <input type="file" id="ContentPlaceHolder1_FilePermitPartA" class=" form-control" />
                  </div>
                </div>
                <div className="col-md-3 commen-padding pRight0 ">
                  <div class="form-group">
                    <label for="input">Odometer Reading <span className='text-danger'>*</span></label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
            </div>
          </div>

          <div className="RightSide col-md-2  views pe-5 pright30">
            <h1>Vehicle list</h1>
            <div id="dvRoute">
              <ul class="list-group ">
                <li class="list-group-item"><Link className='text-decoration-none ' to="#">UP78FN9251</Link> </li>
                <li class="list-group-item "><Link className='text-decoration-none ' to="#">UP78CT7942</Link> </li>
                <li class="list-group-item "><Link className='text-decoration-none ' to="#">UP78CT7942</Link> </li>
                <li class="list-group-item "><Link className='text-decoration-none ' to="#">UP78CT7942</Link> </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}
