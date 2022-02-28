import React from "react";
import s from './adminSideBar.module.css'
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import CreateProduct from '../../../pages/admin/createProduct/createProduct';
import CreateService from "../../admin/createService/createService";
import EditCarousel from "../../admin/editCarousel/editCarousel";
import { useState } from "react";
import AdminAboutUs from "../../admin/editAboutUs/editAboutUs";

export default function AdminSideBar() {
const locationpath = useLocation()
const welcome = "Bienvenido al panel administrativo de tu E-commerce"
const [ops,setOps] = useState(welcome);
const [active,setActive] = useState(0);
console.log(locationpath.pathname)
  var components = "chau" 


  const handleLocation = (e) => {
  if (e.target.value === "1") {
    setOps(<CreateProduct/>);
    setActive(1) ;
    }
  else if (e.target.value === "2") {
    setOps(<CreateService/>);
    setActive(2);
    }
  else if (e.target.value === "3")
    {
    setOps(<EditCarousel/>);
    setActive(3);
    }
    else if (e.target.value === "4")
    {
    setOps(<AdminAboutUs/>);
    setActive(4);
    }
  else {components = "hola"}  
  }
 
  return (
    <>
    <div className={s.Contenedor}> 
      <div className={s.containerBar}>

      <Navbar variant="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
            <Link className='nav-link' to="/panel"><button className={active==1?s.buttonNav+" "+s.activo:s.buttonNav}
              value="1" 
              onClick={(e) => {handleLocation(e)}}
              >
                <div className={s.translate}></div>
              Producto</button></Link>
            <Link className='nav-link' to="/panel"><button className={active==2?s.buttonNav+" "+s.activo:s.buttonNav}
              value="2" 
              onClick={(e) => {handleLocation(e)}} 
              >
                <div className={s.translate}></div>
                Servicios</button></Link>
                <Link className='nav-link' to="/panel"><button className={active==3?s.buttonNav+" "+s.activo:s.buttonNav}
              value="3" 
              onClick={(e) => {handleLocation(e)}} 
              >
                <div className={s.translate}></div>
                Carrusel</button></Link>
            <Link className='nav-link' to="/panel"><button className={active==4?s.buttonNav+" "+s.activo:s.buttonNav}
              value="4" 
              onClick={(e) => {handleLocation(e)}} 
              >
                <div className={s.translate}></div>
                Sobre nosotros</button></Link>
            <Link className='nav-link' to="/panel"><button className={active==5?s.buttonNav+" "+s.activo:s.buttonNav}
              value="5" 
              onClick={(e) => {handleLocation(e)}} 
              >
                <div className={s.translate}></div>
                Estadisticas</button></Link>
          </Nav>
          </Navbar.Collapse>       
       </Navbar>       
      
      </div>
      <div className={s.containerOp}>        
        {ops}      
      </div>
    </div>    
    </>
  );
}