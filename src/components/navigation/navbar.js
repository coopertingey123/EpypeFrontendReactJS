import React from 'react'

import { Navbar, Container, Nav, Col } from 'react-bootstrap';
import EpypeLogoGreenWhite from "../../../static/assets/logos/epype-rgb-logo-1.svg";


export default function (props) {
    return (
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img width="175" src={EpypeLogoGreenWhite}/>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/pricing">Pricing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/login">Log In</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/signup">Sign Up</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
                   
    )
}

{/* <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}