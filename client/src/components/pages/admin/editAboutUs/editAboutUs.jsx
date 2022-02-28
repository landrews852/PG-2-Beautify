import React from "react";
import s from './editAboutUs.module.css'
import { useState } from "react";

export default function AdminAboutUs() {

const [about,setAbout] = useState({
    title : "",
    description: "",
    image: "",
    slogan: ""
})

const handleOnChange = (e) => { 
    setAbout({
        ...about,
        [e.target.name]: e.target.value
    })
} 

const handleSubmit = (e) => { 
    e.preventDefault();
    console.log(about)
}

  return (
    <div className={s.container}>
        <h2 className={s.about}>Edite aqui su mensaje acerca de la empresa:</h2>
            <form className={s.form} onSubmit={(e) => handleSubmit(e)}>
                <div className={s.aboutContainer}>
                    <div>
                        <label name="title" id="title">Encabezado</label>
                        <input onChange={handleOnChange} type="text" name="title" id="title" />
                    </div>
                    <div>
                        <label name="description" id="description">Aquí podra escribir un mensaje describiendo a que se dedica la empresa, su historia, su visión y misión.</label>
                    </div>
                    <textarea onChange={handleOnChange} type="text" name="description" id="description" />
                    <div>
                        <label name="slogan" id="slogan">Su eslogan</label>
                        <textarea onChange={handleOnChange} type="text" name="slogan" id="slogan" />
                    </div>
                        <div>
                        <label name="title" id="title">Url de la imagen anexada</label>
                    </div>
                        <input onChange={handleOnChange} type="text" name="image" id="image" />
                </div>
                <button type="submit">Modificar</button>
            </form>
    </div>
  );
}