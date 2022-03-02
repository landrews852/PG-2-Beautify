import React, { useState, useEffect } from "react";
import { postProduct, getCategories } from "../../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import s from "./createProduct.module.css";

export default function CreateProduct() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    product_name: "", // string
    description: "", // TEXT
    stock: "", // integer
    cost_by_unit: "", // float
    image: "", // Array (text)
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

    if (input.image.length < 1) {
      errors.image = "La imagen es requerida";
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

    // setErrors(validate({
    //     ...input,
    //     [e.target.name]: e.target.value
    // }));
  }

  function handleChangeimg(e) {
    setInput({
      ...input,
      image: [e.target.value],
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
      image: "",
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
        <div className={s.form}>
          <div>
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
            <label>Stock:</label>
            <input
              type="integer"
              value={input.stock}
              name="stock"
              onChange={handleChange}
            />
          </div>
          {errors.stock && <p className={s.error}>{errors.stock}</p>}
          <div>
            <label>Descuento:</label>
            <input
              type="integer"
              value={input.discount}
              name="discount"
              onChange={handleChange}
            />
          </div>

          <div>
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

          <div>
            <label>Imagen:</label>
            <input
              type="text"
              value={input.image}
              name="image"
              onChange={handleChangeimg}
            />
          </div>
          {errors.image && <p className={s.error}>{errors.image}</p>}

          <div>
            <label>Garantia:</label>
            <input
              type="text"
              value={input.warranty}
              name="warranty"
              onChange={handleChange}
            />
          </div>
          {errors.warranty && <p className={s.error}>{errors.warranty}</p>}
          <div>
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
