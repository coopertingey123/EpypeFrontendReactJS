import React from 'react'
import { Container, Alert, Table, Form, Pagination, Row, Col } from 'react-bootstrap'
import Flag from "../../../../static/assets/photos/16.png"
export default function ContactSearchResults(props) {

    // let active = 1
    // let items = []

    return (
        <Container>
            <Alert variant="primary" className="my-3">
                <p><strong>Search criteria: </strong> 536 matches</p>
                <p>Tag(s): New Contact</p>
            </Alert>
            <Row>
                <Col className="records-wrapper">
                    <strong>536</strong> records found | <a href="/user/contacts">New Search</a> | <a href="/user/contacts/add-tag">Add Tags</a> | <a href="/user/contacts/export-contacts">Export Data</a>
                </Col>
                <Col className="pagination-wrapper text-end">
                    <Pagination className="">
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item>{4}</Pagination.Item>
                        <Pagination.Item>{5}</Pagination.Item>
                        <Pagination.Item>{6}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Col>
            </Row>
            <Table className="table-striped border_bottom">
                <thead className="thead-dark">
                    <tr>
                        <th><Form.Check/></th>
                        <th>LastName / First Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                   
                </thead>
                <tbody>
                    <tr>
                        <td><Form.Check/></td>
                        <td><a href="">Caden</a></td>
                        <td>Mobile <img src={Flag} alt="" /> (801) 234-4324</td>
                        <td>caden@yahoo.com</td>
                    </tr>
                    <tr>
                        <td><Form.Check/></td>
                        <td><a href="">Caden</a></td>
                        <td>Mobile <img src={Flag} alt="" /> (801) 234-4324</td>
                        <td>caden@yahoo.com</td>
                    </tr>
                    <tr>
                        <td><Form.Check/></td>
                        <td><a href="">Caden</a></td>
                        <td>Mobile <img src={Flag} alt="" /> (801) 234-4324</td>
                        <td>caden@yahoo.com</td>
                    </tr>
                    <tr>
                        <td><Form.Check/></td>
                        <td><a href="">Caden</a></td>
                        <td>Mobile <img src={Flag} alt="" /> (801) 234-4324</td>
                        <td>caden@yahoo.com</td>
                    </tr>
                </tbody>
            </Table>
            <Row>
                <Col className="records-wrapper">
                    <strong>536</strong> records found | <a href="/user/contacts">New Search</a> | <a href="/user/contacts/add-tag">Add Tags</a> | <a href="/user/contacts/export-contacts">Export Data</a>
                </Col>
                <Col className="pagination-wrapper text-end">
                    <Pagination className="">
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item>{4}</Pagination.Item>
                        <Pagination.Item>{5}</Pagination.Item>
                        <Pagination.Item>{6}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Col>
            </Row>
        </Container>
    )
}