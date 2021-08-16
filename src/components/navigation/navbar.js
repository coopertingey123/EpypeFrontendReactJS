import React from 'react'

import { Navbar, Container, Nav } from 'react-bootstrap';
import EpypeLogoGreenWhite from "../../../static/assets/logos/epype-rgb-logo-1.svg";


export default function (props) {
    return (
            <Navbar bg="dark" variant="dark">
                <Container className="justify-content-between">
                  
                  <Navbar.Brand href="/" className="my-0 py-0">
                      <img width="175" src={EpypeLogoGreenWhite}/>
                  </Navbar.Brand>
                
                  <Nav>
                      <Nav.Item className="px-3">
                          <Nav.Link href="/pricing">Pricing</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="px-3">
                          <Nav.Link href="/login">Log In</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="px-3">
                          <Nav.Link href="/signup">Sign Up</Nav.Link>
                      </Nav.Item>
                  </Nav>
                    
                </Container>
            </Navbar>
                   
    )
}