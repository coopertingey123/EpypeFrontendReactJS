import React, {useState} from 'react'
import { Container, Form, Button} from "react-bootstrap"

export default function ProcessOneTimePayment(props) {

    const [accountType, setAccountType] = useState("")
    const [account, setAccount] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        console.log(accountType)
        console.log(account)
    }

    return (
        <Container className="text-center">
            <h1 className="green-text text-center p-3">Process One-time Payment</h1>
            <Form className="text-start py-3" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Account</Form.Label>
                    <select 
                    className="form-select my-3"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    >
                        <option value="user">User</option>
                        <option value="organization">Organization</option>
                    </select>
                    <Form.Control
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                    />
                </Form.Group>
                <div className="text-center py-3">
                    <Button className="m-1" type="submit">Next</Button>
                    <Button className="btn-danger m-1">Cancel</Button>
                </div>
            </Form>
 
        </Container>
    )
}