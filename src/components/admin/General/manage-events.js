import React from 'react'
import { Container, Table, Button, Alert, Col} from "react-bootstrap";   
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

export default function ManageEvents(props) {
    return (
        <Container className="text-center">
            <h1 className="green-text p-3">Events</h1>
            <Button className="mb-3">+ New Event</Button>
            <Table id="events-table" className="table-striped text-underline table-hover text-center p-3">
                <thead className="dark">
                    <tr>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>User ID</th>
                        <th>SMS Code</th>
                        <th>SMS Keyword</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lauren Stats</td>
                        <td>8/2/2021</td>
                        <td>8/30/2021</td>
                        <td>100041</td>
                        <td>(888) 301-0066</td>
                        <td>LAUREN</td>
                        <td>
                            <Button className="m-1"><FontAwesomeIcon icon="edit"/> Edit</Button>
                            <Button className="m-1"><FontAwesomeIcon icon="list"/> Categories</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Fiesta Days</td>
                        <td>7/19/2021</td>
                        <td>7/23/2021</td>
                        <td>100134</td>
                        <td>(833) 260-1060</td>
                        <td>RODEO</td>
                        <td>
                            <Button className="m-1"><FontAwesomeIcon icon="edit"/> Edit</Button>
                            <Button className="m-1"><FontAwesomeIcon icon="list"/> Categories</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Super Bowl of Caring</td>
                        <td>6/30/2021</td>
                        <td>9/29/2021</td>
                        <td>100125</td>
                        <td>(888) 301-0066</td>
                        <td>SOUP</td>
                        <td>
                            <Button className="m-1"><FontAwesomeIcon icon="edit"/> Edit</Button>
                            <Button className="m-1"><FontAwesomeIcon icon="list"/> Categories</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}