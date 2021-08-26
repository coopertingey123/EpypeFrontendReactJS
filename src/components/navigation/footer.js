import React from 'react'

import { Container, Navbar, Nav } from 'react-bootstrap'


export default function (props) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="footer" id="footer">
            <Container>
                <Nav>
                    <Nav.Item className="px-3">
                        <Nav.Link href="/terms">Terms of Service</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="px-3">
                        <Nav.Link href="/privacy">Privacy Statement</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="px-3">
                        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/">&copy; 2021 EPYPE. All Rights Reserved.</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}

