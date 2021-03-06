import s from "./userMenu.module.css";
import React, { useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

export default function UserMenu({ clientname }) {
  const { isAuthenticated, isLoading } = useAuth0();
  const [reload, setReload] = useState();
  let profile;

  const user = JSON.parse(localStorage.getItem("user"));

  useMemo(() => {
    if (user && JSON.parse(localStorage.getItem("user"))[0]) {
      profile = JSON.parse(localStorage.getItem("user"))[0].profile_picture;
      // console.log (profile)
    }
  }, [user]);

  // console.log(profile);
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
      {profile ? (
        <img className={s.imgprofile} src={profile} />
      ) : (
        <FontAwesomeIcon icon={faUser} />
      )}
      {/* {children} */}
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

  return (
    <>
      <Dropdown className={s.container}>
        <Dropdown.Toggle
          align="end"
          as={CustomToggle}
          id="dropdown-custom-components"
        ></Dropdown.Toggle>

        <Dropdown.Menu align="end" /* as={CustomMenu} */ className={s.menu}>
          {isAuthenticated && clientname ? (
            <>
              <Dropdown.Item
                as={Link}
                to="/profile"
                active={location.pathname === "/profile"}
              >
                Perfil
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="/panel"
                active={location.pathname.includes("/panel")}
              >
                Panel
              </Dropdown.Item>
            </>
          ) : (
            <Dropdown.Item as={Link} to="/admin/client/create">
              Registre sus datos aqui
            </Dropdown.Item>
          )}
          {/* <Dropdown.Item>Logout</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
