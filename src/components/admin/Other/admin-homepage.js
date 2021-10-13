import React from 'react';
import { Container, ListGroup } from "react-bootstrap";

export default function AdminHomepage(props) {
    return (
        <Container>
            <h3 className="green-text m-3">General Admin</h3>
            <ListGroup className="m-3">
                <ListGroup.Item action href="/admin/accounts">
                    Manage Accounts
                </ListGroup.Item>
                <ListGroup.Item action href="/admin/clients">
                    Manage Admin Users
                </ListGroup.Item>
                <ListGroup.Item action href="/admin/promo-codes">
                    Manage Promo Codes
                </ListGroup.Item>
                <ListGroup.Item action href="/admin/sms-codes">
                    Manage SMS Codes
                </ListGroup.Item>
                <ListGroup.Item action href="/admin/vlp-layouts">
                    Manage Video Landing Page Themes
                </ListGroup.Item>
                <ListGroup.Item action href="/admin/events">
                    Manage Events
                </ListGroup.Item>
                <ListGroup.Item action href="/admin/email-notices">
                    Manage Email Notices
                </ListGroup.Item>
            </ListGroup>
        </Container>
    )
}