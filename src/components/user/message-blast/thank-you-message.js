import React from 'react'
import {Container, Button, Alert} from "react-bootstrap"

export default function ThankYouMessage(props) {
    return (
        <Container>
            <div id="return-home-wrapper">
                <h2 className="text-success">
                    {/* insert fontawesome icon here */} Thank you! Your message blast has been sent!
                </h2>
                <Alert id="blast-results" className="alert-success">
                    <div id="br-opted-in">
                        <p>Your message was sent to <strong id="successfulBlastMessageCount">5</strong> contacts.</p>
                    </div>
                    <div id="br-not-opted-in">
                        <p>An opt-in request was sent to <strong id="successfulOptInRequestCount"></strong> contacts.</p>
                    </div>
                </Alert>
                <Alert id="blast-error-wrapper" className="alert-danger">
                    <p>Some messages could not be sent.</p>
                    <ul id="blast-errors"></ul>
                </Alert>
                <p className="text-center">
                    <Button id="return-home-btn" className="returnButton btn-primary">Done</Button>
                </p>
            </div>
            <p id="try-again-later-wrapper" className="text-center">
			    <Button id="try-again-later-btn" className="tryAgainLaterButton btn-primary">Try Again Later</Button>
		    </p>
        </Container>
    )
}