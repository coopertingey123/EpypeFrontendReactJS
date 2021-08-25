import React from 'react'
import BaseNavbar from "../navigation/navbar"
import { Container, Table, Alert, Col} from "react-bootstrap";    

export default function Pricing(props) {
    return (
        <Container className="py-3">
            <BaseNavbar/>
            <h1 className="green-text">Pricing</h1>
            <Table id="pricing-table" className="table-hover text-center">
                <thead className="dark">
                    <tr>
                        <th></th>
                        <th>Personal</th>
                        <th>Business</th>
                        <th>Business Plus</th>
                        <th>Business Pro</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="fw-bold text-start">Text Messages (In/Out)</td>
                        <td>400</td>
                        <td>3,000</td>
                        <td>8,000</td>
                        <td>20,000</td>
                    </tr>
                    <tr>
                        <td className="fw-bold text-start">Video Storage Duration</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td className="fw-bold text-start">Active Videos</td>
                        <td>10</td>
                        <td>20</td>
                        <td>Unlimited</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td className="fw-bold text-start">Active Admin Accounts</td>
                        <td>1</td>
                        <td>1</td>
                        <td>10</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td className="fw-bold text-start">Dedicated SMS Code</td>
                        <td>No</td>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td className="fw-bold text-start">Setup Fee</td>
                        <td>$19.95</td>
                        <td>$49.95</td>
                        <td>$199.00</td>
                        <td>$499.00</td>
                    </tr>
                    <tr>
                        <td className="fw-bold text-start">Monthly Fee</td>
                        <td>$49.00</td>
                        <td>$199.00</td>
                        <td>$499.00</td>
                        <td>$1,199.00</td>
                    </tr>
                    <tr>
                        <td className="fw-bold text-start">Additional Text Messages</td>
                        <td>5&cent;</td>
                        <td>4&cent;</td>
                        <td>3.5&cent;</td>
                        <td>3&cent;</td>
                    </tr>
                </tbody>
            </Table>
            <Col>
                <Alert variant="warning" className="text-center">
                    <p>We recommend 30 second videos to keep your customers engaged and call them to action on your Video Landing Page.</p>
                    <p>You may upgrade or downgrade your account once per month.</p>
                    <p>Business Plus and above require a 6 month commitment.</p>
                </Alert>
            </Col>
        </Container>
    )
}