import React from 'react'
import { Form, Button, Row, Col, Container, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ManagePromoCodes(props) {
    return (
        <Container className="text-center">
            <h1 className="green-text p-3">
                Promo Codes
            </h1>
            <Form>
                <Row className="mb-3 g-3 text-start">
                    <Col className="col-3">
                        <Form.Check type="checkbox" label="Show expired Promo codes"/>
                    </Col>
                    <Col>
                        <Button>
                            Go
                        </Button>
                    </Col>
                </Row>
            </Form>
            <Button className="m-3">+ Add a new promo code</Button>
            <Table className="table-striped border_bottom p-3">
                <thead className="thead-dark">
                    <tr>
                        <th style={{width: "140px"}}>
                            Promo Code
                        </th>
                        <th style={{width: "100px"}}>
                            Expiration
                        </th>
                        <th className="text-end" style={{width: "180px"}}>
                            Setup  /  
                            Base
                        </th>
                        <th className="text-end" style={{width: "120px"}}>
                            Free Months
                        </th>
                        <th>
                            Sales Person
                        </th>
                        <th style={{width: "80px"}}>
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="">AMMON1</a></td>
                        <td></td>
                        <td class="text-end">
                            49.00 / 399.00
                        </td>
                        <td class="text-end"></td>
                        <td>Ammon Freest0ne (Platpay)</td>
                        <td class="text-end">
                            <Button><FontAwesomeIcon icon="trash"/></Button>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="">AMMON1</a></td>
                        <td></td>
                        <td class="text-end">
                            49.00 / 399.00
                        </td>
                        <td class="text-end"></td>
                        <td>Ammon Freest0ne (Platpay)</td>
                        <td class="text-end">
                            <Button><FontAwesomeIcon icon="trash"/></Button>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="">AMMON1</a></td>
                        <td></td>
                        <td class="text-end">
                            49.00 / 399.00
                        </td>
                        <td class="text-end"></td>
                        <td>Ammon Freest0ne (Platpay)</td>
                        <td class="text-end">
                            <Button><FontAwesomeIcon icon="trash"/></Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}