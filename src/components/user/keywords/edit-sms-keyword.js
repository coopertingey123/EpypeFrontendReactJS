import React from 'react'
import { Container, Button, Alert, Row, Col, Form } from 'react-bootstrap'

export default function EditSMSKeyword(props) {
    return (
        <Container id="main_content" className="py-3">
            <h1 className="green-text">Edit SMS Keyword</h1>
            <Form name="form1" action="" metod="">
                <input type="hidden" name="frmAction" value="submitted" />
                <input type="hidden" name="frmAction" value="312" />
                <fieldset>
                    <legend>Keyword</legend>
                    <p><strong>COOPER</strong></p>
                </fieldset>
                <fieldset>
                    <legend>Opt-In Message</legend>
                    <Row id="opt_in_info">
                        <Col className="col-12 col-lg-8">
                            <div className="mb-3">
                                <Form.Label>What is this keyword for? Examples are "Book Club Information, "Deal Alerts", or "Billing Updates"</Form.Label>
                                <input type="text" id="descrption" className="form-control" maxLength="30" value="westwood football" />
                            </div>
                            <div className="mb-3">
                                <Form.Label>How often will you send messages to people who opt in?</Form.Label>
                                <Row className="gx-2 gy-3 align-items-center">
                                    <Col className="col-6 col-lg-auto">
                                        <input type="text" className="form-control" id="frequency_count" name="frequency_count" maxlength="2" value=""/>
                                    </Col>
                                    <Col className="col-6 col-lg-auto">message(s) every </Col>
                                    <Col>
                                        <select name="frequency_interval" id="frequency_interval" className="form-select">
                                            <option value="wk">week</option>
                                            <option value="mo" selected>month</option>
                                        </select>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col className="col-12 col-lg-4">
                            <Form.Label>
                                Your opt-in message for <strong><span id="optInKeyword">COOPER</span>:</strong>
                                <Alert className="alert-primary my-2">
                                    <p>
                                        <em>[YOUR PHONE NUMBER HERE]</em>:
                                        <span id="optInDescription">westwood football</span>.
                                        Msg&amp;Data rates may apply.
                                        <span id="optInFrequencyCount">1</span>msg/ <span id="optInFrequencyInterval">mo</span>. Reply HELP for help, STOP to cancel.
                                    </p>
                                </Alert>
                            </Form.Label>
                        </Col>
                    </Row>
                </fieldset>
                <fieldset>
                    <legend>Response Message</legend>
                    <Row id="response_info" class="row">
                        <Col>
                            <div class="mb-3">
                                <label for="message_initial_message" className="form-label">Enter the message you want sent in response to people who text your keyword.</label>
                                <textarea id="message_initial_message" name="initial_message" className="text_message_input form-control" data-max-chars="160" data-count-display-id="char_counter_initial_message" rows="3" cols="40">Please follow the link to see westwood football fundraiser https://vlp.epype.net/5y9JD6</textarea>
                                <div className="form-text">Characters remaining: <span id="char_counter_initial_message">73</span></div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col className="col">
                            <div class="mb-3">
                                <select id="choose-vlp" class="form-select">
                                    <option value="">Select VLP</option>
                                    <option value="">Westwood Football Fundraiser</option>
                                </select>
                            </div>
                        </Col>
                        <Col className="col-auto">
                            <div class="mb-3">
                                <Button id="insertVlpButton" className="" disabled>Insert Link</Button>
                            </div>
                        </Col>
                    </Row>
                </fieldset>

                <fieldset>
                    <legend>Contact Tags</legend>
	                <Form.Label className="form-label">These tags will be added to new contacts who text your keyword.</Form.Label>
	                <Alert id="contact_taglist" className="alert-primary pt-2">
                        <div class="tag">
                            <label id="taglabel_235" for="tag_235">New Contact</label>
                            <input id="tag_235" className="tag" name="tag_id[]" type="checkbox" value="235"/>
		                </div>
                        <div class="tag">
                            <label id="taglabel_239" for="tag_239">James Wright</label>
                            <input id="tag_239" className="tag" name="tag_id[]" type="checkbox" value="239"/>
                        </div>
		            </Alert>
                </fieldset>

                <fieldset>
                    <legend>Follow-up Messages</legend>
                    <div id="followup_info">
                        <Form.Check className="mb-3">
                            <input type="checkbox" id="followup" name="followup" className="form-check-input" value="1"/>
                            <label for="followup" className="form-check-label">Automatically send follow-up text messages to people who text your keyword</label>
                        </Form.Check>

                        <div id="followUpInfo" style={{display: "none"}}>
                            <p>You can send up to 5 follow-up messages.</p>
                            <div id="message_list">
                            </div>
                            <p id="messageAdd"><a href="#" className="btn btn-primary"><span class="fas fa-plus"></span> Add a Follow-up Message</a></p>
                        </div>
                    </div>
                </fieldset>

                <p class="text-center">
                    <Button type="submit" id="btnSubmit" className="btnSubmit" className="m-1">Save Changes</Button>
                    <Button type="button" id="btnCancel" className="btnCancel" variant="danger" className="m-1">Cancel</Button>
                </p>
            </Form>
        </Container>
    )
}