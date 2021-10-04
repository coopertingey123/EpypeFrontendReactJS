import React from 'react'
import { Container, Alert} from "react-bootstrap"

export default function ExportContacts(props) {
    return (
        <Container>
            <h2 className="green-text py-2">Export Contacts</h2>
            <Alert variant="primary">This will export all your contacts. You can also export specific contacts by performing a search, then clicking the "Export Data" link on the search results.</Alert>
            <p>Click the link below to download your data:</p>
            <ul>
                
                <a href="">Export CSV File</a>
            </ul>
        </Container>
    )
}