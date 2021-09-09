import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function AdminChangePreferences(props) {

    const [timeZone, setTimeZone] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        console.log(timeZone)
    }

    return (
        <Container className="text-center">
            <h1 className="green-text pt-3">Change Preferences</h1>
            <Form className="py-3 text-start" onSubmit={handleSubmit}>
                <Form.Group className="py-2">
                    <Form.Label>Time Zone</Form.Label>
                    <select className="form-select" onChange={(e) => setTimeZone(e.target.value)}>
                        <option value="mountain">Mountain</option>
                        <option value="alaska">Alaska</option>
                        <option value="arizona">Arizona</option>
                        <option value="central">Central</option>
                        <option value="eastern">Eastern</option>
                        <option value="hawaii-aleutian">Hawaii-Aleutian</option>
                        <option value="pacific">Pacific</option>
                    </select>
                </Form.Group>
                <div className="text-center">
                    <Button className="m-1" type="submit">Save Changes</Button>
                    <Button className="btn-danger m-1">Cancel</Button>
                </div>
            </Form>
        </Container>
    )
}