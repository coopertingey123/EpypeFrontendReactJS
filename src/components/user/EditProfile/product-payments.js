import React from 'react'
import { Container, Form, Button, Table } from "react-bootstrap"

export default function ChangePassword(props) {
    return (
        <Container>
            <h1 className="green-text">Product Payment Settings</h1> 
            {/* <h3>Fiesta Days</h3> */}
            <hr style={{width: "100%"}}/>
            <Table className="table-striped border_bottom">
                <thead className="thead-dark">
                    <tr>
                        <th>Method</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Credit Card (Authorize.net)</td>
                        <td className="text-end">
                            <a href="">Edit </a> | <a href=""> Remove</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Paypal / Venmo</td>
                        <td className="text-end">
                            <a href="">Edit </a> | <a href=""> Remove</a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}