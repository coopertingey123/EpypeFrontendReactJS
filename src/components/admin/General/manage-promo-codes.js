import React from 'react'
import { Form, Button, Row, Col, Container, Table } from 'react-bootstrap'

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
            <Table className="table-striped border-bottom p-3">
                <thead className="dark">
                    <tr>
                        <th style={{width: "140px"}}>
                            <a href="">Promo Code</a>
                        </th>
                        <th style={{width: "100px"}}>
                            <a href="">Expiration</a>
                        </th>
                        <th className="text-end" style={{width: "180px"}}>
                            <a href="">Setup</a>  /  
                            <a href="">Base</a>
                        </th>
                        <th className="text-end" style={{width: "120px"}}>
                            <a href="">Free Months</a>
                        </th>
                        <th>
                            <a href="">Sales Person</a>
                        </th>
                        <th style={{width: "80px"}}>
                            <a href=""></a>
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
                            <a href="" data-bs-toggle="modal" data-bs-target="">Delete</a>
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
                            <a href="" data-bs-toggle="modal" data-bs-target="">Delete</a>
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
                            <a href="" data-bs-toggle="modal" data-bs-target="">Delete</a>
                        </td>
                    </tr>
                </tbody>

            </Table>
        </Container>
    )
}