import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

import NavbarAdmin from "../../navigation/navbar-admin";

export default function (props) {
    return (
        <Container className="text-center">
            <NavbarAdmin/>
            <h1 className="green-text p-3">
                Admin Users
            </h1>
            <Button>+ Add a new Admin User</Button>
            <Form className="text-start p-3">
                <Form.Group className="p-3">
                    <Form.Label>
                        Search
                    </Form.Label>
                    <select className="form-select my-2" aria-label="All Fields">
                        <option value="">All Fields</option>
                        <option value="">User ID</option>
                        <option value="">Name</option>
                        <option value="">Email Address</option>
                    </select>
                    <Form.Control/>
                </Form.Group>
                <Form.Group className="p-3">
                    <Form.Label>
                        Admin User Type
                    </Form.Label>
                    <select className="form-select my-2" aria-label="All Types">
                        <option value="">All Types</option>
                        <option value="">Accounting</option>
                        <option value="">Support</option>
                        <option value="">Sales</option>
                    </select>
                </Form.Group>
                <Form.Group className="p-3">
                    <Form.Label>
                        Active
                    </Form.Label>
                    <select className="form-select my-2" aria-label="Doesn't Matter">
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </Form.Group>
                <Form.Group className="p-3">
                    <Form.Label>
                        Sort Results By
                    </Form.Label>
                    <Row>
                        <Col>
                            <select className="form-select" aria-label="Last Name">
                                <option value="" selected>User Id</option>
                                <option value="" selected>Last Name</option>
                                <option value="">First Name</option>
                                <option value="">Email Address</option>
                            </select>
                        </Col>
                        <Col>
                            <select className="form-select" aria-label="Ascending">
                                <option value="" selected>Descending</option>
                                <option value="">Ascending</option>
                            </select>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
            <Button className="m-3">Find Accounts</Button>
            <Button className="m-3">Previous Search</Button>
        </Container>

    )
}