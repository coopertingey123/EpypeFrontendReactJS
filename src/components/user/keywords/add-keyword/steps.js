import React from 'react'
import { Container } from 'react-bootstrap'
import AddKeyword from "./add-keyword"
import OptinInfo from "./opt-in-info"
import SmsMessage from "./message"

export default function (props) {
    return (
        <Container>
            <h2 className="green-text py-2">Add SMS Keyword</h2>
            <hr style={{width: "100%"}}/>
            <AddKeyword/>
            <OptinInfo/>
            <SmsMessage/>
        </Container>
    )
}