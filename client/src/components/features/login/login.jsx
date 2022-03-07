import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import s from "./login.module.css";
import { getUserInfo } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {

  const {
    loginWithPopup,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(async () => {
    if (isAuthenticated) {
      const token = await getAccessTokenSilently();
      dispatch(getUserInfo(token)).then((u) => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user.length) {
          navigate("/admin/client/create");
        }
      });
    }
  }, [isAuthenticated]);

  const logger = (state) => {
    if (state === "Login") return loginWithPopup();
    else {
      logout();
      localStorage.clear();
    }
  };

  return (
    <>
      <button
        className={isAuthenticated ? s.buttonlogin: s.button}
        onClick={(e) => logger(e.target.textContent)}
      >
        {isAuthenticated?"Logout":"Login"}
      </button>
    </>
  );
}
