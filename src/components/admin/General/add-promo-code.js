import React, {useState} from 'react'
import {Container, Form, Col, Row, Button, InputGroup} from "react-bootstrap"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function AddPromoCode(props) {

    const [promoCode, setPromoCode] = useState("")
    const [packageSelect, setPackageSelect] = useState("")
    const [expDate, setExpDate] = useState("")
    const [firstChargeDate, setFirstChargeDate] = useState("")
    const [freeMonths, setFreeMonths] = useState("")
    const [setupFee, setSetupFee] = useState("")
    const [baseFee, setBaseFee] = useState("")
    const [salesPerson, setSalesPerson] = useState("")
    const [customOffer, setCustomOffer] = useState("")

    return (
        <Container>
            <h3 className="green-text py-3">Add Promo Code</h3>
            <Form>
                <Form.Group className="py-2">
                    <Form.Label>Promo Code</Form.Label>
                    <Form.Control value={promoCode} onChange={(e) => setPromoCode(e.target.value)}/>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="py-2">
                            <Form.Label>Package</Form.Label>
                            <select className="form-select" value={packageSelect} onChange={(e) => setPackageSelect(e.target.value)}>
                                <option value="Unassigned">Unassigned</option>
                                <option value="personal">Personal</option>
                                <option value="business">Business</option>
                                <option value="business plus">Business Plus</option>
                                <option value="business pro">Business Pro</option>
                            </select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="py-2">
                            <Form.Label>Expiration Date</Form.Label>
                            <DatePicker className="form-control" selected={expDate} onChange={(e) => setExpDate(e)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="py-2">
                            <Form.Label>
                                First Charge Date
                            </Form.Label>
                            <DatePicker className="form-control" selected={firstChargeDate} onChange={(e) => setFirstChargeDate(e)}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="py-2">
                            <Form.Label><strong>OR</strong> Free Service Months</Form.Label>
                            <Form.Control value={freeMonths} onChange={(e) => setFreeMonths(e)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="py-2">
                            <Form.Label>Setup Fee</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control value={setupFee} onChange={(e) => setSetupFee(e.target.value)}/>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="py-2">
                            <Form.Label>Base Fee</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control value={baseFee} onChange={(e) => setBaseFee(e.target.value)}/>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="py-2">
                    <Form.Label>Sales Person</Form.Label>
                    <select className="form-select" value={salesPerson} onChange={(e) => setSalesPerson(e.target.value)}>
                        <option value="0" selected>Unassigned</option>
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
                <Form.Group className="py-2">
                    <Form.Label>Custom Offer</Form.Label>
                    <textarea className="form-control" id="" cols="30" rows="5" value={customOffer} onChange={(e) => setCustomOffer(e.target.value)}/>
                </Form.Group>
                <div className="text-center">
                    <Button className="m-1">Save Changes</Button>
                    <Button className="m-1" variant="danger">Cancel</Button>
                </div>
            </Form>
        </Container>
    )
}