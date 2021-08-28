import React from 'react'
import { Container, Button, Row, Col, Form, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function AddOptinMessage(props) {
    return (
        <Container>
            <Alert className="alert-info mt-3 align-items-center">
                <FontAwesomeIcon icon="info-circle"/>
                <p>All the contacts associated with the tags you selected are already opted in to the keyword <strong>COOPER</strong>, so there's no need for an opt-in request message. Click <strong>NEXT</strong> to continue.</p>
            </Alert>
        </Container>
    )
}