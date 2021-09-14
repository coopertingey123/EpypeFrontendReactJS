import React from 'react'

import { Navbar, Container, Nav } from 'react-bootstrap';
import EpypeLogoGreenWhite from "../../../static/assets/logos/epype-logo-alt-25h.png";


export default function (props) {
    return (
            <Navbar collapseOnSelect bg="dark" variant="dark" className="" expand="sm">
                <Container className="justify-content-between">
                  
                  <Navbar.Brand href="/" className="my-0 py-0">
                      <img width="120" src={EpypeLogoGreenWhite}/>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="base-navbar-nav"/>
                  <Navbar.Collapse id="base-navbar-nav" className="">
                        <Nav className="ms-auto">
                            <Nav.Link className="px-3" href="/pricing">Pricing</Nav.Link>
                            <Nav.Link className="px-3" href="/login">Log In</Nav.Link>
                            <Nav.Link className="px-3" href="/signup">Sign Up</Nav.Link>
                        </Nav>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
                   
    )
}