import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postCategory } from "../../../../../redux/actions";
import s from "./createCategory.module.css";
import Swal from "sweetalert2";

const validate = (nameCategory) => {
  let errors = {};

  if (!nameCategory.name_category) {
    errors.name_category = "El nombre es requerido";
  }

  return errors;
};

function CreateCategory() {
  const dispatch = useDispatch();
  const [nameCategory, setNameCategory] = useState({ name_category: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validate(nameCategory));
  }, [nameCategory]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postCategory(nameCategory));
    Swal.fire({
      icon: "success",
      title: "¡Genial!",
      text: "Categoria creada con exito",
    });
    setNameCategory({
      name_category: "",
    });
  }

  function handleChange(e) {
    setNameCategory({
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div>
      <h2>Agregar una nueva categoria</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={s.form}>
          <label>Nombre de la categoria:</label>
          <input
            type="text"
            value={nameCategory.name_category}
            name="name_category"
            onChange={handleChange}
          />
        </div>
        {errors.name_category && (
          <p className={s.error}>{errors.name_category}</p>
        )}
        <button
          className={s.submit}
          disabled={Object.values(errors).length > 0}
          type="submit"
        >
          Agregar categoria
        </button>
      </form>
    </div>
  );
}

export default CreateCategory;
