import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import s from "./createClient.module.css";
import { getUserInfo } from "../../../../redux/actions";
import Swal from "sweetalert2";
import perfil from "../../../../images/perfil.png";

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

  // if (!input.email) {
  //   errors.email = "El correo electronico es requerido";
  // } else if (
  //   !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
  //     input.email
  //   )
  // ) {
  //   errors.email = "El correo debe ser tipo info@info.com";
  // }

  // if (!input.id) {
  //   errors.id = "La identificación es requerida";
  // } else if (!/^[0-9]{1,12}$/.test(input.id)) {
  //   errors.id = "La identificación debe ser numerica";
  // }

  return errors;
};

export default function CreateClient() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name_client: "",
    lastname_client: "",
    profile_picture: 'https://res.cloudinary.com/jair1020/image/upload/v1646762757/Beautify/z0bmo0frxpjjdbsfeow9.png',
    address: "",
    phone: "",
    birthday: "",
  });
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

  useEffect(() => {
    setErrors(validate(input));
  }, [input]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleUpper(e) {
    let nameInput = e.target.value;
    let validation = /\w\S*/g;
    let capitalLetter = nameInput.replace(
      validation,
      (cl) => cl.charAt(0).toUpperCase() + cl.substring(1).toLowerCase()
    );

    setInput({
      ...input,
      [e.target.name]: capitalLetter,
    });
  }
  const upload = async (img) => {
    const files = img;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Beautify");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/jair1020/image/upload",
      data
    );
    const file = res.data;
    setInput({ ...input, profile_picture: file.secure_url });
    console.log(res);
  };

  const uploadImage = (e) => {
    e.preventDefault();
    const files = e.target.files;
    upload(files);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    upload(files);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };

  const { getAccessTokenSilently } = useAuth0();

  async function handleSubmit(e) {
    e.preventDefault();
    const token = await getAccessTokenSilently();
    if (Object.keys(errors).length !== 0) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Debes completar los datos requeridos",
      });
    } else {
      const response = await axios.post(`${apiRoute}/api/client`, input, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch(getUserInfo(token));
      setInput({
        name_client: "",
        lastname_client: "",
        profile_picture: "",
        address: "",
        phone: "",
        birthday: "",
      });
      Swal.fire({
        icon: "success",
        title: "Bien",
        text: "Has completado tus datos de perfil",
      });
      setTimeout(() => {
        navigate("/profile");
      }, 3000);
    }
  }

  return (
    <div className={s.newService}>
      {/* <Link to="/"><button className={s.button}>Volver</button></Link> */}
      <h2>Cliente nuevo</h2>
      <div className={s.container}>
        <div onDragOver={dragOver} className={s.profilepicture}>
          <div>
            {!input.profile_picture ? (
              <img
                className={s.img} src={perfil}
                onDrop={(e) => onDrop(e)}
              ></img>
            ) : (
              <img
                className={s.img} src={input.profile_picture}
                onDrop={(e) => onDrop(e)}
              ></img>
            )}
            <label className={s.label} for="img">
              Elige o arrastra una imagen
            </label>
            <input
              id="img"
              className={s.input}
              type="file"
              onChange={(e) => uploadImage(e)}
            />
            {/* <img src={profile_picture}/> */}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={s.form}>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                value={input.name_client}
                name="name_client"
                onChange={handleUpper}
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
                onChange={handleUpper}
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

            <button
              className={s.submit}
              type="submit"
              disabled={
                errors.name_client || errors.lastname_client || errors.address
                  ? true
                  : false
              }
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
