import React from 'react'
import { Container, Button, Form, Table, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BarChart from "./bar-chart";

export default function OutboundReport(props) {
    return (
        <Container className="px-3" id="main_content">
            <h2 className="green-text py-3">Outbound SMS Report</h2>
            <hr/>
            <h4>Blast Date</h4>
            <p>7/24/2021 9:49 pm</p>
            <h4>Message</h4>
            <p>We'd love to hear from you. Please tell us what you thought of the Fundraiser! See you next year. https://vlp.epype.netMkqWJy</p>
            <hr/>
            <div className="total-messages-wrapper mt-4">
                <h3 className="py-3">Total Messages</h3>
                <Row>
                    <Col className="order-1 order-lg-2">
                        <Table className="table-striped table-responsive border_bottom">
                            <thead className="thead-dark">
                                <tr>
                                    <th></th>
                                    <th className="text-end">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Messages Sent</td>
                                    <td className="text-end">401</td>
                                </tr>
                                <tr>
                                    <td>Delivered</td>
                                    <td className="text-end">381</td>
                                </tr>
                                <tr>
                                    <td>Delivery Failure</td>
                                    <td className="text-end">46</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col className="order-2 order-lg-1 mb-3">
                        <BarChart/>
                    </Col>
                </Row>
            </div>
            <hr/>
            <div className="video-pages-wrapper mt-4">
                <h3 className="py-3">Video Landing Page Activity</h3>
                <Row>
                    <Col className="order-1 order-lg-1">
                        <Table className="table-striped table-responsive border_bottom">
                            <thead className="thead-dark">
                                <tr>
                                    <th></th>
                                    <th className="text-end">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>VLP views</td>
                                    <td className="text-end">82</td>
                                </tr>
                                <tr>
                                    <td>Video watches</td>
                                    <td className="text-end">4</td>
                                </tr>
                                <tr>
                                    <td>Average watch time (seconds)</td>
                                    <td className="text-end">28</td>
                                </tr>
                                <tr>
                                    <td>VLP shares</td>
                                    <td className="text-end">1</td>
                                </tr>
                                <tr>
                                    <td>Link clicks: General</td>
                                    <td className="text-end">0</td>
                                </tr>
                                <tr>
                                    <td>Link clicks: Action Items</td>
                                    <td className="text-end">33</td>
                                </tr>
                                <tr>
                                    <td>Link clicks: Social Media</td>
                                    <td className="text-end">0</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col className="order-2 order-lg-2 mb-3">
                        <BarChart/>
                    </Col>
                </Row>
            </div>
            <hr/>
            <div className="delivered-messages-wrapper mt-4">
                <h3 className="py-3">Delivered Messages</h3>
                <div className="opt-out-wrapper mt-3">
                    <h4>Opt-outs</h4>
                    <small><em>(Within two hours after the blast was initiated)</em></small>
                    <Row>
                        <Col className="order-1 order-lg-2">
                            <Table className="table-responsive border_bottom table-striped">
                                <thead className="thead-dark">
                                    <tr>
                                        <th></th>
                                        <th className="text-end">Total</th>
                                        <th className="text-end">%</th>
                                        <th className="text-end"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Opt-outs</td>
                                        <td className="text-end">9</td>
                                        <td className="text-end">2.37%</td>
                                        <td className="text-end"><Button className="btn-sm"><FontAwesomeIcon icon="file-download"/> Download</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col className="order-2 order-lg-1 mb-3">
                            <BarChart/>
                        </Col>
                    </Row>
                </div>
            </div>
            <hr/>
            <div className="undelivered-messages-wrapper mt-4">
                <h3 className="py-3">Undelivered Messages</h3>
                <Row className="chart-table">
                    <Col className="order-1 order-lg-1">
                        <Table className="table-striped border_bottom table-responsive">
                            <thead className="thead-dark">
                                <tr>
                                    <th></th>
                                    <th className="text-end">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>delivery-receipt-expired</td>
                                    <td className="text-end">5</td>
                                </tr>
                                <tr>
                                    <td>destination-failed</td>
                                    <td className="text-end">1</td>
                                </tr>
                                <tr>
                                    <td>delivery-rejected-due-to-uder-opt-out</td>
                                    <td className="text-end">1</td>
                                </tr>
                                <tr>
                                    <td>destination-rejected-message</td>
                                    <td className="text-end">1</td>
                                </tr>
                                <tr>
                                    <td>invalid-destination-address</td>
                                    <td className="text-end">5</td>
                                </tr>
                                <tr>
                                    <td>invalid-service-type</td>
                                    <td className="text-end">1</td>
                                </tr>
                                <tr>
                                    <td>rejected-unallocated-to-number</td>
                                    <td className="text-end">5</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col className="order-1 order-lg-2 mb-3">
                        <BarChart/>
                    </Col>
                </Row>
            </div>
            <div className="text-end py-3">
                <Button className="mx-1">Print</Button>
                <Button className="mx-1">Download</Button>
                <Button className="mx-1">New Report</Button>
            </div>
        </Container>
    )
}