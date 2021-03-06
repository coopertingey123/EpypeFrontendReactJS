import React from 'react'
import { Container, Button, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ManageTags(props) {
    return (
        <Container>
            <h2 className="green-text py-3">Contact Tags</h2>
            <div className="text-center">
                <Button className="my-3" href="/user/contacts/add-tag">+ Add a new tag</Button>
            </div>
            <Table className="border_bottom table-striped">
                <thead className="thead-dark">
                    <tr>
                        <td>Description</td>
                        <td className="text-end" style={{width: '100px'}}>Contacts</td>
                        <td style={{width: '120px'}}></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="/user/contacts/edit-tag">New Contact</a></td>
                        <td className="text-end"><a href="/user/contacts/search-results">1</a></td>
                        <td className="text-end"><Button variant="danger">Delete <FontAwesomeIcon icon="trash"/></Button></td>
                    </tr>

                </tbody>
            </Table>
        </Container>
    )
}