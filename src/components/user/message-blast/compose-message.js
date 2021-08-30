import React from 'react'
import { Container, Row, Col, Form, Button} from "react-bootstrap";

export default function ComponseMessage(props) {
    return (
        <Container>
            <h3>Enter the message you want to send.</h3>
            <Row className="mb-3">
                <Row>
                    <Col>
                        <Row>
                            <div className="mb-3">
                                <textarea 
                                    id="message_initial_message" 
                                    name="message_initial_message" 
                                    class="text_message_input form-control" 
                                    data-max-chars="138" 
                                    data-count-display-id="char_counter_initial_message" 
                                    rows="3" 
                                    cols="40" 
                                    placeholder="What would you like to say to your amazing people?">

                                </textarea>
                                <Form.Text>Characters remaining: <span id="char_counter_initial_message">138</span></Form.Text>
                            </div>
                        </Row>
                        <Row>
                            <Col>
                                <div className="mb-3">
                                    <select name="" id="" className="form-select">
                                        <option value="">Select VLP</option>
                                        <option value="">Westwood Football Fundraiser</option>
                                    </select>
                                </div>
                            </Col>
                            <Col className="col-auto">
                                <div className="mb-3">
                                    <Button id="insertVlpButton" class="btn-primary" disabled>Insert Link</Button>
                                </div>
                            </Col>             
                        </Row>
                        
                    </Col>
                    <Col id="step3-right-column" className="col-lg-auto d-flex justify-content-center">
                        <div className="phone-display">
                            <div className="user messages">
                                <span id="messageBubble" className="message last">
                                    <span className="blastMessageContent">What would you like to say to your amazing people? </span>
                                     Reply STOP to cancel
                                </span>
                            </div>
                            <div className="bottom-phone"></div>
                        </div>
                    </Col>
                </Row>
            </Row>
            <Button id="step3NextButton" className="nextButton m-1">Next</Button>
            <Button id="step3NextButton" className="nextButton m-1">Back</Button>
            <Button id="step3NextButton" className="nextButton m-1" variant="danger">Cancel</Button>
        </Container>
    )
}