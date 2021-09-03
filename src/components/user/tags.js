import React from 'react'
import { Container, Button, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Tags(props) {
    return (
        <Container className="text-center">
            <h1 className="green-text py-3">Contact Tags</h1>
            <Button>+ Add a new tag</Button>
            <Table className="table-striped border-bottom text-start p-3">
                <thead className="dark">
                    <tr>
                        <th>Description</th>
                        <th className="text-end" style={{width: "100px"}}>Contacts</th>
                        <th style={{width: "100px"}}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="">New Contact</a></td>
                        <td className="text-end"><a href="">3</a></td>
                        <td className="text-end"></td>
                    </tr>
                    <tr>
                        <td><a href="">Johnny Wright</a></td>
                        <td className="text-end">0</td>
                        <td className="text-end"><Button><FontAwesomeIcon icon="trash"/></Button></td>
                    </tr>
                    <tr>
                        <td><a href="">Kevin Wright</a></td>
                        <td className="text-end">1</td>
                        <td className="text-end"><Button><FontAwesomeIcon icon="trash"/></Button></td>
                    </tr>
                    <tr>
                        <td><a href="">Max Wright</a></td>
                        <td className="text-end">2</td>
                        <td className="text-end"><Button><FontAwesomeIcon icon="trash"/></Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}