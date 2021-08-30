import React from 'react'
import { Container, Form, Alert, Row, Col, Button } from "react-bootstrap"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function OutboundSMSReport(props) {
    return (
        <Container>
            <Alert className="" variant="danger">
                <Alert.Heading>The following errors occured:</Alert.Heading>
                No blast groups were found for the specified date range.
            </Alert>
            <fieldset>
                <legend>Date Range</legend>
                <div className="mb-3">
                    <label for="frmDateSelect" class="visually-hidden">Date Range</label>

                    <select id="frmDateSelect" name="date_select" class="form-select">
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
                        <div class="input-group">
                            <DatePicker className="form-control" id="frmStartDate" name="start_date" maxlength="10" value="8/1/2021"/>  
                        </div>
                    </Col>

                    <Col className="mb-3">
                        <label for="frmEndDate">End Date</label>
                        <div class="input-group">
                            <DatePicker className="form-control" id="frmEndDate" name="end_date" maxlength="10" value="8/30/2021"/>
                        </div>
                    </Col>
                </Row>
                <Button>Search</Button>
            </fieldset>
        </Container>
    )
}