import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function AddSmsKeyword(props) {

    const [keyword, setKeyword] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        console.log(keyword)
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="py-2">
                    <Form.Label>
                        Enter a word that people can text to your EPYPE phone number. When people text this number, 
                        they will receive a message from you, which can include a link to one of your
                        Video Landing Pages.
                    </Form.Label>
                    <Form.Control
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <Form.Text>
                        Use 2-12 alphanumeric characters (no spaces)
                    </Form.Text>
                </Form.Group>
                <div className="m-1">
                    <Button className="m-1" type="submit">Next</Button>
                    <Button className="m-1" variant="danger">Cancel</Button>
                </div>
            </Form>
        </Container>
    )
}