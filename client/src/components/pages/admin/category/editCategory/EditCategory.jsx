import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import s from "./editCategory.module.css";
import { putCategory, getCategories } from "../../../../../redux/actions";

export default function EditCategory({ id }) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [nameCategory, setNameCategory] = useState({ name_category: "" });
  const [categoryDetail, setcategoryDetail] = useState("");
  const categories = useSelector((state) => state.categories);
  const validate = (nameCategory) => {
    let errors = {};

    if (!nameCategory.name_category) {
      errors.name_category = "El nombre es requerido";
    }

    return errors;
  };

  useEffect(() => {
    setNameCategory({
      name_category: categoryDetail.name_category,
    });
  }, [categoryDetail]);

  useEffect(() => {
    setErrors(validate(nameCategory));
  }, [nameCategory]);

  useEffect(() => {
    dispatch(getCategories());
    !categoryDetail.name_category && dispatch(getCategories());
  }, []);

  function handleChange(e) {
    setNameCategory({
      [e.target.name]: e.target.value,
    });
  }

  function selectCategory(e) {
    let id = e.target.value;
    let find = categories.find((category) => category.id == id);
    setcategoryDetail(find);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if(Object.keys(errors).length>0){
      Swal.fire({
        icon: "warning",
        title: "¡Cuidado!",
        text: "Nombre de categoria incorrecto",
      });
    }else{
      dispatch(putCategory(categoryDetail.id, nameCategory));
      Swal.fire({
        icon: "success",
        title: "¡Genial!",
        text: "Categoria editada con exito",
      });
    }
  }

  return (
    <>
      {categories.length > 0 ? (
        <div className={s.new}>
          <select
            className={s.cat}
            name="category"
            id="category"
            onChange={(e) => selectCategory(e)}
          >
            <option value="" hidden>Seleccione un categoria</option>
            {categories?.map((c) => (
              <option value={c.id} selected={id ? c.id == id : false}>
                {c.name_category}
              </option>
            ))}
          </select>
        </div>
      ) : null}
      {typeof nameCategory.name_category === "string" ? (
        <div className={s.newCategory}>
          <h2>Editar Categoria</h2>
          <div className={s.container}>
            <div className={s.profileform}>
              <form onSubmit={handleSubmit}>
                <div className={s.form}>
                  <div>
                    <label>Nombre:</label>
                    <input
                      type="text"
                      value={nameCategory.name_category}
                      name="name_category"
                      onChange={handleChange}
                    />
                    {errors.name_category && (
                      <p className={s.error}>{errors.name_category}</p>
                    )}
                  </div>

                  <button className={s.submit} type="submit">
                    Guardar cambios
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
