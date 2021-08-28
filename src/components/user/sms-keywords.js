import React from 'react'
import { Container, Button, Table } from 'react-bootstrap'
import UserNavbar from "../navigation/user-navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountryFlag from "../../../static/assets/photos/16.png";


export default function Tags(props) {
    return (
        <Container className="text-center">
            <UserNavbar/>
            <h1 className="green-text py-3">SMS Keywords</h1>
            <p>The following phone number is assigned to your account.  Contacts can text your keywords to any of the listed phone numbers.</p>
            <p>
                <img src={CountryFlag} alt="" style={{paddingRight: "4px"}} /> 
                 (888) 888-8888
            </p>
            <Button className="my-2">+ Add a new tag</Button>
            <Table className="table-striped border-bottom text-start p-3">
                <thead className="dark">
                    <tr>
                        <th style={{width: "140px"}}>Key Word</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="">COOPER</a></td>
                        <td>Westwood football fundraiser</td>
                    </tr>
                    <tr>
                        <td><a href="">FOOTBALL</a></td>
                        <td>Westwood football fundraiser</td>
                    </tr>
                    <tr>
                        <td><a href="">RODEO</a></td>
                        <td>Westwood football fundraiser</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}