import React from 'react';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';

import AdminNavbar from "../navigation/navbar-admin";
import AdminFooter from "../navigation/footer-admin";

export default function AdminHomepage(props) {
    return (
        <div className="page-wrapper">
            <AdminNavbar/>
            <Container className="p-5">
                <h1 className="green-text text-center p-3">General Admin</h1>

                <ListGroup defaultActiveKey="#link1">
                    <ListGroup.Item action href="">
                        Manage Accounts
                    </ListGroup.Item>
                    <ListGroup.Item action href="" >
                        Manage Admin Users
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        Manage Promo Codes
                    </ListGroup.Item>
                    <ListGroup.Item action href="">
                        Manage SMS Codes
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        Manage Video Landing Page Themes
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        Manage Events
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        Manage Email Notices
                    </ListGroup.Item>
                </ListGroup>
            </Container>
            <AdminFooter/>
        </div>
    )
}