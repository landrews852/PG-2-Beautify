import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { desactiveCategory } from '../../../redux/actions'
import Swal from "sweetalert2";
import { useAuth0 } from '@auth0/auth0-react'
import "./desactiveCategoryCard.css"

function DesactiveCategoryCard({ id, name ,disabled }) {
  const dispatch = useDispatch()
  const [status, setStatus] = useState({ id, name, disabled})

  const handleClick = async (e) => {
    const { value } = e.target
    let data = (value === 'true')
    let categoryObject = { id, data }
    dispatch(desactiveCategory(categoryObject))
      .then(res => {
        setStatus({
          ...status,
          disabled: res[0].disabled
        })
        res[0].disabled ? Swal.fire({
          icon: "success",
          title: "¡Desactivada!",
          text: "La categoria ha sido desactivada",
        }) : Swal.fire({
          icon: "success",
          title: "¡Activada!",
          text: "La categoria ha sido activada",
        })
      })
    console.log(categoryObject)

  }

  return (
    <div className="containerPermission">
      <div className="textPermission">
        <h4>{`${status.name}`}</h4>
      </div>
      <div className="buttonPermission">
        {
          status.disabled ? (
            <button id="buttonStatus" type="button" onClick={handleClick} value={false}>Activar</button> 
          ) : (
            <button id="buttonStatus" type="button" onClick={handleClick} value={true}>Desactivar</button>
          )
        }
      </div>
    </div>
  )
}

export default DesactiveCategoryCard