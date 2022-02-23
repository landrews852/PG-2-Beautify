import React from "react";
import { useState } from "react";
import MarketButton from "../button/MarketButton";

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
    <div>
      <label>Cantidad</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={(e) => handleClickSum(e)}>+</button>
      <button onClick={(e) => handleClickSub(e)}>-</button>
      <MarketButton amount={amount} id={id} />
    </div>
  );
}

export default Amount;
