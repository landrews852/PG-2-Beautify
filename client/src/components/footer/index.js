import React from 'react';
import logo from '../../images/logo2.png';
import s from "./Footer.module.css"
import { Link } from "react-router-dom";
import ig from "../../images/instagram.png"
import fb from "../../images/facebook.png"
import mail from "../../images/mail.png"
import {CopyToClipboard} from "react-copy-to-clipboard";

export default function Footer() {

    return (
        <div className={s.container}>
            <div className={s.img}>
              <Link to="/">
                <img src={logo} alt="logo" height='100px' />
              </Link>
            </div>
            <ul className={s.lista}>
                <li className={s.li}><a href="https://www.instagram.com/"><img width='30px' src={ig} /></a></li>
                <li className={s.li}><a href="https://www.facebook.com/"><img width='28px' src={fb} /></a></li>
                <li className={s.li}><div>
    <CopyToClipboard text= "beauty@email.com">
        <p onClick={(() => alert("correo copiado al portapapeles"))}><img width='30px' src={mail} /></p> 
    </CopyToClipboard>
</div></li>
            </ul>
        </div>
    )
}