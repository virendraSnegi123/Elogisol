import React, { Component } from 'react'
import '../../assets/Cssfile/Master/GenerateFree.css'
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { BiCheckbox } from 'react-icons/bi';

export default class GenerateFree extends Component {
  

    render() {
        // function showmonth() {
        //   document.getElementById("chkveg").style.display = 'block';
        //   }
          

        return (
            <>
                {/* navstart */}
                <div className='Pagenav'>
                    <div className=" row page-titles ">
                        <div className="navleft col-md-4 align-self-center text-left">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"> <Link to="/dashboard">Home</Link></li>
                                <li class="breadcrumb-item active">Generate Fee</li>
                                <span id="ContentPlaceHolder1_lblErrorMessage" class="label"></span>
                            </ol>
                            <span id="ContentPlaceHolder1_Label5" class="FormLabel" ></span>
                        </div>

                        <div id="ContentPlaceHolder1_dvButton" className="col-md-8 align-self-center text-right top-btn-space">
                            <input type="submit" name="ctl00$ContentPlaceHolder1$btnExit" value="Save" id="ContentPlaceHolder1_btnExit" className="btn-first" />
                            <input type="submit" name="ctl00$ContentPlaceHolder1$btnExit" value="Cancel" id="ContentPlaceHolder1_btnExit" className="btn-first" />
                        </div>
                    </div>
                </div>
                {/* navend */}
                <div className="GenerateFree row spacing">
                    <div className='col-md-12 mobile-spacing'>
                        <div class="row select-vendor border-bottom">
                            <div class="col-md-12 form-inline inline-space mb-4">
                                <label id="lblStudentEnrlNo" class="control-label pr10">Fee Month <span class="text-danger">*</span></label>
                                <div class="col-md-3">

                                    <select id="chkveg" className='month'>
                                        <option value="cheese">january </option>
                                        <option value="tomatoes">february</option>
                                        <option value="mozarella">March</option>
                                        <option value="mushrooms">Apirl</option>
                                        <option value="pepperoni">May</option>
                                        <option value="onions">June</option>
                                    </select>
                                </div>

                                <div class="col-md-7 ">
                                    <div className="row">
                                        <label id="lblStudentEnrlNo" class="control-label pr10">Class</label>
                                        <div class="col-md-5">
                                            <select >
                                                <option value="01">I</option>
                                                <option value="02">II</option>
                                                <option value="03">III</option>
                                                <option value="04">IV</option>
                                                <option value="05">V</option>
                                                <option selected>--select--</option>
                                            </select>
                                        </div>
                                        <div className="submitbtn col-md-3">
                                            <input type="submit" className=' id="btnget" btn-first px-2' value='Generate Fee' />
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
