import React, { useEffect } from "react";
import s from "./adminSideBar.module.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import EditCarousel from "../../admin/editCarousel/editCarousel";
import GiveAdmin from "../../admin/giveAdmin/giveAdmin";
import BlockUser from "../../admin/blockUser/blockUser"
import { useState } from "react";
import AdminAboutUs from "../../admin/editAboutUs/editAboutUs";
import Service from "../../admin/services/services";
import Product from "../../admin/products/product";
import EditSocialMedia from "../../admin/editSocialMedia/editSocialMedia";
import Orders from "../orders/ordersAdmin";
import { useDispatch } from "react-redux";
import { cleanCart } from "../../../../redux/actions";
import Category from "../../admin/category/Category.jsx";

export default function AdminSideBar() {
  const dispatch=useDispatch()
  const locationpath = useLocation();
  const welcome = "Bienvenido al panel administrativo de tu E-commerce";
  const [ops, setOps] = useState(welcome);
  const location = useLocation().search;
  const [active, setActive] = useState(0);
  const changeOps = (ops) => setOps(ops)

  var components = "chau";
  
  useEffect(()=>{
    if (location.toString() === "?true") {
      dispatch(cleanCart());
      setOps(<Orders setOps={changeOps} />);
      setActive(1);
    }
  },[])


  const handleLocation = (e) => {
    switch (e.target.value) {
      case "1":
        setOps(<Category />);
        setActive(1);
        break;

      case "2":
        setOps(<Product />);
        setActive(2);
        break;

      case "3":
        setOps(<Service />);
        setActive(3);
        break;

      case "4":
        setOps(<EditCarousel />);
        setActive(4);
        break;

      case "5":
        setOps(<AdminAboutUs />);
        setActive(5);
        break;

      case "6":
        setOps(<BlockUser/>);
        setActive(6);
        break;

      case "7":
        setOps(<GiveAdmin />);
        setActive(7);
        break;

      case "8":
        setOps(<EditSocialMedia />);
        setActive(7);
        break;
        
      case "9":
        setOps(<Orders setOps={changeOps} />);
          setActive(9);
          break;
      

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
                    Categoria
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
                    Producto
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
                      Ventas
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
                    Servicios
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
                    Carrusel
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
                    Sobre nosotros
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
                    Estadisticas
                  </button>
                </Link>
                <Link className="nav-link" to="/panel">
                  <button
                    className={
                      active == 7 ? s.buttonNav + " " + s.activo : s.buttonNav
                    }
                    value="7"
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
                      active == 8 ? s.buttonNav + " " + s.activo : s.buttonNav
                    }
                    value="8"
                    onClick={(e) => {
                      handleLocation(e);
                    }}
                  >
                    <div className={s.translate}></div>
                    Redes Sociales
                  </button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className={s.containerOp}>{ops}</div>
      </div>
    </>
  );
}
