import React, { Component } from 'react'
import '../../assets/Cssfile/Master/SectionMaster.css';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class SectionMaster extends Component {
    render() {
        return (
            <>
                {/* navstart */}
                <div className='Pagenav'>
                    <div className=" row page-titles ">
                        <div className="navleft col-md-4 align-self-center text-left">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"> <Link to="/dashboard">Home</Link></li>
                                <li class="breadcrumb-item active">Section Master</li>
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
                <div className='SectionMaster row EquipmentMaster spacing'>
                    <div className="col-md-12 Fee-Master mobile-spacing pl-4">
                        <div className="col-md-12 information commen-space">
                            <div className="welcome-top">
                                <div className='sectionrow row spacing'>
                                    <div className="col-md-9 pl-0 mb-3">
                                        <div className="row">
                                            <div className="col-md-12 pr-0">
                                                <div class="form-group">
                                                    <label for="inputClassName">Section Name</label>
                                                    <input type="text" class="form-control shadow-none border-secondary-50" id="inputClassName" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="SectionMastertable col-md-3 views mt-2 ">
                                        <h1>Branch List</h1>
                                        <table class="table table-bordered  border-secondary-50">
                                            <thead>
                                                <tr> 
                                                    <th scope="col"><Link to="#">A</Link></th>
                                                </tr>
                                                <tr>
                                                    <th scope="col"><Link to="#">
                                                        B</Link></th>
                                                </tr>
                                                <tr>
                                                    <th scope="col"><Link to="#">C</Link></th>
                                                </tr>
                                                <tr>
                                                    <th scope="col"><Link to="#">D</Link></th>
                                                </tr>
                                                <tr>
                                                    <th scope="col"><Link to="#">
                                                        E</Link></th>
                                                </tr>
                                            </thead>
                                        </table>
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
