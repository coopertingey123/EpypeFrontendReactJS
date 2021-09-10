import React, {iframe, useState} from 'react'
import { Container, Row, Col, Table, Button, Alert, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Flag from "../../../../static/assets/photos/16.png"

export default function AdminEditUser(props) {

    const [loginEmail, setLoginEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [timeZone, setTimeZone] = useState("")
    const [orgName, setOrgName] = useState("")
    const [orgPhone, setOrgPhone] = useState("")
    const [officeAddress1, setOfficeAddress1] = useState("")
    const [officeAddress2, setOfficeAddress2] = useState("")
    const [officeAddress3, setOfficeAddress3] = useState("")
    const [state, setState] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [activeIssue, setActiveIssue] = useState("")
    const [salesPerson, setSalesPerson] = useState("")
    const [accountFlags, setAccountFlags] = useState("")
    const [accountNotes, setAccountNotes] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        console.log(loginEmail)
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(timeZone)
        console.log(orgName)
        console.log(orgPhone)
        console.log(officeAddress1)
        console.log(officeAddress2)
        console.log(officeAddress3)
        console.log(state)
        console.log(postalCode)
        console.log(activeIssue)
        console.log(salesPerson)
        console.log(accountFlags)
        console.log(accountNotes)
      }

    return (
        <Container>
            <h1 className="green-text text-center">Edit User</h1>
            <div className="mb-3 text-center">
                <Button className="m-1">Log in</Button>
                <Button className="m-1">Send Email</Button>
                <Button className="m-1">Reminders</Button>
                <Button className="m-1">Event Log</Button>
            </div>
            <Form className="intl-phone-form" method="" onSubmit={handleSubmit}>
                <Row>
                    <Col className="" md={6}>
                        <fieldset>
                            <legend>General</legend>
                            <Form.Group className="mb-3">
                                <Form.Label>User ID</Form.Label>
                                <div id="frmUserId"><strong>100143</strong></div>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Login Email</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    id="frmLoginEmail" 
                                    name="login_email" 
                                    maxlength="100" 
                                    value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <div id="frmPassword">
						            <em>&lt;Hidden&gt;</em> <a href="">Reset</a>
					            </div>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    id="frmFirstName" 
                                    name="first_name" 
                                    className="form-control" 
                                    maxlength="50" 
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    id="frmLastName" 
                                    name="last_name" 
                                    className="form-control" 
                                    maxlength="50" 
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <div id="frmPhone">
                                    <FontAwesomeIcon icon="exclamation-triangle" className="text-warning"/>
					                +11234567890
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    id="frmEmail" 
                                    name="email" 
                                    maxlength="100" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Time Zone</Form.Label>
                                <select 
                                    name="timezone" 
                                    id="frmTimeZone" 
                                    className="form-select"
                                    value={timeZone}
                                    onChange={(e) => setTimeZone(e.target.value)}
                                >
                                    <option value="America/Anchorage">Alaska</option>
                                    <option value="America/Phoenix">Arizona</option>
                                    <option value="America/Chicago">Central</option>
                                    <option value="America/New_York">Eastern</option>
                                    <option value="Pacific/Honolulu">Hawaii-Aleutian</option>
                                    <option value="America/Denver">Mountain</option>
                                    <option value="America/Los_Angeles">Pacific</option>
                                </select>
                            </Form.Group>
                        </fieldset>
                        <fieldset>
                            <legend>Organization</legend>
                            <div className="mb-3">
                                <Form.Label>Organization ID</Form.Label>
                                <p>
                                    <a href="">99990</a>
                                       (Individual Agents) <br/>
                                    <a href="">Change Organization</a>
                                </p>
                            </div>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    name="organization_name" 
                                    maxlendth="50" 
                                    value={orgName}
                                    onChange={(e) => setOrgName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control 
                                    type="tel" 
                                    id="frmOfficePhone"
                                    name="office_phone" 
                                    maxlendth="50" 
                                    value={orgPhone} 
                                    onChange={(e) => setOrgPhone(e.target.value)}
                                    data-error-element-id="frmOfficePhoneErrorMsg"
                                />
                                <div className="invalid-feedback" id="frmOfficePhoneErrorMsg"></div>
                            </Form.Group>
                            <Form.Group className="mb-3 office_address_edit">
                                <Form.Label>Office Address</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    id="frmAddress1" 
                                    name="address1" 
                                    maxlength="50" 
                                    value={officeAddress1}
                                    onChange={(e) => setOfficeAddress1(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 office_address_edit">
                                <Form.Label className="visually-hidden">Office Address</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    id="frmAddress1" 
                                    name="address2" 
                                    maxlength="50" 
                                    value={officeAddress2}
                                    onChange={(e) => setOfficeAddress2(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 office_address_edit">
                                <Form.Label className="visually-hidden">City</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    id="frmCity" 
                                    name="city" 
                                    maxlength="50" 
                                    value={officeAddress3}
                                    onChange={(e) => setOfficeAddress3(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 office-address-edit">
                                <Form.Label>State</Form.Label>
                                <select 
                                    name="state" 
                                    id="" 
                                    className="form-select"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                >
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
                            <Form.Group className="mb-3 office_address_edit">
                                <Form.Label>Postal Code</Form.Label>
                                <Form.Control 
                                    id="frmZip" 
                                    name="zip" 
                                    className="form-control" 
                                    maxlength="10" 
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 office_address_view">
                                <Form.Label>Office Address</Form.Label>
                                <p>
                                    933 1910 S <br/>
                                    Suite 202 <br/>
                                    Provo, UT 84606 <br/>
                                    <a id="officeAddressChange" href="">Change</a>
                                </p>
                            </Form.Group>
                        </fieldset>
                    </Col>
                    <Col className="" md={6}>
                        <fieldset>
                            <legend>Account Status / Flags</legend>
                            <Form.Check className="mb-3">
                                <input 
                                    type="checkbox" 
                                    id="frmActiveIssue" 
                                    name="active_issue" 
                                    className="form-check-input" 
                                    value="activeIssue"
                                    checked={activeIssue==="activeIssue"}
                                    onChange={(e) => setActiveIssue(e.target.value)}
                                />
                                <Form.Label className="form-check-label">Active Issue</Form.Label>
                            </Form.Check>
                            <Form.Group className="mb-3">
                                <p className="mb-2">
                                    Account Status:
                                    Active
                                </p>
                                <p>
                                    <Button className="m-1 btn-warning btn-sm">Suspend Account</Button>
                                    <Button className="m-1 btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#genericModal">Cancel Account</Button>
                                </p>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Sales Person</Form.Label>
                                <select 
                                    name="sales_id" 
                                    id="frmSalesId" 
                                    className="form-select"
                                    value={salesPerson}
                                    onChange={(e) => setSalesPerson(e.target.value)}
                                >
                                    <option value="unassigned">Unassigned</option>
                                    <option value="Ammont Freest0ne">Ammont Freest0one (Platpay)</option>
                                    <option value="corporate sales">Corporate Sales</option>
                                    <option value="Ethan Morley">Ethan Morley(Epype)</option>
                                    <option value="Glen Oliver">Glen Oliver(EPYPE)</option>
                                    <option value="Jed Morley">Jed Morley(Platinum Payments)</option>
                                    <option value="Lance Hansen">Lance Hansen(Platinum Payments)</option>
                                    <option value="Stace Vest">Stace Vest (Platinum Payments)</option>
                                    <option value="Trennen Rasmussen">Trennen Rasmussen (EPYPE)</option>
                                    <option value="Valinda Hanks">Valinda Hanks (Platinum Payments)</option>
                                </select>
                            </Form.Group>
                            <Table className="table-sm table-borderless no-padding">
                                <tbody>
                                    <tr>
                                        <td>Signup Date:</td>
                                        <td className="text-end">6/25/2021</td>
                                    </tr>
                                    <tr>
                                        <td>Last Web Login:</td>
                                        <td>6/29/2021 2:35 pm</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Form.Group className="mb-3">
                                <Form.Label>Account Flags</Form.Label>
                                <Form.Control 
                                    maxlength="20" 
                                    value={accountFlags} 
                                    onChange={(e) => setAccountFlags(e.target.value)}
                                    name="flags"
                                />
                            </Form.Group>
                        </fieldset>
                        <fieldset>
                            <legend>SMS Codes</legend>
                            <Table className="table-striped border_bottom">
                                <thead className="thead-dark">
                                    <tr>
                                        <th colspan="3">Attached SMS Codes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img src={Flag} alt="" /> (833) 543-5435</td>
                                        <td>US</td>
                                        <td className="text-end"><a href="">Manage</a></td>
                                    </tr>
                                    <tr>
                                        <td><img src={Flag} alt="" /> (833) 555-5555</td>
                                        <td>US</td>
                                        <td className="text-end"><a href="">Manage</a></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </fieldset>
                        <fieldset>
                            <legend>Billing</legend>
                            <p>
                                <a href="">Invoice History</a> | 
                                <a href="">Payment History</a>
                            </p>
                            <Form.Group className="mb-3">
                                Credit Card
                                <div id="ccInfo">
                                    None Entered
                                </div>
                                <a href="">Update</a>
                                <Table className="table-sm table-borderless">
                                    <tbody>
                                        <tr>
                                            <td>Unpaid Invoice Active</td>
                                            <td>$0.00</td>
                                        </tr>
                                        <tr>
                                            <td>Open Invoice Active</td>
                                            <td>$0.00</td>
                                        </tr>
                                        <tr>
                                            <td>Current Amount Due</td>
                                            <td><span class="attention">$0.00</span></td>

                                        </tr>
                                    </tbody>
                                </Table>
                            </Form.Group>
                        </fieldset>
                    </Col>
                </Row>
                <fieldset>
                    <legend>Fees</legend>
                    <Alert className="alert-danger">
                        <p>No fees are attached to this account. <span/></p>
                    </Alert>
                    <p>
                        <a href="">Add a new Fee</a> | 
                        <a id="feeRollupShow" href=""> View Rolled-up Fees (0)</a>
                    </p>
                </fieldset>
                <p className="text-center">
                    <Button type="submit" name="btnSubmit" className="m-1" value="Save Changes">Save Changes</Button>
                    <Button name="btnCancel" className="btn-danger m-1" value="Cancel">Cancel</Button>
                </p>
                <h1>Account Notes</h1>
                <textarea  
                    value={accountNotes}
                    onChange = {(e) => setAccountNotes(e.target.value)}
                    className="form-control my-3" 
                    style={{width: "100%", height: "250px", border: "1px solid #aaa"}} 
                    name="usernotes" 
                    frameborder="0"
                />
            </Form>
        </Container>
    )
}