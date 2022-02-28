import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchEmail } from '../../../../redux/actions'
import PermissionCard from '../../../cards/permissionCard/permissionCard'
import s from "./giveAdmin.module.css"

function GiveAdmin() {
  const dispatch = useDispatch()
  const [input, setInput] = useState("")
  const [data, setData] = useState([])

  const handleChange = (e) => {
    const { value } = e.target
    setInput(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(searchEmail(input))
      .then(res => {
        setData(res.data)
      })
  }

  return (
    <div className={s.permissionAdmin}>
      <form onSubmit={handleSubmit}>
        <h2>Buscar por correo:</h2>
        <input
          type="text"
          name="search_name"
          value={input}
          onChange={handleChange} />
        <button type="submit" >Buscar</button>
      </form>
      <div className={s.containerData}>
        {/* <label>{`Tengo en data: ${data.length} usuarios`}</label> */}
        {
          data.length > 0 && data.map(item =>
            <PermissionCard key={item.id} id={item.id} name={item.name_client} lastname={item.lastname_client} admin={item.admin} />
          )
        }
      </div>
    </div>
  )
}

export default GiveAdmin
