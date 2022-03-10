import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../../../redux/actions";
import DesactiveCategoryCard from "../../../../cards/desactiveCategoryCard/desactiveCategoryCard";
import s from "./desactiveCategory.module.css";

function DesactiveCategory() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(()=>{
    dispatch(getCategories());
  },[])


  return (
    <div className={s.permissionAdmin}>
        <div className="form">
          <h2>Lista de categorias:</h2>
        </div>
      <div className={s.containerData}>
        {categories.length > 0 &&
          categories.map((item) => (
            <DesactiveCategoryCard
              key={item.id}
              id={item.id}
              name={item.name_category}
              disabled={item.disabled}
            />
          ))}
      </div>
    </div>
  );
}

export default DesactiveCategory;
