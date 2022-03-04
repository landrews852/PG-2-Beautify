import React, { useState } from "react";
import s from "./amountProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../../redux/actions";

function AmountCart({ amount, id, stock }) {
  let products = useSelector((state) => state.cart);
  const product = products.find((p) => p.id === id);

  const dispatch = useDispatch();

  const handleClickSum = (e) => {
    e.preventDefault();
    if (amount < parseInt(stock)) {
      dispatch(updateCart({ ...product, amount: parseInt(amount) + 1 }));
    }
  };

  const handleClickSub = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      dispatch(updateCart({ ...product, amount: 1 }));
    }
    if (amount <= 1) return null;
    dispatch(updateCart({ ...product, amount: parseInt(amount) - 1 }));
  };

  const handleInputChange = (e) => {
    e.preventDefault();

    dispatch(updateCart({ ...product, amount: parseInt(e.target.value) }));

    // stock <= amount
    //   ? dispatch(updateCart({ ...product, amount: parseInt(e.target.value) }))
    //   : dispatch(updateCart({ ...product, amount: parseInt(stock) }));
  };

  return (
    <div className={s.quantity}>
      <p>CANTIDAD</p>
      <button className={s.btnn} onClick={(e) => handleClickSub(e)}>
        -
      </button>

      <input
        type="number"
        placeholder={amount ? amount : ""}
        value={amount ? amount : 1}
        onChange={(e) => handleInputChange(e)}
        key={id}
      />

      <button className={s.btnn} onClick={(e) => handleClickSum(e)}>
        +
      </button>
      <div className={s.marketbutton}></div>
    </div>
  );
}

export default AmountCart;
