import React, {useState} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function SignupUserInfo(props) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [orgName, setOrgName] = useState("")
    const [officeAddress1, setOfficeAddress1] = useState("")
    const [officeAddress2, setOfficeAddress2] = useState("")
    const [city, setCity] = useState("")
    const [ste, setSte] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [officePhone, setOfficePhone] = useState("")
    const [mobilePhone, setMobilePhone] = useState("")
    const [timeZone, setTimeZone] = useState("")
    const [hearEpype, setHearEpype] = useState("")
    const [hearEpypeText, setHearEpypeText] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName)
        console.log(lastName)
        console.log(orgName)
        console.log(officeAddress1)
        console.log(officeAddress2)
        console.log(city)
        console.log(ste)
        console.log(postalCode)
        console.log(officePhone)
        console.log(mobilePhone)
        console.log(timeZone)
        console.log(hearEpype)
        console.log(hearEpypeText)
      }

    return (
        <Container className="py-3 text-center">
            <h1 className="green-text">Signup</h1>
            <h3 className="purple2-text">Please enter your information</h3>
            <p className="purple2-text">Fields marked with <span className="attention">*</span> are required</p>
            <Row className="justify-content-center">
                <Col className="" md={8}>
                    <Form className="form1 text-start py-3" action="" method="post" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name<span className="attention">*</span></Form.Label>
                            <Form.Control 
                                id="frmFirstName" 
                                maxLength="50"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name<span className="attention">*</span></Form.Label>
                            <Form.Control 
                                id="frmLastName" 
                                maxLength="50"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Organization Name<span className="attention">*</span></Form.Label>
                            <Form.Control 
                                id="frmOrganizationName" 
                                maxLength="100"
                                onChange={(e) => setOrgName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Office Address<span className="attention">*</span></Form.Label>
                            <Form.Control 
                                id="frmAddress2" 
                                maxLength="50"
                                onChange={(e) => setOfficeAddress1(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label >Office Address Line 2</Form.Label>
                            <Form.Control 
                                id="frmAddress1" 
                                maxLength="50"
                                onChange={(e) => setOfficeAddress2(e.target.value)}
                            />
                        </Form.Group>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label >City<span className="attention">*</span></Form.Label>
                                    <Form.Control 
                                        id="frmCity" 
                                        maxLength="50" 
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label >State<span className="attention">*</span></Form.Label>
                                    <select 
                                        className="form-select"  
                                        id="frmState"
                                        value={ste}
                                        onChange={(e) => setSte(e.target.value)}
                                        placeholder="Choose..."
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
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Postal Code<span className="attention">*</span></Form.Label>
                                    <Form.Control 
                                        id="frmZip" 
                                        maxLength="10"
                                        onChange={(e) => setPostalCode(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Office Phone<span className="attention">*</span></Form.Label>
                                    <Form.Control 
                                        id="frmOfficePhone" 
                                        maxLength="15" 
                                        onChange={(e) => setOfficePhone(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mobile Phone<span className="attention">*</span></Form.Label>
                                    <Form.Control 
                                        id="frmMobilePhone" 
                                        maxLength="15" 
                                        onChange={(e) => setMobilePhone(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label >Time Zone</Form.Label>
                            <select 
                                className="form-select" 
                                id="frmTimeZone" 
                                value={timeZone} 
                                onChange={e => setTimeZone(e.target.value)}
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
                        <Form.Group className="mb-3">
                            <Form.Label>Where did you hear about EPYPE?</Form.Label>
                            <select 
                                className="form-select" 
                                id="frmhear_about" 
                                defaultValue="Search Engine" 
                                value={hearEpype}
                                onChange={e => setHearEpype(e.target.value)}
                            >
                                <option value="other">Other - Please Specify</option>
                                <option value="search engine">Search Engine</option>
                                <option value="email">Email</option>
                                <option value="direct mail">Direct Mail</option>
                                <option value="phone call">Phone Call</option>
                                <option value="my organization">My Organization</option>
                                <option value="word of mouth">Word of Mouth</option>
                                <option value="trade show">Trade Show</option>
                            </select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="visually-hidden"></Form.Label>
                            <Form.Control 
                                id="frmHearAboutDetail" 
                                maxLength="100" 
                                placeholder="If other, explain here"
                                onChange={(e) => setHearEpypeText(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="text-center my-3">
                            <Button className="bg-secondary m-1" href="/signup/type">Back</Button>
                            <Button className="m-1" href="/signup/package-select" type="submit">Next</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            
        </Container>
    )
}