import React from 'react'
import { Container, Table, Button, } from 'react-bootstrap'

export default function AccountSearchResults(props) {
    return (
        <Container>
            <h1 className="green-text py-3">Account Search Results</h1>
            <h5 className="text-center">Jump to <a href=""> Users </a> | <a href="">Organizations</a></h5>
            <h2>Users</h2>
            <div className="text-center"><Button>New Search</Button></div>
            <Table className="table-striped border_bottom">
                <thead className="thead-dark">
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Phone / Email</th>
                        <th>Organization</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="">100126</a></td>
                        <td>--</td>
                        <td>(801) 927-8395 <br/> jnnfrwvr+rize@gmail.com </td>
                        <td>Individual Agents</td>
                    </tr>
                    <tr>
                        <td><a href="">100126</a></td>
                        <td>--</td>
                        <td>(801) 927-8395 <br/> jnnfrwvr+rize@gmail.com </td>
                        <td>Individual Agents</td>
                    </tr>
                    <tr>
                        <td><a href="">100126</a></td>
                        <td>--</td>
                        <td>(801) 927-8395 <br/> jnnfrwvr+rize@gmail.com </td>
                        <td>Individual Agents</td>
                    </tr>
                </tbody>
            </Table>
            <p className="text-center"><strong> 3 </strong> Records Found (10 Canceled - <a href="">Show</a>)</p>
            <div className="text-center"><Button>New Search</Button></div>

            <h2>Organizations</h2>
            <div className="text-center py-3"><Button>New Search</Button> <Button>+ Add a new organization</Button></div>
            <Table className="table-striped border_bottom">
                <thead className="thead-dark">
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Phone / Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="">100126</a></td>
                        <td>
                            American Leadership Academy <br/> Rich Morley
                        </td>
                        <td>(801) 927-8395 <br/> vettesteve+alamain@gmail.com </td>
                    </tr>
                    <tr>
                        <td><a href="">100126</a></td>
                        <td>
                            American Leadership Academy <br/> Rich Morley
                        </td>
                        <td>(801) 927-8395 <br/> vettesteve+alamain@gmail.com </td>
                    </tr>
                    <tr>
                        <td><a href="">100126</a></td>
                        <td>
                            American Leadership Academy <br/> Rich Morley
                        </td>
                        <td>(801) 927-8395 <br/> vettesteve+alamain@gmail.com </td>
                    </tr>
                </tbody>
            </Table>
            <p className="text-center p-2"><strong> 3 </strong>Records Found</p>
            <div className="text-center"><Button>New Search</Button> <Button>+ Add a new organization</Button></div>
        </Container>
    )
}