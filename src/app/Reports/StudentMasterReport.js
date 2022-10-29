import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../assets/Cssfile/Reports/StudentMasterReport.css';


export default class StudentMasterReport extends Component {
    render() {
        return (
            <>
                {/* navstart */}
                <div className='Pagenav'>
                    <div className=" row page-titles ">
                        <div className="navleft col-md-4 align-self-center text-left">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"> <Link to="/dashboard">Home</Link></li>
                                <li class="breadcrumb-item active">Student Master Report</li>
                                <span id="ContentPlaceHolder1_lblErrorMessage" class="label"></span>
                            </ol>
                            <span id="ContentPlaceHolder1_Label5" class="FormLabel" ></span>
                        </div>

                        <div id="ContentPlaceHolder1_dvButton" className="col-md-8 align-self-center text-right top-btn-space">
                            <input type="submit" name="ctl00$ContentPlaceHolder1$btnAdd" value="Display" id="ContentPlaceHolder1_btnAdd" className="btn-first" />
                            <input type="submit" name="ctl00$ContentPlaceHolder1$btnEdit" value="Download" id="ContentPlaceHolder1_btnEdit" className="btn-first" />
                            <input type="submit" name="ctl00$ContentPlaceHolder1$btnExit" value="Exit" id="ContentPlaceHolder1_btnExit" className="btn-first" />
                        </div>
                    </div>
                </div>
                {/* navend */}

                <div className="StudentMasterReport row spacing">
                    <div className="col-md-12">
                            <div className="day-book mb-4">
                                <div className="form-group row">
                                    <span id="studentrepostFromdate" class="col-sm-1 col-form-label">From Date</span>
                                    <div className="col-sm-2">
                                        <input name="ctl00$ContentPlaceHolder1$textFromDate" type="date" id="ContentPlaceHolder1_textFromDate" title="From Date" class="form-control shadow-none input-group date" placeholder="dd/mm/yyyy" autocomplete="off"></input>
                                    </div>
                                    <span id="studentrepostFromdate2" class=" col-form-label">To Date</span>
                                    <div className="col-sm-2">
                                        <input name="ctl00$ContentPlaceHolder1$textFromDate" type="date" id="ContentPlaceHolder1_textFromDate" title="From Date" class="form-control shadow-none input-group date" placeholder="dd/mm/yyyy" autocomplete="off"></input>
                                    </div>
                                    <span id="studentrepostFromdate3" class=" col-form-label">Class</span>
                                    <div className="col-sm-2 ">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>--All select--</option>
                                            <option value="1">I</option>
                                            <option value="2">II</option>
                                            <option value="3">III</option>
                                        </select>
                                    </div>
                                    <span id="studentrepostFromdate4" class=" col-form-label">Section</span>
                                    <div className="col-sm-2">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>--All select--</option>
                                            <option value="1">I</option>
                                            <option value="2">II</option>
                                            <option value="3">III</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="data-spacing list-show p-t-10">
                                <div id='StatusBlock' className="table-responsive style-8 ">
                                    <table id="tblReport" className='table table-striped table-bordered employee-list-table'>
                                        <tbody>
                                            <tr className='Repheader'>
                                                <th>Enrol No/CRN</th>
                                                <th>Student Name</th>
                                                <th>Gender</th>
                                                <th> DOB</th>
                                                <th>Class</th>
                                                <th> Section</th>
                                                <th>Session</th>
                                                <th>Father Name</th>
                                                <th>Mobile</th>
                                                <th>Email Id</th>
                                                <th>User ID</th>
                                                <th>Collage</th>
                                            </tr>
                                            <tr>
                                                <td><input type="text" value="19201378"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td> <input type="text" value="Shranya Dubey"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="Female"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="28/10/2016"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="I"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="A"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="2022-2023"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="DR UMESH DUBEY"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="19201378"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="Email" value=" "  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="admin"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type=" text" value="Transport-A Unit of IOPL"  title="Student Name" class=" form-control shadow-none" /></td>
                                            </tr>

                                            {/* second row */}
                                            <tr>
                                                <td><input type="text" value="19201378"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td> <input type="text" value="Shranya Dubey"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="Female"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="28/10/2016"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="I"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="A"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="2022-2023"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="DR UMESH DUBEY"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="19201378"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="Email" value=" "  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="admin"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type=" text" value="Transport-A Unit of IOPL"  title="Student Name" class=" form-control shadow-none" /></td>
                                            </tr>
                                            {/* third row */}
                                            <tr>
                                                <td><input type="text" value="19201378"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td> <input type="text" value="Shranya Dubey"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="Female"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="28/10/2016"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="I"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="A"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="2022-2023"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="DR UMESH DUBEY"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="19201378"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="Email" value=" "  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="admin"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type=" text" value="Transport-A Unit of IOPL"  title="Student Name" class=" form-control shadow-none" /></td>
                                            </tr>
                                            <tr>
                                                <td><input type="text" value="19201378"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td> <input type="text" value="Shranya Dubey"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="Female"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="28/10/2016"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="I"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="A"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="2022-2023"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="DR UMESH DUBEY"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="19201378"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="Email" value=" "  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="admin"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type=" text" value="Transport-A Unit of IOPL"  title="Student Name" class=" form-control shadow-none" /></td>
                                            </tr>
                                            <tr>
                                                <td><input type="text" value="19201378"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td> <input type="text" value="Shranya Dubey"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="Female"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="28/10/2016"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="I"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="A"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="2022-2023"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="DR UMESH DUBEY"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="19201378"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="Email" value=" "  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type="text" value="admin"  title="Student Name" class=" form-control shadow-none" /></td>
                                                <td><input type=" text" value="Transport-A Unit of IOPL"  title="Student Name" class=" form-control shadow-none" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    </div>
                </div>

            </>
        )
    }
}
