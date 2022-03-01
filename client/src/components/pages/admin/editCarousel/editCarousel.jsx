import React, { useState } from "react";
import s from "./editCarousel.module.css";
import AddImageCarousel from "./addImageCarousel/addImageCarousel";
import RemoveImageCarousel from "./removeImageCarousel/removeImageCarousel";
//import OrderImageCarousel from "./orderImageCarousel/orderImageCarousel";

export default function EditCarousel() {
  const [action, setAction] = useState("");
  let section;

  function handleSelect(e) {
    const { value } = e.target;
    setAction(value);
  }

  if (action === "add") {
    section = <AddImageCarousel />;
  } else if (action === "delete") {
    section = <RemoveImageCarousel />;
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
          <option key="2" value="delete">
            Eliminar
          </option>
          {/* <option key='3' value='order'>Ordenar</option> */}
        </select>
        {section}
      </div>
    </div>
  );
}
