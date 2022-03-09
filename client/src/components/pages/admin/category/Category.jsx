import React, { useState } from "react";
import CreateCategory from "./createCategory/CreateCategory";
import EditCategory from "./editCategory/EditCategory";
import s from "./category.module.css";

export default function Category() {
  const [action, setAction] = useState("");
  let section;

  function handleSelect(e) {
    const { value } = e.target;
    setAction(value);
  }

  if (action === "add") {
    section = <CreateCategory />;
  } else if (action === "edit") {
    section = <EditCategory />;
  }

  return (
    <div className={s.new}>
      {/* <Link to="/"><button className={s.button}>Volver</button></Link> */}
      <div className={s.carousel}>
        <label>Seleccione si desea Agregar o Eliminar</label>
        <select className={s.cat} onChange={(e) => handleSelect(e)}>
          <option hidden>Seleccione una opcion</option>
          <option key="1" value="add">
            Agregar
          </option>
          <option key="2" value="edit">
            Editar
          </option>
          {/* <option key='3' value='order'>Ordenar</option> */}
        </select>
        {section}
      </div>
    </div>
  );
}
