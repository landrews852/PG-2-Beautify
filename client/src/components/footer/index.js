import React from 'react';
import logo from '../../images/logo2.png';
import s from "./Footer.module.css"
import { Link } from "react-router-dom";
import ig from "../../images/ig_logo.png"
import fb from "../../images/fb_logo.png"

export default function Footer() {

    return (
        <div className={s.container}>
            <div className={s.img}>
                <img src={logo} alt="logo" height='100px' />
            </div>
            <ul className={s.lista}>
                <Link to="/contact">
                    <li className={s.li}><a className={s.a}>Contact</a> </li>
                </Link>
                <li className={s.li}><img width='50px' href="https://www.instagram.com/" src={ig} /></li>
                <li className={s.li}><img width='50px' href="https://www.facebook.com/" src={fb} /></li>
            </ul>
        </div>
    )
}