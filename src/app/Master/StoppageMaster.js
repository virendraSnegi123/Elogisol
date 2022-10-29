import React, { Component } from 'react'
import '../../assets/Cssfile/Master/StoppageMaster.css';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';



export default class
    extends Component {
    render() {
        return (
            <>
                {/* navstart */}
                <div className='Pagenav'>
                    <div className=" row page-titles ">
                        <div className="navleft col-md-4 align-self-center text-left">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"> <Link to="/dashboard">Home</Link></li>
                                <li class="breadcrumb-item active">Stoppage Master</li>
                                <span id="ContentPlaceHolder1_lblErrorMessage" class="label"></span>
                            </ol>
                            <span id="ContentPlaceHolder1_Label5" class="FormLabel" ></span>
                        </div>

                        <div id="ContentPlaceHolder1_dvButton" className="col-md-8 align-self-center text-right top-btn-space">
                            <input type="submit" name="ctl00$ContentPlaceHolder1$btnAdd" value="Add New" id="ContentPlaceHolder1_btnAdd" className="btn-first" />
                            <input type="submit" name="ctl00$ContentPlaceHolder1$btnEdit" value="Cancel" id="ContentPlaceHolder1_btnEdit" className="btn-first" />
                        </div>
                    </div>
                </div>
                {/* navend */}
                <div className="StoppageMaster row EquipmentMaster spacing">
                    <div className="col-md-12  mobile-spacing ">
                        <div className="row select-vendor justify-content-between text-muted">
                            <div className="Leftstoppage col-md-9 ">
                                <label for="formGroupExampleInput">Stoppage Code</label>
                                <input type="text" class="form-control shadow-none mb-3" />
                                <label for="formGroupExampleInput">Stoppage Name</label>
                                <input type="text" class="form-control  shadow-none" />
                            </div>
                            <div className="StoppageList col-md-3">
                                <h1>Stoppage List</h1>
                                <table class="table table-bordered">
                                    <thead>

                                        <tr>
                                            <th scope="col"><Link to="#">ARMAPUR</Link></th>
                                        </tr>
                                        <tr>
                                            <th scope="col"><Link to="#">
                                                AWAS VIKAS-1</Link></th>
                                        </tr>
                                        <tr>
                                            <th scope="col"><Link to="#">AWAS VIKAS-3</Link></th>
                                        </tr>
                                        <tr>
                                            <th scope="col"><Link to="#">BARASAROHI KALYANPUR</Link></th>
                                        </tr>
                                        <tr>
                                            <th scope="col"><Link to="#">
                                                BARRA-6</Link></th>
                                        </tr>
                                        <tr>
                                            <th scope="col"><Link to="#">COPPER GANJ</Link></th>
                                        </tr>
                                        <tr>
                                            <th scope="col"><Link to="#">GANGA GANJ</Link></th>
                                        </tr>
                                        <tr>
                                            <th scope="col"><Link to="#">JAWAHAR PURAM</Link></th>
                                        </tr>
                                        <tr>
                                            <th scope="col"><Link to="#">JUGRAJPUR PURAM</Link></th>
                                        </tr>
                                        <tr>
                                            <th scope="col"><Link to="#">KAKADEO</Link></th>
                                        </tr>
                                        <tr>
                                            <th scope="col"><Link to="#">COPPER GANJ</Link></th>
                                        </tr>
                                        <tr>
                                            <th scope="col"><Link to="#">GANGA GANJ</Link></th>
                                        </tr>
                                        <tr>
                                            <th scope="col"><Link to="#">JAWAHAR PURAM</Link></th>
                                        </tr>
                                        <tr>
                                            <th scope="col"><Link to="#">JUGRAJPUR PURAM</Link></th>
                                        </tr>
                                        <tr>
                                            <th scope="col"><Link to="#">KAKADEO</Link></th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
