import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../../features/searchbar/searchBar";
import { getUserInfo } from "../../../redux/actions";
import CartLogo from "./cartLogo";
import s from "./navBar.module.css";
import UserMenu from "../../elements/userMenu/userMenu";
import { Link,  NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../../features/login/login";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import CalendarLogo from "./calendarLogo";


export default function Navigator() {
  const { isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();
  const dispatch = useDispatch();
  useEffect(async () => {
    if (isAuthenticated) {
      const token = await getAccessTokenSilently();
      dispatch(getUserInfo(token));
    }
  }, [isAuthenticated]);

  const userstate = useSelector((state) => state.user);
  // console.log("userstate",userstate)
  let location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  const clientname = userstate[0]
    ? "Bienvenido" + " " + userstate[0].name_client
    : "";
  const [log, setLog] = useState(0);

  return (
    <Navbar className={s.navBarr} variant="light" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img
              src="https://res.cloudinary.com/estdia/image/upload/f_auto/v1646078440/beautify/form/logo2_bqgepw.png"
              height="100px"
              alt="logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={s.me_auto}>
            <NavLink to="/aboutUs" className={({ isActive }) =>isActive?s.act:s.linkbar}>
              Quienes somos
            </NavLink>
            <NavLink to="/market" className={({ isActive }) =>isActive?s.act:s.linkbar}>
              Productos
            </NavLink>
            <NavLink to="/services" className={({ isActive }) =>isActive?s.act:s.linkbar}>
              Servicios
            </NavLink>
            {!isAuthenticated?<Login/>:null}
          </Nav>

          { location.pathname === "/market" ||
          location.pathname === "/services" ? (
            <SearchBar className={s.navSearch} />
          ) : null }
          <CartLogo />
          <CalendarLogo />
          {isAuthenticated && <UserMenu user={user} clientname={clientname} />}
          <span className={s.welcome}>{isAuthenticated ? clientname : ""}</span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
