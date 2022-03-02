import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./navBar.module.css";
import logo from "../../../images/logo_calendar.png";

export default function CalendarLogo() {

  return (
    <div className={s.cart}>
      <Link to="/calendario">
        <div className={s.div_cart}>
          <img
            src={logo}
            alt="calendar_logo"
            className={s.calendar_img}
          />
        </div>
      </Link>
    </div>
  );
}
