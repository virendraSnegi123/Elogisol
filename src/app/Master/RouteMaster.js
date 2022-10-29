import React, { Component } from 'react'
import '../../assets/Cssfile/Master/RouteMaster.css';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class extends Component {
    render() {
        return (
            <>
                {/* navstart */}
                <div className='Pagenav'>
                    <div className=" row page-titles ">
                        <div className="navleft col-md-4 align-self-center text-left">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"> <Link to="/dashboard">Home</Link></li>
                                <li class="breadcrumb-item active">Route Master</li>
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

                <div className="RouteMaster row EquipmentMaster spacing ">
                    <div className="col-md-12 mobile-spacing ">
                        <div className="row select-vendor justify-content-between text-muted">
                            <div className=" LeftSide col-md-9 mobile-spacing pRight0 shadow pl-4 ">
                                <div className="Inputfield row border-bottom">
                                    <div className="col-md-3 commen-padding pRight0">
                                        <div class="form-group">
                                            <label for="inputRouteNo.">Route No. <span className='text-danger'>*</span></label>
                                            <input type="text" class="form-control" id="RouteNo." placeholder="Route No. " />
                                        </div>
                                    </div>
                                    <div className="col-md-3 commen-padding pRight0">
                                        <div class="form-group">
                                            <label for="inputRouteName">Route Name <span className='text-danger'>*</span></label>
                                            <input type="text" class="form-control" id="RouteName." placeholder="RouteName " />
                                        </div>
                                    </div>
                                    <div className="col-md-3 commen-padding pRight0 mb-4">
                                        <div class="form-group">
                                            <label for="inputRouteDistance ">Total Distance (Km) </label>
                                            <input type="text" class="form-control" id="RouteDistance " placeholder="Route Distance " />
                                        </div>
                                    </div>
                                </div>

                                <div className="Routetext row my-3">
                                    <div class="col-md-12 commen-padding">
                                        <div class="form-group">
                                            <span>Route : </span>
                                            <span id="ContentPlaceHolder1_lblRoute" >COPPER GANJ - BARRA-6 - RATANLAL NAGAR - VIJAY NAGAR - SHASTRI NAGAR - PANDU NAGAR - KAKADEO</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="routetable col-md-6">
                                        <table id='tblReport' className="table table-striped table-bordered ">
                                            <thead>
                                                <tr>
                                                    <th ></th>
                                                    <th >Sr.	</th>
                                                    <th >Stoppage Sequence</th>
                                                    <th >Stoppage Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><input type="checkbox" /></td>
                                                    <td>11</td>
                                                    <td><input type="text" />
                                                    </td><td><input type="text" placeholder='SHATABDI NAGAR' /></td>
                                                </tr>
                                                <tr>
                                                    <td ><input type="checkbox" /></td>
                                                    <td>1</td>
                                                    <td><input type="text" />
                                                    </td><td><input type="text" placeholder='SHATABDI NAGAR' /></td>
                                                </tr>
                                                <tr>
                                                    <td ><input type="checkbox" /></td>
                                                    <td>1</td>
                                                    <td><input type="text" />
                                                    </td><td><input type="text" placeholder='SHATABDI NAGAR' /></td>
                                                </tr>
                                                <tr>
                                                    <td ><input type="checkbox" /></td>
                                                    <td>1</td>
                                                    <td><input type="text" />
                                                    </td><td><input type="text" placeholder='SHATABDI NAGAR' /></td>
                                                </tr>
                                                <tr>
                                                    <td ><input type="checkbox" /></td>
                                                    <td>1</td>
                                                    <td><input type="text" />
                                                    </td><td><input type="text" placeholder='SHATABDI NAGAR' /></td>
                                                </tr>
                                                <tr>
                                                    <td ><input type="checkbox" /></td>
                                                    <td>1</td>
                                                    <td><input type="text" />
                                                    </td><td><input type="text" placeholder='SHATABDI NAGAR' /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="RightSide col-md-3  views pe-5 pright30">
                                <h1>Route list</h1>
                                <div id="dvRoute">
                                    <ul class="list-group ">
                                        <li class="list-group-item border-0"><Link className='text-decoration-none ' to="#">PANKI TO COPPER GANJ</Link> </li>
                                        <li class="list-group-item border-0"><Link className='text-decoration-none ' to="#">PANKI TO KAPLI</Link> </li>
                                        <li class="list-group-item border-0"><Link className='text-decoration-none ' to="#">PANKI TO RANIA</Link> </li>
                                        <li class="list-group-item border-0"><Link className='text-decoration-none ' to="#">PANKI TO MAKDI KHERA</Link> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
