import React from 'react';
import './admin.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class uHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    logoutHandle = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        location.href = "/login";
    }       

    render() {
        return (
            <Navbar bg="light" variant="light" className = "Navbar">
                <Navbar.Brand>Song Rating System</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as = {Link} to = "/adminHomepage">Homepage</Nav.Link>
                    <Nav.Link as = {Link} to = "/userList">Users Registered</Nav.Link>
                </Nav>
                <Form inline className = "search">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <Nav>
                    <Nav.Link onClick = {this.logoutHandle}>Log Out</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}



export default uHeader;