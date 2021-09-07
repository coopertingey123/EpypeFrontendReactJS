import React from 'react'
import { Container, Alert, Button, Table} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ScheduledBlasts(props) {
    return (
        <Container>
            <h1 className="green-text">Scheduled Blasts</h1>
            <Alert className="alert-danger">You don't have any scheduled message blasts.</Alert>
            <Table className="table-striped border_bottom">
                <thead className="thead-dark">
                    <tr>
                        <th>Send Date</th>
                        <th>Message</th>
                        <th>Opt-In Message</th>
                        <th>Message Count</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8/31/2021 4:45 am</td>
                        <td>asdfasdf http://vlp.epype.net/5y9JD6</td>
                        <td></td>
                        <td>13</td>
                        <td><Button variant="outline-danger" className="btn-sm"> <FontAwesomeIcon icon="trash"/> Cancel</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}