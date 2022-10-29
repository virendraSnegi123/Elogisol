import React, { Component } from 'react'
import '../../assets/Cssfile/Setup/Freemaster.css'
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class FreeMaster extends Component {
  render() {
    return (
      <>
        {/* navstart */}
        <div className="Pagenav">
          <div className=" row page-titles ">
            <div className="navleft col-md-4 align-self-center text-left">
              <ol class="breadcrumb">
              <li class="breadcrumb-item"> <Link to="/dashboard">Home</Link></li>
                <li class="breadcrumb-item active">Fee Master</li>
                <span id="ContentPlaceHolder1_lblErrorMessage" class="label"></span>
              </ol>
              <span id="ContentPlaceHolder1_Label5" class="FormLabel" ></span>
            </div>

            <div id="ContentPlaceHolder1_dvButton" className="col-md-8 align-self-center text-right top-btn-space">
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnAdd" value="Add" id="ContentPlaceHolder1_btnAdd" className="btn-first" />
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnEdit" value="Edit" id="ContentPlaceHolder1_btnEdit" className="btn-first" />
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnExit" value="Exit" id="ContentPlaceHolder1_btnExit" className="btn-first" />
            </div>
          </div>
        </div>
        {/* navend */}


        <div className='Freemaster row EquipmentMaster spacing '>
          {/* <div className="row spacing"> */}
            <div className="col-md-12 Fee-Master mobile-spacing ">
              <div className="row select-vendor justify-content-between text-muted">
                <div className="FeeHead col-md-4 ">
                  <label for="formGroupExampleInput">Fee Head</label>
                  <input type="text" class="form-control shadow-none" placeholder="Fee Head" />
                </div>
                <div className="FeeAmount col-md-4">
                  <label for="formGroupExampleInput">Fee Amount</label>
                  <input type="text" class="form-control shadow-none" placeholder="Fee Amount" />
                </div>
                <div className="Feelist col-md-4  p-left0 views">
                  <h1>Fee list</h1>
                  <table class="table table-bordered border-secondary-50">
                    <thead>
                      <tr>
                        <th scope="col"><Link to="#">Transportation Fees (0-8 kms)-2100</Link></th>
                      </tr>
                      <tr>
                        <th scope="col"><Link to="#">
                          Transportation Fees (Quraterly 3500)-1167.67</Link></th>
                      </tr>
                      <tr>
                        <th scope="col"><Link to="#">Transportaion Fees - 2400 </Link></th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </>

    )
  }
}
