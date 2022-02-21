import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postProduct, getCategories } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";


function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = "The product's name is required.";

    } else if (!input.description) {
        errors.description = "The description is required."
    } else if (!input.cost_by_unit) {
        errors.cost_by_unit = "The cost is required."
    } else if (!input.image) {
        errors.image = "The image is required."
    }

    return errors;
}




export default function CreateProduct() {
    const dispatch = useDispatch();
    // const history = useHistory();
    const category = useSelector((state) => state.categories)
    const [errors, setErrors] = useState({});


    const [input, setInput] = useState({
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
    console.log(input)

    useEffect(() => {
        dispatch(getCategories())
    }, [])


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
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
                        <label>Product name:</label>
                        <input
                            type="text"
                            value={input.product_name}
                            name="product_name"
                            onChange={handleChange}
                        />
                        {errors.product_name && (
                            <p className="error">{errors.product_name}</p>
                        )}
                    </div>

                    <div className="description">
                        <label>Description:</label>
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
                    <div>
                        <label>Discount:</label>
                        <input
                            type="integer"
                            value={input.discount}
                            name="discount"
                            onChange={handleChange}
                        />
                    </div>


                    <div>
                        <label>cost_by_unit:</label>
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
                        <label>Image:</label>
                        <input
                            type="text"
                            value={input.image}
                            name="image"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.image && (
                        <p className="error">{errors.image}</p>
                    )}

                    <div>
                        <label>Warranty:</label>
                        <input
                            type="text"
                            value={input.warranty}
                            name="warranty"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Brand:</label>
                        <input
                            type="text"
                            value={input.brand}
                            name="brand"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Category</label>

                        <select className="cat" onChange={(e) => handleSelect(e)}>
                            <option value="Skincare">Skincare</option>
                            <option value="Lashes">Lashes</option>
                            <option value="Eyebrows">Eyebrows</option>

                        </select>
                    </div>

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