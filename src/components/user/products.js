import React from 'react'
import { Container, Button, Table } from 'react-bootstrap'
import UserHeader from "../navigation/user-navbar";

export default function (props) {
    return (
        <Container>
            <UserHeader/>
            <h1 className="green-text py-3 text-center">Products</h1>
            <p class="text-center">
		        <a href=""> Order History </a> | 
		        <a href=""> Add a new Product </a>
	        </p>
            <Table className="table-striped border-bottom text-start p-3">
                <thead className="dark">
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th className="text-end">Price</th>
                        <th className="text-end">Status</th>
                        <th className="text-end">Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dinner</td>
                        <td>Salem Cheer Dinner</td>
                        <td className="text-end">$30.00</td>
                        <td className="text-end">Active</td>
                        <td className="text-end">0</td>
                        <td className="text-center"><a href="">Edit</a></td>
                    </tr>
                    <tr>
                        <td>Donate</td>
                        <td>Donation</td>
                        <td className="text-end">$5.00</td>
                        <td className="text-end">Active</td>
                        <td className="text-end">0</td>
                        <td className="text-center"><a href="">Edit</a></td>
                    </tr>
                    <tr>
                        <td>Discount Card</td>
                        <td>Salem Discount Card</td>
                        <td className="text-end">$25.00</td>
                        <td className="text-end">Active</td>
                        <td className="text-end">0</td>
                        <td className="text-center"><a href="">Edit</a></td>
                    </tr>
                    <tr>
                        <td>Shirt</td>
                        <td>T-shirt with jazz logo on front</td>
                        <td className="text-end">$15.00</td>
                        <td className="text-end">Active</td>
                        <td className="text-end">0</td>
                        <td className="text-center"><a href="">Edit</a></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}