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



import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    Icons()
  }
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <BaseNavbar />
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
              <Route path="/admin" component={AdminHomepage}/>
            </Switch>
          <Footer />
        </BrowserRouter>        
      </div>
    );
  }
}

