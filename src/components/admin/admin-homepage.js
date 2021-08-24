import React from 'react';
import { Container, ListGroup } from "react-bootstrap";

import ManageAccounts from "./manage-accounts";
import AdminUsers from "./admin-users";
import ManagePromoCodes from "./manage-promo-codes";
import SMSCodes from "./sms-codes";
import ManageEvents from "./manage-events";
import EmailNotices from "./email-notices";

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
            <ManageEvents/>
            <EmailNotices/>
        </Container>
    )
}