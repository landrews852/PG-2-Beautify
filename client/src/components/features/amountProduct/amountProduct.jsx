import React, { useState } from "react";
import { updateCart } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import MarketButton from "../../elements/buttons/marketButton/marketButton";
import s from "./amountProduct.module.css";


function Amount({ id, stock, amountCart=1, cart=false }) {
  let products = useSelector((state) => state.cart);
  const product = products.find((p) => p.id === id);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(amountCart);

  const handleClickSum = (e) => {
    e.preventDefault();
    if (amount < stock){ setAmount(amount + 1);
    cart && dispatch(updateCart({ ...product, amount: amount +1 }));
    }
  };
  const handleInputBlur= (e)=>{
    let newAmount = e.target.value;
    console.log (newAmount)
    if (newAmount=== '') {
      setAmount (1)
      newAmount= 1
    }  
    else if (parseInt(newAmount) < 1 ) {
      setAmount (1)
      newAmount=1
    }  
    cart && dispatch(updateCart({ ...product, amount: newAmount }));
  }

  const handleClickSub = (e) => {
    e.preventDefault();
    if (amount <= 1) return setAmount (1);
    else {
      setAmount(amount - 1);
      cart && dispatch(updateCart({ ...product, amount: amount -1 }));
    }
    
  };

  const handleInputChange = (e) => {
    let newAmount = parseInt(e.target.value)
    if (stock > newAmount) setAmount(newAmount);
    if (newAmount<1){
     setAmount (1);
     newAmount= 1
    }
    if  (newAmount=== '') {
      setAmount (1)
      newAmount= 1
    } 
    if (newAmount>=stock) {
    setAmount(stock)
    newAmount = stock
    }
    if (!newAmount ){
      setAmount (' ')
      newAmount = 0
    } 
    cart && dispatch(updateCart({ ...product, amount: newAmount }));

    
  };
  if (!stock){
  return  <div className={s.agotado} ><h3 style={{color:'red'}}>AGOTADO!</h3></div>
  }else return (
    <div className={s.quantity}>
      <p>CANTIDAD MAX : {stock}</p>
      <button className={s.btnn} onClick={(e) => handleClickSub(e)}>
        -
      </button>
      <input
        type="number"
        value={amount}
        onChange={(e) => handleInputChange(e)}
        onBlur= {(e)=>handleInputBlur (e)}
      />
      <button className={s.btnn} onClick={(e) => handleClickSum(e)}>
        +
      </button>
      <div className={s.marketbutton}>
       {!cart && <MarketButton amount={amount} id={id} />}
      </div>
    </div>
  );
}

export default Amount;