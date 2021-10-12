import React from 'react'
import { Container, Button, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Tags(props) {
    return (
        <Container className="text-center">
            <h1 className="green-text py-3">Contact Tags</h1>
            <Button className="mb-3" href="/user/contacts/add-tag">+ Add a new tag</Button>
            <Table className="table-striped border_bottom text-start p-3">
                <thead className="thead-dark">
                    <tr>
                        <th>Description</th>
                        <th className="text-end" style={{width: "100px"}}>Contacts</th>
                        <th style={{width: "100px"}}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="/user/contacts/edit-tag">New Contact</a></td>
                        <td className="text-end"><a href="">3</a></td>
                        <td className="text-end"></td>
                    </tr>
                    <tr>
                        <td><a href="/user/contacts/edit-tag">Johnny Wright</a></td>
                        <td className="text-end">0</td>
                        <td className="text-end"><Button><FontAwesomeIcon icon="trash"/></Button></td>
                    </tr>
                    <tr>
                        <td><a href="/user/contacts/edit-tag">Kevin Wright</a></td>
                        <td className="text-end">1</td>
                        <td className="text-end"><Button><FontAwesomeIcon icon="trash"/></Button></td>
                    </tr>
                    <tr>
                        <td><a href="/user/contacts/edit-tag">Max Wright</a></td>
                        <td className="text-end">2</td>
                        <td className="text-end"><Button><FontAwesomeIcon icon="trash"/></Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}