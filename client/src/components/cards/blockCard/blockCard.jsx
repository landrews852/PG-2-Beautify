import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { blockClient } from '../../../redux/actions'
import Swal from "sweetalert2";
import { useAuth0 } from '@auth0/auth0-react'
import "./blockCard.css"

function BlockCard({ id, name, lastname,disabled }) {
  const dispatch = useDispatch()
  const [status, setStatus] = useState({ id, name, lastname, disabled})
  const { getAccessTokenSilently } = useAuth0();

  const handleClick = async (e) => {
    const { value } = e.target
    let data = (value === 'true')
    let clientObject = { id, data }
    const token = await getAccessTokenSilently();
    dispatch(blockClient(clientObject, token))
      .then(res => {
        setStatus({
          ...status,
          disabled: res[0].disabled
        })
        res[0].disabled ? Swal.fire({
          icon: "success",
          title: "¡Bloqueado!",
          text: "El usuario ha sido bloqueado",
        }) : Swal.fire({
          icon: "success",
          title: "¡Desbloqueado!",
          text: "El usuario ha sido desbloqueado",
        })
      })

  }

  return (
    <div className="containerPermission">
      <div className="textPermission">
        <h4>{`${status.name} ${status.lastname}`}</h4>
      </div>
      <div className="buttonPermission">
        {
          status.disabled ? <button id="buttonStatus" type="button" onClick={handleClick} value={false}>Desbloquear</button> : <button id="buttonStatus" type="button" onClick={handleClick} value={true}>Bloquear</button>
        }
      </div>
    </div>
  )
}

export default BlockCard