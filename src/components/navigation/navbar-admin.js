import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, Button, Col, Row} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfilePic } from "../../../static/assets/photos/profilepic.png";

import EpypeLogoGreenWhite from "../../../static/assets/logos/epype-rgb-logo-1.svg";

export default function (props) {
    return (
        <Navbar bg="dark" variant="dark" width="100%">
            <Container>
            
                <Navbar.Brand href="/" className="my-0 py-0">
                    <img width="175" src={EpypeLogoGreenWhite}/>
                </Navbar.Brand>
                
                <Nav className="me-auto">
                    <NavDropdown title="General" id="collasible-nav-dropdown" className="px-3">
                        <NavDropdown.Item href="#action/3.1">Accounts</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Admin Users</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Promo Codes</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">SMS Codes</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Video Page Layouts</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Events</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Email Notices</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Reports" id="collasible-nav-dropdown" className="px-3">
                        <NavDropdown.Item href="#action/3.1">Signups</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Billing" id="collasible-nav-dropdown" className="px-3">
                        <NavDropdown.Item href="#action/3.1">Users</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Organizations</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Invoices</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">One-Time Payment</NavDropdown.Item>
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
                    <Button className="bg-transparent border-0">
                        <FontAwesomeIcon icon="search"/>
                    </Button>
                    <NavDropdown title={<FontAwesomeIcon icon="user"/>} className="px-3" drop="start">
                        <NavDropdown.Item>
                            Signed in as <br/>
                            <strong>Cooper Tingey</strong>
                        </NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="">Change Password</NavDropdown.Item>
                        <NavDropdown.Item href="">Change Preferences</NavDropdown.Item>
                        <NavDropdown.Item href="">Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}