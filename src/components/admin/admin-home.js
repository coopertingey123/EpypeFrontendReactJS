import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'

export default function AdminHome(props) {
    return (
        <Container>
            <h1 className="green-text m-3">General Admin</h1>
            <ListGroup className="m-3">
                <ListGroup.Item action href="/admin/manage-accounts">
                    Manage Accounts
                </ListGroup.Item>
                <ListGroup.Item action href="/admin/users">
                    Manage Admin Users
                </ListGroup.Item>
                <ListGroup.Item action href="/admin/manage-promo-codes">
                    Manage Promo Codes
                </ListGroup.Item>
                <ListGroup.Item action href="/admin/sms-codes">
                    Manage SMS Codes
                </ListGroup.Item>
                <ListGroup.Item action href="/admin/manage-vlp-layouts">
                    Manage Video Landing Page Themes
                </ListGroup.Item>
                <ListGroup.Item action href="/admin/manage-events">
                    Manage Events
                </ListGroup.Item>
                <ListGroup.Item action href="/admin/email-notices">
                    Manage Email Notices
                </ListGroup.Item>
            </ListGroup>
        </Container>
    )
}