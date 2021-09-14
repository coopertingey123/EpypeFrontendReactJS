import React from 'react';
import { Container, Button, Form, InputGroup} from "react-bootstrap";

export default function AddProduct(props) {
    return (
        <Container className="text-center my-3">
            <h1 className="green-text">Add Product</h1>
            <Form className="text-start">
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" id="frmName" name="name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" id="frmDescription" name="description" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <div className="input-group">
                        <div className="input-group-text">$</div>
                        <Form.Control type="text" id="frmPrice" name="price" />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="text" id="frmStock" name="stock" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Product Code / SKU</Form.Label>
                    <Form.Control type="text" id="frmSku" name="sku" />
                </Form.Group>
                <Form.Check type="checkbox" className="mb-3" label="Include Referred by during purchase (for e.g. donations)"/>
            </Form>
            <Button className="m-1" variant="danger">Cancel</Button>
            <Button className="m-1">Add Product</Button>
        </Container>
    )
}