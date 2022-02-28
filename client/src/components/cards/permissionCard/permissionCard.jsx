import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateClient } from '../../../redux/actions'
import { useAuth0 } from '@auth0/auth0-react'
import "./permissionCard.css"

function PermissionCard({ id, name, lastname, admin }) {
  const dispatch = useDispatch()
  const [status, setStatus] = useState({ id, name, lastname, admin })
  const { getAccessTokenSilently } = useAuth0();

  const handleClick = async (e) => {
    const { value } = e.target
    let data = (value === 'true')
    let clientObject = { id, data }
    const token = await getAccessTokenSilently();
    dispatch(updateClient(clientObject, token))
      .then(res => {
        setStatus({
          ...status,
          admin: res[0].admin
        })
        res[0].admin ? alert("Permiso de admin concedido") : alert("Permiso de admin denegado")
      })

  }

  // useEffect(async () => {
  //   let clientObject = { id, status }
  //   const token = await getAccessTokenSilently();
  //   dispatch(updateClient(clientObject, token))
  //   .then(()=> {
  //     const user = await axios.get(`${apiRoute}/api/client/info`, {
  //       headers: {
  //         authorization: `Bearer ${token}`
  //       }
  //     })
  //   })
  // }, [status])

  return (
    <div className="containerPermission">
      <div className="textPermission">
        <h4>{`${status.name} ${status.lastname}`}</h4>
      </div>
      <div className="buttonPermission">
        {
          status.admin ? <button type="button" onClick={handleClick} value={false}>Quitar admin</button> : <button type="button" onClick={handleClick} value={true}>Dar admin</button>
        }
      </div>
    </div>
  )
}

export default PermissionCard