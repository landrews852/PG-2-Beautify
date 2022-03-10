import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import UploadImage from "../../../../cloudinary/UploadImage.jsx";
import s from "./editProduct.module.css";
import {
  allProducts,
  editProduct,
  getCategories,
  getProductDetail,
} from "../../../../../redux/actions";

export default function EditProduct({ id }) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const categories = useSelector((state) => state.categories);
  let productDetail = useSelector((state) => state.productDetail);
  const [input, setInput] = useState("");
  useEffect(() => {
    setInput({
      ...input,
      product_name: productDetail.product_name, // string
      description: productDetail.description, // TEXT
      stock: productDetail.stock, // integer
      cost_by_unit: productDetail.cost_by_unit, // float
      image: productDetail.image, // Array (text)
      warranty: productDetail.warranty, // integer
      brand: productDetail.brand, // string
      discount: productDetail.discount, // INTEGER
      category: productDetail.category, // Array
    });
  }, [productDetail]);
  console.log(input.image);
  const products = useSelector((state) => state.allProducts);

  const validate = (input) => {
    let errors = {};
    if (!input.product_name) {
      errors.product_name = "El nombre es requerido";
    } else if (!/^[a-z][\s\w]{1,35}$/.test(input.product_name)) {
      errors.product_name =
        "El nombre debe tener menos de 35 caracteres";
    }

    if (!input.description) {
      errors.description = "La descripción es requerida";
    } else if (!/^[A-Z][\s\w\W]{1,250}$/.test(input.description)) {
      errors.description =
        "La descripcion debe empezar en mayuscula y debe tener menos de 250 caracteres";
    }

    if (!input.image) {
      errors.image = "La imagen es requerida";
    }

    if (!input.cost_by_unit) {
      errors.cost_by_unit = "El costo es requerido";
    } else if (!/^(\d*(?:\.\d+)?)[\.\d]*$/.test(input.cost_by_unit)) {
      errors.cost_by_unit = "El costo debe ser un numero entero o decimal";
    }

    if (!input.stock) {
      errors.stock = "Inventario inicial es requerido";
    } else if (!/^[0-9]*$/.test(input.stock)) {
      errors.stock = "El valor de inventario debe ser un numero entero";
    }

    if (!input.warranty) {
      errors.warranty = "La garantia es requerida";
    } else if (!/^[0-9]*$/.test(input.warranty)) {
      errors.warranty = "La garantia debe ser un numero entero";
    }

    if (!input.brand) {
      errors.brand = "La marca es requerido";
    }

    if (input.category < 1) {
      errors.category = "Selecciona una categoria";
    }

    return errors;
  };

  useEffect(() => {
    setErrors(validate(input));
  }, [input]);

  useEffect(() => {
    dispatch(getCategories());
    !productDetail.product_name && dispatch(allProducts());
  }, []);

  function handleChangeimg(e, img) {
    console.log(e.target.name);
    if (e.target.name == "0") {
      const newInput = input.image;
      newInput[0] = img;
      setInput({
        ...input,
        image: [...newInput],
      });
    }
    if (e.target.name == "1") {
      const newInput = input.image;
      newInput[1] = img;
      setInput({
        ...input,
        image: [...newInput],
      });
    }
    if (e.target.name == "2") {
      const newInput = input.image;
      newInput[2] = img;
      setInput({
        ...input,
        image: [...newInput],
      });
    }
  }

  function handleSelect(e) {
    setInput({
      ...input,
      category: [e.target.value],
    });
  }

  function selectProduct(e) {
    dispatch(getProductDetail(e.target.value));
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(editProduct(productDetail.id, input));
    Swal.fire({
      icon: "success",
      title: "¡Genial!",
      text: "Producto editado con exito",
    });
  }

  return (
    <>
      <div className={s.new}>
        <select
          className={s.cat}
          name="productos"
          id="productos"
          onChange={(e) => selectProduct(e)}
        >
          <option value="">Seleccione un producto</option>
          {products?.map((p) => (
            <option value={p.id} selected={id ? p.id == id : false}>
              {p.product_name}
            </option>
          ))}
        </select>
      </div>
      {typeof input.product_name === "string" ? (
        <div className={s.new}>
          <h2>Editar un producto</h2>
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

              <label>Imagenes:</label>
              <UploadImage
                input={input}
                setInput={setInput}
                handleChangeimg={handleChangeimg}
                name={"0"}
              />
              <UploadImage
                input={input}
                setInput={setInput}
                handleChangeimg={handleChangeimg}
                name={"1"}
              />
              <UploadImage
                input={input}
                setInput={setInput}
                handleChangeimg={handleChangeimg}
                name={"2"}
              />

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
              <div hidden={true}>
                <label>Seleccione las Categorias</label>

                <select className={s.cat} onChange={(e) => handleSelect(e)}>
                  <option>Seleccione una categoria</option>
                  {categories.map((category) => {
                    return (
                      <option
                        key={category.id}
                        value={category.id}
                        selected={
                          input.category.name_category ===
                          category.name_category
                        }
                      >
                        {category.name_category}
                      </option>
                    );
                  })}
                </select>

                {errors.category && (
                  <p className={s.error}>{errors.category}</p>
                )}
              </div>

              <button
                disabled={Object.values(errors).length > 0}
                className={s.submit}
                type="submit"
              >
                Modificar Producto
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
