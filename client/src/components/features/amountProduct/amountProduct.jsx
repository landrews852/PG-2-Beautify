import React, { useState } from "react";
import MarketButton from "../../elements/buttons/marketButton/marketButton";
import s from "./amountProduct.module.css";

function Amount({ id }) {
  const [amount, setAmount] = useState(1);

  const handleClickSum = (e) => {
    e.preventDefault();
    setAmount(amount + 1);
  };

  const handleClickSub = (e) => {
    e.preventDefault();
    if (amount <= 1) return null;
    else {
      setAmount(amount - 1);
    }
  };

  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className={s.quantity}>
      <button className={s.btnn} onClick={(e) => handleClickSub(e)}>
        -
      </button>
      <input
        type="number"
        value={amount}
        onChange={(e) => handleInputChange(e)}
      />
      <button className={s.btnn} onClick={(e) => handleClickSum(e)}>
        +
      </button>
      <MarketButton amount={amount} id={id} />
    </div>
  );
}

export default Amount;
