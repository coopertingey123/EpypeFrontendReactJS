import React from 'react'
import { Container, Row, Col, Form , Button} from 'react-bootstrap'
import UserNavbar from "../../navigation/user-navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChooseSMSKeyword from './choose-sms-keyword';
import ChooseTags from "./choose-tags";
import ComposeMessage from "./compose-message";
import CreateMessageBlast from "./create-message-blast";
import ReviewAndSend from './review-and-send';
import ThankYouMessage from "./thank-you-message";
import ScheduledBlasts from './scheduled-message-blasts';

export default function SMSBlast(props) {
    return (
        <Container className="text-center">
            <UserNavbar/>
            <h1 className="green-text">Create a Message Blast</h1>
            <div id="steps-progress-bar-wrapper" class="with-video-training">
                <ul id="steps-progress-bar">
                    <li class="active">
                        <FontAwesomeIcon icon="key"/>
                        <p>Choose SMS Keyword</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="tags"/>
                        <p>Choose Tags</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="envelope-open-text"/>
                        <p>Compose Message</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="user-check"/>
                        <p>Add Opt-in Message</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="paper-plane"/>
                        <p>Review &amp; Send</p>
                    </li>
                </ul>

                <div id="videoTrainingIcon">
                    <FontAwesomeIcon icon="play-circle"/>
                    <p>Video Help</p>
                </div>
		    </div>
            <ChooseSMSKeyword/>
            <ChooseTags/>
            <ComposeMessage/>
            <CreateMessageBlast/>
            <ReviewAndSend/>
            <ThankYouMessage/>
            <ScheduledBlasts/>
        </Container>
    )
}