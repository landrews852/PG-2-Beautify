import s from "./userMenu.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useState } from "react";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from "react-router-dom";

export default function UserMenu() {

  let location = useLocation();

  const [value, setValue] = useState("");
  // The forwardRef is important!!
  // Dropdown needs access to the DOM node in order to position the Menu
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <FontAwesomeIcon icon={faUser} />
      {children}
    </a>
  ));

  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {


      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );

  return (<>

    <Dropdown className={s.container}>
      <Dropdown.Toggle align="end" as={CustomToggle} id="dropdown-custom-components">
      </Dropdown.Toggle>

      <Dropdown.Menu align="end" as={CustomMenu} className={s.menu}>
      <Dropdown.Item as={Link} to="/admin/product/create" active={location.pathname === "/admin/product/create"}>Crear producto</Dropdown.Item>
      <Dropdown.Item as={Link} to="/admin/service/create" active={location.pathname === "/admin/service/create"}>Crear servicio</Dropdown.Item>
      <Dropdown.Item as={Link} to="/config" active={location.pathname === "/admin/config"}>Configuracion</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </>
  );
}
