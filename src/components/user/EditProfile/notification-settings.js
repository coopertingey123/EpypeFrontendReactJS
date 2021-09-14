import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'

export default function NotificationSettings(props) {

    const [email, setEmail] = useState("example@epype.net")
    const [mobilePhone, setMobilePhone] = useState("+11234567890")
    const [msgHoursStart, setMsgHoursStart] = useState("")
    const [msgHoursEnd, setMsgHoursEnd] = useState("")


    return (
        <Container>
            <h1 className="green-text">Notification Settings</h1>
            {/* <h3>Fiesta Days</h3> */}
            <Form className="int -phone-form">
                <p>How would you like to receive notifications?</p>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" id="frmStatusEmail" name="status_email" label="Email"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" id="frmStatusEmail" name="status_email" label="Text Message"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type="text" id="frmEmail" name="email"
                        maxlength="100" value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mobile Phone</Form.Label>
                    <Form.Control 
                        type="tel" id="frmMobilePhone" name="mobile_phone" 
                        value={mobilePhone} onChange={(e) => setMobilePhone(e.target.value)}
                        data-error-element-id="frmMobilePhoneErrorMsg"/>
                    <div id="frmMobilePhoneErrorMsg" className="invalid-feedback"></div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Text Message Hours</Form.Label>
                    <Row>
                        <Col>
                            <select 
                                name="start_hour" 
                                id="frmStartHour" 
                                className="form-select"
                                value={msgHoursStart}
                                onChange={(e) => setMsgHoursStart(e.target.value)}
                                >
                                <option value="0">12 AM</option>
                                <option value="1">1 AM</option>
                                <option value="2">2 AM</option>
                                <option value="3">3 AM</option>
                                <option value="4">4 AM</option>
                                <option value="5">5 AM</option>
                                <option value="6">6 AM</option>
                                <option value="7">7 AM</option>
                                <option value="8">8 AM</option>
                                <option value="9">9 AM</option>
                                <option value="10">10 AM</option>
                                <option value="11">11 AM</option>
                                <option value="12">12 PM</option>
                                <option value="13">1 PM</option>
                                <option value="14">2 PM</option>
                                <option value="15">3 PM</option>
                                <option value="16">4 PM</option>
                                <option value="17">5 PM</option>
                                <option value="18">6 PM</option>
                                <option value="19">7 PM</option>
                                <option value="20">8 PM</option>
                                <option value="21">9 PM</option>
                                <option value="22">10 PM</option>
                                <option value="23">11 PM</option>
                            </select>
                        </Col>
                        <Col>
                            <select name="end_hour" id="frmEndHour" className="form-select">
                                <option value="1">1 AM</option>
                                <option value="2">2 AM</option>
                                <option value="3">3 AM</option>
                                <option value="4">4 AM</option>
                                <option value="5">5 AM</option>
                                <option value="6">6 AM</option>
                                <option value="7">7 AM</option>
                                <option value="8">8 AM</option>
                                <option value="9">9 AM</option>
                                <option value="10">10 AM</option>
                                <option value="11">11 AM</option>
                                <option value="12">12 PM</option>
                                <option value="13">1 PM</option>
                                <option value="14">2 PM</option>
                                <option value="15">3 PM</option>
                                <option value="16">4 PM</option>
                                <option value="17">5 PM</option>
                                <option value="18">6 PM</option>
                                <option value="19">7 PM</option>
                                <option value="20">8 PM</option>
                                <option value="21">9 PM</option>
                                <option value="22">10 PM</option>
                                <option value="23">11 PM</option>
                                <option value="0">12 AM</option>
                            </select>
                        </Col>
                    </Row>
                </Form.Group>
                <fieldset>
                    <legend>Notifications</legend>
                    <p>Check marks indicate which methods of notifications are currently available for each notification type.</p>
                    <Table style={{width: "100%"}}>
                        <thead className="thead-dark">
                            <tr>
                                <th></th>
                                <th className="text-center" style={{width: "60px"}}>Email</th>
                                <th className="text-center" style={{width: "60px"}}>Text</th>
                            </tr>
                        </thead>
                    </Table>
                    <Table className="mb-3" style={{width: "100%"}}>
                        <tbody>
                            <tr>
                                <td>
                                    <h6>Notify me when: </h6>
                                    <Form.Group>
                                        <Form.Check type="checkbox" name="contact_new" id="e10" label="I receive a new contact"/>
                                    </Form.Group>
                                </td>
                                <td className="text-center" style={{width: "60px"}}>&#x2713;</td>
		                        <td className="text-center" style={{width: "60px"}}>&#x2713;</td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <h6>Notify me when one of my contacts: </h6>
                                    <Row className="g-3 align-items-center">
                                        <Col className="col-auto">
                                            <Form.Group>
                                                <Form.Check checked label="Has no activity for "/>
                                            </Form.Group>
                                        </Col>
                                        <Col className="col-auto">
                                            <Form.Group>
                                                <select name="contact_inactive_days" id="" className="form-select">
                                                    <option value="30">30 days</option>
                                                    <option value="60">60 days</option>
                                                    <option value="90" selected>90 days</option>
                                                    <option value="120">120 days</option>
                                                </select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </td>
                                <td className="text-center" style={{width: "60px"}}>&#x2713;</td>
		                        <td className="text-center" style={{width: "60px"}}>&#x2713;</td>
                            </tr>
                        </tbody>
                    </Table>
                </fieldset>
                <p className="text-center">
                    <Button type="submit" id="btnSubmit" name="btnSubmit" className="btn-primary m-1" value="Save Changes">Save Changes</Button>
                    <Button type="button" id="btnCancel" name="btnCancel" className="btn-danger m-1" value="Cancel">Cancel</Button>
                </p>
            </Form>
        </Container>
    )
}