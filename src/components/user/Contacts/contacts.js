import React, { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function UserSignups(props) {

    const [searchField, setSearchField] = useState("")
    const [search, setSearch] = useState("")
    const [subscribedKeywords, setSubscribedKeywords] = useState("")
    const [tag, setTag] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [sortBy, setSortBy] = useState("")
    const [perPage, setPerPage] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        console.log(searchField)
        console.log(search)
        console.log(subscribedKeywords)
        console.log(tag)
        console.log(startDate)
        console.log(endDate)
        console.log(sortBy)
        console.log(perPage)
    }


    return (
        <Container className="text-center pb-5">
            <h1 className="green-text p-3">Contacts</h1>
            <Button className="m-1">Add New Contact</Button>
            <Button className="m-1">Import Contacts</Button>
            <Button className="m-1">Export Contacts</Button>
            <Button className="m-1">Manage Tags</Button>
            <Form className="text-start p-3" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>
                        Search
                    </Form.Label>
                    <select 
                        id="frmSalesId" 
                        name="sales_id[]" 
                        className="form-select my-2" 
                        value={searchField} 
                        onChange={(e) => setSearchField(e.target.value)}
                    >
                        <option value="allFields">All Fields</option>
                        <option value="lastName">Last Name</option>
                        <option value="firstName">First Name</option>
                        <option value="phoneNumber">Phone Number</option>
                        <option value="EmailAddress">Email Address</option>
                    </select>
                    <Form.Control 
                        placeholder="Search Term"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="py-3">
                    <Form.Label>Subscribed SMS Keywords</Form.Label>
                    <select 
                        name="" 
                        id="" 
                        className="form-select my-2" 
                        // multiple
                        size="2"
                        value={subscribedKeywords}
                        onChange={(e) => setSubscribedKeywords(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="COOPER">COOPER (12)</option>
                        <option value="Football">Football (64)</option>
                    </select>
                </Form.Group>
                <Form.Group className="py-3">
                    <Form.Label>Tag</Form.Label>
                    <select 
                        name="" 
                        id="" 
                        className="form-select my-2" 
                        // multiple 
                        size="2"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="newContact">New Contact (12)</option>
                        <option value="Phillip Lunt">Philip Lunt (14)</option>
                    </select>
                </Form.Group>
                <Row className="py-3 align-items-center">
                    <Col className="" md={2}>
                        <p className="align-items-center">Import Date Range</p>
                    </Col>
                    <Col className="col-lg mb-3" md={5}>
                        <Form.Group>
                            <Form.Label>Start Date</Form.Label>
                            <DatePicker 
                                className="form-control" 
                                selected={startDate}
                                onChange={(e) => setStartDate(e)}
                            />
                        </Form.Group>
                    </Col>
                    <Col className="col-lg mb-3" md={5}>
                        <Form.Group>
                            <Form.Label>End Date</Form.Label>
                            <DatePicker 
                                className="form-control" 
                                selected={endDate}
                                onChange={(e) => setEndDate(e)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="py-3">
                    <Form.Label>Sort Results By</Form.Label>
                    <select 
                        className="form-select" 
                        id=""
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="lastName">Last Name</option>
                        <option value="firstName">First Name</option>
                        <option value="email">Email</option>
                        <option value="importDate">Import Date</option>
                    </select>
                </Form.Group>
                <Form.Group className="py-3">
                    <Form.Label>Results Per Page</Form.Label>
                    <select 
                        className="form-select" 
                        id=""
                        value={perPage}
                        onChange={(e) => setPerPage(e.target.value)}
                    >
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                        <option value="75">75</option>
                        <option value="100">100</option>
                    </select>
                </Form.Group>
                <div className="text-center">
                    <Button className="mx-1" type="submit">Find Contacts</Button>
                    <Button className="mx-1">Previous Search</Button>
                </div>
            </Form>
        </Container>
    )
}