import React, { useState } from 'react'
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap'

export default function SignupPaymentEntry(props) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [expMonth, setExpMonth] = useState("")
    const [expYear, setExpYear] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName)
        console.log(lastName)
        console.log(cardNumber)
        console.log(postalCode)
        console.log(expMonth)
        console.log(expYear)
      }

    return (
        <Container className="text-center py-3">
            <h1 className="green-text">Signup</h1>
            <h3 className="purple2-text py-3">Pricing</h3>
            <Row className="py-3">
                <Col className="" lg={8}>
                    <h5 className="pb-3">
                        Your selected package: <strong>Business Plan </strong> 
                        <a href="/signup/package-select"> (Change)</a>
                    </h5>
                    <Container >
                        <Row className="justify-content-center">
                            <Col className="text-start col-6">
                                <p> Text Messages: <strong> 3000 </strong></p>
                                <p> Video Viewing Minutes: <strong> 9000 </strong></p>
                                <p>Initial setup fee: <strong> $49.95 </strong></p>
                                <p>Membership fee: <strong> $199.00 </strong> every month</p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col className="mt-3 mt-lg-0" lg={4}>
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
            <Form onSubmit={handleSubmit}>
                <Row className="py-3 text-start">
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>First Name on Card</Form.Label>
                            <Form.Control
                                // id="frmPromoCode" 
                                // name="promo_code" 
                                // maxLength="12" 
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Last Name on Card</Form.Label>
                            <Form.Control
                                // id="frmPromoCode" 
                                // name="promo_code" 
                                // maxLength="12" 
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>                
                <Row className="py-3 text-start">
                    <Col className="" lg={4}>
                        <Form.Group>
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control
                                // id="frmPromoCode" 
                                // name="promo_code" 
                                // maxLength="12" 
                                placeholder="Card Number"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col className="" lg={4}>
                        <Form.Group>
                            <Form.Label>Billing Postal Code</Form.Label>
                            <Form.Control
                                // id="frmPromoCode" 
                                // name="promo_code" 
                                // maxLength="12" 
                                placeholder="Postal Code"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col className="" lg={2}>
                        <Form.Group>
                            <Form.Label>Expiration Month</Form.Label>
                            <select 
                                className="form-select" 
                                 // id="frmPromoCode" 
                                // name="promo_code" 
                                // maxLength="12" 
                                placeholder="Exp Month"
                                value={expMonth}
                                onChange={(e) => setExpMonth(e.target.value)}
                            >
                                <option value="January">01</option>
                                <option value="February">02</option>
                                <option value="March">03</option>
                                <option value="April">04</option>
                                <option value="May">05</option>
                                <option value="June">06</option>
                                <option value="July">07</option>
                                <option value="August">08</option>
                                <option value="September">09</option>
                                <option value="October">10</option>
                                <option value="November">11</option>
                                <option value="December">12</option>
                            </select>
                        </Form.Group>
                    </Col>
                    
                    
                    <Col className="" lg={2}>
                        <Form.Group>
                            <Form.Label>Year</Form.Label>
                            <select 
                                className="form-select" 
                                // id="frmPromoCode" 
                                // name="promo_code" 
                                // maxLength="12" 
                                placeholder="Exp Month"
                                value={expYear}
                                onChange={(e) => setExpYear(e.target.value)}
                            >
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                                <option value="2032">2032</option>
                            </select>
                        </Form.Group>
                    </Col>
                </Row>
                <div className="text-center">
                    <Button className="bg-secondary m-1" href="/signup/package-select">Back</Button>
                    <Button className="m-1" href="" type="submit">Next</Button>
                </div>
            </Form>
            
        </Container>
    )
}