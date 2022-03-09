import React, { useEffect } from "react";
import s from "./footer.module.css";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useDispatch, useSelector } from "react-redux";
import { getSocial } from "../../../redux/actions";

export default function Footer() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.social);

  useEffect(() => {
    dispatch(getSocial());
  }, []);

  return (
    <div className={s.container}>
      <div className={s.img}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/estdia/image/upload/f_auto/v1646078440/beautify/form/logo2_bqgepw.png"
            alt="logo"
            height="100px"
          />
        </Link>
      </div>
      <ul className={s.lista}>
        <li className={s.li}>
          <a href={data.instagram} target="_blank">
            <img
              width="30px"
              src="https://res.cloudinary.com/estdia/image/upload/f_auto/v1646078439/beautify/form/instagram_q3hv4c.png"
            />
          </a>
        </li>
        <li className={s.li}>
          <a href={data.facebook} target="_blank">
            <img
              width="28px"
              src="https://res.cloudinary.com/estdia/image/upload/f_auto/v1646078439/beautify/form/facebook_vxpkp0.png"
            />
          </a>
        </li>
        <li className={s.li}>
          <div>
            {/* <CopyToClipboard text="beauty@email.com"> */}
            <CopyToClipboard text={data.email}>
              <p
                onClick={() => toast.success("Correo copiado al portapapeles")}
              >
                <img
                  width="30px"
                  src="https://res.cloudinary.com/estdia/image/upload/f_auto/v1646078438/beautify/form/mail_mtugid.png"
                />
              </p>
            </CopyToClipboard>
            <Toaster position="bottom-center" reverseOrder={false} />
          </div>
        </li>
      </ul>
    </div>
  );
}
