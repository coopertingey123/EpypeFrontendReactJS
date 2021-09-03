import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function SignupPackageSelect(props) {
    return (
        <Container className="py-3 text-center">
            <h1 className="green-text">Signup</h1>
            <h3 className="purple2-text">Please select a package.</h3>
            <Form className="text-left" name="form1" action="" method="post">
                <Row className="text-start justify-content-center">
                    <Col className="col-4">
                        <Form.Group className="m-3">
                            <Form.Check className="fw-bold" type="radio" label="Personal"/>
                            <div class="px-4 py-1">
				                <strong> 400 </strong> Text Messages<br />
                                <strong> 1600 </strong> Video Viewing Minutes<br />
                                Initial setup fee: <strong>$19.95</strong><br />
								Membership fee: 
					            <strong> $49.00 </strong> 
                                 every month<br />
							</div>
                        </Form.Group>
                    </Col>
                    <Col className="col-4">
                        <Form.Group className="m-3">
                            <Form.Check className="fw-bold" type="radio" label="Business"/>
                            <div class="px-4 py-1">
				                <strong> 3000 </strong> Text Messages<br />
                                <strong> 9000 </strong> Video Viewing Minutes<br />
                                Initial setup fee: <strong>$49.95</strong><br />
								Membership fee: 
					            <strong> $199.00 </strong> 
                                 every month<br />
							</div>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="text-start justify-content-center">
                    <Col className="col-4">
                        <Form.Group className="m-3">
                            <Form.Check className="fw-bold" type="radio" label="Business Plus"/>
                            <div class="px-4 py-1">
				                <strong> 8000 </strong> Text Messages<br />
                                <strong> 32000 </strong> Video Viewing Minutes<br />
                                Initial setup fee: <strong>$199.00</strong><br />
								Membership fee: 
					            <strong> $499.00 </strong> 
                                 every month<br />
							</div>
                        </Form.Group>
                    </Col>
                    <Col className="col-4">
                        <Form.Group className="m-3">
                            <Form.Check className="fw-bold" type="radio" label="Business Pro"/>
                            <div class="px-4 py-1">
				                <strong> 20000 </strong> Text Messages<br />
                                <strong> Unlimited </strong> Video Viewing Minutes<br />
                                Initial setup fee: <strong>$499.00</strong><br />
								Membership fee: 
					            <strong> $1.199.00 </strong> 
                                 every month<br />
							</div>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center py-5">
                    <Col className="col-8">
                        <h3 className="purple2-text">Do you have a promotional code?</h3>
	                    <p>If you have a promotional code, please enter it below.  Any promotional adjustments made to the price will be reflected on the next page.</p>
                        <Form.Label className="visually-hidden">Promo Code</Form.Label>
                        <Form.Control id="frmPromoCode" name="promo_code" maxLength="12" placeholder="Enter Promo Code here"/>
                        <a href="">See Promotional Price</a>
                    </Col>
                </Row>
                <Button className="m-1">Next</Button>
                <Button className="bg-secondary m-1">Back</Button>
                
            </Form>
        </Container>
    )
}