import React from 'react'
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap'

export default function SignupPaymentEntry(props) {
    return (
        <Container className="py-3">
            <h1 className="green-text">Signup</h1>
            <h3 className="purple2-text py-3">Pricing</h3>
            <Row className="py-3">
                <Col className="col-xs-12 col-lg-8">
                    <h5 className="pb-3">Your selected package: <strong>Business Plan</strong> <a href="">(Change)</a></h5>
                    <Container >
                        <Row className="justify-content-center">
                            <Col className="text-start col-6">
                                <p> Text Messages: <strong> 3000 </strong></p>
                                <p> Video Viewing Minutes: <strong> 9000 </strong></p>
                                <p>Initial setup fee: <strong> $49.95 </strong></p>
                                <p>Membership fee: <strong> $199.00 </strong> every month</p>
                            </Col>
                        </Row>
{/*                         
                        <p> Text Messages: <strong> 3000 </strong></p>
                        <p> Video Viewing Minutes: <strong> 9000 </strong></p>
                        <p>Initial setup fee: <strong> $49.95 </strong></p>
                        <p>Membership fee: <strong> $199.00 </strong> every month</p> */}
                    </Container>
                </Col>
                <Col className="col-xs-12 col-lg-4 mt-3 mt-lg-0">
                    <Alert className="alert-primary">
                        <strong>Note: </strong> When you sign up, you will be charged a pro-rated monthly fee for your first month's service.
			            If you sign up after the 20th of the month, you will also be charged the second monthly membership fee.  Your next monthly
			            membership fee will not be charged until the following month.
                    </Alert>
                </Col>
            </Row>
            <h3 className="py-3 purple2-text">Please enter your payment information</h3>
            <p>Charges will appear on your credit card statement from EPYPE.</p>
            <Alert className="alert-warning">Your credit card will not be charged until you confirm your information on the next page.</Alert>
            <Form>
                <Row className="py-3 text-start">
                    <Col>
                    <Form.Group>
                        <Form.Label>First Name on Card</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Last Name on Card</Form.Label>
                            <Form.Control/>
                        </Form.Group>
                    </Col>
                </Row>                
                <Row className="py-3 text-start">
                    <Col className="col-4">
                        <Form.Group>
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control/>
                        </Form.Group>
                    </Col>
                    <Col className="col-4">
                        <Form.Group>
                            <Form.Label>Billing Postal Code</Form.Label>
                            <Form.Control/>
                        </Form.Group>
                    </Col>
                    <Col className="col-2">
                        <Form.Group>
                            <Form.Label>Expiration Month</Form.Label>
                            <select className="form-select" >
                                <option >01</option>
                                <option >02</option>
                                <option >03</option>
                                <option >04</option>
                                <option >05</option>
                                <option >06</option>
                                <option >07</option>
                                <option >08</option>
                                <option >09</option>
                                <option >10</option>
                                <option >11</option>
                                <option >12</option>
                            </select>
                        </Form.Group>
                    </Col>
                    
                    
                    <Col className="col-2">
                        <Form.Group>
                            <Form.Label>Year</Form.Label>
                            <select className="form-select" >
                                <option >2021</option>
                                <option >2022</option>
                                <option >2023</option>
                                <option >2024</option>
                                <option >2025</option>
                                <option >2026</option>
                                <option >2027</option>
                                <option >2028</option>
                                <option >2029</option>
                                <option >2030</option>
                                <option >2031</option>
                                <option >2032</option>
                            </select>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <Button className="m-1">Next</Button>
            <Button className="bg-secondary m-1">Back</Button>
        </Container>
    )
}