import React from 'react'
import { Container, Form, Table } from "react-bootstrap"

export default function UpdateBilling(props) {
    return (
        <Container>
            <h1 className="green-text">Billing Information</h1>
            <h3>Fiesta Days</h3>
            <h2 className="py-3">Credit Card on File</h2>
            <p>
                No credit card is on file
            </p>
            <p><a href="">Update Credit Card Information</a></p>
            <h2>Fees</h2>
            <p>No fees are attached to your account.</p>
            <h2>Payment History</h2>
            <p>Last 1 payment</p>
            <Table className="table-responsive table-striped border_bottom">
                <thead className="thead-dark">
                    <tr>
                        <td style={{width: "80px"}}>Date</td>
                        <td className="text-end" style={{width: "100px"}}>Amount</td>
                        <td>Description</td>
                        <td style={{width: "100px"}}>Invoice</td>
                        <td style={{width: "160px"}}>Method</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="align-top">
					    <td>6/29/2021</td>
					    <td className="text-end">$0.00</td>
					    <td>
						    Signed up for EPYPE<br/>
                            <strong>&#8226; Used promo code FREE</strong>
                        </td>
					    <td>N/A</td>
                        <td></td>
					</tr>
                </tbody>
            </Table>
            <p>
                <a href="">Full Payment History</a>
            </p>
            <hr style={{width: "40%"}}/>
            <p>
                <a href="">Back to My Account</a>
            </p>
        </Container>
    )
}