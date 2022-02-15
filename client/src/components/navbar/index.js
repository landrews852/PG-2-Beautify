import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo2.png';
import SearchBar from '../searchBar';

export default function Navigator () {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} height="100px" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">product 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">product 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">product 3</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">service 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">service 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">service 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
            <SearchBar align='right'/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
//