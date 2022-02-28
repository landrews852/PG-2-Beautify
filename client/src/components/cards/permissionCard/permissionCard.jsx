import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateClient } from '../../../redux/actions'
import "./permissionCard.css"

function PermissionCard({ id, name, lastname, admin }) {
  const dispatch = useDispatch()
  const [status, setStatus] = useState(admin)

  const handleClick = (e) => {
    const { value } = e.target
    let data = (value === 'true')
    setStatus(data)
  }

  useEffect(() => {
    let clientObject = { id, status }
    dispatch(updateClient(clientObject))
  }, [status])

  return (
    <div className="containerPermission">
      <div className="textPermission">
        <h4>{`${name} ${lastname}`}</h4>
      </div>
      <div className="buttonPermission">
        {
          status ? <button type="button" onClick={handleClick} value={false}>Quitar admin</button> : <button type="button" onClick={handleClick} value={true}>Dar admin</button>
        }
      </div>
    </div>
  )
}

export default PermissionCard