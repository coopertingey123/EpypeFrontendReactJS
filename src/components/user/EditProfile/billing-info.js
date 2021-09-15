import React from 'react'
import {Container, Table, Alert, Button} from "react-bootstrap"
import NewCreditCard from "./update-credit-card-info"

export default function BillingInfo(props) {
    return (
        <Container>
            <h1 className="green-text">Billing Information</h1>
            {/* <h3>Fiesta Days</h3> */}
            <h2 className="py-3">Credit Card on File</h2>
            <p>
                <Alert variant="danger">No credit card is on file</Alert>
            </p>
            <p>
                <Button variant="warning">Update Credit Card Information</Button>
                {/* ***********If this button is selected, open update credit card component and close all else*************** */}
            </p>
            {/* <h2>Fees</h2>
            <p>No fees are attached to your account.</p> */}
            <hr style={{width: "100%"}}/>
            <h2>Payment History</h2>
            <p>Last 1 payment</p>
            <Table className="table-responsive table-striped border_bottom">
                <thead className="thead-dark">
                    <tr>
                        <th style={{width: "80px"}}>Date</th>
                        <th className="text-end" style={{width: "100px"}}>Amount</th>
                        <th>Description</th>
                        <th style={{width: "100px"}}>Invoice</th>
                        <th style={{width: "160px"}}>Method</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="align-top">
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
            {/* <p>
                <a href="">Full Payment History</a>
            </p> */}
            <hr style={{width: "100%"}}/>
            <p>
                <Button href="">Back to My Account</Button>
            </p>
            <NewCreditCard/>
            {/* <FullPaymentHistory/> */}

        </Container>
    )
}