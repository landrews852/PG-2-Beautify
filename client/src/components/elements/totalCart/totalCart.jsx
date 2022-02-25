import React from "react";
import { useSelector } from "react-redux";
import s from "./totalCart.module.css"


export default function Total() {
  let products = useSelector((state) => state.cart);
  let sum = 0;

  products.forEach((s) => {
    sum = sum + s.total * s.amount;
  });

  return (
    <div>
      {products.length > 0 ? (
        <>
          <h4 className={s.totall}>Total: {parseFloat(sum.toFixed(2))}</h4>
        </>
      ) : (
        <h2 className={s.msg}>¿Ya viste nuestras ofertas? Intenta agregar un producto</h2>
      )}
    </div>
  );
}

// json.forEach(function (elemento, indice) {
//   suma += elemento["Edad"];
// });
// console.log("las edades suman: " + suma);
