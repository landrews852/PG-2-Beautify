import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from "./filter.module.css"
import { priceSort, ratingSort } from '../../redux/actions';

export default function Filter () {

  const categories = useSelector(state => state.categories)
  const brands = useSelector(state => state.brands)

  const dispatch = useDispatch()

  function handleSortByPrice(e) {
    dispatch(priceSort(e.target.value === 'asc'));

  }

  function handleSortByRating(e) {
    dispatch(ratingSort(e.target.value));

  }

  // function handleFilterCategories(e) {
  //   dispatch(filterByCategories(e.target.value));

  // }
  
  function handleFilterOffer(e) {
    dispatch(filterByOffer(e.target.value));

  }

  return (
    <div className={s.filter}>
      <div className={s.selectDiv}>
        <div className={s.selectContainer}>
          <label className="label-filter">Ordenar por precio: </label>
          <select onChange={(e) => handleSortByPrice(e)}>
            <option disabled>Select an option:</option>
            <option hidden>Select an option</option>
            <option value="asc">Menor a mayor</option>
            <option value="desc">Mayor a menor</option>
          </select>
        </div>
          <br/>
        <div className={s.selectContainer}>
          <label className="label-filter">Ordenar por rating: </label>
          <select onChange={(e) => handleSortByRating(e)}>
            <option disabled>Select an option:</option>
            <option hidden>Select an option</option>
            <option value="asc">Menor a mayor</option>
            <option value="desc">Mayor a menor</option>
          </select>
        </div>
        <div className={s.selectContainer}>
          <label className="label-filter">Filtrar por categorías: </label>
          {/* <select className="filter-categories" name="categories" onChange={handleFilterCategories}> */}
          <select className="filter-categories" name="categories" >
            <option disabled>Select an option:</option>
            <option hidden>Select an option</option>
            <option value="all">All</option>
              {categories && categories.length > 0 ? categories.map(e => (
                <option key={e.id} value={e.name} >{e.name}</option>
                )) : null}
          </select>
        </div>
        <div className={s.selectContainer}>
          <label className='label-filter'>Filtrar por marca: </label>
          {/* <select className="filter-brands" name="brands" onChange={handleFilterBrands}> */}
          <select className="filter-brands" name="brands" >
            <option disabled>Select an option:</option>
            <option hidden>Select an option</option>
            <option value="all">All</option>
              {brands && brands.length > 0 ? brands.map(e => (
                <option key={e.id} value={e.name} >{e.name}</option>
                )) : null}
          </select>
        </div>
        <div className={s.checkbox}>
          <input type="checkbox" name="offert" onChange={handleFilterOffer} /> 
          <label className='label-filter'>Filtrar ofertas </label>
        </div>
      </div>
    </div>
  )
}
