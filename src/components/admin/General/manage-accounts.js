import React from 'react'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'
import NavbarAdmin from "../../navigation/navbar-admin";

export default function ManageAccounts(props) {
    return (
        <Container className="text-center">
            <NavbarAdmin/>
            <h1 className="green-text p-3">Accounts</h1>
            <Button>+ Add a New Organization</Button>
            <Form className="text-start">
                <Form.Group className="p-3">
                    <Form.Label>
                        Account Type
                    </Form.Label>
                    <select className="form-select" aria-label="All">
                        <option value="" selected>All</option>
                        <option value="u">Users</option>
                        <option value="o">Organizations</option>
                    </select>
                </Form.Group>
                <Form.Group className="p-3">
                    <Form.Label>
                        Search
                    </Form.Label>
                    <select className="form-select my-2" aria-label="All Fields">
                        <option value="" selected>All Fields</option>
                        <option value="u">User ID</option>
                        <option value="o">Name</option>
                        <option value="u">Email Address</option>
                        <option value="o">Phone Number</option>
                    </select>
                    <Form.Control className="my-2"/>
                    <Form.Check type="checkbox" label="Don't include phone numbers in 'All Fields'"/>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="p-3">
                            <Form.Label>
                                State
                            </Form.Label>
                            <select multiple size="7" class="form-select">
                                <option value="" selected>All States</option>
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
                    </Col>
                    <Col>
                        <Form.Group className="p-3">
                            <Form.Label>
                                Sales Person
                            </Form.Label>
                            <select multiple size="7" class="form-select">
					            <option value="" selected>All</option>
                                <option value="0">Unassigned</option>
                                <option value="9">Ammon Freest0ne (Platpay)</option>
                                <option value="1">Corporate Sales</option>
                                <option value="2">Ethan Morley (Epype)</option>
                                <option value="8">Glen Oliver (EPYPE)</option>
                                <option value="5">Jed Morley (Platinum Payments)</option>
                                <option value="4">Lance Hansen (Platinum Payments)</option>
                                <option value="6">Stace Vest (Platinum Payments)</option>
                                <option value="7">Trennen Rasmussen (EPYPE)</option>
                                <option value="3">Valinda Hanks (Platinum Payments)</option>
							</select>
                        </Form.Group>
                    </Col>
                </Row>
               
                <Form.Group className="p-3">
                    <Form.Label>
                        Sales Person
                    </Form.Label>
                    <select className="form-select" aria-label="All">
                        <option value="" selected>All</option>
                        <option value="u">Users</option>
                        <option value="o">Organizations</option>
                    </select>
                </Form.Group>
                <Form.Group className="p-3">
                    <Form.Label>
                        Account Status
                    </Form.Label>
                    <select className="form-select" aria-label="Doesn't Matter">
                        <option value="" selected>Doesn't Matter</option>
                        <option value="">Active</option>
                        <option value="">Suspended</option>
                        <option value="">Canceled</option>
                    </select>
                </Form.Group>
                <Form.Group className="p-3">
                    <Form.Label>
                        Setup Status
                    </Form.Label>
                    <select className="form-select" aria-label="Doesn't Matter">
                        <option value="" selected>Doesn't Matter</option>
                        <option value="">Complete</option>
                        <option value="">Incomplete</option>
                    </select>
                </Form.Group>
                <Form.Group className="p-3">
                    <Form.Label>
                        Sort Results By
                    </Form.Label>
                    <Row>
                        <Col>
                            <select className="form-select" aria-label="Last Name">
                                <option value="" selected>User Id</option>
                                <option value="" selected>Last Name</option>
                                <option value="">First Name</option>
                                <option value="">Email Address</option>
                            </select>
                        </Col>
                        <Col>
                            <select className="form-select" aria-label="Ascending">
                                <option value="" selected>Descending</option>
                                <option value="">Ascending</option>
                            </select>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="p-3">
                    <Form.Label>
                        Organization
                    </Form.Label>
                    <select className="form-select my-2" aria-label="All">
                        <option value="" selected>All</option>
                        <option value="">99990 - Individual Agents</option>
                        <option value="">100004 - American Leadership Academy</option>
                        <option value="">100012 - Bottega Tech</option>
                        <option value="">100005 - Demo Account</option>
                        <option value="">100059 - DLVR - Amazon Partner</option>
                        <option value="">100115 - doTERRA Brazil</option>
                        <option value="">100018 - EPYPE Corporation</option>
                        <option value="">100010 - Global EP</option>
                        <option value="">100102 - Lifewave</option>
                        <option value="">100095 - Live Kaya Corporate</option>
                        <option value="">100024 - NuSkin Enterprises</option>
                        <option value="">100016 - Platinum Payments</option>
                        <option value="">99991 - Provo Office</option>
                        <option value="">100153 - Solle International</option>
                        <option value="">100014 - The CHurch of Jesus Christ of Latter Day Saints</option>
                        <option value="">100085 - Vivint</option>
                    </select>
                    <Form.Check type="checkbox" label="Include Organization User Count"/>
                </Form.Group>
            </Form>
            <Button className="m-3">Find Accounts</Button>
            <Button className="m-3">Previous Search</Button>
        </Container>
    )
}