import React, { Component } from 'react'
import '../../assets/Cssfile/Master/ClassMaster.css';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class ClassMaster extends Component {
  render() {
    return (
      <>
        {/* navstart */}
        <div className='Pagenav'>
          <div className=" row page-titles ">
            <div className="navleft col-md-4 align-self-center text-left">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"> <Link to="/dashboard">Home</Link></li>
                <li class="breadcrumb-item active">Student Class Master</li>
                <span id="ContentPlaceHolder1_lblErrorMessage" class="label"></span>
              </ol>
              <span id="ContentPlaceHolder1_Label5" class="FormLabel" ></span>
            </div>

            <div id="ContentPlaceHolder1_dvButton" className="col-md-8 align-self-center text-right top-btn-space">
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnAdd" value="Add New" id="ContentPlaceHolder1_btnAdd" className="btn-first" />
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnEdit" value="Exit" id="ContentPlaceHolder1_btnEdit" className="btn-first" />
            </div>
          </div>
        </div>
        {/* navend */}

        <div className='ClassMaster row EquipmentMaster spacing'>
          <div className="col-md-12  mobile-spacing pl-4">
            <div className="welcome-top">
              <div className='row spacing '>
                <div className="col-md-9 pl-0 mb-3">
                  <div class="form-group">
                    <label for="inputClassName">Class Name</label>
                    <input type="text" class="form-control shadow-none border-secondary-50" id="inputClassName" />
                  </div>
                </div>

                <div className="ClassMastertable col-md-3 views mt-2 pl-0">
                  <h1>Class List</h1>
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th ><Link to="#">I</Link></th>
                      </tr>
                      <tr>
                        <th ><Link to="#">
                          II</Link></th>
                      </tr>
                      <tr>
                        <th ><Link to="#">III</Link></th>
                      </tr>
                      <tr>
                        <th ><Link to="#">IV</Link></th>
                      </tr>
                      <tr>
                        <th ><Link to="#">
                          IX</Link></th>
                      </tr>
                      <tr>
                        <th ><Link to="#">NURSERY</Link></th>
                      </tr>
                      <tr>
                        <th ><Link to="#">P.G</Link></th>
                      </tr>
                      <tr>
                        <th ><Link to="#">PREP</Link></th>
                      </tr>
                      <tr>
                        <th ><Link to="#">V</Link></th>
                      </tr>
                      <tr>
                        <th ><Link to="#">VI</Link></th>
                      </tr>
                      <tr>
                        <th ><Link to="#">VII</Link></th>
                      </tr>
                      <tr>
                        <th ><Link to="#">VIII</Link></th>
                      </tr>
                      <tr>
                        <th ><Link to="#">X</Link></th>
                      </tr>
                      <tr>
                        <th ><Link to="#">XI</Link></th>
                      </tr>
                      <tr>
                        <th ><Link to="#">XII</Link></th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
