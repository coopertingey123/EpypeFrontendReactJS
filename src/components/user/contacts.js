import React, { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import UserNavbar from "../navigation/user-navbar";

export default function UserSignups(props) {
    
    return (
        
        <Container className="text-center pb-5">
            <UserNavbar/>
            <h1 className="green-text p-3">Contacts</h1>
            <Button className="mx-1">Add New Contact</Button>
            <Button className="mx-1">Import Contacts</Button>
            <Button className="mx-1">Export Contacts</Button>
            <Button className="mx-1">Manage Tags</Button>
            <Form className="text-start p-3">
                <Form.Group>
                    <Form.Label>
                        Search
                    </Form.Label>
                    <select id="frmSalesId" name="sales_id[]" className="form-select my-2">
                        <option value="">All Fields</option>
                        <option value="">Last Name</option>
                        <option value="">First Name</option>
                        <option value="">Phone Number</option>
                        <option value="">Email Address</option>
                    </select>
                    <Form.Control placeholder="Search Term"/>
                </Form.Group>
                <Form.Group className="py-3">
                    <Form.Label>Subscribed SMS Keywords</Form.Label>
                    <select name="" id="" className="form-select my-2" multiple size="2">
                        <option value="">All</option>
                        <option value="">COOPER (12)</option>
                        <option value="">Football (64)</option>
                    </select>
                </Form.Group>
                <Form.Group className="py-3">
                    <Form.Label>Tag</Form.Label>
                    <select name="" id="" className="form-select my-2" multiple size="2">
                        <option value="">All</option>
                        <option value="">New Contact (12)</option>
                        <option value="">Philip Lunt (14)</option>
                    </select>
                </Form.Group>
                <Row className="py-3 align-items-center">
                    <Col className="col-2">
                        <p className="align-items-center">Import Date Range</p>
                    </Col>
                    <Col className="col-5 col-lg mb-3">
                        <Form.Group>
                            <Form.Label>Start Date</Form.Label>
                            <DatePicker className="form-control" />
                        </Form.Group>
                    </Col>
                    <Col className="col-5 col-lg mb-3">
                        <Form.Group>
                            <Form.Label>End Date</Form.Label>
                            <DatePicker className="form-control" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="py-3">
                    <Form.Label>Sort Results By</Form.Label>
                    <select className="form-select" id="">
                        <option value="">Last Name</option>
                        <option value="">First Name</option>
                        <option value="">Email</option>
                        <option value="">Import Date</option>
                    </select>
                </Form.Group>
                <Form.Group className="py-3">
                    <Form.Label>Results Per Page</Form.Label>
                    <select className="form-select" id="">
                        <option value="">15</option>
                        <option value="">20</option>
                        <option value="">30</option>
                        <option selected value="">50</option>
                        <option value="">75</option>
                        <option value="">100</option>
                    </select>
                </Form.Group>
            </Form>
            <Button className="mx-1">Find Contacts</Button>
            <Button className="mx-1">Previous Search</Button>

        </Container>
    )
}