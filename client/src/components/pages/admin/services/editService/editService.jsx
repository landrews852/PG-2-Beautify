import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import s from "./editService.module.css";
import { editService, getServices, getCategories  } from "../../../../../redux/actions";

export default function EditService({id}) {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});   
    const categories = useSelector((state) => state.categories);
    const [input, setInput] = useState('')
    const [serviceDetail,setDetail] = useState('')
    const services = useSelector((state) => state.services)

    const validate = (input) => {
      let errors = {};
      if (!input.name_service) {
        errors.name_service = "El nombre es requerido";
      }
  
      if (!input.description) {
        errors.description = "La descripción es requerida";
      }
  
      if (!input.image) {
        errors.image = "La imagen es requerida";
      }
  
      if (!input.price) {
        errors.price = "El costo es requerido";
      }     
  
      if (!input.category) {
          errors.category = "Selecciona una categoria";
      }
  
      return errors;
    };
    
    useEffect(()=>{
      setInput({
        name_service: serviceDetail.name_service,
        description: serviceDetail.description,
        price: serviceDetail.price,
        image: [serviceDetail.image],
        categoryId: serviceDetail.categoryId,
        disabled: serviceDetail.disabled
    })},[serviceDetail])

    useEffect(()=>{
      setErrors(validate(input));
    },[input])

    useEffect(() => {
      dispatch(getCategories());
      !serviceDetail.name_service && dispatch(getServices())
    }, []);


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleChangeimg(e) {
      setInput({
        ...input,
        image: [e.target.value],
      });
    }

    function handleSelect(e) {
      setInput({
        ...input,
        category: [e.target.value],
      });
    }

    function selectService(e) {
      let id = e.target.value
      let find = services.find(service => service.id == id)
      setDetail(find)
    }

    async function handleSubmit (e) {
        e.preventDefault();     
        dispatch(editService(serviceDetail.id,input)); 
        Swal.fire({
            icon: "success",
            title: "¡Genial!",
            text: "Servicio editado con exito",
        }); 
    };

    return (
        <>
        {services.length > 0 ? (
          <div className={s.new}>
            <select className={s.cat} name="service" id="service" onChange={(e) => selectService(e)}>
              <option value="">Seleccione un servicio</option>
              {services?.map( (service) => <option value={ service.id } selected={ id ? (service.id == id) :false}>{ service.name_service }</option>)}
            </select>
          </div>
        ): null}
      { typeof input.name_service === 'string' ? (
        <div className={s.newService}>
            <h2>Editar Servicio</h2>
            <div className={s.container}>
            <div className={s.profileform}>
            <form onSubmit={handleSubmit}>
                <div className={s.form}>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            value={input.name_service}
                            name="name_service"
                            onChange={handleChange}
                        />
                        {errors.name_service && (
                            <p className={s.error}>{errors.name_service}</p>
                        )}
                    </div>

                    <div>
                        <label>Descripción:</label>
                        <input
                            type="text"
                            value={input.description}
                            name="description"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.description && (
                        <p className={s.error}>{errors.description}</p>
                    )}

                    <div>
                        <label>Imagen del servicio:</label>
                        <input
                            type="text"
                            value={input.image[0]}
                            name="image"
                            onChange={handleChangeimg}
                        />
                    </div>
                    {errors.image && (
                        <p className={s.error}>{errors.image}</p>
                    )}
                    
                    <div>
                        <label>Precio:</label>
                        <input
                            type="text"
                            value={input.price}
                            name="price"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.price && (
                        <p className={s.error}>{errors.price}</p>
                    )}

                    <div hidden={true}>
                        <label>Inactivo:</label>
                        <select className={s.cat} name="disabled" id="disabled" onChange={handleChange}>
                          <option value="false" selected={`${!input.disabled}`}>activo</option>
                          <option value="true" selected={`${input.disabled}`}>desactivado</option>
                        </select>
                    {errors.disabled && (
                      <p className={s.error}>{errors.disabled}</p>
                      )}
                      </div>

            <div hidden={true}>
              <label>Seleccione las Categorias</label>

              <select className={s.cat} onChange={(e) => handleSelect(e)}>
                <option>Seleccione una categoria</option>
                {categories.map((category) => {
                  return <option name="categoryId" key={category.id} value={category.id} selected={ (input.categoryId == category.id) }>
                            {category.name_category}
                          </option>
                })}
              </select>
            {errors.category && <p className={s.error}>{errors.category}</p>}
            </div>


                    <button className={s.submit} type="submit">Guardar cambios</button>

                </div>
            </form>
            </div>
            </div>
        </div>
        ) : null}
        </>
    )
}