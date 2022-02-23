import React from "react";
import Button from "../button/button";
import { useState } from "react";

function Amount() {
  const [amount, setAmount] = useState(0);

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
      <Button quote={"AGREGAR"} amount={amount}></Button>
    </div>
  );
}

export default Amount;
