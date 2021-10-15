import React, {useState} from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export default function AddEvent(props) {

    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [userId, setUserId] = useState("")
    const [smsCode, setSmsCode] = useState("")
    const [keyword, setKeyword] = useState("")

    return (
        <Container>
            <h3 className="green-text py-3">Add Event</h3>
            <Form>
                <Form.Group className="py-2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control value={description} onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="py-2">
                            <Form.Label>Start Date</Form.Label>
                            <Row>
                                <Col>
                                    <DatePicker selected={startDate} onChange={(e) => setStartDate(e.target.value)} className="form-control"/>
                                </Col>
                                <Col className="col-auto">
                                    <Button variant="success">
                                        <FontAwesomeIcon icon="calendar-alt"/>
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="py-2">
                            <Form.Label selected={endDate} onChange={(e) => setEndDate(e.target.value)}>End Date</Form.Label>
                            <Row>
                                <Col>
                                    <DatePicker className="form-control"/>
                                </Col>
                                <Col className="col-auto">
                                    <Button variant="success">
                                        <FontAwesomeIcon icon="calendar-alt"/>
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="py-2">
                    <Form.Label>User ID</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control value={userId} onChange={(e) => setUserId(e.target.value)}/>
                        </Col>
                        <Col className="col-auto">
                            <Button>
                                <FontAwesomeIcon icon="search"/>
                            </Button>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>SMS Code</Form.Label>
                    <Form.Control value={smsCode} onChange={(e) => setSmsCode(e.target.value)} placeholder="e.g. (201) 555-0123"/>
                </Form.Group>
                <Form.Group className="py-2">
                    <Form.Label>Messaging Keyword</Form.Label>
                    <Form.Control value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
                </Form.Group>
                <div className="text-center">
                    <Button className="m-1">Add Event</Button>
                    <Button className="m-1" variant="danger" href="/admin">Cancel</Button>
                </div>
            </Form>
        </Container>
    )
}