import React from 'react'
import {Container, Button, Table, Row, Col} from "react-bootstrap"

export default function OrderDetails(props) {
    return (
        <Container className="p-3">
            <h2 className="green-text">Order Details</h2>
            <Row className="justify-content-space-between">
                <Col className="col-lg order-2 order-lg-1 mb-3">
                    Brianne Ivie<br />
                    1776 W 60 S<br />
                    Pleasant Grove, UT 84062<br />
                    brianneivie@gmail.com<br />
                </Col>
                <Col className="order-1 order-lg-2 text-lg-end mb-3">
                    Order Date: 7/23/2021<br />
                    Confirmation Number: 1001341041<br />
                    Paid On: 7/23/2021						
                </Col>
            </Row>
            <Table className="table-striped border_bottom table-responsive">
                <tr className="thead-dark">
                    <th className="ps-2" width="160px">SKU</th>
                    <th>Description</th>
                    <th className="text-end" width="120px">Qty</th>
                    <th className="text-end pe-2" width="120px">Amount</th>
                </tr>
                <tr>
                    <td>1234567891</td>
                    <td>Breast Cancer Donation</td>
                    <td className="text-end">1</td>
                    <td className="text-end">$10.00</td>
                </tr>
            </Table>
            <div id="total" className="text-end fw-bold mb-3">
                Total: $10.00	
            </div>

            <h5>Payment Information</h5>
            <Table className="table-responsive table-striped border_bottom">
                <tr className="thead-dark">
                    <th className="ps-2" width="160px">Date</th>
                    <th>Transaction ID</th>
                    <th className="text-end">Method</th>
                    <th className="text-end pe-2" width="120px">Amount</th>
                </tr>
                <tr>
                    <td>7/23/2021</td>
                    <td>01P65720L4542442N</td>
                    <td className="text-end">
                        <div>
                            PayPal / Venmo
                        </div>
                    </td>
                    <td className="text-end">$10.00</td>
                </tr>
            </Table>
            <p>
                <a href="/user/order-history">Back to Order History</a>
            </p>
        </Container>
    )
}