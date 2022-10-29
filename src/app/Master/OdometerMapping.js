import React, { Component } from 'react';
import '../../assets/Cssfile/Master/OdometerMapping.css';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class OdometerMapping extends Component {
  render() {
    return (
      <>
        {/* navstart */}
        <div className='Pagenav'>
          <div className=" row page-titles ">
            <div className="navleft col-md-4 align-self-center text-left">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"> <Link to="/dashboard">Home</Link></li>
                <li class="breadcrumb-item active">Odometer Mapping</li>
                <span id="ContentPlaceHolder1_lblErrorMessage" class="label"></span>
              </ol>
              <span id="ContentPlaceHolder1_Label5" class="FormLabel" ></span>
            </div>

            <div id="ContentPlaceHolder1_dvButton" className="col-md-8 align-self-center text-right top-btn-space">
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnAdd" value="Add New" id="ContentPlaceHolder1_btnAdd" className="btn-first" />
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnExit" value="Exit" id="ContentPlaceHolder1_btnExit" className="btn-first" />
            </div>
          </div>
        </div>
        {/* navend */}
        <div className='OdometerMapping row spacing'>
          <div className="col-md-12 Fee-Master mobile-spacing pl-4">
            <div className="col-md-12 information commen-space">
              <div className="welcome-top">
                <div className="row spacing">
                  <div className="col-md-9 pl-0">
                    <div className="row">
                      <div class="form-group col-md-12">
                        <label for="VehicleNo">Vehicle No</label>
                        <input type="text" class="form-control shadow-none" id="VehicleNo" />
                      </div>
                      <div class="form-group col-md-12">
                        <label for="Odometer">Odometer Date</label>
                        <input type="text" class="form-control  shadow-none" id="VehicleNo" />
                      </div>
                      <div class="form-group col-md-12">
                        <label for="Odometer">Odometer Reading</label>
                        <input type="text" class="form-control  shadow-none" id="VehicleNo" />
                      </div>
                    </div>
                  </div>

                  <div className="rigtside col-md-3 views mt-2 mb-5 pl-0">
                    <h1>Vehicle List</h1>
                    <div className="dvVehicle">
                      <ul class="list-group">
                        <li class="list-group-item"><Link to={'#'}>Cras justo odio</Link> </li>
                        <li class="list-group-item"><Link to={'#'}>Cras justo odio</Link> </li>
                        <li class="list-group-item"><Link to={'#'}>Cras justo odio</Link> </li>
                        <li class="list-group-item"><Link to={'#'}>Cras justo odio</Link> </li>
                        <li class="list-group-item"><Link to={'#'}>Cras justo odio</Link> </li>
                        <li class="list-group-item"><Link to={'#'}>Cras justo odio</Link> </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </>
    )
  }
}
