import React from "react";
import s from "./amountProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../../redux/actions";

function AmountCart({ amount, id, stock }) {
  let products = useSelector((state) => state.cart);
  const product = products.find((p) => p.id === id);
  const dispatch = useDispatch();

  const handleClickSum = (e) => {
    e.preventDefault();
    if (stock > amount) {
      dispatch(updateCart({ ...product, amount: parseInt(amount) + 1 }));
    }
  };

  const handleClickSub = (e) => {
    e.preventDefault();
    if (amount > 1) {
      dispatch(updateCart({ ...product, amount: parseInt(amount) - 1 }));
    } else {
      return null;
    }
  };

  const handleInputChange = (e) => {
    let newAmount = parseInt(e.target.value);
    if (stock > newAmount)
      dispatch(updateCart({ ...product, amount: newAmount }));
    else if (newAmount <= 0 || amount == "")
      dispatch(updateCart({ ...product, amount: 1 }));
  };

  return (
    <div className={s.quantity}>
      <p>CANTIDAD</p>
      <button className={s.btnn} onClick={(e) => handleClickSub(e)}>
        -
      </button>

      <input
        type="number"
        // placeholder={amount}
        value={amount}
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
