import React, { useState, useEffect } from "react";
import { postProduct, getCategories } from "../../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import s from "./createProduct.module.css";
import UploadImage from "../../../../cloudinary/UploadImage.jsx";

export default function CreateProduct() {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");

  const categories = useSelector((state) => state.categories);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    product_name: "", // string
    description: "", // TEXT
    stock: "", // integer
    cost_by_unit: "", // float
    image: [], // Array (text)
    warranty: "", // integer
    brand: "", // string
    discount: "", // INTEGER
    category: [], // Array
  });

  const validate = (input) => {
    let errors = {};
    if (!input.product_name) {
      errors.product_name = "El nombre es requerido";
    } else if (!/^[A-Z][\s\w\:]{1,35}$/.test(input.product_name)) {
      errors.product_name =
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

    if (!input.cost_by_unit) {
      errors.cost_by_unit = "El costo es requerido";
    }

    if (!input.stock) {
      errors.stock = "Inventario inicial es requerido";
    }

    if (!input.warranty) {
      errors.warranty = "La garantia es requerida";
    }

    if (!input.brand) {
      errors.brand = "La marca es requerido";
    }

    if (input.category.length < 1) {
      errors.category = "Selecciona una categoria";
    }

    return errors;
  };

  useEffect(() => {
    setErrors(validate(input));
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    setErrors(validate(input));
  }, [input]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleChangeimg(e, img) {
    setInput({
      ...input,
      image: [...input.image, img],
    });
  }

  function handleSelect(e) {
    setInput({
      ...input,
      category: [e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postProduct(input));
    alert("The product was added successfully!");
    setInput({
      product_name: "",
      description: "",
      stock: "",
      cost_by_unit: "",
      image: [],
      warranty: "",
      brand: "",
      discount: "",
      category: [],
    });
    // history.push("/home")
  }

  function handleDelete(el) {
    setInput({
      ...input,
      category: input.category.filter((d) => d !== el),
    });
  }

  return (
    <div className={s.new}>
      {/* <Link to="/"><button className={s.button}>Volver</button></Link> */}
      <h2>Agregar nuevo producto</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <div className={s.input}>
            <label>Nombre del producto:</label>
            <input
              type="text"
              value={input.product_name}
              name="product_name"
              onChange={handleChange}
            />
            {errors.product_name && (
              <p className={s.error}>{errors.product_name}</p>
            )}
          </div>

          <div className={s.input}>
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

          <div className={s.input}>
            <label>Stock:</label>
            <input
              type="integer"
              value={input.stock}
              name="stock"
              onChange={handleChange}
            />
          </div>
          {errors.stock && <p className={s.error}>{errors.stock}</p>}
          <div className={s.input}>
            <label>Descuento:</label>
            <input
              type="integer"
              value={input.discount}
              name="discount"
              onChange={handleChange}
            />
          </div>

          <div className={s.input}>
            <label>Costo por unidad:</label>
            <input
              type="integer"
              value={input.cost_by_unit}
              name="cost_by_unit"
              onChange={handleChange}
            />
          </div>
          {errors.cost_by_unit && (
            <p className={s.error}>{errors.cost_by_unit}</p>
          )}

          <div className={s.uploadImage}>
            <label>Imagenes:</label>
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

          <div className={s.input}>
            <label>Garantia:</label>
            <input
              type="text"
              value={input.warranty}
              name="warranty"
              onChange={handleChange}
            />
          </div>
          {errors.warranty && <p className={s.error}>{errors.warranty}</p>}
          <div className={s.input}>
            <label>Marca:</label>
            <input
              type="text"
              value={input.brand}
              name="brand"
              onChange={handleChange}
            />
          </div>
          {errors.brand && <p className={s.error}>{errors.brand}</p>}
          <div>
            <label>Seleccione las Categorias</label>

            <select className={s.cat} onChange={(e) => handleSelect(e)}>
              <option>Selecciones una categoria</option>
              {categories.map((category, index) => (
                <option key={category.id} value={category.name_category}>
                  {category.name_category}
                </option>
              ))}
            </select>
          </div>

          {errors.category && <p className={s.error}>{errors.category}</p>}

          <button
            disabled={Object.values(errors).length > 0}
            className={s.submit}
            type="submit"
          >
            Agregar Producto
          </button>
        </div>
      </form>
      {/* {input.category.map(el =>
                <div key={el.id} className="divCats">
                    <p>{el}</p>
                    <button className="bontonX" onClick={() => handleDelete(el)}>X</button>
                </div>
            )} */}
    </div>
  );
}
