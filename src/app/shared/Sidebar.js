import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';

import { FiSettings } from 'react-icons/fi';
import { HiUserGroup } from 'react-icons/hi';
import { FaTachometerAlt , FaRegCreditCard} from 'react-icons/fa';




class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/setup', state: 'SetupPagesMenuOpen'},
      {path:'/master', state: 'masterPagesMenuOpen'},
      {path:'/reports', state: 'reportsPagesMenuOpen'},
      {path:'/Finance', state: 'FinancePagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  }

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">

        {/* setup */}

          <li className={ this.isPathActive('/setup') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.SetupPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('SetupPagesMenuOpen') } data-toggle="collapse">
            <i className='mx-1'><FiSettings/></i>
              <span className="menu-title"><Trans>Setup</Trans></span>
              <i className="menu-arrow"></i>              
            </div>
            <Collapse in={ this.state.SetupPagesMenuOpen }>
              <ul className=" innernav nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/Setup/Company-Js') ? 'nav-link active' : 'nav-link' } to="/Setup/Company-Js"><Trans>Company </Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/Setup/FreeMaster-Js') ? 'nav-link active' : 'nav-link' } to="/Setup/FreeMaster-Js"><Trans>Free Master</Trans></Link></li>
              </ul>
            </Collapse>
          </li>

          {/* master */}

          <li className={ this.isPathActive('/master') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.masterPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('masterPagesMenuOpen') } data-toggle="collapse">
            <i className='mx-1'><HiUserGroup/></i>
            <span className="menu-title"><Trans>Master</Trans></span>
              <i className="menu-arrow"></i>
            
            </div>
            <Collapse in={ this.state.masterPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/Master/StoppageMaster-Js') ? 'nav-link active' : 'nav-link' } to="/Master/StoppageMaster-Js"><Trans>Stoppage Master </Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/Master/RouteMaster-Js') ? 'nav-link active' : 'nav-link' } to="/Master/RouteMaster-Js"><Trans>Route Master</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/Master/VehicleMaster-Js') ? 'nav-link active' : 'nav-link' } to="/Master/VehicleMaster-Js"><Trans>Vehicle Master </Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/Master/ClassMaster-Js') ? 'nav-link active' : 'nav-link' } to="/Master/ClassMaster-Js"><Trans>Class Master</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/Master/SectionMaster-Js') ? 'nav-link active' : 'nav-link' } to="/Master/SectionMaster-Js"><Trans>Section Master</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/Master/OdometerMapping-Js') ? 'nav-link active' : 'nav-link' } to="/Master/OdometerMapping-Js"><Trans>Odometer Mapping </Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/Master/StudentMaster-Js') ? 'nav-link active' : 'nav-link' } to="/Master/StudentMaster-Js"><Trans>Student Master </Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/Master/GenerateFree-Js') ? 'nav-link active' : 'nav-link' } to="/Master/GenerateFree-Js"><Trans>Generate Free </Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/Master/RouteMapping-Js') ? 'nav-link active' : 'nav-link' } to="/Master/RouteMapping-Js"><Trans>Route Mapping </Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/Master/VendorMaster-Js') ? 'nav-link active' : 'nav-link' } to="/Master/VendorMaster-Js"><Trans>Vendor Master </Trans></Link></li>
              </ul>
            </Collapse>
          </li>
         
          {/* reports */}

          <li className={ this.isPathActive('/reports') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.reportsPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('reportsPagesMenuOpen') } data-toggle="collapse">
              <i className='mx-1'><FaTachometerAlt/></i>
              <span className="menu-title"><Trans>Reports</Trans></span>
              <i className="menu-arrow"></i>
            
            </div>
            <Collapse in={ this.state.reportsPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/Reports/BillPrinting-Js') ? 'nav-link active' : 'nav-link' } to="/Reports/BillPrinting-Js"><Trans>Bill Printing</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/Reports/StudentMasterReport-Js') ? 'nav-link active' : 'nav-link' } to="/Reports/StudentMasterReport-Js"><Trans>Student Master Report</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/Reports/ReceiptDayBookReport-Js') ? 'nav-link active' : 'nav-link' } to="/Reports/ReceiptDayBookReport-Js"><Trans>Receipt Day Book Report</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/Reports/ExpenseReport-Js') ? 'nav-link active' : 'nav-link' } to="/Reports/ExpenseReport-Js"><Trans>Expense Report</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/Reports/VehicleExpenseAnalysis-Js') ? 'nav-link active' : 'nav-link' } to="/Reports/VehicleExpenseAnalysis-Js"><Trans>Vehicle Expense Analysis</Trans></Link></li>
                
             
              </ul>
            </Collapse>
          </li>

          {/* Finance */}
          <li className={ this.isPathActive('/Finance') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.FinancePagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('FinancePagesMenuOpen') } data-toggle="collapse">
              <i className='mx-1'><FaRegCreditCard/></i>
              <span className="menu-title"><Trans>Finance</Trans></span>
              <i className="menu-arrow"></i>
              
            </div>
            <Collapse in={ this.state.FinancePagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/Finance/OnlinePaymentUpdate-Js') ? 'nav-link active' : 'nav-link' } to="/Finance/OnlinePaymentUpdate-Js"><Trans>Online Payment Update</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/Finance/OfflinePaymentUpdate-Js') ? 'nav-link active' : 'nav-link' } to="/Finance/OfflinePaymentUpdate-Js"><Trans>Offline Payment Update</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/Finance/ExpenseBooking-Js') ? 'nav-link active' : 'nav-link' } to="/Finance/ExpenseBooking-Js"><Trans>Expense Booking</Trans></Link></li>

              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);