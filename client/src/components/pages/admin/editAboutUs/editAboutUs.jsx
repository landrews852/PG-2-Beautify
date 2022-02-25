import React from "react";
import s from './editAboutUs.module.css'
import { useState } from "react";

export default function AdminAboutUs() {

const [about,setAbout] = useState('')

const handleOnChange = (e) => { 
    setAbout(e.target.value)
} 

const handleSubmit = (e) => { 
    e.preventDefault();
    console.log(about)
}

  return (
    <div className={s.container}>
        <h1>Edite aqui su mensaje acerca de la empresa:</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label name="about" id="about">Sobre nosotros</label>
                    <textarea onChange={handleOnChange} type="text" name="about" id="about" />
                </div>
                <button type="submit">Modificar</button>
            </form>
    </div>
  );
}