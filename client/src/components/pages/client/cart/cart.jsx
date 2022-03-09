import React, { useState } from "react";
import Card from "../../../cards/cartCard/cartCard";
import s from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import Total from "../../../elements/totalCart/totalCart";
import { payProducts } from "../../../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import ConfirmarCompra from "../../../features/confirmarCompra/confirmarCompra";
import ConfirmarDatos from "../../../features/confirmarDatos/confirmarDatos";
import { useNavigate } from "react-router-dom";



export default function Cart() {
  const publicKey = `${process.env.REACT_APP_PUBLIC_KEY}`;
  const locale = `${process.env.REACT_APP_LOCALE}`;
  let productos = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let mercadopago;
  const { user, isAuthenticated } = useAuth0();
  const userlocal = JSON.parse(localStorage.getItem("user"));
  let Items = userlocal ? { productos: productos, user: userlocal[0] } : null;
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState (false)
  const navigate = useNavigate ()

  const handleClick = async () => {
    if (!isAuthenticated) {
      return Swal.fire({
        icon: "warning",
        title: "Espera!!",
        text: "Por favor inicia sesión...",
      });
    } else if (!user.email_verified) {
      return Swal.fire({
        icon: "warning",
        title: "Espera!!",
        text: "Por favor verifica tu correo, revisa no deseados...",
      });
    } else if (!productos.length) {
      return Swal.fire({
        icon: "warning",
        title: "Espera!!",
        text: "Agrega productos al carrito...",
      });
    }

    if (isAuthenticated) {
      const token = await getAccessTokenSilently();
      dispatch(getUserInfo(token)).then(u => {
        if(u[0].disabled){
          Swal.fire({
            icon: "error",
            title: "¡Bloqueado!",
            text: "Se ha detectado actividad sospechosa y/o inapropiada, por favor comuniquese con nosotros.",
          }).then(result =>{
            if (result.isConfirmed) {
              logout();
              localStorage.clear();
            } else {
              logout();
              localStorage.clear();
            }
          })
        }
      })
    }

    setModalShow(true);
  };
  const onPay = () => {
    setModalShow(false);
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.addEventListener("load", () => {
      mercadopago = new window.MercadoPago(publicKey, {
        locale: locale,
      });
    });
    document.body.appendChild(script);

    dispatch(payProducts(Items)).then((res) => {
      mercadopago.checkout({
        preference: {
          id: res.data.id,
        },
        autoOpen: true,
      });
    });
  }
  const  onData = ()=>{
    console.log  (userlocal)
    setModalShow (false)
    setModalShow2 (true) 
  }

  return (
    <div className={s.cart}>
      <h2 className={s.title}>Carrito de compras</h2>
      {/* <div className={s.cart}> */}
      <div className={s.cartItems}>
        {productos.length ? (
          productos.map((p) => (
            <Card
              product_name={p.product_name}
              id={p.id}
              cost_by_unit={p.cost_by_unit}
              image={p.image[0]}
              key={p.id}
              amount={p.amount}
              total={p.total}
              stock={p.stock}
            />
          ))
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
        <div className={s.total}>
          <Total />
        </div>
      </div>
      <div>
        <button className={s.btnpay} onClick={handleClick}>
          Pagar
        </button>
      </div>
      <ConfirmarCompra
        show={modalShow}
        onHide={() => setModalShow(false)}
        onData= {()=>onData()}
        productos={productos}
        /* fullscreen={true} */
        scrollable={true}
        animation={true}
        backdrop={'static'}
        centered={true}        
      />
      {userlocal?
      <ConfirmarDatos
      show={modalShow2}
      onHide={() => {
        setModalShow2(false)
        setModalShow (true)
      }}
      user={userlocal[0]}
      onPay= {()=> onPay() }
      scrollable={true}
      animation={true}
      backdrop={'static'}
      centered={true}    
      />:null
      }
      </div>
      );
    }
    
