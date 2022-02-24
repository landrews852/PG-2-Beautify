import React from "react";
import { useState } from "react";
<<<<<<< HEAD:client/src/components/amountProduc/Amount.jsx
import MarketButton from "../button/MarketButton";
import { useSelector } from "react-redux";
import { useLocalStorage } from "../localStorage/useLocalStorage";
=======
import MarketButton from "../../elements/buttons/marketButton/marketButton";
>>>>>>> 8a9d5bdc48c86682abbcdae7ca66503d1c76e0d4:client/src/components/features/amountProduct/amountProduct.jsx

function Amount({ id }) {
  const [amount, setAmount] = useLocalStorage("amount", 1);

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
