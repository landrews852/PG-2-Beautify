import React from "react";
import s from "./userSideBar.module.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
// import CreateProduct from "../../../pages/admin/createProduct/createProduct";
// import CreateService from "../../admin/services/createService/createService";
import { useState } from "react";
import Orders from "../orders/orders";
import Compras from "../../client/compras/compras";
import PostReview from "../../client/postreview/postreview";


export default function UserSideBar() {
    const locationpath = useLocation();
    const welcome = "Bienvenido al panel administrativo de tu E-commerce";
    const [ops, setOps] = useState(welcome);
    const [active, setActive] = useState(0);
  
    var components = "chau";
  
    const handleLocation = (e) => {
      switch (e.target.value) {
        case "1":
          setOps(<Orders />);
          setActive(1);
          break;  
        case "2":
          setOps(< Compras />);
          setActive(2);
          break;
        case "3":
          setOps(< PostReview />);
          setActive(3);
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
                      Ordenes
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
                      Compras
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
                      Reviews
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