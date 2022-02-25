import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { callprotectedApi } from "../../../../redux/actions";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import s from "./createClient.module.css"

const validate = (input) => {
    let errors = {};
    if (!input.name_client) {
      errors.name_client = "El nombre es requerido";
    } else if (!/^[A-Z][\s\w\:]{1,20}$/.test(input.name_client)) {
      errors.name_client =
        "El nombre debe empezar en mayuscula";
    }

    if (!input.lastname_client) {
      errors.lastname_client = "El apellido es requerido";
    } else if (!/^[A-Z][\s\w\W]{1,20}$/.test(input.lastname_client)) {
      errors.lastname_client =
        "El apellido debe empezar en mayuscula";
    }

    if (!input.address) {
      errors.address = "La dirección es requerida";
    }

    if (!input.email) {
      errors.email = "El correo electronico es requerido";
    } else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.email)){
      errors.email = "El correo debe ser tipo info@info.com";
    }

    if (!input.id){
      errors.id = "La identificación es requerida";
    } else if(!/^[0-9]{1,12}$/.test(input.id)){
      errors.id = "La identificación debe ser numerica";
    }

    return errors;
  };

export default function CreateClient() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
      name_client: "",
      lastname_client: "",
      profile_picture: "",
      address: "",
      phone: "",
      birthday: "",
    })
    console.log(input)
    console.log(errors)

    // Recibe por body Client
    // id,
    // name_client,
    // lastname_client,
    // profile_picture,
    // password,
    // email,
    // address,
    // phone,
    // birthday,

    useEffect(()=>{
        setErrors(validate(input));
    },[input])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const {getAccessTokenSilently} = useAuth0();

    async function handleSubmit (e) {
        e.preventDefault();
        const token = await getAccessTokenSilently()
        dispatch(callprotectedApi(input, token))
        alert("Client was added successfully!")
        setInput({
          name_client: "",
          lastname_client: "",
          profile_picture: "",
          address: "",
          phone: "",
          birthday: "",
        })
    }

    return (
        <div className={s.newService}>
            <Link to="/"><button className={s.button}>Volver</button></Link>
            <h3>CLIENTE NUEVO</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={s.form}>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            value={input.name_client}
                            name="name_client"
                            onChange={handleChange}
                        />
                        {errors.name_client && (
                            <p className={s.error}>{errors.name_client}</p>
                        )}
                    </div>

                    <div>
                        <label>Apellido:</label>
                        <input
                            type="text"
                            value={input.lastname_client}
                            name="lastname_client"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.lastname_client && (
                        <p className={s.error}>{errors.lastname_client}</p>
                    )}

                    {/* <div>
                        <label>E-mail:</label>
                        <input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.email && (
                        <p className={s.error}>{errors.email}</p>
                    )} */}

                    <div>
                        <label>Foto Perfil:</label>
                        <input
                            type="text"
                            value={input.profile_picture}
                            name="profile_picture"
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div>
                        <label>Direccion:</label>
                        <input
                            type="text"
                            value={input.address}
                            name="address"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.address && (
                        <p className={s.error}>{errors.address}</p>
                    )}

                    <div>
                        <label>Telefono:</label>
                        <input
                            type="text"
                            value={input.phone}
                            name="phone"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.phone && (
                        <p className={s.error}>{errors.phone}</p>
                    )}

                    <div>
                        <label>Fecha de Cumpleaños:</label>
                        <input
                            type="date"
                            value={input.birthday}
                            name="birthday"
                            onChange={handleChange}
                        />
                    </div>

                    <button disabled={(Object.values(errors).length > 0)} className={s.submit} type="submit">Crear</button>

                </div>
            </form>
        </div>
    )
}