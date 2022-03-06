import React from 'react';
import s from './postreview.module.css'

export default function PostReview() {

    return (
        <>
        <h2>Publicar reviews</h2>
        <div className={s.container}>
      <form onSubmit="">
        <div className="form">
          <h2>Buscar producto:</h2>
          <input
            type="text"
            name="search_name"
            value=""
            
          />
          <button className="submit" type="submit">
            Buscar
          </button>
        </div>
      </form>
      <div className={s.containerData}>
        {/* <label>{`Tengo en data: ${data.length} usuarios`}</label> */}
        {/* {data.length > 0 &&
          data.map((item) => (
            <PermissionCard
              key={item.id}
              id={item.id}
              name={item.name_client}
              lastname={item.lastname_client}
              admin={item.admin}
            />
          ))} */}
      </div>
    </div>
    </>
    )
}