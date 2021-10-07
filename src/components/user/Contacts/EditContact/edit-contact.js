import React, {useState} from 'react'
import { Container, Nav, Button } from 'react-bootstrap'
import MainInfo from "./main-info"
import SendMessage from "./send-message"
import Invoices from "./invoices"
import Notes from "./notes"
import ExportData from '../export-contacts'

export default function EditAccountInformation(props) {

    const [currentTab, setCurrentTab] = useState("main-info")
    const [active, setActive] = useState("1")

    return (
        <Container>
            <h3 className="py-3">Edit Contact: Cooper Tingey</h3>
            <Nav variant="tabs" id="crminfocontainer" className="my-3" activeKey={active}>
                <Nav.Item>
                    <Nav.Link
                        href="" 
                        onClick={() => {
                            setCurrentTab("main-info") 
                            setActive("1")
                        }} 
                        className="text-decoration-none"
                        eventKey="1"
                        >
                            Main Info
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setCurrentTab("send-message")
                            setActive("2")
                        }}
                        eventKey="2"
                        >
                            Send Message
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setCurrentTab("invoices")
                            setActive("3")
                        }}
                        eventKey="3"
                    >
                        Invoices
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                        href="" 
                        onClick={() => {
                            setCurrentTab("notes")
                            setActive("4")
                        }}
                        eventKey="4"
                    >
                        Notes
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                        onClick={() => {
                            setCurrentTab("export-data")
                            setActive("5")
                        }}
                        eventKey="5"
                    >
                        Export Data
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            {currentTab === "main-info" ? <MainInfo/> : null}
            {currentTab === "send-message" ? <SendMessage/> : null}
            {currentTab === "invoices" ? <Invoices/> : null}
            {currentTab === "notes" ? <Notes/> : null}
            {currentTab === "export-data" ? <ExportData/> : null}
        </Container>
    )
}