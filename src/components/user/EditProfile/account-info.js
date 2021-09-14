import React, { useState } from 'react'
import { Container, Row, Col, Nav, Table, Form, Button} from "react-bootstrap"

export default function AccountInfo(props) {
    // organization
    const [timeZone, setTimeZone] = useState("")
    const [orgName, setOrgName] = useState("Wrangler")
    const [address1, setAddress1] = useState("933 1910 S")
    const [address2, setAddress2] = useState("Suite 202")
    const [city, setCity] = useState("Provo")
    const [state, setState] = useState("UT")
    const [postalCode, setPostalCode] = useState("84606")
    const [phoneNumber, setPhoneNumber] = useState("+11234567890")
    // contact information
    const [bubbleText, setBubbleText] = useState("Let&apos;s talk!")
    const [contactPhone, setContactPhone] = useState("+11234567890")
    const [mobilePhone, setMobilePhone] = useState("+11234567890")
    const [email, setEmail] = useState("scott+wrangler@epype.net")
    const [faceTimePhone, setFaceTimePhone] = useState("")
    const [whatsAppPhone, setWhatsAppPhone] = useState("")
    const [messengerId, setMessengerId] = useState("")
    const [website, setWebsite] = useState("")
    const [websiteText, setWebsiteText] = useState("")
    // live chat third party 
    const [zendeskId, setZendeskId] = useState("")
    // social media links 
    const [facebookUrl, setFacebookUrl] = useState("")
    const [twitterUrl, setTwitterUrl] = useState("")
    const [instagramUrl, setInstagramUrl] = useState("")
    const [linkedInUrl, setLinkedinUrl] = useState("")
    const [youtubeUrl, setYoutubeUrl] = useState("")
    // profile image 
    // const [profileImg, setProfileImg] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        console.log(timeZone)
        console.log(orgName)
        console.log(address1)
        console.log(address2)
        console.log(city)
        console.log(state)
        console.log(postalCode)
        console.log(phoneNumber)
        console.log(bubbleText)
        console.log(contactPhone)
        console.log(mobilePhone)
        console.log(email)
        console.log(faceTimePhone)
        console.log(whatsAppPhone)
        console.log(messengerId)
        console.log(website)
        console.log(websiteText)
        console.log(zendeskId)
        console.log(facebookUrl)
        console.log(twitterUrl)
        console.log(instagramUrl)
        console.log(linkedInUrl)
        console.log(youtubeUrl)
    }



    return (
        <Container>
            <h1 className="green-text">Profile</h1>
            {/* <h3>Fiesta Days</h3> */}
            <Table className="table-responsive table-borderless table-sm no-padding">
                <tbody>
                    <tr>
                        <td>User ID:</td>
                        <td>100134</td>
                    </tr>
                    <tr>
                        <td>Login Email:</td>
                        <td>scott+wrangler@epype.net</td>
                    </tr>
                    <tr>
                        <td style={{width: "160px"}}>Last Login:</td>
                        <td>6/29/2021 2:35 pm</td>
                    </tr>
                </tbody>
            </Table>
            <Form className="intl-phone-form" action="settings.php" method="post" onSubmit={handleSubmit}>
                <input type="hidden" name="frmAction" value="submitted"/>
                <input type="hidden" name="from_qs" value="0"/>

                <Form.Group className="mb-3">
                    <Form.Label className="form-label">Time Zone</Form.Label>
                    <select 
                        id="frmTimeZone" 
                        name="timezone" 
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

                <fieldset>
                    <legend>Organization</legend>

                    <Form.Group className="mb-3">
                        <Form.Label >Organization Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            id="frmOrganizationName" 
                            name="organization_name" 
                            maxLength="100" 
                            value={orgName}
                            onChange={(e) => setOrgName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Office Address</Form.Label>
                        <Form.Control 
                            type="text" 
                            id="frmAddress1" 
                            name="address1" 
                            maxLength="50" 
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)}    
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="visually-hidden">Office Address</Form.Label>
                        <Form.Control 
                            type="text" 
                            id="frmAddress2" 
                            name="address2" 
                            maxLength="50" 
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                        />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>City</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    id="frmCity"
                                    name="city" 
                                    maxLength="50" 
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col className="" sm="auto">
                            <Form.Group className="mb-3">
                                <Form.Label className="form-label">State</Form.Label>
                                <select id="frmState" name="state" className="form-select" value={state} onChange={(e) => setState(e.target.value)}>
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
                        <Col className="" sm="auto">
                            <Form.Group className="mb-3">
                                <Form.Label className="form-label">Postal Code</Form.Label>
                                <Form.Control 
                                    type="text" id="frmZip" 
                                    name="zip" maxLength="10" 
                                    value={postalCode} onChange={(e) => setPostalCode(e.target.value)}
                                    />
                            </Form.Group>
                        </Col>
                        <Form.Group className="mb-3">
                            <Form.Label className="form-label">Phone Number</Form.Label>
                            <Form.Control 
                                type="tel" id="frmOfficePhone" 
                                name="office_phone" value={phoneNumber} 
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                data-error-element-id="frmOfficePhoneErrorMsg"/>
                            <div id="frmOfficePhoneErrorMsg" className="invalid-feedback"></div>
                        </Form.Group>
                    </Row>
                </fieldset>

                <fieldset>
                    <legend>Contact Information</legend>

                    <Form.Group className="mb-3">
                        <Form.Label className="form-label">VLP Contact Bubble Text</Form.Label>
                        <Form.Control 
                            type="text" id="frmVlpContactText" 
                            name="vlp_contact_text" maxLength="20" 
                            value={bubbleText} placeholder="Let's talk!"
                            onChange={(e) => setBubbleText(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Contact Phone</Form.Label>
                        <Form.Control 
                            type="tel" id="frmContactPhone" 
                            name="contact_phone" value={contactPhone} 
                            data-error-element-id="frmContactPhoneErrorMsg"
                            onChange = {(e) => setContactPhone(e.target.value)} />
                        <div id="frmContactPhoneErrorMsg" className="invalid-feedback"></div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Mobile Phone</Form.Label>
                        <Form.Control 
                            type="tel" id="frmMobilePhone" 
                            name="mobile_phone" value={mobilePhone} 
                            data-error-element-id="frmMobilePhoneErrorMsg"
                            onChange={(e) => setMobilePhone(e.target.value)}/>
                        <div id="frmMobilePhoneErrorMsg" className="invalid-feedback"></div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Email</Form.Label>
                        <Form.Control 
                            type="text" id="frmEmail" 
                            name="email" maxLength="100" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >FaceTime Phone</Form.Label>
                        <Form.Control type="tel" id="frmFaceTimePhone" 
                        name="facetime_phone" value={faceTimePhone} 
                        data-error-element-id="frmFaceTimePhoneErrorMsg"
                        onChange={(e) => setFaceTimePhone(e.target.value)}/>
                        <div id="frmFaceTimePhoneErrorMsg" className="invalid-feedback"></div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >WhatsApp Phone</Form.Label>
                        <Form.Control 
                            type="tel" id="frmWhatsAppPhone" 
                            name="whatsapp_phone" value={whatsAppPhone} 
                            onChange={(e) => setWhatsAppPhone(e.target.value)}
                            data-error-element-id="frmWhatsAppPhoneErrorMsg"/>
                        <div id="frmWhatsAppPhoneErrorMsg" className="invalid-feedback"></div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Messenger ID/Username</Form.Label>
                        <Form.Control 
                            type="text" id="frmMessenger"
                            name="messenger_id" value={messengerId}
                            onChange={(e) => setMessengerId(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Web Site</Form.Label>
                        <Form.Control 
                            type="text" id="frmWebSite" 
                            name="website" maxLength="100" 
                            value={website} onChange={(e) => setWebsite(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Web Site Link Text</Form.Label>
                        <Form.Control 
                            type="text" id="frmWebSiteDescription" 
                            name="website_description" maxLength="40" 
                            value={websiteText} onChange={(e) => setWebsiteText(e.target.value)}/>
                    </Form.Group>
                </fieldset>

                <fieldset>
                    <legend>Live Chat Third Party</legend>

                    <Form.Group className="mb-3">
                        <Form.Label>Zendesk ID</Form.Label>
                        <Form.Control 
                            type="text" id="frmZendeskId" 
                            name="zendesk_id" value={zendeskId}
                            onChange={(e) => setZendeskId(e.target.value)}/>
                    </Form.Group>
                </fieldset>

                <fieldset>
                    <legend>Social Media Links</legend>

                    <Form.Group className="mb-3">
                        <Form.Label>Facebook Page URL</Form.Label>
                        <Form.Control 
                            type="text" id="frmSmUrlFacebook" 
                            name="sm_url_facebook" maxLength="200" 
                            value={facebookUrl} onChange={(e) => setFacebookUrl(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Twitter Page URL</Form.Label>
                        <Form.Control 
                            type="text" id="frmSmUrlTwitter" 
                            name="sm_url_twitter" maxLength="200" 
                            value={twitterUrl} onChange={(e) => setTwitterUrl(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Instagram Page URL</Form.Label>
                        <Form.Control 
                            type="text" id="frmSmUrlInstagram" 
                            name="sm_url_instagram" maxLength="200" 
                            value={instagramUrl} onChange={(e) => setInstagramUrl(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>LinkedIn Page URL</Form.Label>
                        <Form.Control 
                            type="text" id="frmSmUrlLinkedIn" 
                            name="sm_url_linkedin" maxLength="200" 
                            value={linkedInUrl} onChange={(e) => setLinkedinUrl(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>YouTube Page URL</Form.Label>
                        <Form.Control 
                            type="text" id="frmSmUrlYouTube" 
                            name="sm_url_youtube" maxLength="200" 
                            value={youtubeUrl} onChange={(e) => setYoutubeUrl(e.target.value)}/>
                    </Form.Group>
                </fieldset>
                <fieldset>
                    <legend>Profile Image</legend>
                    <Form.Group className="mb-3">
                        <p>
                            <a href="photoedit.php">Update</a>
                        </p>
                        <p class="text-danger">No profile image set.</p>
                    </Form.Group>
                </fieldset>

                <p class="text-center">
                    <Button 
                        type="submit" id="btnSubmit" 
                        name="btnSubmit" className="btn-primary m-1" 
                        value="Save Changes">
                    Save Changes</Button>
                    <Button 
                        type="button" id="btnCancel" 
                        name="btnCancel" className="btn-danger m-1" 
                        value="Cancel">
                    Cancel</Button>
                </p>
            </Form>
        </Container>
    )
}