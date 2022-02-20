import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo2.png';
import SearchBar from '../searchbar';
import ButtonLogin from '../buttonlogin';
import './navBar.css';
import carrito from '../../images/carrito2.png';
import { Link } from 'react-router-dom';


export default function Navigator () {
  return (
    <Navbar className='navBarr' variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={logo} height="100px" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/market"><span>Productos</span></Link>
            <Link className='nav-link' to="/services"><span>Servicios</span></Link> */}
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/market" className='nav-link'>Productos</Link>
            <Link to="/services" className='nav-link'>Servicios</Link>
            <Link to="/contact" className='nav-link'>Contact</Link>
            <Nav.Link> <ButtonLogin /> </Nav.Link>
            {/* <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/product1">product 1</NavDropdown.Item>
              <NavDropdown.Item href="/product2">product 2</NavDropdown.Item>
              <NavDropdown.Item href="/product3">product 3</NavDropdown.Item> */}
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            {/* </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/service 1">service 1</NavDropdown.Item>
              <NavDropdown.Item href="/service 2">service 2</NavDropdown.Item>
              <NavDropdown.Item href="/service 3">service 3</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
            <SearchBar className='navSearch' />
            <Nav.Link href="/cart"><div className='divCarrito'><img src={carrito} alt="carrito" className='navCarrito' /></div></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
//