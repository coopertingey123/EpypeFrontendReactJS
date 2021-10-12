import React, { useState } from 'react'
import { Container, Button, Alert, Row, Col, Form } from 'react-bootstrap'

export default function EditSMSKeyword(props) {

    const [optinMessage, setOptinMessage] = useState("")
    const [messages, setMessages] = useState(1)
    const [msgFrequency, setMsgFrequency] = useState("mo")
    const [responseMsg, setResponseMsg] = useState("")
    const [charsRemaining, setCharsRemaining] = useState(73)
    const [selectVlp, setSelectVlp] = useState("")
    const [on1, setOn1] = useState(false)
    const [on2, setOn2] = useState(false)
    // const [tags, setTags] = useState("")
    // const [checked, setChecked] = useState("")

    function countChars() {
        let charLength = responseMsg.length
        setCharsRemaining(73 - charLength)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(optinMessage)
        console.log(messages)
        console.log(msgFrequency)
        console.log(responseMsg)
        console.log(charsRemaining)
        console.log(selectVlp)
        // console.log(link)
    }


    return (
        <Container id="main_content" className="p-3">
            <h1 className="green-text">Edit SMS Keyword</h1>
            <Form name="form1" onSubmit={handleSubmit}>
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
                                <Form.Control type="text" id="descrption" maxLength="30" value={optinMessage} onChange={(e) => setOptinMessage(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <Form.Label>How often will you send messages to people who opt in?</Form.Label>
                                <Row className="gx-2 gy-3 align-items-center">
                                    <Col className="col-6 col-lg-auto">
                                        <Form.Control 
                                            type="text" 
                                            id="frequency_count" 
                                            name="frequency_count" 
                                            maxlength="2" 
                                            value={messages}
                                            onChange={(e) => setMessages(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-6 col-lg-auto">message(s) every </Col>
                                    <Col>
                                        <select 
                                            name="frequency_interval" 
                                            id="frequency_interval" 
                                            className="form-select"
                                            value={msgFrequency}
                                            onChange={(e) => setMsgFrequency(e.target.value)}
                                            >
                                            <option value="wk">week</option>
                                            <option value="mo">month</option>
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
                                         {selectVlp} 
                                         {optinMessage} 
                                        Msg&amp;Data rates may apply.
                                        {messages} msg/ {msgFrequency}. Reply HELP for help, STOP to cancel.
                                    </p>
                                </Alert>
                            </Form.Label>
                        </Col>
                    </Row>
                </fieldset>
                <fieldset>
                    <legend>Response Message</legend>
                    <Row id="response_info" className="row">
                        <Col>
                            <div className="mb-3">
                                <label for="message_initial_message" className="form-label">Enter the message you want sent in response to people who text your keyword.</label>
                                <textarea 
                                    id="message_initial_message" name="initial_message" 
                                    className="text_message_input form-control" 
                                    data-max-chars="160" data-count-display-id="char_counter_initial_message" 
                                    rows="3" cols="40" 
                                    value={responseMsg} 
                                    onChange={
                                        (e) => {
                                            setResponseMsg(e.target.value),
                                            countChars(e.target.value)
                                            }
                                        }
                                >
                                        Please follow the link to see westwood football fundraiser https://vlp.epype.net/5y9JD6
                                </textarea>
                                <div className="form-text">Characters remaining: 
                                    <span id="char_counter_initial_message"> {charsRemaining}</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col className="col">
                            <div className="mb-3">
                                <select 
                                    id="choose-vlp" 
                                    className="form-select"
                                    value={selectVlp}
                                    onChange={(e) => setSelectVlp(e.target.value)}
                                >
                                    <option value="">Select VLP</option>
                                    <option value="Westwood Football Fundraiser">Westwood Football Fundraiser</option>
                                </select>
                            </div>
                        </Col>
                        <Col className="col-auto">
                            <div className="mb-3">
                                <Button id="insertVlpButton" className="" disabled={selectVlp === "" ? true : false}>Insert Link</Button>
                            </div>
                        </Col>
                    </Row>
                </fieldset>

                <fieldset>
                    <legend>Contact Tags</legend>
	                <Form.Label className="form-label">These tags will be added to new contacts who text your keyword.</Form.Label>
	                <Alert id="contact_taglist" className="alert-primary pt-2">
                        <div className="tag">
                            <Button onClick = {() => setOn1(true)} variant={on1 == true ? "warning" : "secondary"}>New Contact</Button>
                            {/* <input className="tag" type="checkbox" checked/> */}
		                </div>
                        <div className="tag">
                            <Button onClick = {() => setOn2(true)} variant={on2 == true ? "warning" : "secondary"}>James Wright</Button>
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
                            <p id="messageAdd">
                                <a href="#" className="btn btn-primary"><span className="fas fa-plus"></span> 
                                    Add a Follow-up Message
                                </a>
                            </p>
                        </div>
                    </div>
                </fieldset>

                <div className="text-center">
                    <Button type="submit" id="btnSubmit" className="btnSubmit" className="m-1" href="/user">Save Changes</Button>
                    <Button type="button" id="btnCancel" className="btnCancel" variant="danger" className="m-1" href="/user">Cancel</Button>
                </div>
            </Form>
        </Container>
    )
}