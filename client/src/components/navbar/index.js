import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo2.png';
import SearchBar from '../searchBar';
import ButtonLogin from '../buttonlogin';
import { Link } from 'react-router-dom';

export default function Navigator () {
  return (
    <Navbar background="#9f8189" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={logo} height="100px" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
<<<<<<< Updated upstream
            <Link className='nav-link' to="/">Home</Link>
            {/* <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#product 1">product 1</NavDropdown.Item>
              <NavDropdown.Item href="#product 2">product 2</NavDropdown.Item>
              <NavDropdown.Item href="#product 3">product 3</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            {/*</NavDropdown> */}
            <Link className='nav-link' to="/market"><span>Productos</span></Link>
            <Link className='nav-link' to="/services"><span>Servicios</span></Link>
            {/* <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#service 1">service 1</NavDropdown.Item>
              <NavDropdown.Item href="#service 2">service 2</NavDropdown.Item>
              <NavDropdown.Item href="#service 3">service 3</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#login"> <ButtonLogin /> </Nav.Link>
=======
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/product1">product 1</NavDropdown.Item>
              <NavDropdown.Item href="/product2">product 2</NavDropdown.Item>
              <NavDropdown.Item href="/product3">product 3</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/service 1">service 1</NavDropdown.Item>
              <NavDropdown.Item href="/service 2">service 2</NavDropdown.Item>
              <NavDropdown.Item href="/service 3">service 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link> <ButtonLogin /> </Nav.Link>
>>>>>>> Stashed changes
          </Nav>
            <SearchBar align='right'/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
//