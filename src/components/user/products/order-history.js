import React from 'react'
import { Container, Button, Table} from "react-bootstrap"

export default function OrderHistory(props) {
    return (
        <Container className="text-center">
            <h1 className="green-text">Product Order History</h1>
            <Table className="table-reponsibe table-striped border_bottom">
                <thead className="thead-dark">
                    <tr>
                        <th style={{width: "160px"}}>Confirmation #</th>
                        <th>Name</th>
                        <th className="text-end" style={{width: "120px"}}>Order Date</th>
                        <th className="text-end" style={{width: "120px"}}>Amount</th>
                        <th style={{width: "100px"}}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1001341041</td>
                        <td>Brianne Ivie</td>
                        <td className="text-end">7/23/2021</td>
                        <td className="text-end">$10.00</td>
                        <td className="text-end">
                            <a href="/user/order-details">View</a>
                        </td>
                    </tr>
                    <tr>
                        <td>1001341041</td>
                        <td>Henry Ivie</td>
                        <td className="text-end">7/23/2021</td>
                        <td className="text-end">$10.00</td>
                        <td className="text-end">
                            <a href="/user/order-details">View</a>
                        </td>
                    </tr>
                    <tr>
                        <td>1001341041</td>
                        <td>Billie Ivie</td>
                        <td className="text-end">7/23/2021</td>
                        <td className="text-end">$10.00</td>
                        <td className="text-end">
                            <a href="/user/order-details">View</a>
                        </td>
                    </tr>
                    <tr>
                        <td>1001341041</td>
                        <td>Coop Ivie</td>
                        <td className="text-end">7/23/2021</td>
                        <td className="text-end">$10.00</td>
                        <td className="text-end">
                            <a href="/user/order-details">View</a>
                        </td>
                    </tr>
                    <tr>
                        <td>1001341041</td>
                        <td>Dan Ivie</td>
                        <td className="text-end">7/23/2021</td>
                        <td className="text-end">$10.00</td>
                        <td className="text-end">
                            <a href="/user/order-details">View</a>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <a href="/user/products">Back to Products</a>
        </Container>
    )
}