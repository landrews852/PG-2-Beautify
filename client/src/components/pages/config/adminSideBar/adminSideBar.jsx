import React from "react";
import s from './adminSideBar.module.css'
import { ButtonGroup,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AdminSideBar() {
  return (
    <div className={s.container}>
      <ButtonGroup vertical>
        <Button variant="secondary" as={Link} to={"admin/product/create"}>Crear producto</Button>
        <Button variant="secondary" as={Link} to={"admin/service/create"}>Crear Servicio</Button>
        <Button variant="secondary" as={Link} to={"admin/edit/carousel"}>Carrusel</Button>
        <Button variant="secondary" as={Link} to={"admin/edit/aboutUs"}>Sobre Nosotros</Button>
        <Button variant="secondary" as={Link} to={"admin/edit/algo"}>Algo mas que no recuerdo</Button>
      </ButtonGroup>
    </div>
  );
}