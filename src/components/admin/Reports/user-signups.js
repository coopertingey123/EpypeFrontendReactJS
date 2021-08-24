import React, { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function UserSignups(props) {
    
    // const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState([]);
    
    return (
        
        <Container className="text-center py-3">
            <h1 className="green-text p-3">User Signups</h1>
            <Form className="text-start p-3">
                <Form.Group>
                    <Form.Label>
                        Sales Person
                    </Form.Label>
                    <select id="frmSalesId" name="sales_id[]" multiple size="9" className="form-select">
                        <option value="">All Sales People</option>
                        <option value="">Ammon Freestone (Platpay)</option>
                        <option value="">Corporate Sales</option>
                        <option value="">Ethan Morely (Epype)</option>
                        <option value="">Glen Oliver (EPYPE)</option>
                        <option value="">Jed Morely (Platinum Payments)</option>
                        <option value="">Lance Hansen (Platinum Payments)</option>
                        <option value="">Stace Vest (Platinum Payments</option>
                        <option value="">Trennen Rasmussen (EPYPE)</option>
                        <option value="">Valinda Hanks (Platinum Payments)</option>
                    </select>
                </Form.Group>
                {/* <Form.Group>
                    <Form.Label>Date Range</Form.Label>
                    <select id="frmDateSelect" name="date_select" className="form-select">
                        <option value="today">Today</option>
                        <option value="week-to-date">This Week</option>
                        <option value="month-to-date" selected>This Month</option>
                        <option value="year-to-date">This Year</option>
                        <option value="yesterday">Yesterday</option>
                        <option value="last-week">Last Week</option>
                        <option value="last-month">Last Month</option>
				    </select>
                </Form.Group> */}
                <Row className="py-3">
                    <Col className="col-6">
                        <Form.Group>
                            <Form.Label>Date Range</Form.Label>
                            <select id="frmDateSelect" name="date_select" className="form-select">
                                <option value="today">Today</option>
                                <option value="week-to-date">This Week</option>
                                <option value="month-to-date" selected>This Month</option>
                                <option value="year-to-date">This Year</option>
                                <option value="yesterday">Yesterday</option>
                                <option value="last-week">Last Week</option>
                                <option value="last-month">Last Month</option>
                            </select>
                        </Form.Group>
                    </Col>
                    <Col className=" col-3 col-lg mb-3">
                        <Form.Group>
                            <Form.Label>Start Date</Form.Label>
                            <DatePicker className="form-control" />
                        </Form.Group>
                    </Col>
                    <Col className=" col-3 col-lg mb-3">
                        <Form.Group>
                            <Form.Label>End Date</Form.Label>
                            <DatePicker className="form-control" />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <Button>Get Report</Button>

        </Container>
    )
}