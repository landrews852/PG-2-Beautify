import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import s from "./editProduct.module.css";
import { allProducts, editProduct, getCategories, getProductDetail } from "../../../../../redux/actions";

export default function EditProduct({id}) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const categories = useSelector((state) => state.categories);
  let productDetail = useSelector( state => state.productDetail )
  const [input, setInput] = useState('')
  useEffect(()=>{
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
  },[productDetail])
  
  const products = useSelector( state => state.allProducts )

  const validate = (input) => {
    let errors = {};
    if (!input.product_name) {
      errors.product_name = "El nombre es requerido";
    } 

    if (!input.description) {
      errors.description = "La descripción es requerida";
    } 

    if (!input.image) {
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
    !productDetail.product_name && dispatch(allProducts())
  }, []);

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

  function selectProduct(e) {
    dispatch(getProductDetail(e.target.value))
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
          <select className={s.cat} name="productos" id="productos" onChange={(e) => selectProduct(e)}>
            <option value="">Seleccione un producto</option>
            {products?.map( (p) => <option value={ p.id } selected={ id ? (p.id == id) :false}>{ p.product_name }</option>)}
          </select>
      </div>
      { typeof input.product_name === 'string' ? (
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
            {errors.stock && <p className={s.error}>{productDetail.stock}</p>}
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
            <div hidden={true}>
              <label>Seleccione las Categorias</label>

              <select className={s.cat} onChange={(e) => handleSelect(e) }>
                <option>Seleccione una categoria</option>
                {categories.map((category) => {
                  return <option key={category.id} value={category.id} selected={ (input.category.name_category === category.name_category) }>
                            {category.name_category}
                          </option>
                })}
              </select>

            {errors.category && <p className={s.error}>{errors.category}</p>}
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
      ) : null }
    </>
  );
}
