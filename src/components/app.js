import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Icons from "../helpers/icons";

import BaseNavbar from "./navigation/navbar";
import Homepage from "./homepage/homepage";
import Login from "./auth/login";
import SignupPreview from "./auth/signup/signup-preview";
import Pricing from "./base-pages/pricing";
import Footer from "./navigation/footer";
import TermsOfService from "./base-pages/terms-of-service";
import SMSTerms from "./base-pages/sms-terms-and-conditions";
import PrivacyStatement from "./base-pages/privacy-statement";
import ContactUs from "./base-pages/contact-us";
import Signup from "./auth/signup/signup";

import AdminHomepage from "./admin/admin-homepage";
import AdminUsers from "./admin/General/admin-users";
import EmailNotices from "./admin/General/email-notices";
import ManageAccounts from './admin/General/manage-accounts';
import ManageEvents from './admin/General/manage-events';
import ManagePromoCodes from './admin/General/manage-promo-codes';
import ManageVLPLayouts from './admin/General/manage-vlp-layouts';
import SMSCodes from './admin/General/sms-codes';
import UserSignups from './admin/Reports/user-signups';
import InvoicePayments from './admin/Billing/invoice-payments';
import OrganizationBilling from './admin/Billing/organization-billing';
import ProcessOneTimePayment from './admin/Billing/process-one-time-payment';
import UserBilling from './admin/Billing/user-billing';
import AccountSearchResults from "./admin/account-search-results";
import AdminChangePassword from "./auth/admin/admin-change-password";
import AdminChangePreferences from './auth/admin/admin-preferences';



import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    Icons()
  }
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <BaseNavbar/>
            <Switch>
              <Route exact path="/" component={Homepage}/>
              <Route path="/terms" component={TermsOfService}/>
              <Route path="/privacy" component={PrivacyStatement}/>
              <Route path="/contact-us" component={ContactUs}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup-preview" component={SignupPreview}/>
              <Route path="/sms" component={SMSTerms}/>
              <Route path="/pricing" component={Pricing}/>
              <Route path="/signup" component={Signup}/>
              <Route exact path="/admin" component={AdminHomepage}/>
              {/* admin general pages */}
              <Route path="/admin/users" component={AdminUsers}/>
              <Route path="/admin/email-notices" component={EmailNotices}/>
              <Route path="/admin/accounts" component={ManageAccounts}/>
              <Route path="/admin/events" component={ManageEvents}/>
              <Route path="/admin/promo-codes" component={ManagePromoCodes}/>
              <Route path="/admin/vlp-layouts" component={ManageVLPLayouts}/>
              <Route path="/admin/sms-codes" component={SMSCodes}/>
              {/* admin reports pages */}
              <Route path="/admin/user-signups" component={UserSignups}/>
              {/* admin billing pages */}
              <Route path="/admin/invoice-payments" component={InvoicePayments}/>
              <Route path="/admin/organization-billing" component={OrganizationBilling}/>
              <Route path="/admin/process-one-time-payment" component={ProcessOneTimePayment}/>
              <Route path="/admin/user-billing" component={UserBilling}/>
              {/* admin misc pages */}
              <Route path="/admin/account-search-results" component={AccountSearchResults}/>
              <Route path="/admin/change-password" component={AdminChangePassword}/>
              <Route path="/admin/change-preferences" component={AdminChangePreferences} />
            </Switch>
          <Footer />
        </BrowserRouter>        
      </div>
    );
  }
}

