import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import s from "./editService.module.css";
import { editUserInfo, getUserInfo } from "../../../../redux/actions";


const validate = (input) => {
  let errors = {};

  if (!input.name_service) {
    errors.name_service = "El nombre es requerido";
  } else if (!/^[A-Z][\s\w\:]{1,20}$/.test(input.name_service)) {
    errors.name_service =
      "El nombre debe empezar en mayuscula";
  }
  
  if (!input.price){
      errors.price = "El precio es requerido";
  } else if(!/^[0-9]{1,12}$/.test(input.price)){
      errors.price = "El precio debe ser numerico";
  }

  if (!input.description) {
    errors.description = "La descripción es requerida";
  } else if (!/^[A-Z][\s\w\W]{1,20}$/.test(input.description)) {
    errors.description =
      "La descripción debe empezar en mayuscula";
  }

  if (!input.image) {
    errors.image = "La imagen es requerida";
  }
  
  return errors;
};

export default function EditService() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));  
    const { id, name_service , price , description , image , disabled } = user[0]
    const [errors, setErrors] = useState({});   

    const [input, setInput] = useState({
        name_service: name_service,
        price: price,
        description: description,
        image: "",
        disabled: disabled,
    })

    useEffect(()=>{
        setErrors(validate(input));
    },[input])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit (e) {
        console.log("HANDLE SUBMIT")
        e.preventDefault();     
        dispatch(editService(id,input)); 
        Swal.fire({
            icon: "success",
            title: "¡Genial!",
            text: "Servicio editado con exito",
        }); 
    };

    return (
        <>
        <div className={s.newService}>
            {/* <Link to="/"><button className={s.button}>Volver</button></Link> */}
            <h2>Editar Servicio</h2>
            <div className={s.container}>
            <div className={s.profilepicture}>
                <div>
                    <img src={profile_picture}/>
                </div>
            </div>
            <div className={s.profileform}>
            <form onSubmit={handleSubmit}>
                <div className={s.form}>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            value={input.name_service}
                            name="name_service"
                            onChange={handleChange}
                        />
                        {errors.name_service && (
                            <p className={s.error}>{errors.name_service}</p>
                        )}
                    </div>

                    <div>
                        <label>Descripción:</label>
                        <input
                            type="text"
                            value={input.description}
                            name="description"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.description && (
                        <p className={s.error}>{errors.description}</p>
                    )}

                    <div>
                        <label>Imagen del servicio:</label>
                        <input
                            type="text"
                            value={input.image}
                            name="image"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.image && (
                        <p className={s.error}>{errors.image}</p>
                    )}
                    
                    <div>
                        <label>Precio:</label>
                        <input
                            type="text"
                            value={input.price}
                            name="price"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.price && (
                        <p className={s.error}>{errors.price}</p>
                    )}

                    <div>
                        <label>Inactivo:</label>
                        <input
                            type="checkbox"
                            value={input.disabled}
                            name="disabled"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.disabled && (
                        <p className={s.error}>{errors.disabled}</p>
                    )}

                    <button className={s.submit} type="submit">Guardar cambios</button>

                </div>
            </form>
            </div>
            </div>
        </div>
        </>
    )
}