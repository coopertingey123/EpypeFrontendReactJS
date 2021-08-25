import React from 'react'

import { Container, Table } from 'react-bootstrap'

import NavbarAdmin from "../../navigation/navbar-admin";

export default function EmailNotices(props) {
    return (
        <Container className="text-center">
            <NavbarAdmin/>
            <h1 className="green-text p-3">Email Notices</h1>
            <Table className="text-start">
                <thead className="dark">
                    <tr>
                        <th style={{width: "200px"}}>ID</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href="">user_signup_welcome</a>
                        </td>
                        <td>
                            Epype Signup Welcome Email
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}