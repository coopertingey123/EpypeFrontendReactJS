import React, { useState } from 'react'
import { Container, Form, Row, Col, Button, Table } from "react-bootstrap"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import BarChart from './bar-chart';

export default function OutboundSMSReport(props) {

    const [dateRange, setDateRange] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")


    function print() {
        window.print();
    }

    function handleFilter() {
        console.log(dateRange)
        console.log(startDate)
        console.log(endDate)
    }

    return (
        <Container className="">
            <h3 className="green-text py-3 text-center" id="pageStart">VLP Activity Report</h3>
            <hr/>
            <Row>
                <Col className="px-5" lg={6}>
                    <h4>VLP Name: </h4>
                    <p>BareBack Friday</p>
                    <hr/>
                    <h4>Current Date Range: </h4>
                    <p>7/1/2021 to 8/31/2021</p>
                </Col>
                <Col className="px-5" lg={6}>
                    <h4 className="text-center">Date Range</h4>
                    <Form className="mb-3">
                        <Form.Label>Date Range</Form.Label>
                        <select 
                            name="" id="" 
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
                    </Form>
                    <Row>
                        <Col className="mb-3">
                            <Form>
                                <Form.Label>
                                    Start Date
                                </Form.Label>
                                <div className="input-group">
                                    <DatePicker 
                                        className="form-control"
                                        selected={startDate}
                                        onChange={(e) => setStartDate(e)}
                                    />
                                </div>
                            </Form>
                        </Col>
                        <Col className="mb-3">
                            <Form>
                                <Form.Label>
                                    End Date
                                </Form.Label>
                                <div className="input-group">
                                    <DatePicker 
                                        className="form-control"
                                        selected={endDate}
                                        onChange={(e) => setEndDate(e)}
                                    />
                                </div>
                            </Form>
                        </Col>
                        <p className="mb-0 text-center">
                            <Button onClick={handleFilter}>Filter</Button>
                        </p>
                    </Row>
                </Col>
            </Row>
            <hr/>
            <Table className="text-start table-striped border_bottom py-3">
                <thead className="thead-dark">
                    <tr>
                        <th></th>
                        <th>Create Date</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Form.Check/></td>
                        <td>7/24/2021 12:30 pm</td>
                        <td>We'd love to hear from you. Please tell us what you throught of the Fundraiser! See you next year. https://vlp.epype.net/MkqWJy</td>
                        <td width="110px"><Button className="btn-sm">Get Report</Button></td>
                    </tr>
                    <tr>
                        <td><Form.Check/></td>
                        <td>8/2/2021 8:30 pm</td>
                        <td> Thanks for participating in the Fundraiser!  https://vlp.epype.net/MkqWJy</td>
                        <td width="110px"><Button className="btn-sm">Get Report</Button></td>
                    </tr>
                    <tr>
                        <td><Form.Check/></td>
                        <td>7/8/2021 12:45 pm</td>
                        <td>View the highlights here! https://vlp.epype.net/MkqWJy</td>
                        <td width="110px"><Button className="btn-sm">Get Report</Button></td>
                    </tr>
                </tbody>
            </Table>
            <Row className="py-3">
                <Col className="col order-1 order-lg-2">
                    <div className="table-responsive">
                        <Table className="text-start table-striped border_bottom py-3" >
                            <thead className="thead-dark">
                                <tr>
                                    <td></td>
                                    <td className="text-end">Total</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>VLP views</td>
                                    <td className="text-end">12</td>
                                </tr>
                                <tr>
                                    <td>Video watches</td>
                                    <td className="text-end">12</td>
                                </tr>
                                <tr>
                                    <td>Average watch time (seconds)</td>
                                    <td className="text-end">35</td>
                                </tr>
                                <tr>
                                    <td>VLP Shares</td>
                                    <td className="text-end">2</td>
                                </tr>
                                <tr>
                                    <td>Link clicks: General</td>
                                    <td className="text-end">3</td>
                                </tr>
                                <tr>
                                    <td>Link clicks: Action Items</td>
                                    <td className="text-end">6</td>
                                </tr>
                                <tr>
                                    <td>Link clicks: Social Media</td>
                                    <td className="text-end">4</td>
                                </tr>
                                <tr>
                                    <td>Product purchases</td>
                                    <td className="text-end">3</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
                <Col className="order-2 order-lg-1 mb-3">
                    <BarChart/>
                </Col>
            </Row>
            <div className="text-end p-3">
                <Button className="m-1" onClick={print}>Print</Button>
                <Button className="m-1" href="#pageStart">New Report</Button>
            </div>
        </Container>
    )
}