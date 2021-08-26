import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap'
import EpypeLogoGreenWhite from "../../../static/assets/logos/epype-logo-alt-25h.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserNavbar(props) {
    return (
        <Container>
            <Navbar className="justify-content-space-between" bg="dark" variant="dark" width="100%">
                <Container>
                    <Navbar.Brand href="/" className="">
                        <img width="117" src={EpypeLogoGreenWhite}/>
                    </Navbar.Brand>
                    
                    <Nav className="">
                        <NavDropdown title="Video Landing Pages" id="collapsible-nav-dropdown" className="">
                            <NavDropdown.Item href="/user/vlps">Video Landing Pages</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/users">Saved Templates</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/promo-codes">Products</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Contacts" id="collapsible-nav-dropdown" className="">
                            <NavDropdown.Item href="/admin/user-signups">Contacts</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/user-signups">Tags</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Messaging" id="collapsible-nav-dropdown" className="">
                            <NavDropdown.Item href="/admin/user-billing">SMS Keywords</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/organization-billing">New Message Blast</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/invoice-payments">Scheduled Message Blasts</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Reports" id="collapsible-nav-dropdown" className="">
                            <NavDropdown.Item href="/admin/user-billing">Outbound SMS</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/organization-billing">VLP Activity</NavDropdown.Item>
                            <NavDropdown.Item href="/admin/invoice-payments">Keyword Activity</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>Help</Nav.Link>
                    </Nav>
                    <Nav className="align-items-center">
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
                        <NavDropdown title={<FontAwesomeIcon icon="user"/>} className="" drop="start">
                            <NavDropdown.Item>
                                Signed in as <br/>
                                <strong>Cooper Tingey</strong>
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/admin/change-password">Update Profile</NavDropdown.Item>
                            <NavDropdown.Item href="">Log Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    )
}