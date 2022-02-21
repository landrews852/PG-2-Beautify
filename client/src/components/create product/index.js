import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postProduct, getCategories } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function CreateProduct() {
    const dispatch = useDispatch();
    // const history = useHistory();
    const categories = useSelector((state) => state.categories)
    const [errors, setErrors] = useState({});


    const [input, setInput] = useState({
        product_name: "",  // string
        description: "",   // TEXT
        stock: '',         // integer
        cost_by_unit: "",  // float
        image: "",         // Array (text)
        warranty: "",      // integer
        brand: "",         // string
        discount: "",      // INTEGER   
        category: []       // Array 
    })

    const validate = (input) => {
        let errors = {};
        if (!input.product_name) {
          errors.name = "Name required";
        } else if (!/^[A-Z][\s\w\:]{1,35}$/.test(input.product_name)) {
          errors.name =
            "Name must begin with a capital letter, have no more than 35 characters and no symbols except ':' ";
        }
    
        if (!input.description) {
          errors.description = "Description required";
        } else if (!/^[A-Z][\s\w\W]{1,250}$/.test(input.description)) {
          errors.description =
            "Description must begin with a capital letter, have no more than 250 characters";
        }
    
        if (!input.image) {
          errors.image = "Image is required";
        } 
        // else if (
        //   !/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(input.released)
        // ) {
        //   errors.released = "Released must be a valid date. Format: yyyy-mm-dd";
        // } else if(new Date(input.released) > new Date(notFuture)) {
        //     errors.released = "Come back to your future.";
        // }
    
        if (!input.cost_by_unit) {
          errors.cost_by_unit = "El costo es requerido";
        }     

        if (!input.stock) {
          errors.stock = "Inventario inicial es requerido";
        }
    
        if (!input.warranty) {
          errors.warranty = "La garantia es requerida";
        }

        if (!input.brand) {
            errors.brand = "La marca es requerido";
          }

          if (!input.category) {
            errors.category = "Seleccion al menos una categoria";
          }
    
        return errors;
      };


    console.log(input)
/*     console.log(errors)
    console.log(categories) */

    useEffect(() => {
        setErrors(validate(input));
        dispatch(getCategories())
    }, [])

    useEffect(()=>{
        setErrors(validate(input));
    },[input])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleChangeimg (e){
        setInput({
            ...input,
            image: [...input.image, e.target.value]
        })
    }

    function handleSelect(e) {
        setInput({
            ...input,
            category: [...input.category, e.target.value]
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postProduct(input))
        alert("The product was added successfully!")
        setInput({
            product_name: "",
            description: "",
            stock: "",
            cost_by_unit: "",
            image: "",
            warranty: "",
            brand: "",
            discount: "",
            category: []

        })
        // history.push("/home")

    }

    function handleDelete(el) {
        setInput({
            ...input,
            category: input.category.filter(d => d !== el)
        })
    }



    return (
        <div className="new">
            <Link to="/home"><button className="back">Go back</button></Link>
            <h1>Add your product</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form">
                    <div>
                        <label>Nombre del producto:</label>
                        <input
                            type="text"
                            value={input.product_name}
                            name="product_name"
                            onChange={handleChange}
                        />
                        {errors.name && (<p>{errors.name}</p>)}
                    </div>

                    <div className="description">
                        <label>Descripción:</label>
                        <input
                            type="text"
                            value={input.description}
                            name="description"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.description && (
                        <p className="errorsum">{errors.description}</p>
                    )}

                    <div>
                        <label>Stock:</label>
                        <input
                            type="integer"
                            value={input.stock}
                            name="stock"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.stock && (
                        <p className="errorstock">{errors.stock}</p>
                    )}
                    <div>
                        <label>Descuento:</label>
                        <input
                            type="integer"
                            value={input.discount}
                            name="discount"
                            onChange={handleChange}
                        />
                    </div>


                    <div>
                        <label>Costo por unidad:</label>
                        <input
                            type="integer"
                            value={input.cost_by_unit}
                            name="cost_by_unit"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.cost_by_unit && (
                        <p className="errorcost">{errors.cost_by_unit}</p>
                    )}

                


                    <div>
                        <label>Imagen:</label>
                        <input
                            type="text"
                            value={input.image}
                            name="image"
                            onChange={handleChangeimg}
                        />
                    </div>
                    {errors.image && (
                        <p className="error">{errors.image}</p>
                    )}

                    <div>
                        <label>Garantia:</label>
                        <input
                            type="text"
                            value={input.warranty}
                            name="warranty"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.warranty && (
                        <p className="error">{errors.warranty}</p>
                    )}
                    <div>
                        <label>Marca:</label>
                        <input
                            type="text"
                            value={input.brand}
                            name="brand"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.brand && (
                        <p className="error">{errors.brand}</p>
                    )}
                    <div>
                        <label>Seleccione las Categorias</label>

                        <select className="cat" onChange={(e) => handleSelect(e)}>
                        {categories.map((category,index) => <option key={category.id} value={category.name_category}> 
                            {category.name_category}
                        </option>)}
                        </select>
                    </div>

                    {errors.category && (
                        <p className="error">{errors.category}</p>
                    )}

                    <button disabled={errors.product_name || errors.description || errors.cost_by_unit || errors.image} className="submit" type="submit">Add product</button>

                </div>

            </form>
            {input.category.map(el =>
                <div key={el.id} className="divCats">
                    <p>{el}</p>
                    <button className="bontonX" onClick={() => handleDelete(el)}>X</button>
                </div>
            )}
        </div>
    )
}