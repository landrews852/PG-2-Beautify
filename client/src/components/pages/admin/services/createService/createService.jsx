import React, { useState, useEffect } from "react";
import { getCategories, postService } from "../../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import s from "./createServices.module.css";
import Swal from "sweetalert2";
import UploadImage from "../../../../cloudinary/UploadImage.jsx";

const validate = (input) => {
  let errors = {};
  if (!input.name_service) {
    errors.name_service = "El nombre es requerido";
  } else if (!/^[A-Z][\s\w\:]{1,35}$/.test(input.name_service)) {
    errors.name_service =
      "El nombre debe empezar en mayuscula y debe tener menos de 35 caracteres y solo acepta el signo ':'";
  }

  if (!input.description) {
    errors.description = "La descripción es requerida";
  } else if (!/^[A-Z][\s\w\W]{1,250}$/.test(input.description)) {
    errors.description =
      "La descripcion debe empezar en mayuscula y debe tener menos de 250 caracteres";
  }

  if (input.image.length < 3) {
    errors.image = "Las 3 imagenes son requeridas";
  }

  if (!input.price) {
    errors.price = "El costo es requerido";
  }

  if (input.category.length < 1) {
    errors.category = "Selecciona una categoria";
  }

  return errors;
};

export default function CreateService() {
  const dispatch = useDispatch();
  // const history = useHistory();
  const categories = useSelector((state) => state.categories);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name_service: "",
    description: "",
    price: "",
    image: [],
    category: [],
  });

  useEffect(() => {
    setErrors(validate(input));
    dispatch(getCategories());
  }, []);

  function handleChangeimg(e, img) {
    setInput({
      ...input,
      image: [...input.image, img],
    });
  }

  useEffect(() => {
    setErrors(validate(input));
  }, [input]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelect(e) {
    setInput({
      ...input,
      category: [...input.category, e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postService(input));
    Swal.fire({
      icon: "success",
      title: "¡Genial!",
      text: "Servicio creado con exito",
    });
    setInput({
      name_service: "",
      description: "",
      price: "",
      image: [],
      category: [],
    });
  }

  function handleDelete(el) {
    setInput({
      ...input,
      category: input.category.filter((d) => d !== el),
    });
  }

  return (
    <div className={s.newService}>
      {/* <Link to="/"><button className={s.button}>Volver</button></Link> */}
      <h2>Agregar nuevo servicio</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={s.form}>
          <div>
            <label>Nombre del Servicio:</label>
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

          <div className="description">
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
            <label>Precio:</label>
            <input
              type="integer"
              value={input.price}
              name="price"
              onChange={handleChange}
            />
          </div>
          {errors.price && <p className={s.error}>{errors.price}</p>}

          <div>
            <UploadImage
              input={input}
              setInput={setInput}
              handleChangeimg={handleChangeimg}
            />

            <UploadImage
              input={input}
              setInput={setInput}
              handleChangeimg={handleChangeimg}
            />

            <UploadImage
              input={input}
              setInput={setInput}
              handleChangeimg={handleChangeimg}
            />
          </div>
          {errors.image && <p className={s.error}>{errors.image}</p>}

          <div>
            <label>Categoria</label>

            <select className={s.cat} onChange={(e) => handleSelect(e)}>
              <option>Selecciones una categoria</option>
              {categories?.map((c) => (
                <option value={c.name_category}>{c.name_category}</option>
              ))}
            </select>
          </div>
          {errors.category && <p className={s.errorcat}>{errors.category}</p>}

          <button
            disabled={Object.values(errors).length > 0}
            className={s.submit}
            type="submit"
          >
            Agregar Servicio
          </button>
        </div>
      </form>
      {/* {input.category.map(el =>
                <div key={el} className="divCats">
                    <p>{el}</p>
                    <button className="bontonX" onClick={() => handleDelete(el)}>X</button>
                </div>
            )} */}
    </div>
  );
}
