import React, { useState } from 'react'
import {Container, Table, Alert, Button} from "react-bootstrap"
import NewCreditCard from "./update-credit-card-info"

export default function BillingInfo(props) {

    const [show, setShow] = useState(false)

    function handleShow(event) {
        event.preventDefault()
        if (show) {
            setShow(false)
        }
        else {
            setShow(true)
        }
    }

    return (
        <Container>
            <h3 className="green-text py-3">Billing Information</h3>
            <hr style={{width: "100%"}}/>
            {/* <h3>Fiesta Days</h3> */}
            <h4 className="py-2">Credit Card on File</h4>
            <p>
                <Alert variant="danger">No credit card is on file</Alert>
            </p>
            <p>
                <Button onClick={handleShow}>Update Credit Card Information</Button>
            </p>
            {show ? <NewCreditCard/> : null}
            <hr style={{width: "100%"}}/>
            <h4 className="py-2">Payment History</h4>
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
            <p>
                <Button href="">Full Payment History</Button>
            </p>
            <hr style={{width: "100%"}}/>
            <h4 className="py-2">Fees</h4>
            <Alert variant="success">No fees are attached to your account.</Alert>
        </Container>
    )
}