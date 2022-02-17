import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsbyName } from "../../redux/actions";

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("") // aca se va a guardar lo q vaya escribiendo el usuario

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    function handleSubmit(e) {
        e.preventDefault()
        alert('This feature is on development')
        dispatch(getProductsbyName(name))
    }
    


    return (
    
        <div className="searchbar">
            <input 
                type="text"
                placeholder="Search for products"
                onChange={(e) => handleInputChange(e)}
            />
            
                <button className="search" type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
                
        </div>
    
    )
}