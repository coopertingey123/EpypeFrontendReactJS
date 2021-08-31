import React from 'react'
import { Container, Form, Alert, Row, Col, Button, Table } from "react-bootstrap"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function OutboundSMSReport(props) {
    return (
        <Container className="text-center">
            
            <h3>VLP Activity Report</h3>
            <Table className="text-start">
                <thead>
                    <tr>
                        <td></td>
                        <td>Create Date</td>
                        <td>Description</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Form.Check/></td>
                        <td>7/24/2021 12:30 pm</td>
                        <td>We'd love to hear from you. Please tell us what you throught of the Fundraiser! See you next year. https://vlp.epype.net/MkqWJy</td>
                        <td><Button className="btn-sm">Get Report</Button></td>
                    </tr>
                    <tr>
                        <td><Form.Check/></td>
                        <td>8/2/2021 8:30 pm</td>
                        <td> Thanks for participating in the Fundraiser!  https://vlp.epype.net/MkqWJy</td>
                        <td><Button className="btn-sm">Get Report</Button></td>
                    </tr>
                    <tr>
                        <td><Form.Check/></td>
                        <td>7/8/2021 12:45 pm</td>
                        <td>View the highlights here! https://vlp.epype.net/MkqWJy</td>
                        <td><Button className="btn-sm">Get Report</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}