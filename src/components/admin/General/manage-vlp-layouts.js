import React from 'react'
import { Container, Table, Button } from 'react-bootstrap'
// import VLPImage from "../../../static/assets/photos/VLPExample.JPG"

import NavbarAdmin from "../../navigation/navbar-admin";

export default function ManageVLPLayouts(props) {
    return (
        <Container className="text-center">
            <NavbarAdmin/>
            <h1 className="green-text p-3">Video Landing Page Themes</h1>
            <Button>+ Add a new Theme</Button>
            <Table className="table-striped border-bottom text-start p-3">
                <thead className="dark">
                    <tr>
                        <th style={{width: "120x"}}></th>
                        <th>Name</th>
                        <th style={{width: "200x"}}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">
                            Image <br/>
                            Here
                            <img src="" alt="" />
                        </td>
                        <td>A Winter Collection</td>
                        <td className="text-end">
                            <a href=""> Edit </a>
                              |  
                            <a href=""> Delete </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">
                            Image <br/>
                            Here
                            <img src="" alt="" />
                        </td>
                        <td>ABC Theme</td>
                        <td className="text-end">
                            <a href=""> Edit </a>
                              |  
                            <a href=""> Delete </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">
                            Image <br/>
                            Here
                            <img src="" alt="" />
                        </td>
                        <td>Another Theme</td>
                        <td className="text-end">
                            <a href=""> Edit </a>
                              |  
                            <a href=""> Delete </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">
                            Image <br/>
                            Here
                            <img src="" alt="" />
                        </td>
                        <td>Final Theme</td>
                        <td className="text-end">
                            <a href=""> Edit </a>
                              |  
                            <a href=""> Delete </a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}