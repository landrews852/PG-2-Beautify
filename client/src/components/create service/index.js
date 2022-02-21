import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories, postService } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";


function validate(input) {
    let errors = {};
    if (!input.name_service) {
        errors.name = "The service's name is required.";

    } else if (!input.price) {
        errors.description = "The price is required."
    } else if (!input.description) {
        errors.cost_by_unit = "The description is required."
    } else if (!input.image) {
        errors.image = "The image is required."
    }
    

    return errors;
}




export default function CreateService() {
    const dispatch = useDispatch();
    // const history = useHistory();
    const categories = useSelector((state) => state.categories)
    const [errors, setErrors] = useState({});


    const [input, setInput] = useState({
        name_service: "",
        description: "",
        price: "",
        image: [],
        category: []
    })
    console.log(input)

    useEffect(() => {
        dispatch(getCategories())
    }, [])
    // console.log (categories)
    function handleChangeimg (e){
        setInput({
            ...input,
            image: [...input.image, e.target.value]
        })
    }
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
        dispatch(postService(input))
        alert("The service was added successfully!")
        setInput({
            name_service: "",
            description: "",
            price: "",
            image: [],
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
        <div className="newService">
            <Link to="/home"><button className="back">Go back</button></Link>
            <h1>Add your service</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form">
                    <div>
                        <label>Service name:</label>
                        <input
                            type="text"
                            value={input.name_service}
                            name="name_service"
                            onChange={handleChange}
                        />
                        {errors.name_service && (
                            <p className="error">{errors.name_service}</p>
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
                        <label>Price:</label>
                        <input
                            type="integer"
                            value={input.price}
                            name="price"
                            onChange={handleChange}
                        />
                    </div>

                
                    <div>
                        <label>Image:</label>
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
                        <label>Category</label>

                        <select className="cat" onChange={(e) => handleSelect(e)}>

                        {categories?.map ((c)=>(
                            <option value={c.name_category}>{c.name_category}</option>
                        )) }

                        </select>
                    </div>

                    <button disabled={errors.name_service || errors.description || errors.price || errors.image} className="submit" type="submit">Add service</button>

                </div>

            </form>
            {input.category.map(el =>
                <div key={el} className="divCats">
                    <p>{el}</p>
                    <button className="bontonX" onClick={() => handleDelete(el)}>X</button>
                </div>
            )}
        </div>
    )
}