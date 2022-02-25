import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postImgCarousel } from "../../../../../redux/actions";
import s from "./addImageCarousel.module.css"

export default function AddImageCarousel() {
  const dispatch = useDispatch()
  const [errors, setErrors] = useState({
    image: "",         // string
    title: "",         // string
    description: "",         // string
  });
  const [input, setInput] = useState({
    image: "",         // string
    title: "",         // string
    description: "",         // string
  })

  const validate = (input) => {
    let errors = {};

    if (input.image.length < 1) {
      errors.image = "La imagen es requerida";
    }

    if (!input.title) {
      errors.title = "El nombre es requerido";
    } else if (!/^[A-ZÀ-ÿ][\s\wÀ-ÿ]{0,50}$/.test(input.title)) {
      errors.title =
        "El nombre debe empezar en mayúscula y debe tener menos de 50 caracteres";
    }

    if (!input.description) {
      errors.description = "La descripción es requerida";
    } else if (!/^[A-ZÀ-ÿ][\s\wÀ-ÿ]{0,50}$/.test(input.description)) {
      errors.description =
        "La descripcion debe empezar en mayúscula y debe tener menos de 50 caracteres";
    }

    return errors;
  }

  useEffect(() => {
    setErrors(validate(input));
  }, [input])

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postImgCarousel(input))
      .then(response => {
        if (response === "created") alert("The image was added successfully!")
        if (response === "maximum images") alert("Can't exceed 5 images")
      })
    setInput({
      image: "",
      title: "",
      description: "",
    })
  }

  return (
    <div className={s.new}>
      <h1>AGREGAR AL CARRUSEL</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={s.form}>
          <div>
            <label>Imagen:</label>
            <input
              type="text"
              value={input.image}
              name="image"
              onChange={handleChange}
            />
            {errors.image && (<p className={s.error}>{errors.image}</p>)}
          </div>
          <div>
            <label>Título:</label>
            <input
              type="text"
              value={input.title}
              name="title"
              onChange={handleChange}
            />
          </div>
          {errors.title && (
            <p className={s.error}>{errors.title}</p>
          )}
          <div>
            <label>Descripcion:</label>
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
          <button disabled={Object.values(errors).length > 0} className={s.submit} type="submit">Agregar</button>
          <div>

          </div>
        </div>
      </form>

    </div>
  )
}
