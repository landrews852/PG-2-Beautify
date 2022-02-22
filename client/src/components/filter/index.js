import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./filter.module.css";
import {
  priceSort,
  nameSort,
  filterByOffer,
  filterBrand,
  filterCategory,
  getCategories,
  getBrands,
} from "../../redux/actions";

export default function Filter({ Paginate }) {
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);
  const brands = useSelector((state) => state.brands);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getBrands());
  }, [dispatch]);

  function handleSortByPrice(e) {
    dispatch(priceSort(e.target.value));
  }

  function handleSortByName(e) {
    dispatch(nameSort(e.target.value));
  }

  function handleFilterCategories(e) {
    dispatch(filterCategory(e.target.value));
  }

  function handleFilterBrands(e) {
    dispatch(filterBrand(e.target.value));
  }

  function handleFilterOffer(e) {
    dispatch(filterByOffer(e.target.value));
  }

  return (
    <div className={s.filter} onChange={() => Paginate(1)}>
      <div className={s.selectDiv}>
        <div className={s.selectContainer}>
          <label className="label-filter">Ordenar por precio: </label>
          <select
            className={s.select}
            name="precio"
            onChange={(e) => handleSortByPrice(e)}
          >
            <option disabled>Selecciona una opción:</option>
            <option hidden>Selecciona una opción</option>
            <option value="ASC">Menor a mayor</option>
            <option value="DESC">Mayor a menor</option>
          </select>
        </div>
        <br />
        <div className={s.selectContainer}>
          <label className="label-filter">Ordenar por nombre: </label>
          <select
            className={s.select}
            name="name"
            onChange={(e) => handleSortByName(e)}
          >
            <option disabled>Selecciona una opción:</option>
            <option hidden>Selecciona una opción</option>
            <option value="ASC">Ascendente</option>
            <option value="DESC">Descendente</option>
          </select>
        </div>
        <br />
        <div className={s.selectContainer}>
          <label className="label-filter">Filtrar por categorías: </label>
          <select
            className={s.select}
            name="categories"
            onChange={handleFilterCategories}
          >
            <option disabled>Selecciona una opción:</option>
            <option hidden>Selecciona una opción</option>
            <option value="">Todas</option>
            {categories && categories.length > 0
              ? categories.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.name_category}
                  </option>
                ))
              : null}
          </select>
        </div>
        <br />
        <div className={s.selectContainer}>
          <label className="label-filter">Filtrar por marca: </label>
          <select
            className={s.select}
            name="brands"
            onChange={handleFilterBrands}
          >
            <option disabled>Selecciona una opción:</option>
            <option hidden>Selecciona una opción</option>
            <option value="">Todas</option>
            {brands && brands.length > 0
              ? brands.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))
              : null}
          </select>
        </div>
        <div className={s.selectContainer}>
          <button name="offert" onClick={handleFilterOffer}>
            Ver ofertas
          </button>
          {/* <label className="label-filter">ofertas</label>           */}
        </div>
      </div>
    </div>
  );
}
