import React, { useState } from 'react'
import { Form, Container, Button, Table, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ImportContacts(props) {

    const [step, setStep] = useState(1)

    return (
        <Container>
            <h2 className="green-text py-3">Import Contacts</h2>
            {/* <hr style={{width: "100%"}} /> */}
            <div id="steps-progress-bar-wrapper" className="with-video-training">
                <ul id="steps-progress-bar">
                    <li className={step === 1, 2, 3 ? "active" : null}>
                        <FontAwesomeIcon icon="file-csv"/>
                        <p>Choose CSV File</p>
                    </li>
                    <li className={step !== 1 ? "active" : null}>
                        <FontAwesomeIcon icon="columns"/>
                        <p>Match Column Data</p>
                    </li>
                    <li className={step === 3 ? "active" : null}>
                        <FontAwesomeIcon icon="user-tag"/>
                        <p>Add Tags and Confirm</p>
                    </li>
                </ul>
            </div>
            {step === 1 ? 
                <Container fluid>
                    <h4 className="mt-4">Choose a file to import.</h4>
                    <Form>
                        <Form.Group>
                            <Form.Label className="py-2">Only CSV files are accepted.</Form.Label>
                            <Form.Control className="form-control py-2" type="file" label="Choose a file"/>
                            <Form.Check  className="py-2" label="The file contains headers in the first row."/>
                            <div className="text-center py-3">
                                <Button className="m-1" onClick={() => setStep(2)}>Next</Button>
                                <Button className="m-1" variant="danger" href="/user/contacts">Cancel</Button>
                            </div>
                        </Form.Group>
                    </Form>
                </Container>
            : null }
            {step === 2 ? 
                <Container fluid>
                    <h4 className="mt-4">Your file contains 31 records, with 14 columns.</h4>
                    <p>You must select at least first name, last name, and a mobile phone number to import the contact data, but remember to match as many columns as possible.</p>
                    <Table className="table_responsive table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <td>Column</td>
                                <td>File Data</td>
                                <td>Data Type</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>OBJECTID</td>
                                <td>
                                    <select className="form-select" id="">
                                        <option value="">Don't include this column</option>
                                        <option value="">First Name</option>
                                        <option value="">Middle Name</option>
                                        <option value="">Last Name</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>CATEGORY</td>
                                <td>
                                    <select className="form-select" id="">
                                        <option value="">Don't include this column</option>
                                        <option value="First Name">First Name</option>
                                        <option value="Middle Name">Middle Name</option>
                                        <option value="Last Name">Last Name</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>NAME</td>
                                <td>
                                    <select className="form-select" id="">
                                        <option value="">Don't include this column</option>
                                        <option value="First Name">First Name</option>
                                        <option value="Middle Name">Middle Name</option>
                                        <option value="Last Name">Last Name</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="text-center py-3">
                        <Button className="m-1" onClick={() => setStep(3)}>Next</Button>
                        <Button className="m-1" onClick={() => setStep(1)}>Back</Button>
                        <Button className="m-1" variant="danger" href="/user/contacts">Cancel</Button>
                    </div>
                </Container>
            : null }
            {step === 3 ? 
                <Container fluid>
                    <h4 className="mt-4">Attach Tags</h4>
                    <p>Choose the tags that you'd like to attach to your imported contacts.</p>
                    <Alert variant="primary">
                        <Button className="m-1">New Contact</Button>
                        <Button className="m-1">James Wright</Button>
                    </Alert>
                    <h4>Data Update</h4>
                    <Form.Check type="checkbox" label="Update existing contacts with new data if the mobile phone number matches."/>
                    <div className="text-center py-3">
                        <Button className="m-1" href="/user/contacts">Import Contacts</Button>
                        <Button className="m-1" onClick={() => setStep(2)}>Back</Button>
                        <Button className="m-1" onClick={() => setStep(1)} variant="danger" href="/user/contacts">Cancel</Button>
                    </div>
                </Container>
            : null }
        </Container>
    )
}