import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import AdminNavbar from "../navigation/navbar-admin"

export default function AdminHomepage(props) {
    return (
        <div className="page-wrapper">
            <AdminNavbar/>
        </div>
    )
}