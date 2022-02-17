import React from 'react';
import logo from '../../images/logo2.png';
import s from "./Footer.module.css"
import { Link } from "react-router-dom";
import ig from "../../images/ig_logo.png"
import fb from "../../images/fb_logo.png"
import mail from "../../images/mail_logo.png"

export default function Footer() {

    return (
        <div className={s.container}>
            <div className={s.img}>
              <Link to="/">
                <img src={logo} alt="logo" height='100px' />
              </Link>
            </div>
            <ul className={s.lista}>
                <li className={s.li}><a href="https://www.instagram.com/"><img width='50px' src={ig} /></a></li>
                <li className={s.li}><a href="https://www.facebook.com/"><img width='50px' src={fb} /></a></li>
                <li className={s.li}><a href="mailto:beautify@correo.com"><img width='50px' src={mail} /></a></li>
            </ul>
        </div>
    )
}