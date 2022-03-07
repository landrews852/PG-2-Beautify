import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import s from "./editClient.module.css";
import { editUserInfo } from "../../../../redux/actions";

//const apiRoute = "http://localhost:3001";
const apiRoute = process.env.REACT_APP_APP_ROOT;

const validate = (input) => {
  let errors = {};
  if (!input.name_client) {
    errors.name_client = "El nombre es requerido";
  } else if (!/^[A-Z][\s\w\:]{1,20}$/.test(input.name_client)) {
    errors.name_client = "El nombre debe empezar en mayuscula";
  }

  if (!input.lastname_client) {
    errors.lastname_client = "El apellido es requerido";
  } else if (!/^[A-Z][\s\w\W]{1,20}$/.test(input.lastname_client)) {
    errors.lastname_client = "El apellido debe empezar en mayuscula";
  }

  if (!input.address) {
    errors.address = "La dirección es requerida";
  }

  if (!input.email) {
    errors.email = "El correo electronico es requerido";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(
      input.email
    )
  ) {
    errors.email = "El correo debe ser tipo info@info.com";
  }

  if (!input.id) {
    errors.id = "La identificación es requerida";
  } else if (!/^[0-9]{1,12}$/.test(input.id)) {
    errors.id = "La identificación debe ser numerica";
  }

  return errors;
};

export default function EditClient() {
  const navigate = useNavigate();
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const {
    id,
    name_client,
    lastname_client,
    address,
    birthday,
    phone,
    profile_picture,
    email,
  } = user[0];
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    id: id,
    name_client: name_client,
    lastname_client: lastname_client,
    profile_picture: profile_picture,
    address: address,
    phone: phone,
    birthday: birthday,
    email,
  });

  useEffect(() => {
    setErrors(validate(input));
  }, [input]);
  // console.log(input)
  // console.log(errors)

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

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const token = await getAccessTokenSilently();
    dispatch(editUserInfo(token, input));
    Swal.fire({
      icon: "success",
      title: "¡Genial!",
      text: "Ya has editado tu Perfil",
    });
  }

  return (
    <>
      <div className={s.newService}>
        <h2>Editar Perfil</h2>
        <div className={s.container}>
          <div className={s.profilepicture}>
            <div>
              <img src={profile_picture} />
            </div>
          </div>
          <div className={s.profileform}>
            <form onSubmit={handleSubmit}>
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
                {errors.address && <p className={s.error}>{errors.address}</p>}

                <div>
                  <label>Telefono:</label>
                  <input
                    type="text"
                    value={input.phone}
                    name="phone"
                    onChange={handleChange}
                  />
                </div>
                {errors.phone && <p className={s.error}>{errors.phone}</p>}

                <div>
                  <label>Fecha de Cumpleaños:</label>
                  <input
                    className={s.putdate}
                    type="date"
                    value={input.birthday}
                    name="birthday"
                    onChange={handleChange}
                  />
                </div>

                <button className={s.submit} type="submit">
                  Guardar cambios
                </button>
                <Link to="/profile">
                  <button className={s.submit}>Volver</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
