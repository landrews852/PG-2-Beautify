import React, { useState } from "react";
import MarketButton from "../../elements/buttons/marketButton/marketButton";
import s from "./amountMarket.module.css";

function Amount({ id, stock }) {
  const [amount, setAmount] = useState(1);

  // console.log(stock);

  const handleClickSum = (e) => {
    e.preventDefault();
    // if (amount < stock)
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
      <p>CANTIDAD</p>
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
      <div className={s.marketbutton}>
        <MarketButton amount={amount} id={id} />
      </div>
    </div>
  );
}

export default Amount;
