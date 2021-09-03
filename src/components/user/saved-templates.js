import React from 'react'
import { Container, Alert, Button, Table } from 'react-bootstrap'

export default function SavedTemplates(props) {
    return (
        <Container className="text-center">
            <h1 className="green-text p-3">Saved VLP Templates</h1>
            <Alert variant="danger">You don't have any Video Landing Page Templates</Alert>
            <Button>+ Add a new Template</Button>
            <Table className="table-striped border-bottom text-start p-3">
                <thead className="dark">
                    <tr>
                        <th style={{width: "120x"}}></th>
                        <th>Name</th>
                        <th style={{width: "200x"}}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">
                            Image <br/>
                            Here
                            <img src="" alt="" />
                        </td>
                        <td>A Winter Collection</td>
                        <td className="text-end">
                            <a href=""> Edit </a>
                              |  
                            <a href=""> Delete </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">
                            Image <br/>
                            Here
                            <img src="" alt="" />
                        </td>
                        <td>ABC Theme</td>
                        <td className="text-end">
                            <a href=""> Edit </a>
                              |  
                            <a href=""> Delete </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">
                            Image <br/>
                            Here
                            <img src="" alt="" />
                        </td>
                        <td>Another Theme</td>
                        <td className="text-end">
                            <a href=""> Edit </a>
                              |  
                            <a href=""> Delete </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">
                            Image <br/>
                            Here
                            <img src="" alt="" />
                        </td>
                        <td>Final Theme</td>
                        <td className="text-end">
                            <a href=""> Edit </a>
                              |  
                            <a href=""> Delete </a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}