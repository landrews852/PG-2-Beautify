import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateProduct from "./createProduct/createProduct";
import EditProduct from "./editProduct/editProduct";
import s from "./product.module.css"


export default function EditCarousel() {
  const [action, setAction] = useState('')
  let section

  function handleSelect(e) {
    const { value } = e.target
    setAction(value)
  }

  if (action === 'add') {
    section = <CreateProduct />
  } else if (action === 'edit') {
    section = <EditProduct />
  }

  return (
    <div className={s.new}>
      <div className={s.carousel}>
        <label>Seleccione si desea Agregar o Eliminar</label>
        <select className={s.cat} onChange={(e) => handleSelect(e)}>
          <option hidden>Seleccione una opcion</option>
          <option key='1' value='add'>Agregar</option>
          <option key='2' value='edit'>Editar</option>
        </select>
        {section}
      </div>
    </div>
  )
}