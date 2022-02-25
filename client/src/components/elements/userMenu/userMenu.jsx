import s from "./userMenu.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useState } from "react";
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function UserMenu() {

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

    <Dropdown>
      <Dropdown.Toggle align="end" as={CustomToggle} id="dropdown-custom-components">
      </Dropdown.Toggle>

      <Dropdown.Menu align="end" as={CustomMenu} className={s.menu}>
        <Dropdown.Item eventKey="1">Crear producto</Dropdown.Item>
        <Dropdown.Item eventKey="2">Crear servicio</Dropdown.Item>
        <Dropdown.Item eventKey="3">Modificar página</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </>
  );
}
