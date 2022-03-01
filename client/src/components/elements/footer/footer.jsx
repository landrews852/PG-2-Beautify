import React, { useEffect, useState } from "react";
import logo from "../../../images/logo2.png";
import s from "./footer.module.css";
import { Link } from "react-router-dom";
import ig from "../../../images/instagram.png";
import fb from "../../../images/facebook.png";
import mail from "../../../images/mail.png";
import { Toaster, toast } from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useDispatch } from "react-redux";
import { getSocial } from "../../../redux/actions";

export default function Footer() {
  const dispatch = useDispatch()
  const [info, setInfo] = useState({
    facebook: "",
    instagram: "",
    email: ""
  })

  console.log(info)

  useEffect(() => {
    dispatch(getSocial())
      .then(res => setInfo({
        ...info,
        facebook: res.data[0].facebook,
        instagram: res.data[0].instagram,
        email: res.data[0].email
      })
      )
  }, [])

  return (
    <div className={s.container}>
      <div className={s.img}>
        <Link to="/">
          <img src={logo} alt="logo" height="100px" />
        </Link>
      </div>
      <ul className={s.lista}>
        <li className={s.li}>
          {/* <a href="https://www.instagram.com/" target="_blank"> */}
          <a href={info.instagram} target="_blank">
            <img width="30px" src={ig} />
          </a>
        </li>
        <li className={s.li}>
          {/* <a href="https://www.facebook.com/" target="_blank"> */}
          <a href={info.facebook} target="_blank">
            <img width="28px" src={fb} />
          </a>
        </li>
        <li className={s.li}>
          <div>
            {/* <CopyToClipboard text="beauty@email.com"> */}
            <CopyToClipboard text={info.email}>
              <p
                onClick={() => toast.success("Correo copiado al portapapeles")}
              >
                <img width="30px" src={mail} />
              </p>
            </CopyToClipboard>
            <Toaster position="bottom-center" reverseOrder={false} />
          </div>
        </li>
      </ul>
    </div>
  );
}
