import React from 'react';
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function ReviewAndSend(props) {
    return (
        <Container className="p-3">
            <h3 className="py-3">Please review your message content before sending your blast.</h3>
            <Row className="mb-3">
                <Col id="optin-review-column" className="flex-column align-items-center">
                    <Alert className="alert-info d-flex align-items-center">
                        <p> <FontAwesomeIcon icon="info-circle"/> The <strong className="getContactCountByKeywordAndTag"></strong> contacts who have already opted in to the keyword <strong className="optInMesageKeyword"></strong> will have this experience.</p>
                    </Alert>
                    <div className="phone-display">
                        <div className="user messages">
                            <span id="messageBubble" className="message last">
                                Thank you for optin in to the Westwood Football Fundraiser! Follow the link to support the team!
                                <span className="blastMessageContent"> https://vlp.epype.net/5y9JD6 </span>
                                 Reply STOP to cancel
                            </span>
                        </div>
                        <div className="bottom-phone"></div>
                    </div>
                </Col>
                <Col id="optin-review-column" className="flex-column align-items-center">
                    <Alert id="optin-contact-count" className="alert-info d-flex align-items-center">
                        <p> <FontAwesomeIcon icon="info-circle"/> The <strong className="getContactCountByKeywordAndTag"></strong> contacts who have NOT already opted in to the keyword <strong className="optInMesageKeyword">COOPER</strong> will have this experience.</p>
                    </Alert>
                    <div className="phone-display">
                        <div className="user messages">
                            <div id="opt-in-request-message-5" className="message">
                                <span id="optinMessageBubbleContent" class="optinMessageBubbleContent"> Join the Westwood Football Fundraiser! </span>
								 Msg&amp;Data rates may apply. Reply <span class="optInMessageKeyword">COOPER</span> to opt in, STOP to cancel
                            </div>
                        </div>
                        <div className="contact messages">
                            <div id="opt-in-keyword" class="message last">
								<span class="optInMessageKeyword">COOPER</span>
							</div>
                        </div>
                        {/* <div className="user messages">
                            <span id="opt-in-message" class="message">
								<span id="smsOptInMessage">https://vlp.epype.net/5y9JD6</span>
							</span>
                        </div> */}
                        <div class="user messages">
							<span id="messageBubble" class="message last">
                                Thank you for optin in to the Westwood Football Fundraiser! Follow the link to support the team!
                                <span className="blastMessageContent"> https://vlp.epype.net/5y9JD6 </span>
                                 Reply STOP to cancel
                            </span>
                        </div>
                        <div class="bottom-phone"></div>
                    </div>
                </Col>
            </Row>
            <hr/>
            <div id="scheduleSendWrapper">
                <h3>Schedule your blast.</h3>
                <div className="mb-3">
                    <select className="form-select" id="scheduleSend">
                        <option value="now">Send Now</option>
                        <option value="future">Send Later</option>
                    </select>
                </div>
                <Row>
                    <Col className="col-lg mb-3">
                        <Form.Label>Date</Form.Label>
                        <div className="input-group">
                            <DatePicker className="form-control" />
                        </div>
                    </Col>
                    <Col className="mb-3">
                        <Form.Label>Time</Form.Label>
                        <select name="" id="" className="form-select">
                            <option value="">---</option>
                            <option value="00:00">12:00 AM</option>
                            <option value="00:15">12:15 AM</option>
                            <option value="00:30">12:30 AM</option>
                            <option value="00:45">12:45 AM</option>
                            <option value="01:00">1:00 AM</option>
                            <option value="01:15">1:15 AM</option>
                            <option value="01:30">1:30 AM</option>
                            <option value="01:45">1:45 AM</option>
                            <option value="02:00">2:00 AM</option>
                            <option value="02:15">2:15 AM</option>
                            <option value="02:30">2:30 AM</option>
                            <option value="02:45">2:45 AM</option>
                            <option value="03:00">3:00 AM</option>
                            <option value="03:15">3:15 AM</option>
                            <option value="03:30">3:30 AM</option>
                            <option value="03:45">3:45 AM</option>
                            <option value="04:00">4:00 AM</option>
                            <option value="04:15">4:15 AM</option>
                            <option value="04:30">4:30 AM</option>
                            <option value="04:45">4:45 AM</option>
                            <option value="05:00">5:00 AM</option>
                            <option value="05:15">5:15 AM</option>
                            <option value="05:30">5:30 AM</option>
                            <option value="05:45">5:45 AM</option>
                            <option value="06:00">6:00 AM</option>
                            <option value="06:15">6:15 AM</option>
                            <option value="06:30">6:30 AM</option>
                            <option value="06:45">6:45 AM</option>
                            <option value="07:00">7:00 AM</option>
                            <option value="07:15">7:15 AM</option>
                            <option value="07:30">7:30 AM</option>
                            <option value="07:45">7:45 AM</option>
                            <option value="08:00">8:00 AM</option>
                            <option value="08:15">8:15 AM</option>
                            <option value="08:30">8:30 AM</option>
                            <option value="08:45">8:45 AM</option>
                            <option value="09:00">9:00 AM</option>
                            <option value="09:15">9:15 AM</option>
                            <option value="09:30">9:30 AM</option>
                            <option value="09:45">9:45 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="10:15">10:15 AM</option>
                            <option value="10:30">10:30 AM</option>
                            <option value="10:45">10:45 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="11:15">11:15 AM</option>
                            <option value="11:30">11:30 AM</option>
                            <option value="11:45">11:45 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="12:15">12:15 PM</option>
                            <option value="12:30">12:30 PM</option>
                            <option value="12:45">12:45 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="13:15">1:15 PM</option>
                            <option value="13:30">1:30 PM</option>
                            <option value="13:45">1:45 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="14:15">2:15 PM</option>
                            <option value="14:30">2:30 PM</option>
                            <option value="14:45">2:45 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="15:15">3:15 PM</option>
                            <option value="15:30">3:30 PM</option>
                            <option value="15:45">3:45 PM</option>
                            <option value="16:00">4:00 PM</option>
                            <option value="16:15">4:15 PM</option>
                            <option value="16:30">4:30 PM</option>
                            <option value="16:45">4:45 PM</option>
                            <option value="17:00">5:00 PM</option>
                            <option value="17:15">5:15 PM</option>
                            <option value="17:30">5:30 PM</option>
                            <option value="17:45">5:45 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="18:15">6:15 PM</option>
                            <option value="18:30">6:30 PM</option>
                            <option value="18:45">6:45 PM</option>
                            <option value="19:00">7:00 PM</option>
                            <option value="19:15">7:15 PM</option>
                            <option value="19:30">7:30 PM</option>
                            <option value="19:45">7:45 PM</option>
                            <option value="20:00">8:00 PM</option>
                            <option value="20:15">8:15 PM</option>
                            <option value="20:30">8:30 PM</option>
                            <option value="20:45">8:45 PM</option>
                            <option value="21:00">9:00 PM</option>
                            <option value="21:15">9:15 PM</option>
                            <option value="21:30">9:30 PM</option>
                            <option value="21:45">9:45 PM</option>
                            <option value="22:00">10:00 PM</option>
                            <option value="22:15">10:15 PM</option>
                            <option value="22:30">10:30 PM</option>
                            <option value="22:45">10:45 PM</option>
                            <option value="23:00">11:00 PM</option>
                            <option value="23:15">11:15 PM</option>
                            <option value="23:30">11:30 PM</option>
                            <option value="23:45">11:45 PM</option>
                        </select>
                    </Col>
                </Row>
            </div>
            <div className="text-center">
                <Row className="justify-content-center">
                    <Col className="col-3">
                        <Form.Check className="mb-3 float-none" type="checkbox" label="Does everything look correct?" id="confirm-blast"/>
                    </Col>
                </Row>
                <Button type="submit" id="step5NextButton" className="nextButton mx-1" disabled>Confirm &amp; Send</Button>
                <Button id="step5PrevButton" className="prevButton mx-1">Back</Button>
                <Button id="step5CancelButton" className="btn-danger cancelButton mx-1">Cancel</Button>
            </div>
        </Container>
    )
}