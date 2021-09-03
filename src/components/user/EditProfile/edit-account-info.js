import React, {useState} from 'react'
import { Container, Nav } from 'react-bootstrap'
import NotificationSettings from './notification-settings'
import BillingSettings from "./billing-settings"
import ChangePassword from "./change-password"
import ProductPayments from "./product-payments"
import AccountInfo from './account-info'

export default function EditAccountInformation(props) {

    const [currentTab, setCurrentTab] = useState("profile")

    const handleTab = (tab) => {
        if (tab === "profile"){
            setCurrentTab("profile")
        }
        if (tab === "notifications"){
            setCurrentTab("notifications")
        }
        if (tab === "billing"){
            setCurrentTab("billing")
        }
        if (tab === "changePassword"){
            setCurrentTab("change-password")
        }
        if (tab === "productPayments"){
            setCurrentTab("product-payments")
        }
    }

    return (
        <Container>
            <h1>Account Information</h1>
            <h5 className="pb-3">Fiesta Days</h5>
            <Nav variant="tabs dark" id="crminfocontainer" className="my-3">
                <Nav.Item>
                    <Nav.Link href="" onClick={handleTab("profile")} className="active">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="" onClick={handleTab("notifications")}>Notifications</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="" onClick={handleTab("billing")}>Billing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="" onClick={handleTab("changePassword")}>Change Password</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="" onClick={handleTab("productPayments")}>Product Payments</Nav.Link>
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