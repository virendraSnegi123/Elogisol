import React, { Component } from 'react'
import '../../assets/Cssfile/Setup/company.css';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';



export default class Company extends Component {
  render() {
    return (
      <>
        {/* navstart */}
        <div className="Pagenav">
          <div className=" row page-titles ">
            <div className="navleft col-md-4 align-self-center text-left">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"> <Link to="/dashboard">Home</Link></li>
                <li class="breadcrumb-item active">Company Master</li>
                <span id="ContentPlaceHolder1_lblErrorMessage" class="label"></span>
              </ol>
              <span id="ContentPlaceHolder1_Label5" class="FormLabel" ></span>
            </div>

            <div id="ContentPlaceHolder1_dvButton" className="col-md-8 align-self-center text-right top-btn-space">
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnAdd" value="Add" id="ContentPlaceHolder1_btnAdd" className="btn-first" />
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnEdit" value="Edit" id="ContentPlaceHolder1_btnEdit" className="btn-first" />
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnExit" value="Save" id="ContentPlaceHolder1_btnExit" className="btn-first" />
              <input type="submit" name="ctl00$ContentPlaceHolder1$btnExit" value="Exit" id="ContentPlaceHolder1_btnExit" className="btn-first" />
            </div>
          </div>
        </div>
        {/* navend */}

        <div className="companyform row EquipmentMaster spacing ">
          <div className="col-md-12 mobile-spacing ">
            <div className="ContentPlaceHolder1_dvControl">
              <div className="row">
                <div className="form-group col-md-3">
                  <label for="CompanyCode">Company Code <span className='text-danger'>*</span></label>
                  <input type="text" class="form-control" id="CompanyCode" placeholder="Company Code" />
                </div>
                <div className="form-group col-md-3">
                  <label for="CompanyName">Company Name <span className='text-danger'>*</span></label>
                  <input type="text" class="form-control" id="CompanyName" placeholder="Company Name" />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputState">Company Class</label>
                  <select id="inputState" class="form-control">
                    <option selected>Private</option>
                    <option>Public</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label for="CpanNo">PAN No.</label>
                  <input type="text" class="form-control" id="CpanNo" placeholder="PAN No." />
                </div>

                <div className="form-group col-md-3">
                  <label for="CIN">CIN</label>
                  <input type="text" class="form-control" id="CIN" placeholder="CIN" />
                </div>
                <div className="form-group col-md-3">
                  <label for="CompanyGSTIN">GSTIN</label>
                  <input type="text" class="form-control" id="CompanyGSTIN" placeholder="Service Tax Reg No." />
                </div>
                <div className="form-group col-md-3">
                  <label for="CompanyContactPerson">Contact Person </label>
                  <input type="text" class="form-control" id="CompanyContactPerson" placeholder="Contact Person" />
                </div>
                <div className="form-group col-md-3">
                  <label for="ContactNo">Contact No.</label>
                  <input type="text" class="form-control" id="ContactNo" placeholder="Contact No" />
                </div>

                <div className="form-group col-md-3">
                  <label for="EmailID">Email ID</label>
                  <input type="email" class="form-control" id="EmailID" placeholder="Email ID." />
                </div>
                <div class="form-group col-md-3">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label for="State">State </label>
                  <input type="text" class="form-control" id="State" placeholder="State" />
                </div>
                <div className="form-group col-md-3">
                  <label for="City">City</label>
                  <input type="text" class="form-control" id="City" placeholder="City" />
                </div>

                <div className="form-group col-md-6">
                  <label for="Registered">Registered Address</label>
                  <textarea class="form-control" id="Registered" rows="1" placeholder="Registered Address" ></textarea>
                </div>
                <div className="form-group col-md-3">
                  <label for="PINNo">PIN No. </label>
                  <input type="text" class="form-control" id="PINNo" placeholder="PIN No." />
                </div>
                <div className="form-group col-md-3">
                  <label for="DieselRate">Diesel Rate</label>
                  <input type="text" class="form-control" id="DieselRate" placeholder="Diesel Rate" />
                </div>

                <div class="form-group col-md-1 mt-3">
                  <img src="../../Images/user.png" alt="UserPic" id="preview" class="img-thumbnail" />
                </div>
                <div class="form-group col-md-3 mt-3  marleft20">
                  <span id="ContentPlaceHolder1_lblLogo" class="file-upload">Logo</span>
                  <input type="file" name="ctl00$ContentPlaceHolder1$floadLogo" id="ContentPlaceHolder1_floadLogo" class="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
