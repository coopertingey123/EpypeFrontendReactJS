import React from 'react'
import { Container } from "react-bootstrap";
import BaseNavbar from "../navigation/navbar"

export default function PrivacyStatement(props) {
    return (
        <Container id="privacy-statement" className="py-3">
            <BaseNavbar/>
            <h1 className="text-center">Privacy Statement</h1>
            <h3>Information EPYPE Collects</h3>
            <p>EPYPE collects and stores information about you for the following purposes:</p>
            <ul>
                <li>To make the site easier for you to use by not having to enter information more than once.</li>
                <li>To help you quickly find services or information on <a href="https://www.epype.net/"> https://www.epype.net</a>.</li>
                <li>To help us create content most relevant to you.</li>
                <li>To alert you to special offers, updated information and other new services from EPYPE.</li>
            </ul>

            <h3>Visitor Consent</h3>
            <p>If you choose not to register or provide personal information, you will not be able to access the features on 
            <a href="https://www.epype.net/"> https://www.epype.net</a>.</p>

            <h3>Security</h3>
            <p>
                EPYPE strictly protects the security of your personal information
                and honors your choices for its intended use. We carefully protect your data
                from loss, misuse, unauthorized access or disclosure, alteration, or destruction.
            </p>

            <h3>Distribution of personal information</h3>
            <p>
                EPYPE does not distribute personal information to any third parties.
                Should this change, EPYPE will not distribute any information
                without your prior express consent.
            </p>

            <h3>Enforcement</h3>
            <p>
                If for some reason you believe EPYPE has not adhered to these
                principles, please notify us by email at 
                <a href="mailto:support@epype.net"> support@epype.net</a>, and we will do
                our best to determine and correct the problem promptly. Be certain the words
                Privacy Policy are in the Subject line.
            </p>

            <h3>Changes to this document</h3>
            <p>
                Changes to this document may be made any time without warning. EPYPE
                may or may not notify you of changes in this policy, however, we will make
                an effort to notify you if there are any major changes to this policy. You
                will not be notified about changes related to clarification and/or elaboration
                of parts of this policy.
            </p>

        </Container>
    )
}