import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
export default function Login(props) {
    return (

        <Container id="login-container" className="p-3">
            <h3>Log in</h3>
            <Form id="loginForm" className="p-3">
                <Form.Group className="mb-3" controlId="emailForm">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="passwordForm">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <div className="button-group">
                    <Button variant="primary" type="submit" className="text-center" >
                        Log in
                    </Button>
                    <Link>Forgot password?</Link>
                </div>
            </Form>
            
        </Container>
    )
}

{/* <div id="main_content" class="container py-3">
<h1>Log In</h1>

<form id="loginForm" name="loginForm" class="p-3" method="post" action="https://www.epype.net/api/web-login">

<div class="mb-3">
	<label for="frmUserId" class="form-label">Email</label>
	<input type="text" id="frmUserId" name="user_id" class="form-control" maxlength="100" autocomplete="username" autofocus>
</div>
<div class="mb-3">
	<label for="frmPassword" class="form-label">Password</label>
	<input type="password" id="frmPassword" name="password" class="form-control" maxlength="20" autocomplete="current-password">
</div>
<p class="text-center">
	<button type="submit" class="btn btn-primary">Log In</button>
</p>
<p class="text-center">
	<a href="/login/password-reset.php">Forgot your password?</a>
</p>
</form> */}

