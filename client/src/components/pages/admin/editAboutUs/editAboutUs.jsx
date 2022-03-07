import React from "react";
import s from './editAboutUs.module.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editAbout } from "../../../../redux/actions";
import AboutUs from "../../client/aboutUs/aboutUs"

export default function AdminAboutUs() {

const dispatch = useDispatch()

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
    dispatch(editAbout(about))
}

  return ( <>
    <div className={s.container}>
        <h2 className={s.about}>Edite aqui su mensaje acerca de la empresa:</h2>
            <form className={s.form} onSubmit={(e) => handleSubmit(e)}>
                <div className={s.aboutContainer}>

                    <label name="title" id="title">Encabezado</label>
                    <input onChange={handleOnChange} type="text" name="title" id="title"/>

                    <label name="description" id="description" className={s.description}>descripción</label>
                    <textarea onChange={handleOnChange} type="text" name="description" id="description" 
                    placeholder="Aquí podra escribir un mensaje describiendo a que se dedica la empresa, su historia, su visión y misión." 
                    />
                
                    <label name="slogan" id="slogan" className={s.slogan}>Su eslogan</label>
                    <textarea onChange={handleOnChange} type="text" name="slogan" id="slogan" />
                
                    <label name="image" id="image">Url de la imagen anexada</label>
                    <input onChange={handleOnChange} type="text" name="image" id="image" />
                    
                </div>
                <button type="submit">Modificar</button>
            </form>
    </div>
    <h2 className={s.about}>Preview</h2>
    <div className={s.example}>
        <AboutUs />
    </div>
  </>
  );
}