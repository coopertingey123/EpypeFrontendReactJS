import React, { useState, useEffect, Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Icons from "../helpers/icons";

// Navbar Components
import BaseNavbar from "./navigation/navbar";
import AdminNavbar from "./navigation/navbar-admin";
import UserNavbar from "./navigation/user-navbar";

// Base Comonents
import Homepage from "./homepage/homepage";
import Login from "./auth/Login/login";
import ResetPassword from "./auth/Login/password-reset";
import SignupPreview from "./auth/signup/signup-preview";
import Pricing from "./base-pages/pricing";
import Footer from "./navigation/footer";
import TermsOfService from "./base-pages/terms-of-service";
import SMSTerms from "./base-pages/sms-terms-and-conditions";
import PrivacyStatement from "./base-pages/privacy-statement";
import ContactUs from "./base-pages/contact-us";

// Signup Components
import Signup from "./auth/signup/signup";
import SignupType from "./auth/signup/signup-type";
import SignupUserInfo from "./auth/signup/signup-user-info";
import SignupPackageSelect from "./auth/signup/signup-package-select";
import SignupPaymentEntry from "./auth/signup/signup-payment-entry";

// Admin Components
import AdminHomepage from "./admin/Other/admin-homepage";
import AdminUsers from "./admin/General/admin-users";
import EmailNotices from "./admin/General/email-notices";
import ManageAccounts from './admin/General/manage-accounts';
import ManageEvents from './admin/General/manage-events';
import ManagePromoCodes from './admin/General/manage-promo-codes';
import ManageVLPLayouts from './admin/General/manage-vlp-layouts';
import EditVlpTheme from './admin/General/edit-vlp-theme';
import SMSCodes from './admin/General/sms-codes';
import ClientSignups from './admin/Reports/user-signups';
import InvoicePayments from './admin/Billing/invoice-payments';
import AddOrganization from './admin/General/add-organization';
import OrganizationBilling from './admin/Billing/organization-billing';
import ProcessOneTimePayment from './admin/Billing/process-one-time-payment';
import UserBilling from './admin/Billing/user-billing';
import AccountSearchResults from "./admin/Other/account-search-results";
import AdminChangePassword from "./auth/admin/admin-change-password";
import AdminChangePreferences from './auth/admin/admin-preferences';
import AdminEditUser from "./admin/Other/edit-user"

// User Components
import HomeVLPs from "./VLPs/home-vlps";
import UserTemplates from "./templates/saved-templates";
import UserProducts from "./user/products/products";
import UserContacts from "./user/Contacts/contacts";
import AddContact from "./user/Contacts/add-contact";
import ImportContacts from './user/Contacts/import-contact';
import ExportContacts from './user/Contacts/export-contacts';
import ContactTags from './user/Contacts/manage-tags';
import AddTag from "./user/Contacts/add-tag";
import EditTag from "./user/Contacts/edit-tag";
import EditContact from "./user/Contacts/EditContact/edit-contact";

import ContactSearchResults from './user/Contacts/contact-search-results';
import UserTags from "./user/Contacts/tags";
import SMSKeywords from "./user/keywords/sms-keywords";
import SMSBlast from "./user/message-blast/sms-blast";
import EditSMSKeywords from "./user/keywords/edit-sms-keyword";
import OutboundReportPreview from './user/Reports/outbound-report-preview';
import OutboundSMSReport from './user/Reports/outbound-report';
import VLPActivity from "./user/Reports/vlp-activity";
import KeywordActivity from "./user/Reports/keyword-activity-report";
import EditAccountInfo from "./user/EditProfile/edit-account-info";
import OrderHistory from './user/products/order-history';
import AddProduct from "./user/products/add-product";
import EditProduct from "./user/products/edit-product";
import OrderDetails from './user/products/order-details';
import StepsAddSmsKeyword from "./user/keywords/add-keyword/steps";
import AddVlp from "./VLPs/add-vlp";
import UpdateVlp from "./VLPs/update-vlp";
import AdvancedEdit from './VLPs/advanced-edit';

// css styles for components
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";




export default function App(props) {
  

    const [userType, setUserType] = useState("user")
    // We are going to use either user, admin, or client as user types
    Icons();
  
    const checkUserType = () => {
      if (window.location.href.includes("user")) {
        setUserType("client")
      }
      else if (window.location.href.includes("admin")) {
        setUserType("admin")
      }
      else {
        setUserType("user")
      }
    }

    useEffect(() => {
      checkUserType()
    }, [])
  
    return (
      <div className='app'>
        <BrowserRouter>
          {userType == "admin" ? <AdminNavbar/> : null}
          {userType == "client" ? <UserNavbar/> : null}
          {userType == "user" ? <BaseNavbar/> : null}
            <Switch>
              <Route exact path="/" component={Homepage}/>
              <Route path="/terms" component={TermsOfService}/>
              <Route path="/privacy" component={PrivacyStatement}/>
              <Route path="/contact-us" component={ContactUs}/>
              <Route path="/login" component={Login}/>
              <Route path="/reset-password" component={ResetPassword}/>
              {/* <Route path="/signup-preview" component={SignupPreview}/> */}
              <Route path="/sms" component={SMSTerms}/>
              <Route path="/pricing" component={Pricing}/>
              <Route exact path="/signup" component={SignupPreview}/>
              <Route exact path="/admin" component={AdminHomepage}/>
              {/* signup pages */}
              <Route path="/signup/package-select" component={SignupPackageSelect}/>
              <Route path="/signup/payment-entry" component={SignupPaymentEntry}/>
              <Route path="/signup/signup" component={Signup}/>
              <Route path="/signup/type" component={SignupType}/>
              <Route path="/signup/client-info" component={SignupUserInfo}/>
              
              {/* admin general pages */}
              <Route path="/admin/clients" component={AdminUsers}/>
              <Route path="/admin/email-notices" component={EmailNotices}/>
              <Route path="/admin/accounts" component={ManageAccounts}/>
              <Route path="/admin/events" component={ManageEvents}/>
              <Route path="/admin/promo-codes" component={ManagePromoCodes}/>
              <Route path="/admin/vlp-layouts" component={ManageVLPLayouts}/>
              <Route path="/admin/edit-vlp-theme" component={EditVlpTheme}/>
              <Route path="/admin/sms-codes" component={SMSCodes}/>
              {/* admin reports pages */}
              <Route path="/admin/client-signups" component={ClientSignups}/>
              {/* admin billing pages */}
              <Route path="/admin/invoice-payments" component={InvoicePayments}/>
              <Route path="/admin/organization-billing" component={OrganizationBilling}/>
              <Route path="/admin/process-one-time-payment" component={ProcessOneTimePayment}/>
              <Route path="/admin/client-billing" component={UserBilling}/>
              <Route path="/admin/add-organization" component={AddOrganization}/>
              {/* admin misc pages */}
              <Route path="/admin/account-search-results" component={AccountSearchResults}/>
              <Route path="/admin/change-password" component={AdminChangePassword}/>
              <Route path="/admin/change-preferences" component={AdminChangePreferences} />
              <Route path="/admin/edit-client" component={AdminEditUser}/>
              {/* user pages */}
              <Route exact path="/user" component={HomeVLPs}/>
              <Route path="/user/templates" component={UserTemplates}/>
              <Route path="/user/products" component={UserProducts}/>
              <Route exact path="/user/contacts" component={UserContacts}/>
              <Route path="/user/contacts/add-contact" component={AddContact}/>
              <Route path="/user/contacts/import-contacts" component={ImportContacts}/>
              <Route path="/user/contacts/export-contacts" component={ExportContacts}/>
              <Route path="/user/contacts/tags" component={ContactTags}/>
              <Route path="/user/contacts/add-tag" component={AddTag}/>
              <Route path="/user/contacts/edit-tag" component={EditTag}/>
              <Route path="/user/contacts/edit-contact" component={EditContact}/>

              <Route path="/user/contacts/search-results" component={ContactSearchResults}/>
              <Route path="/user/tags" component={UserTags}/>
              <Route path="/user/sms-keywords" component={SMSKeywords}/>
              <Route path="/user/sms-blast" component={SMSBlast}/>
              <Route path="/user/edit-sms-keywords" component={EditSMSKeywords}/>
              <Route path="/user/outbound-report-preview" component={OutboundReportPreview}/>
              <Route path="/user/sms-outbound-report" component={OutboundSMSReport}/>
              <Route path="/user/vlp-activity" component={VLPActivity}/>
              <Route path="/user/keyword-activity" component={KeywordActivity}/>
              <Route path="/user/edit-account-info" component={EditAccountInfo}/>
              <Route path="/user/order-history" component={OrderHistory}/>
              <Route path="/user/add-product" component={AddProduct}/>
              <Route path="/user/edit-products" component={EditProduct}/>
              <Route path="/user/order-details" component={OrderDetails}/>
              <Route path="/user/add-keyword" component={StepsAddSmsKeyword}/>
              <Route path="/user/add-vlp" component={AddVlp}/>
              <Route path="/user/update-vlp" component={UpdateVlp}/>
              <Route path="/user/advanced-edit" component={AdvancedEdit}/>
            </Switch>
          <Footer />
        </BrowserRouter>        
      </div>
    );
  }


