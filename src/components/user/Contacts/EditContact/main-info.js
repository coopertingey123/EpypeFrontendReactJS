import React, { useState } from 'react'
import { Container, Form, Alert, Row, Col, Button } from 'react-bootstrap'

export default function MainInfo(props) {

    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mobilePhone, setMobilePhone] = useState("")
    const [email, setEmail] = useState("")
    const [homePhone, setHomePhone] = useState("")
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [notes, setNotes] = useState("")

    return (
        <Container>
            <h2 className="green-text py-2">Main Info</h2>
            <Form>
                <Form.Label>Attached Tags</Form.Label>
                <Alert variant="primary">
                    <Button className="m-1">New Contact</Button>
                    <Button className="m-1">asdf</Button>
                    <Button className="m-1">James Wright</Button>
                </Alert>
                <Row>
                    <Col>
                        <Form.Group className="py-2">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="py-2">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control value={middleName} onChange={(e) => setMiddleName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="py-2">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="py-2">
                            <Form.Label>Mobile Phone</Form.Label>
                            <Form.Control value={mobilePhone} onChange={(e) => setMobilePhone(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="py-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="py-2">
                            <Form.Label>Home Phone</Form.Label>
                            <Form.Control value={homePhone} onChange={(e) => setHomePhone(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="py-2">
                            <Form.Label>Address</Form.Label>
                            <Form.Control className="my-1" value={address1} onChange={(e) => setAddress1(e.target.value)}/>
                            <Form.Control className="my-1" value={address2} onChange={(e) => setAddress2(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="py-2">
                            <Form.Label>City</Form.Label>
                            <Form.Control value={city} onChange={(e) => setCity(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="py-2">
                            <Form.Label>State</Form.Label>
                            <select value={state} onChange={(e) => setState(e.target.value)} className="form-select">
                                <option value="AK">AK</option>
                                <option value="AL">AL</option>
                                <option value="AR">AR</option>
                                <option value="AZ">AZ</option>
                                <option value="CA">CA</option>
                                <option value="CO">CO</option>
                                <option value="CT">CT</option>
                                <option value="DC">DC</option>
                                <option value="DE">DE</option>
                                <option value="FL">FL</option>
                                <option value="GA">GA</option>
                                <option value="GU">GU</option>
                                <option value="HI">HI</option>
                                <option value="IA">IA</option>
                                <option value="ID">ID</option>
                                <option value="IL">IL</option>
                                <option value="IN">IN</option>
                                <option value="KS">KS</option>
                                <option value="KY">KY</option>
                                <option value="LA">LA</option>
                                <option value="MA">MA</option>
                                <option value="MD">MD</option>
                                <option value="ME">ME</option>
                                <option value="MI">MI</option>
                                <option value="MN">MN</option>
                                <option value="MO">MO</option>
                                <option value="MS">MS</option>
                                <option value="MT">MT</option>
                                <option value="NC">NC</option>
                                <option value="ND">ND</option>
                                <option value="NE">NE</option>
                                <option value="NH">NH</option>
                                <option value="NJ">NJ</option>
                                <option value="NM">NM</option>
                                <option value="NV">NV</option>
                                <option value="NY">NY</option>
                                <option value="OH">OH</option>
                                <option value="OK">OK</option>
                                <option value="OR">OR</option>
                                <option value="PA">PA</option>
                                <option value="PR">PR</option>
                                <option value="RI">RI</option>
                                <option value="SC">SC</option>
                                <option value="SD">SD</option>
                                <option value="TN">TN</option>
                                <option value="TX">TX</option>
                                <option value="UT">UT</option>
                                <option value="VA">VA</option>
                                <option value="VI">VI</option>
                                <option value="VT">VT</option>
                                <option value="WA">WA</option>
                                <option value="WI">WI</option>
                                <option value="WV">WV</option>
                                <option value="WY">WY</option>
                            </select>
                        </Form.Group>
                        <Form.Group className="py-2">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control value={postalCode} onChange={(e) => setPostalCode(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <hr />
                <Form.Label>Notes</Form.Label>
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="form-control mb-3" id="" cols="30" rows="5"/>
                <div className="text-center py-3">
                    <Button className="m-1">Save Changes</Button>
                    <Button variant="danger" className="m-1">Cancel</Button>
                </div>
            </Form>
        </Container>
    )
}