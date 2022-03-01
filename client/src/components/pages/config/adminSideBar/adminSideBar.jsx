import React from "react";
import s from "./adminSideBar.module.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import CreateProduct from "../../../pages/admin/createProduct/createProduct";
import CreateService from "../../admin/services/createService/createService";
import EditCarousel from "../../admin/editCarousel/editCarousel";
import GiveAdmin from "../../admin/giveAdmin/giveAdmin";
import { useState } from "react";
import AdminAboutUs from "../../admin/editAboutUs/editAboutUs";
import EditSocialMedia from "../../admin/editSocialMedia/editSocialMedia";
import EditService from "../../admin/services/editService/editService";

export default function AdminSideBar() {
  const locationpath = useLocation();
  const welcome = "Bienvenido al panel administrativo de tu E-commerce";
  const [ops, setOps] = useState(welcome);
  const [active, setActive] = useState(0);

  var components = "chau";

  const handleLocation = (e) => {
    switch (e.target.value) {
      case "1":
        setOps(<CreateProduct location={handleLocation} />);
        setActive(1);
        break;

      case "2":
        setOps(<CreateService location={handleLocation} />);
        setActive(2);
        break;

      case "3":
        setOps(<EditCarousel />);
        setActive(3);
        break;

      case "4":
        setOps(<AdminAboutUs />);
        setActive(4);
        break;

      case "5":
        // reservada para estadisticas
        // setOps(<CreateProduct location={handleLocation} />);
        // setActive(1);
        break;

      case "6":
        setOps(<GiveAdmin />);
        setActive(6);
        break;

      case "7":
        setOps(<EditService location={handleLocation} />);
        setActive(7);
        break;

      case "8":
        // Colocamos el componente de modificar servicio y pasamos la funcion handleLocation
        //setOps(<CreateProduct location={handleLocation} />);
        setActive(8);
        break;
      case "9":
        setOps(<EditSocialMedia />);
        setActive(9);

      default:
        break;
    }
  };

  return (
    <>
      <div className={s.Contenedor}>
        <div className={s.containerBar}>
          <Navbar variant="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column">
                <Link className="nav-link" to="/panel">
                  <button
                    className={
                      active == 1 ? s.buttonNav + " " + s.activo : s.buttonNav
                    }
                    value="1"
                    onClick={(e) => {
                      handleLocation(e);
                    }}
                  >
                    <div className={s.translate}></div>
                    Producto
                  </button>
                </Link>
                <Link className="nav-link" to="/panel">
                  <button
                    className={
                      active == 2 ? s.buttonNav + " " + s.activo : s.buttonNav
                    }
                    value="2"
                    onClick={(e) => {
                      handleLocation(e);
                    }}
                  >
                    <div className={s.translate}></div>
                    Servicios
                  </button>
                </Link>
                <Link className="nav-link" to="/panel">
                  <button
                    className={
                      active == 3 ? s.buttonNav + " " + s.activo : s.buttonNav
                    }
                    value="3"
                    onClick={(e) => {
                      handleLocation(e);
                    }}
                  >
                    <div className={s.translate}></div>
                    Carrusel
                  </button>
                </Link>
                <Link className="nav-link" to="/panel">
                  <button
                    className={
                      active == 4 ? s.buttonNav + " " + s.activo : s.buttonNav
                    }
                    value="4"
                    onClick={(e) => {
                      handleLocation(e);
                    }}
                  >
                    <div className={s.translate}></div>
                    Sobre nosotros
                  </button>
                </Link>
                <Link className="nav-link" to="/panel">
                  <button
                    className={
                      active == 5 ? s.buttonNav + " " + s.activo : s.buttonNav
                    }
                    value="5"
                    onClick={(e) => {
                      handleLocation(e);
                    }}
                  >
                    <div className={s.translate}></div>
                    Estadisticas
                  </button>
                </Link>
                <Link className="nav-link" to="/panel">
                  <button
                    className={
                      active == 6 ? s.buttonNav + " " + s.activo : s.buttonNav
                    }
                    value="6"
                    onClick={(e) => {
                      handleLocation(e);
                    }}
                  >
                    <div className={s.translate}></div>
                    Permisos
                  </button>
                </Link>
                <Link className="nav-link" to="/panel">
                  <button
                    className={
                      active == 9 ? s.buttonNav + " " + s.activo : s.buttonNav
                    }
                    value="9"
                    onClick={(e) => {
                      handleLocation(e);
                    }}
                  >
                    <div className={s.translate}></div>
                    Redes Sociales
                  </button>
                </Link>
              </Nav >
            </Navbar.Collapse >
          </Navbar >
        </div >
        <div className={s.containerOp}>{ops}</div>
      </div >
    </>
  );
}
