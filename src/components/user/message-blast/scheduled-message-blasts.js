import React from 'react'
import { Container, Alert, Button, Table} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ScheduledBlasts(props) {
    return (
        <Container>
            <h1 className="green-text">Scheduled Blasts</h1>
            <Alert className="alert-danger">You don't have any scheduled message blasts.</Alert>
            <Table>
                <thead>
                    <tr>
                        <td>Send Date</td>
                        <td>Message</td>
                        <td>Opt-In Message</td>
                        <td>Message Count</td>
                        <td></td>
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