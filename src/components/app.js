import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import BaseNavbar from "./navigation/navbar";
import Homepage from "./homepage/homepage";
import Carousel from "./homepage/carousel";
import Footer from "./navigation/footer";
import TermsOfService from "./base-pages/terms-of-service";
import PrivacyStatement from "./base-pages/privacy-statement";
import ContactUs from "./base-pages/contact-us";

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
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
              <Route path="/carousel" component={Carousel}/>
            </Switch>
          <Footer />
        </BrowserRouter>        
      </div>
    );
  }
}

