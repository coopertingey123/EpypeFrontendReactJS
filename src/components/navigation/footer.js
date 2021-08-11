import React from 'react'

import { Container, Navbar, Nav } from 'react-bootstrap'


export default function (props) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="footer">
            <Container>
                <Nav style={{paddingleft: ""}}>
                    <Nav.Item>
                        <Nav.Link href="/terms">Terms of Service</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/privacy">Privacy Statement</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav style={{color: "#fff"}}>
                    &copy; 2021 EPYPE. All Rights Reserved.
                </Nav>
            </Container>
        </Navbar>
    )
}

