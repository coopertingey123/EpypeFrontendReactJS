import React from 'react'
import { Container, Button, Col, Row } from 'react-bootstrap'
import VlpContainer from './VlpContainer'

export default function VLPContainer(props) {
    return (
        <Container className="text-center">
            <h2 className="green-text py-3">Video Landing Pages</h2>
            <Button className="mb-3" href="/user/add-vlp">+ New VLP</Button>
            <Row>
                <Col className="videoPageInfo videoPageStatus2" md={6} lg={4} xxl={3}>
                    <VlpContainer/>
                </Col>
                <Col className="videoPageInfo videoPageStatus2" md={6} lg={4} xxl={3}>
                    <VlpContainer/>
                </Col>
                <Col className="videoPageInfo videoPageStatus2" md={6} lg={4} xxl={3}>
                    <VlpContainer/>
                </Col>
                <Col className="videoPageInfo videoPageStatus2" md={6} lg={4} xxl={3}>
                    <VlpContainer/>
                </Col>
                <Col className="videoPageInfo videoPageStatus2" md={6} lg={4} xxl={3}>
                    <VlpContainer/>
                </Col>
                <Col className="videoPageInfo videoPageStatus2" md={6} lg={4} xxl={3}>
                    <VlpContainer/>
                </Col>
                <Col className="videoPageInfo videoPageStatus2" md={6} lg={4} xxl={3}>
                    <VlpContainer/>
                </Col>
                <Col className="videoPageInfo videoPageStatus2" md={6} lg={4} xxl={3}>
                    <VlpContainer/>
                </Col>
                <Col className="videoPageInfo videoPageStatus2" md={6} lg={4} xxl={3}>
                    <VlpContainer/>
                </Col>
            </Row>
        </Container>
    )
}