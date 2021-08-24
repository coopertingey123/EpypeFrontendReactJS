import React from 'react';
import { Container, ListGroup } from "react-bootstrap";

import ManageAccounts from "./General/manage-accounts";
import AdminUsers from "./General/admin-users";
import ManagePromoCodes from "./General/manage-promo-codes";
import ManageVLPLayouts from "./General/manage-vlp-layouts";
import SMSCodes from "./General/sms-codes";
import ManageEvents from "./General/manage-events";
import EmailNotices from "./General/email-notices";
import UserSignups from "./Reports/user-signups";
import InvoicePayments from "./Billing/invoice-payments";
import ProcessOneTimePayment from "./Billing/process-one-time-payment";
import UserBilling from "./Billing/user-billing";
import OrganizationBilling from "./Billing/organization-billing";

export default function AdminHomepage(props) {
    return (
        
        <Container>
            <h1 className="green-text m-3">General Admin</h1>
            <ListGroup className="m-3">
                <ListGroup.Item action href="">
                    Manage Accounts
                </ListGroup.Item>
                <ListGroup.Item action href="">
                    Manage Admin Users
                </ListGroup.Item>
                <ListGroup.Item action href="">
                    Manage Promo Codes
                </ListGroup.Item>
                <ListGroup.Item action href="">
                    Manage SMS Codes
                </ListGroup.Item>
                <ListGroup.Item action href="">
                    Manage Video Landing Page Themes
                </ListGroup.Item>
                <ListGroup.Item action href="">
                    Manage Events
                </ListGroup.Item>
                <ListGroup.Item action href="">
                    Manage Email Notices
                </ListGroup.Item>
            </ListGroup>
            <ManageAccounts/>
            <AdminUsers/>
            <ManagePromoCodes/>
            <SMSCodes/>
            <ManageVLPLayouts/>
            <ManageEvents/>
            <EmailNotices/>
            <UserSignups/>
            <InvoicePayments/>
            <ProcessOneTimePayment/>
            <UserBilling/>
            <OrganizationBilling/>
        </Container>
    )
}