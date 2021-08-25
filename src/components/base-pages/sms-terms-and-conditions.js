import React from 'react';
import { Container } from "react-bootstrap";
import BaseNavbar from "../navigation/navbar"

export default function SMSTerms(props) {
    return (
        <Container className="py-3" id="terms-of-service">
            <BaseNavbar/>
            <h1 className="text-center">SMS Terms and Conditions</h1>
            <p className="service text-center fw-bold">EPYPE Service</p>

            <h3>Program Description</h3>

            <p>EPYPE Service is an information communication company. EPYPE provides its
            clients with the ability to send out informational landing pages vis SMS
            messages. Upon the recipients opting in, a link will be sent to them for the
            respective video and information page. Additional information and links may be
            made available from this landing page. They will only receive the information
            page requested when opting in to receive the information.</p>

            <h3>Supported Carriers</h3>

            <p>EPYPE Service is available on the following carriers:</p>

            <p>Alltel, Appalachian Wireless, AT&amp;T, Bluegrass Cellular, Boost Mobile,
            Cellcom, C Spire Wireless, Centennial Wireless, Cincinnati Bell, GCI, Immix
            Wireless, Inland Cellular, IV Cellular, Nex-Tech Wireless, Nextel
            Communications, nTelos, Sprint PCS, T-Mobile, U.S. Cellular, United Wireless,
            Verizon Wireless, Virgin Mobile USA, and West Central Wireless.</p>

            <p>Carriers are not liable for delayed or undelivered messages.</p>

            <h3>Cost</h3>

            <p>There are no premium charges for joining the EPYPE Service for receiving
            the alert and info messages, however <strong>Msg &amp; Data rates may
            apply</strong>. If you have any questions about your text plan or data plan,
            it is best to contact your wireless provider.</p>

            <h3>Message Frequency</h3>

            <p>If you opt-in to receive alerts or info from EPYPE Service, you will receive
            between one and five messages per query.</p>

            <h3>How to opt-out of our service</h3>

            <p>To opt-out of the EPYPE Service, text <strong>STOP</strong> at any time to the
            number from which you received the SMS message. An unsubscribe message may be sent
            to your mobile number confirming the cancellation, but no more messages will be
            sent from this program after the aforementioned confirmation. If you wish to join
            again, just sign up as you did originally, and we will start sending SMS messages
            to you again.</p>

            <h3>Support/Help</h3>

            <p>For support or information about our Property Info Service, text
            <strong>HELP</strong> at any time to 8883495000.  You can also email us at
            support@epype.net.</p>

            <h3>Privacy Policy</h3>

            <p>EPYPE's top priority is the privacy of our users. The following is
            provided to address any concerns you may have.</p>

            <ul>
                <li>EPYPE will never, under any circumstances, sell or distribute your
                cell phone number to third parties or EPYPE clients for whom you have
                not approved.</li>
                <li>EPYPE will never directly market to you any services for which you
                have not opted in, either by cell phone, text message or email.</li>
                <li>EPYPE will never distribute any personal information about you,
                including your phone number, name, billing information or any other piece of
                identifying information.</li>
            </ul>

            <p>If you have any questions, please send us an email to support@epype.net.</p>
        </Container>
    )
}