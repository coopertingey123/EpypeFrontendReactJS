import React, {useState} from 'react'
import { Container, Alert, Button, Form } from 'react-bootstrap'

export default function Notes(props) {

    const [show, setShow] = useState(false)

    return (
        <Container>
            <h2 className="green-text py-2">Notes</h2>
            <Button className="m-2" onClick={() => setShow(true)}>+ Add a new note</Button>
            <Alert variant="primary">
                <strong>8/30/2021 4:51 pm - Cooper Tingey</strong>
                <p>Text message sent</p>
            </Alert>
            <Alert variant="primary">
                <strong>8/30/2021 4:51 pm - Cooper Tingey</strong>
                <p>Text message sent</p>
            </Alert>
            <Alert variant="secondary">
                <strong>8/30/2021 4:51 pm - Cooper Tingey</strong>
                <p>Opted in to text messages for keyword COOPER from phone number (888) 301-0066</p>
            </Alert>

            {show ? 
                <Container>
                    <Form.Text>Note</Form.Text>
                    <textarea className="form-control" id="" cols="30" rows="5"/>
                    <div className="text-center pt-3">
                        <Button className="m-1">Add Note</Button>
                        <Button variant="danger" className="m-1">Cancel</Button>
                    </div>
                </Container>
            : null}
        </Container>
    )
}