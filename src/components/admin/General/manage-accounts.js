import React, { useState } from 'react'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'

export default function ManageAccounts(props) {

    const [accountType, setAccountType] = useState("")
    const [searchField, setSearchField] = useState("")
    const [search, setSearch] = useState("")
    // const [includePhone, setIncludePhone] = useState("")
    const [state, setState] = useState([])
    const [salesPerson, setSalesPerson] = useState([])
    const [salesPersonType, setSalesPersonType] = useState("")
    const [accountStatus, setAccountStatus] = useState("")
    const [setupStatus, setSetupStatus] = useState("")
    const [sortResultsOption, setSortResultsOption] = useState("")
    const [sortOrder, setSortOrder] = useState("")
    const [orgType, setOrgType] = useState("")
    // const [includeOrgUserCount, setIncludeOrgUserCount] = useState("")


    function handleSubmit(event) {
        event.preventDefault();
        console.log(accountType)
        console.log(searchField)
        console.log(search)
        // console.log(includePhone)
        console.log(state)
        console.log(salesPerson)
        console.log(salesPersonType)
        console.log(accountStatus)
        console.log(setupStatus)
        console.log(sortResultsOption)
        console.log(sortOrder)
        console.log(orgType)
        // console.log(includeOrgUserCount)
      }

    return (
        <Container className="text-center">
            <h1 className="green-text p-3">Accounts</h1>
            <Button>+ Add a New Organization</Button>
            <Form className="text-start" onSubmit={handleSubmit}>
                <Form.Group className="p-3">
                    <Form.Label>
                        Account Type
                    </Form.Label>
                    <select 
                        className="form-select" 
                        aria-label="All"
                        value={accountType}
                        onChange={(e) => setAccountType(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="u">Users</option>
                        <option value="o">Organizations</option>
                    </select>
                </Form.Group>
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
                        <option value="u">User ID</option>
                        <option value="o">Name</option>
                        <option value="u">Email Address</option>
                        <option value="o">Phone Number</option>
                    </select>
                    <Form.Control 
                        className="my-2"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Form.Check type="checkbox" label="Don't include phone numbers in 'All Fields'"/>
                </Form.Group>
                <Row>
                    <Col lg={6}>
                        <Form.Group className="p-3">
                            <Form.Label>
                                State
                            </Form.Label>
                            <select 
                                // multiple 
                                size="7" 
                                className="form-select"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            >
                                <option value="">All States</option>
                                <option value="AK">AK</option>
                                <option value="AL">AL</option>
                                <option value="AR">AR</option>
                                <option value="AZ">AZ</option>
                                <option value="CA">CA</option>
                                <option value="CO">CO</option>
                                <option value="CT">CT</option>
                                <option value="DC">DC</option>
                                <option value="DE">DE</option>
                                <option value="FL">FL</option>
                                <option value="GA">GA</option>
                                <option value="GU">GU</option>
                                <option value="HI">HI</option>
                                <option value="IA">IA</option>
                                <option value="ID">ID</option>
                                <option value="IL">IL</option>
                                <option value="IN">IN</option>
                                <option value="KS">KS</option>
                                <option value="KY">KY</option>
                                <option value="LA">LA</option>
                                <option value="MA">MA</option>
                                <option value="MD">MD</option>
                                <option value="ME">ME</option>
                                <option value="MI">MI</option>
                                <option value="MN">MN</option>
                                <option value="MO">MO</option>
                                <option value="MS">MS</option>
                                <option value="MT">MT</option>
                                <option value="NC">NC</option>
                                <option value="ND">ND</option>
                                <option value="NE">NE</option>
                                <option value="NH">NH</option>
                                <option value="NJ">NJ</option>
                                <option value="NM">NM</option>
                                <option value="NV">NV</option>
                                <option value="NY">NY</option>
                                <option value="OH">OH</option>
                                <option value="OK">OK</option>
                                <option value="OR">OR</option>
                                <option value="PA">PA</option>
                                <option value="PR">PR</option>
                                <option value="RI">RI</option>
                                <option value="SC">SC</option>
                                <option value="SD">SD</option>
                                <option value="TN">TN</option>
                                <option value="TX">TX</option>
                                <option value="UT">UT</option>
                                <option value="VA">VA</option>
                                <option value="VI">VI</option>
                                <option value="VT">VT</option>
                                <option value="WA">WA</option>
                                <option value="WI">WI</option>
                                <option value="WV">WV</option>
                                <option value="WY">WY</option>
                            </select>
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group className="p-3">
                            <Form.Label>
                                Sales Person
                            </Form.Label>
                            <select 
                                // multiple 
                                size="7" 
                                className="form-select"
                                value={salesPerson}
                                onChange={(e) => setSalesPerson(e.target.value)}
                            >
					            <option value="">All</option>
                                <option value="0">Unassigned</option>
                                <option value="9">Ammon Freest0ne (Platpay)</option>
                                <option value="1">Corporate Sales</option>
                                <option value="2">Ethan Morley (Epype)</option>
                                <option value="8">Glen Oliver (EPYPE)</option>
                                <option value="5">Jed Morley (Platinum Payments)</option>
                                <option value="4">Lance Hansen (Platinum Payments)</option>
                                <option value="6">Stace Vest (Platinum Payments)</option>
                                <option value="7">Trennen Rasmussen (EPYPE)</option>
                                <option value="3">Valinda Hanks (Platinum Payments)</option>
							</select>
                        </Form.Group>
                    </Col>
                </Row>
               
                <Form.Group className="p-3">
                    <Form.Label>
                        Sales Person
                    </Form.Label>
                    <select 
                        className="form-select" 
                        aria-label="All"
                        value={salesPersonType}
                        onChange={(e) => setSalesPersonType(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="u">Users</option>
                        <option value="o">Organizations</option>
                    </select>
                </Form.Group>
                <Form.Group className="p-3">
                    <Form.Label>
                        Account Status
                    </Form.Label>
                    <select 
                        className="form-select" 
                        aria-label="Doesn't Matter"
                        value={accountStatus}
                        onChange={(e) => setAccountStatus(e.target.value)}
                    >
                        <option value="">Doesn't Matter</option>
                        <option value="active">Active</option>
                        <option value="suspended">Suspended</option>
                        <option value="canceled">Canceled</option>
                    </select>
                </Form.Group>
                <Form.Group className="p-3">
                    <Form.Label>
                        Setup Status
                    </Form.Label>
                    <select 
                        className="form-select" 
                        aria-label="Doesn't Matter"
                        value={setupStatus}
                        onChange={(e) => setSetupStatus(e.target.value)}
                    >
                        <option value="">Doesn't Matter</option>
                        <option value="complete">Complete</option>
                        <option value="incomplete">Incomplete</option>
                    </select>
                </Form.Group>
                <Form.Group className="p-3">
                    <Form.Label>
                        Sort Results By
                    </Form.Label>
                    <Row>
                        <Col lg={6}>
                            <select 
                                className="form-select mb-2" 
                                aria-label="Last Name"
                                value={sortResultsOption}
                                onChange={(e) => setSortResultsOption(e.target.value)}
                            >
                                <option value="userId">User Id</option>
                                <option value="lastName">Last Name</option>
                                <option value="firstName">First Name</option>
                                <option value="emailAddress">Email Address</option>
                            </select>
                        </Col>
                        <Col lg={6}>
                            <select 
                                className="form-select" 
                                aria-label="Ascending"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value="descending">Descending</option>
                                <option value="ascending">Ascending</option>
                            </select>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="p-3">
                    <Form.Label>
                        Organization
                    </Form.Label>
                    <select 
                        className="form-select my-2" 
                        aria-label="All"
                        value={orgType}
                        onChange={(e) => setOrgType(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="123">99990 - Individual Agents</option>
                        <option value="123">100004 - American Leadership Academy</option>
                        <option value="123">100012 - Bottega Tech</option>
                        <option value="123">100005 - Demo Account</option>
                        <option value="123">100059 - DLVR - Amazon Partner</option>
                        <option value="123">100115 - doTERRA Brazil</option>
                        <option value="123">100018 - EPYPE Corporation</option>
                        <option value="123">100010 - Global EP</option>
                        <option value="123">100102 - Lifewave</option>
                        <option value="123">100095 - Live Kaya Corporate</option>
                        <option value="123">100024 - NuSkin Enterprises</option>
                        <option value="123">100016 - Platinum Payments</option>
                        <option value="123">99991 - Provo Office</option>
                        <option value="123">100153 - Solle International</option>
                        <option value="123">100014 - The CHurch of Jesus Christ of Latter Day Saints</option>
                        <option value="123">100085 - Vivint</option>
                    </select>
                    <Form.Check type="checkbox" label="Include Organization User Count"/>
                </Form.Group>
                <div className="text-center">
                    <Button className="m-3" type="submit" href="">Find Accounts</Button>
                    <Button className="m-3">Previous Search</Button>
                </div>
            </Form>
            
        </Container>
    )
}