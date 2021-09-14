import React from 'react'

import { Container, Navbar, Nav } from 'react-bootstrap'


export default function (props) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="footer" id="footer">
            <Container>
                <Navbar.Toggle aria-controls="resonsive-footer"/>
                <Navbar.Collapse id="reponsive-footer">
                <Nav>
                    <Nav.Link href="/terms">Terms of Service</Nav.Link>
                    <Nav.Link href="/privacy">Privacy Statement</Nav.Link>
                    <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/">&copy; 2021 EPYPE. All Rights Reserved.</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}

