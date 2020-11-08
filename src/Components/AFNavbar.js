import React from "react";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import Form from 'react-bootstrap/Form'
import {Container} from "react-bootstrap";

import './AFNavbar.css'

function AFNavbar() {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" expand="lg">
                    <Navbar.Brand href="/home"><i>Pasavec</i></Navbar.Brand>
                    <Nav.Link className="mr-3 ml-2" href="/stat">Statistika</Nav.Link>
                    <Nav.Link className="mr-3 ml-2" href="/map">Zemljevid</Nav.Link>
                    <Nav.Link className="mr-3 ml-2" href="/excd">Nesreče</Nav.Link>
                </Nav>
                {/*<Form inline>*/}
                {/*    <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                {/*    <Button variant="outline-success">Search</Button>*/}
                {/*</Form>*/}
                <img
                    src="/appicon.png"
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Collapse>
        </Navbar>

    );
}

export default AFNavbar;