import React, {useState} from 'react'
import { Container, Nav, Button } from 'react-bootstrap'
import NotificationSettings from './notification-settings'
import BillingSettings from "./billing-settings"
import ChangePassword from "./change-password"
import ProductPayments from "./product-payments"
import AccountInfo from './account-info'

export default function EditAccountInformation(props) {

    const [currentTab, setCurrentTab] = useState("profile")
    const [active, setActive] = useState("1")

    return (
        <Container>
            {/* <h3 className="green-text py-2">Edit Account Information</h3> */}
            <h5 className="py-4">Fiesta Days</h5>
            <Nav variant="tabs" id="crminfocontainer" className="my-3" activeKey={active}>
                <Nav.Item>
                    <Nav.Link
                        href="" 
                        onClick={() => {
                            setCurrentTab("profile") 
                            setActive("1")
                        }} 
                        className="text-decoration-none"
                        eventKey="1"
                        >
                            Profile
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setCurrentTab("notifications")
                            setActive("2")
                        }}
                        eventKey="2"
                        >
                        Notifications
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setCurrentTab("billing")
                            setActive("3")
                        }}
                        eventKey="3"
                    >
                        Billing
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                        href="" 
                        onClick={() => {
                            setCurrentTab("change-password")
                            setActive("4")
                        }}
                        eventKey="4"
                    >
                        Change Password
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                        onClick={() => {
                            setCurrentTab("product-payments")
                            setActive("5")
                        }}
                        eventKey="5"
                    >
                        Product Payments
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            {currentTab === "profile" ? <AccountInfo/> : null}
            {currentTab === "notifications" ? <NotificationSettings/> : null}
            {currentTab === "billing" ? <BillingSettings/> : null}
            {currentTab === "change-password" ? <ChangePassword/> : null}
            {currentTab === "product-payments" ? <ProductPayments/> : null}
        </Container>
    )
}