import React, { useState } from 'react'
import { Container, Form, Button, Table } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ChangePassword(props) {

    const [securityKey, setSecurityKey] = useState("asdfasdfasdfasdf")
    const [edit, setEdit] = useState(false)

    return (
        <Container>
            <h3 className="green-text py-3">Product Payment Settings</h3> 
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
                            <Button onClick={() => setEdit(true)}>Edit</Button> | <Button variant="danger"><FontAwesomeIcon icon="trash"/></Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Paypal / Venmo</td>
                        <td className="text-end">
                            <Button onClick={() => setEdit(true)}>Edit</Button> | <Button variant="danger"><FontAwesomeIcon icon="trash"/></Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
            {edit ? 
                <Form>
                    <Form.Group className="py-2">
                        <Form.Label>Payment Method</Form.Label>
                        <select className="form-select">
                            <option value="nmi"> Credit Card (NMI) </option>
                        </select>
                    </Form.Group>
                    <Form.Group className="py-2">
                        <Form.Label>Security Key</Form.Label>
                        <Form.Control value={securityKey} onChange={(e) => setSecurityKey(e.target.value)}/>
                    </Form.Group>
                    <div className="text-center">
                        <Button className="m-1">Save Changes</Button>
                        <Button className="m-1" variant="danger" href="/user/edit-account-info">Cancel</Button>
                    </div>
                </Form>
            : null}
        </Container>
    )
}