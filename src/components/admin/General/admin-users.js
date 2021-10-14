import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

export default function AdminClients(props) {
    const [searchField, setSearchField] = useState("")
    const [search, setSearch] = useState("")
    const [userType, setUserType] = useState("")
    const [activeSelect, setActiveSelect] = useState("")
    const [sortBy, setSortBy] = useState("")
    const [sortOrder, setSortOrder] = useState("")


    function handleSubmit(event) {
        event.preventDefault();
        console.log(searchField)
        console.log(search)
        console.log(userType)
        console.log(activeSelect)
        console.log(sortBy)
        console.log(sortOrder)
    }

    return (
        <Container className="text-center">
            <h3 className="green-text p-3">
                Admin Users
            </h3>
            <Button href="/admin/add-admin-client">+ Add a new Admin User</Button>
            <Form className="text-start p-3" onSubmit={handleSubmit}>
                <Form.Group className="p-3">
                    <Form.Label>
                        Search
                    </Form.Label>
                    <select 
                        className="form-select my-2" 
                        aria-label="All Fields"
                        value={searchField}
                        onChange={(e) => setSearchField(e.target.value)}
                    >
                        <option value="">All Fields</option>
                        <option value="userId">User ID</option>
                        <option value="name">Name</option>
                        <option value="email">Email Address</option>
                    </select>
                    <Form.Control 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="p-3">
                    <Form.Label>
                        Admin User Type
                    </Form.Label>
                    <select 
                        className="form-select my-2" 
                        aria-label="All Types"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                    >
                        <option value="">All Types</option>
                        <option value="accounting">Accounting</option>
                        <option value="support">Support</option>
                        <option value="sales">Sales</option>
                    </select>
                </Form.Group>
                <Form.Group className="p-3">
                    <Form.Label>
                        Active
                    </Form.Label>
                    <select 
                        className="form-select my-2" 
                        aria-label="Doesn't Matter"
                        value={activeSelect}
                        onChange={(e) => setActiveSelect(e.target.value)}
                    >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </Form.Group>
                <Form.Group className="p-3">
                    <Form.Label>
                        Sort Results By
                    </Form.Label>
                    <Row>
                        <Col md={6}>
                            <select 
                                className="form-select mb-2" 
                                aria-label="Last Name"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="userId">User Id</option>
                                <option value="lastName">Last Name</option>
                                <option value="firstName">First Name</option>
                                <option value="email">Email Address</option>
                            </select>
                        </Col>
                        <Col md={6}>
                            <select 
                                className="form-select" 
                                aria-label="Ascending"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value="descending">Descending</option>
                                <option value="descending">Ascending</option>
                            </select>
                        </Col>
                    </Row>
                </Form.Group>
                <div className="text-center">
                    <Button className="m-3" type="submit">Find Accounts</Button>
                    <Button className="m-3">Previous Search</Button>
                </div>
            </Form>
        </Container>

    )
}