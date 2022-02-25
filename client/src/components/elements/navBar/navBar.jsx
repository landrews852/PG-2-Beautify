import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../images/logo2.png";
import SearchBar from "../../features/searchbar/index";
import Cart_logo from "./cart_logo";
import s from "./navBar.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navigator() {
  const location = useLocation();
  // console.log();
  return (
    <Navbar className={s.navBarr} variant="light" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img src={logo} height="100px" alt="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={s.me_auto}>
            <Link to="/aboutUs" className="nav-link">
              Quienes somos
            </Link>
            <Link to="/market" className="nav-link">
              Productos
            </Link>
            <Link to="/services" className="nav-link">
              Servicios
            </Link>
          </Nav>
          {location.pathname !== "/" ? (
            <SearchBar className={s.navSearch} />
          ) : null}

          <Cart_logo />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
//
