import React from 'react'
import { Container, Button } from 'react-bootstrap'
import VlpContainer from '../VLP\'s/VlpContainer'
import BaseNavbar from "../navigation/navbar";

export default function (props) {
    return (
        <Container>
            <BaseNavbar/>
            <h1 className="green-text py-3">Video Landing Pages</h1>
            <Button>+ New VLP</Button>
            <VlpContainer/>
        </Container>
    )
}