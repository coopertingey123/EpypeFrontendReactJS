import React, { useState } from 'react';
import { Container, Button, Form, InputGroup} from "react-bootstrap";

export default function AddProduct(props) {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [promoCode, setPromoCode] = useState("")
    const [checked, setChecked] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        console.log(name)
        console.log(description)
        console.log(price)
        console.log(stock)
        console.log(promoCode)
        console.log(checked)
    }

    return (
        <Container className="text-center my-3">
            <h1 className="green-text">Edit Product</h1>
            <Form className="text-start" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        id="frmName" 
                        name="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        type="text" 
                        id="frmDescription" 
                        name="description" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <div className="input-group">
                        <div className="input-group-text">$</div>
                        <Form.Control 
                            type="text" 
                            id="frmPrice" 
                            name="price" 
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control 
                        type="text" 
                        id="frmStock" 
                        name="stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}    
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Product Code / SKU</Form.Label>
                    <Form.Control 
                        type="text" 
                        id="frmSku" 
                        name="sku" 
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                    />
                </Form.Group>
                <Form.Check 
                    type="checkbox" 
                    className="mb-3" 
                    label="Include Referred by during purchase (for e.g. donations)"
                    checked={checked}
                    onClick={() => checked ? setChecked(false) : setChecked(true)}    
                />
                <div className="text-center">
                    <Button className="m-1" variant="danger" href="/user/products">Cancel</Button>
                    <Button className="m-1" type="submit" href="/user/products">Save Changes</Button>
                </div>
            </Form>
        </Container>
    )
}