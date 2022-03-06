import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import s from "./infoClient.module.css";
import { editUserInfo, getUserInfo } from "../../../../redux/actions";

//const apiRoute = "http://localhost:3001";
const apiRoute = process.env.REACT_APP_APP_ROOT

export default function InfoClient() {  
    const navigate = useNavigate();
    const {getAccessTokenSilently, isAuthenticated} = useAuth0();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));  
    const { id, name_client , lastname_client , address , birthday , phone, profile_picture, email } = user[0]
    

    // console.log("Perfil",user)
    const [input, setInput] = useState({
      name_client: name_client,
      lastname_client: lastname_client,
      address: address,
      phone: phone,
      birthday: birthday,
      email: email,
    })
    
    return (
        <>
        <div className={s.newService}>
            <h2>Perfil</h2>
            <div className={s.container}>
            <div className={s.profilepicture}>
                <div>
                    <img src={profile_picture}/>
                </div>
            </div>
            <div className={s.profileform}>
            <form>
                <div className={s.form}>
                  <label><b>Nombre:</b>     {name_client}</label> 
                  <label><b>Apellido:</b>     {lastname_client}</label>
                  <label><b>E-mail:</b>     {email}</label>
                  <label><b>Direccion:</b>     {address}</label>
                  <label><b>Telefono:</b>     {phone}</label>
                  <label><b>Fecha de Cumpleaños:</b>   {birthday}</label>

                  <Link to="/client/edit"><button className={s.submit}>Editar perfil</button></Link>
                  <Link to="/"><button className={s.submit}>Volver</button></Link>
                </div>
            </form>
            </div>
            </div>
        </div>
        </>
    )
}


