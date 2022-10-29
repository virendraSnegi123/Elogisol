import React, { Component } from 'react';
import '../../assets/Cssfile/Master/RouteMapping.css';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class RouteMapping extends Component {
    render() {
        return (
            <>
                {/* navstart */}
                <div className='Pagenav'>
                    <div className=" row page-titles ">
                        <div className="navleft col-md-4 align-self-center text-left">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                                <li class="breadcrumb-item active">Route Mapping</li>
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

                <div className="RouteMapping row EquipmentMaster spacing">
                    <div className=" col-md-12  mobile-spacing">
                        <div className="row spacing pl-3">
                            <div className="col-md-9 pl-0">
                                    <div className="row">
                                        <div className="col-md-4 commen-padding">
                                            <div class="form-group text-left">
                                                <label class="required control-label">Route <span class="text-danger">*</span></label>
                                                <select name="ctl00$ContentPlaceHolder1$lstRouteName" class="form-control shadow-none" id="ContentPlaceHolder1_lstRouteName" title="Route Name">
                                                    <option value="0">----Select----</option>
                                                    <option selected="selected" value="16">PANKI TO COPPER GANJ</option>
                                                    <option value="17">PANKI TO KAPLI</option>
                                                    <option value="18">PANKI TO RANIA</option>
                                                    <option value="19">PANKI TO MAKDI KHERA</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4 commen-padding">
                                            <div class="form-group text-left">
                                                <label class="required control-label">Vehicle Number <span class="text-danger">*</span></label>
                                                <select name="ctl00$ContentPlaceHolder1$lstVehicleNumber" class="form-control shadow-none" id="ContentPlaceHolder1_lstVehicleNumber" title="Vehicle Number" >
                                                    <option selected="selected" value="0">UP78CT1159</option>
                                                    <option value="808">UP78FN9251</option>
                                                    <option value="806">UP78CT7942</option>
                                                    <option value="805">UP78CT1159</option>
                                                    <option value="807">UP78DN4817</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            {/* RouteMappingtable */}

                            <div className="RouteMappingtable col-md-3 views mt-2 pl-0">
                                <h1>Mapping List</h1>
                                <table class="table table-bordered  border-secondary-50">
                                    <thead>
                                        <tr>
                                            <th ><Link to="#">UP78DN4817</Link></th>
                                        </tr>
                                        <tr>
                                            <th ><Link to="#">
                                                UP78DN4817</Link></th>
                                        </tr>
                                        <tr>
                                            <th ><Link to="#">UP78DN4817</Link></th>
                                        </tr>
                                        <tr>
                                            <th ><Link to="#">UP78DN4817</Link></th>
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
