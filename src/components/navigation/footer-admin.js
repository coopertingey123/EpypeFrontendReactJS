import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'


export default function (props) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="footer">
            <Container className="justify-content-end">
                <Nav >
                    <Nav.Item >
                        <Nav.Link href="/">&copy; 2021 EPYPE. All Rights Reserved.</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}

