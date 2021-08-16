import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, Button} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                </Nav>
            </Container>
        </Navbar>
    )
}