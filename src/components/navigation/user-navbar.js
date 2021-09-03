import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap'
import EpypeLogoGreenWhite from "../../../static/assets/logos/epype-logo-alt-25h.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserNavbar(props) {
    return (
        <Navbar className="justify-content-space-between" bg="dark" variant="dark" width="100%" fluid>
            <Container>
                <Navbar.Brand href="/" className="">
                    <img width="117" src={EpypeLogoGreenWhite}/>
                </Navbar.Brand>
                
                <Nav className="">
                    <NavDropdown title="Video Landing Pages" id="collapsible-nav-dropdown" className="">
                        <NavDropdown.Item href="/user/vlps">Video Landing Pages</NavDropdown.Item>
                        <NavDropdown.Item href="/user/templates">Saved Templates</NavDropdown.Item>
                        <NavDropdown.Item href="/user/products">Products</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Contacts" id="collapsible-nav-dropdown" className="">
                        <NavDropdown.Item href="/user/contacts">Contacts</NavDropdown.Item>
                        <NavDropdown.Item href="/user/tags">Tags</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Messaging" id="collapsible-nav-dropdown" className="">
                        <NavDropdown.Item href="/user/sms-keywords">SMS Keywords</NavDropdown.Item>
                        <NavDropdown.Item href="/user/sms-blast">New Message Blast</NavDropdown.Item>
                        <NavDropdown.Item href="/user/edit-sms-keywords">Scheduled Message Blasts</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Reports" id="collapsible-nav-dropdown" className="">
                        <NavDropdown.Item href="/user/sms-outbound-report">Outbound SMS</NavDropdown.Item>
                        <NavDropdown.Item href="/user/vlp-activity">VLP Activity</NavDropdown.Item>
                        <NavDropdown.Item href="/user/keyword-activity">Keyword Activity</NavDropdown.Item>
                    </NavDropdown>
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
                        <NavDropdown.Item href="/user/edit-account-info">Update Profile</NavDropdown.Item>
                        <NavDropdown.Item href="">Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}