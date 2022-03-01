import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import s from "./editService.module.css";
import { editService, getServices, getCategories  } from "../../../../../redux/actions";

export default function EditService() {
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
      } else if (!/^[A-Z][\s\w\:]{1,35}$/.test(input.name_service)) {
        errors.name_service =
          "El nombre debe empezar en mayuscula y debe tener menos de 35 caracteres y solo acepta el signo ':'";
      }
  
      if (!input.description) {
        errors.description = "La descripción es requerida";
      } else if (!/^[A-Z][\s\w\W]{1,250}$/.test(input.description)) {
        errors.description =
          "La descripcion debe empezar en mayuscula y debe tener menos de 250 caracteres";
      }
  
      if (input.image.length < 1) {
        errors.image = "La imagen es requerida";
      }
  
      if (!input.price) {
        errors.price = "El costo es requerido";
      }     
  
      if (input.category.length < 1) {
          errors.category = "Selecciona una categoria";
      }
  
      return errors;
    };
    
    useEffect(()=>{
      setInput({
        name_service: serviceDetail.name_service,
        description: serviceDetail.description,
        price: serviceDetail.price,
        image: serviceDetail.image,
        category: serviceDetail.category
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

    function handleSelect(e) {
      setInput({
        ...input,
        category: [e.target.value],
      });
    }

    function selectProduct(e) {
      
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
        <div className={s.newService}>
            {/* <Link to="/"><button className={s.button}>Volver</button></Link> */}
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
                            value={input.image}
                            name="image"
                            onChange={handleChange}
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

                    <div>
                        <label>Inactivo:</label>
                        <input
                            type="checkbox"
                            value={input.disabled}
                            name="disabled"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.disabled && (
                        <p className={s.error}>{errors.disabled}</p>
                    )}

                    <button className={s.submit} type="submit">Guardar cambios</button>

                </div>
            </form>
            </div>
            </div>
        </div>
        </>
    )
}