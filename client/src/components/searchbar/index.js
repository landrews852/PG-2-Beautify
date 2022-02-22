import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsbyName } from "../../redux/actions";
import s from'./searchBar.module.css';
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState("") // aca se va a guardar lo q vaya escribiendo el usuario

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate("/market")
        dispatch(getProductsbyName(name))
        setName("")
    }
    


    return (
    
        <div className={s.searchBar}>
            <input 
                className={s.input}
                value={name}
                type="text"
                placeholder="Search for products"
                onChange={(e) => handleInputChange(e)}
            />
            
                <button className={s.btn} type="submit" onClick={(e) => handleSubmit(e)}></button>
                
        </div>
    
    )
}