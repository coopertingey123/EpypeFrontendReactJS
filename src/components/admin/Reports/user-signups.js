import React, { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function UserSignups(props) {

    const [salesPerson, setSalesPerson] = useState("")
    const [dateRange, setDateRange] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        console.log(salesPerson)
        console.log(dateRange)
        console.log(startDate)
        console.log(endDate)
    }
    
    return (
        <Container className="text-center">
            <h1 className="green-text p-3">User Signups</h1>
            <Form className="text-start p-3" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>
                        Sales Person
                    </Form.Label>
                    <select 
                        id="frmSalesId" 
                        name="sales_id[]" 
                        size="9" 
                        className="form-select"
                        value={salesPerson}
                        onChange={(e) => setSalesPerson(e.target.value)}
                    >
                        <option value="">All Sales People</option>
                        <option value="Ammon Freestone">Ammon Freestone (Platpay)</option>
                        <option value="Corporate Sales">Corporate Sales</option>
                        <option value="Ethan Morley">Ethan Morely (Epype)</option>
                        <option value="Glen Oliver">Glen Oliver (EPYPE)</option>
                        <option value="Jed Morley">Jed Morely (Platinum Payments)</option>
                        <option value="Lance Hansen">Lance Hansen (Platinum Payments)</option>
                        <option value="Stace Vest">Stace Vest (Platinum Payments</option>
                        <option value="Trennen Rasmussen">Trennen Rasmussen (EPYPE)</option>
                        <option value="Valinda Hanks">Valinda Hanks (Platinum Payments)</option>
                    </select>
                </Form.Group>
                <Row className="py-3">
                    <Col className="mb-3" lg={6}>
                        <Form.Group>
                            <Form.Label>Date Range</Form.Label>
                            <select 
                                id="frmDateSelect" 
                                name="date_select" 
                                className="form-select"
                                value={dateRange}
                                onChange={(e) => setDateRange(e.target.value)}
                            >
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
                    <Col className="mb-3" lg={3}>
                        <Form.Group>
                            <Form.Label>Start Date</Form.Label>
                            <DatePicker 
                                className="form-control" 
                                selected={startDate} 
                                onChange={(e) => setStartDate(e)}
                            />
                        </Form.Group>
                    </Col>
                    <Col className="mb-3" lg={3}>
                        <Form.Group>
                            <Form.Label>End Date</Form.Label>
                            <DatePicker 
                                className="form-control" 
                                selected={endDate} 
                                onChange={(e) => setEndDate(e)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <div className="text-center">
                    <Button type ="submit" className="mb-3">Get Report</Button>
                </div>
            </Form>
        </Container>
    )
}