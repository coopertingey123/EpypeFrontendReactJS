import React from 'react'
import { Container, Row, Col, Alert, Form, Table, Button } from 'react-bootstrap'

export default function EditAccountInformation(props) {
    return (
        <Container>
            <h1>Account Information</h1>
            <div id="crminfocontainer">
                <h5>Fiesta Days</h5>
                <div id="crmnavcontainer" className="bg-dark">
                    <ul id="crmnav">
                        <li><a href="/login/user/account/settings.php" className="active">Profile</a></li>
                        <li><a href="/login/user/account/notifications.php" className="">Notifications</a></li>
                        <li><a href="/login/user/account/bi.php" className="">Billing</a></li>
                        <li><a href="/login/user/account/pw.php" className="">Change Password</a></li>
                        <li><a href="/login/user/account/product-payments/" className="">Product Payments</a></li>
                    </ul>
                </div>
            </div>
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
            <Form className="intl-phone-form" action="settings.php" method="post">
                <input type="hidden" name="frmAction" value="submitted"/>
                <input type="hidden" name="from_qs" value="0"/>

                <Form.Group className="mb-3">
                    <Form.Label className="form-label">Time Zone</Form.Label>
                    <select id="frmTimeZone" name="timezone" className="form-select">
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
                        <Form.Control type="text" id="frmOrganizationName" name="organization_name" maxLength="100" value="Wrangler"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Office Address</Form.Label>
                        <Form.Control type="text" id="frmAddress1" name="address1" maxLength="50" value="933 1910 S"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="visually-hidden">Office Address</Form.Label>
                        <Form.Control type="text" id="frmAddress2" name="address2" maxLength="50" value="Suite 202"/>
                    </Form.Group>
                    <Row>
                        <Col className="col-lg">
                            <Form.Group className="mb-3">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" id="frmCity" name="city" maxLength="50" value="Provo"/>
                            </Form.Group>
                        </Col>
                        <Col className="col-auto">
                            <Form.Group className="mb-3">
                                <Form.Label className="form-label">State</Form.Label>
                                <select id="frmState" name="state" className="form-select">
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
                        <Col className="col-auto">
                            <Form.Group className="mb-3">
                                <Form.Label className="form-label">Postal Code</Form.Label>
                                <Form.Control type="text" id="frmZip" name="zip" maxLength="10" value="84606"/>
                            </Form.Group>
                        </Col>
                        <Form.Group className="mb-3">
                            <Form.Label className="form-label">Phone Number</Form.Label>
                            <Form.Control type="tel" id="frmOfficePhone" name="office_phone" value="+11234567890" data-error-element-id="frmOfficePhoneErrorMsg"/>
                            <div id="frmOfficePhoneErrorMsg" className="invalid-feedback"></div>
                        </Form.Group>
                    </Row>
                </fieldset>

                <fieldset>
                    <legend>Contact Information</legend>

                    <Form.Group className="mb-3">
                        <Form.Label className="form-label">VLP Contact Bubble Text</Form.Label>
                        <Form.Control type="text" id="frmVlpContactText" name="vlp_contact_text" maxLength="20" value="Let&apos;s talk!" placeholder="Let's talk!"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Contact Phone</Form.Label>
                        <Form.Control type="tel" id="frmContactPhone" name="contact_phone" value="+11234567890" data-error-element-id="frmContactPhoneErrorMsg"/>
                        <div id="frmContactPhoneErrorMsg" className="invalid-feedback"></div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Mobile Phone</Form.Label>
                        <Form.Control type="tel" id="frmMobilePhone" name="mobile_phone" value="+11234567890" data-error-element-id="frmMobilePhoneErrorMsg"/>
                        <div id="frmMobilePhoneErrorMsg" className="invalid-feedback"></div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="text" id="frmEmail" name="email" maxLength="100" value="scott+wrangler@epype.net"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >FaceTime Phone</Form.Label>
                        <Form.Control type="tel" id="frmFaceTimePhone" name="facetime_phone" value="" data-error-element-id="frmFaceTimePhoneErrorMsg"/>
                        <div id="frmFaceTimePhoneErrorMsg" className="invalid-feedback"></div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >WhatsApp Phone</Form.Label>
                        <Form.Control type="tel" id="frmWhatsAppPhone" name="whatsapp_phone" value="" data-error-element-id="frmWhatsAppPhoneErrorMsg"/>
                        <div id="frmWhatsAppPhoneErrorMsg" className="invalid-feedback"></div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Messenger ID/Username</Form.Label>
                        <Form.Control type="text" id="frmMessenger" name="messenger_id" value=""/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Web Site</Form.Label>
                        <Form.Control type="text" id="frmWebSite" name="website" maxLength="100" value=""/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Web Site Link Text</Form.Label>
                        <Form.Control type="text" id="frmWebSiteDescription" name="website_description" maxLength="40" value=""/>
                    </Form.Group>
                </fieldset>

                <fieldset>
                    <legend>Live Chat Third Party</legend>

                    <Form.Group className="mb-3">
                        <Form.Label>Zendesk ID</Form.Label>
                        <Form.Control type="text" id="frmZendeskId" name="zendesk_id" value=""/>
                    </Form.Group>
                </fieldset>

                <fieldset>
                    <legend>Social Media Links</legend>

                    <Form.Group className="mb-3">
                        <Form.Label>Facebook Page URL</Form.Label>
                        <Form.Control type="text" id="frmSmUrlFacebook" name="sm_url_facebook" maxLength="200" value=""/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Twitter Page URL</Form.Label>
                        <Form.Control type="text" id="frmSmUrlTwitter" name="sm_url_twitter" maxLength="200" value=""/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Instagram Page URL</Form.Label>
                        <Form.Control type="text" id="frmSmUrlInstagram" name="sm_url_instagram" maxLength="200" value=""/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>LinkedIn Page URL</Form.Label>
                        <Form.Control type="text" id="frmSmUrlLinkedIn" name="sm_url_linkedin" maxLength="200" value=""/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>YouTube Page URL</Form.Label>
                        <Form.Control type="text" id="frmSmUrlYouTube" name="sm_url_youtube" maxLength="200" value=""/>
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
                    <Button type="submit" id="btnSubmit" name="btnSubmit" className="btn-primary" value="Save Changes"/>
                    <Button type="button" id="btnCancel" name="btnCancel" className="btn-danger" value="Cancel"/>
                </p>
            </Form>
        </Container>
    )
}