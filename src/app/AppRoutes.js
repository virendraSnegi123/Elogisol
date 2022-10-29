import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Login = lazy(() => import('./user-pages/Login'));




// Setup
const Company = lazy(() => import('./Setup/Company'));
const FreeMaster = lazy(() => import('./Setup/FreeMaster'));

// Master
const StoppageMaster = lazy(() => import('./Master/StoppageMaster'));
const RouteMaster = lazy(() => import('./Master/RouteMaster'));
const VehicleMaster = lazy(() => import('./Master/VehicleMaster'));
const ClassMaster = lazy(() => import('./Master/ClassMaster'));
const SectionMaster = lazy(() => import('./Master/SectionMaster'));
const OdometerMapping = lazy(() => import('./Master/OdometerMapping'));
const StudentMaster = lazy(() => import('./Master/StudentMaster'));
const GenerateFree = lazy(() => import('./Master/GenerateFree'));
const RouteMapping = lazy(() => import('./Master/RouteMapping'));
const VendorMaster = lazy(() => import('./Master/VendorMaster'));


// Reporst
const BillPrinting = lazy(() => import('./Reports/BillPrinting'));
const StudentMasterReport = lazy (() => import ('./Reports/StudentMasterReport'));
const ReceiptDayBookReport = lazy (() => import ('./Reports/ReceiptDayBookReport'));
const ExpenseReport = lazy(() => import('./Reports/ExpenseReport'));
const VehicleExpenseAnalysis = lazy (() => import('./Reports/VehicleExpenseAnalysis'));


// Finance

const OnlinePaymentUpdate = lazy(()=> import ('./Finance/OnlinePaymentUpdate'));
const OfflinePaymentUpdate =lazy (() => import('./Finance/OfflinePaymentUpdate'));
const ExpenseBooking = lazy(() => import('./Finance/ExpenseBooking'));











class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
        <Route exact path="/" component={ Login } />
          <Route exact path="/dashboard" component={ Dashboard } />

          {/* setup */}
          <Route path="/Setup/Company-Js" component={ Company } />
          <Route path="/Setup/FreeMaster-Js" component={ FreeMaster } />
          {/* master */}
          <Route path="/Master/StoppageMaster-Js" component={ StoppageMaster } />
          <Route path="/Master/RouteMaster-Js" component={ RouteMaster } />
          <Route path="/Master/VehicleMaster-Js" component={ VehicleMaster } />
          <Route path="/Master/ClassMaster-Js" component={ ClassMaster } />
          <Route path="/Master/SectionMaster-Js" component={ SectionMaster } />
          <Route path="/Master/OdometerMapping-Js" component={ OdometerMapping } />
          <Route path='/Master/StudentMaster-Js' component={StudentMaster}/>
          <Route path="/Master/GenerateFree-Js" component={ GenerateFree } />
          <Route path='/Master/RouteMapping-Js' component={RouteMapping}/>
          <Route path='/Master/VendorMaster-Js' component={VendorMaster}/>

          {/* Reports */}
          <Route path="/Reports/BillPrinting-Js" component={ BillPrinting } />
          <Route path="/Reports/StudentMasterReport-Js" component={ StudentMasterReport } />
          <Route path="/Reports/ReceiptDayBookReport-Js" component={ ReceiptDayBookReport } />
          <Route path="/Reports/ExpenseReport-Js" component={ ExpenseReport } />
          <Route path="/Reports/VehicleExpenseAnalysis-Js" component={ VehicleExpenseAnalysis } />

          {/* Finance */}
          <Route path="/Finance/OnlinePaymentUpdate-Js" component={ OnlinePaymentUpdate } />
          <Route path="/Finance/OfflinePaymentUpdate-Js" component={ OfflinePaymentUpdate } />
          <Route path="/Finance/ExpenseBooking-Js" component={ ExpenseBooking } />

          <Redirect to="/Login" />
        </Switch>
      </Suspense>
    );
  }
}
export default AppRoutes;