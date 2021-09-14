import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, Button, Col, Row} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { ProfilePic } from "../../../static/assets/photos/profilepic.png";

import EpypeLogoGreenWhite from "../../../static/assets/logos/epype-rgb-logo-1.svg";

export default function (props) {
    return (
        <Navbar bg="dark" variant="dark" width="100%" expand="sm" className="justify-content-between">
            <Container>
            
                <Navbar.Brand href="/" className="my-0 py-0">
                    <img width="175" src={EpypeLogoGreenWhite}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="admin-navbar"/>
                <Navbar.Collapse id="admin-footer">
                    <Nav className="me-auto">
                        <NavDropdown title="General" id="collasible-nav-dropdown" className="px-3">
                            <NavDropdown.Item href="/admin/accounts">Accounts</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/admin/clients">Admin Users</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/promo-codes">Promo Codes</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/sms-codes">SMS Codes</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/vlp-layouts">Video Page Layouts</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/events">Events</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/email-notices">Email Notices</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Reports" id="collasible-nav-dropdown" className="px-3">
                            <NavDropdown.Item href="/admin/client-signups">Signups</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Billing" id="collasible-nav-dropdown" className="px-3">
                            <NavDropdown.Item href="/admin/client-billing">Users</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/organization-billing">Organizations</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/admin/invoice-payments">Invoices</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/process-one-time-payment">One-Time Payment</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="align-items-center">
                        <NavDropdown title="Accounts" id="collasible-nav-dropdown" className="px-3">
                            <NavDropdown.Item href="#action/3.1">Accounts</NavDropdown.Item>
                        </NavDropdown>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Contact Search"
                                className="m-2"
                                aria-label="Search"
                            />
                        </Form>
                        <Button className="bg-transparent border-0" href="/admin/account-search-results">
                            <FontAwesomeIcon icon="search"/>
                        </Button>
                        <NavDropdown title={<FontAwesomeIcon icon="user"/>} className="px-3" drop="start">
                            <NavDropdown.Item>
                                Signed in as <br/>
                                <strong>Cooper Tingey</strong>
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/admin/change-password">Change Password</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/change-preferences">Change Preferences</NavDropdown.Item>
                            <NavDropdown.Item href="/">Log Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}