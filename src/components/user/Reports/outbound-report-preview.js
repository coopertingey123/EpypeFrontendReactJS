import React from 'react'
import { Container, Form, Alert, Row, Col, Button, Table } from "react-bootstrap"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function OutboundSMSReport(props) {
    return (
        <Container className="text-center">
            <Alert className="" variant="danger">
                <Alert.Heading>The following errors occured:</Alert.Heading>
                No blast groups were found for the specified date range.
            </Alert>
            <Form className="text-start">
                <legend>Date Range</legend>
                <div className="mb-3">
                    <label for="frmDateSelect" className="visually-hidden">Date Range</label>

                    <select id="frmDateSelect" name="date_select" className="form-select">
                        <option value="today">Today</option>
                        <option value="week-to-date">This Week</option>
                        <option value="month-to-date" selected>This Month</option>
                        <option value="year-to-date">This Year</option>
                        <option value="yesterday">Yesterday</option>
                        <option value="last-week">Last Week</option>
                        <option value="last-month">Last Month</option>
                    </select>
                </div>

                <Row>
                    <Col className="col-lg mb-3">
                        <label for="frmStartDate">Start Date</label>
                        <div className="input-group">
                            <DatePicker className="form-control" id="frmStartDate" name="start_date" maxlength="10" value="8/1/2021"/>  
                        </div>
                    </Col>

                    <Col className="mb-3">
                        <label for="frmEndDate">End Date</label>
                        <div className="input-group">
                            <DatePicker className="form-control" id="frmEndDate" name="end_date" maxlength="10" value="8/30/2021"/>
                        </div>
                    </Col>
                </Row>
            </Form>
            <Button className="mb-5">Search</Button>
            <h3>Blast Group List</h3>
            <Table className="text-start">
                <thead className="thead-dark">
                    <tr>
                        <th>Send Date</th>
                        <th>Message</th>
                        <th>Opt-In Message</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>7/24/2021 <br/> 12:30 pm</td>
                        <td>We'd love to hear from you. Please tell us what you throught of the Fundraiser! See you next year. https://vlp.epype.net/MkqWJy</td>
                        <td>-</td>
                        <td><Button className="btn-sm">Get Report</Button></td>
                    </tr>
                    <tr>
                        <td>7/24/2021 <br/> 4:15 pm</td>
                        <td>See the stats from last week's game! https://vlp.epype.net/MkqWJy</td>
                        <td>-</td>
                        <td><Button className="btn-sm">Get Report</Button></td>
                    </tr>
                    <tr>
                        <td>7/24/2021 <br/> 9:49 pm</td>
                        <td>Watch the highlights from last season!  https://vlp.epype.net/MkqWJy</td>
                        <td>Reply FOOTBALL to get a discount on season tickets next year!</td>
                        <td><Button className="btn-sm">Get Report</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}