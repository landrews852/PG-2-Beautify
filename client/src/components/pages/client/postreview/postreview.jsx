import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postReview } from '../../../../redux/actions';
import s from './postreview.module.css'
import { useAuth0 } from '@auth0/auth0-react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const validate = (review) => {
  let errors = {};
  
  if (!review.comment) {
    errors.comment = "Debe completar con un mensaje";
  } else if (!/^.{10,250}$/.test(review.comment)) {
    errors.comment = "El contenido debe ser mayor a 10 caracteres y menor a 250 caracteres";
  }
  if (!review.rank) {
    errors.rank = "Elija un numero para puntuar";
  }
  return errors;
};


export default function PostReview(props) {
const dispatch = useDispatch();
const [errors, setErrors] = useState({});
const reviewpost = {
  rank: "",
  comment: "",
} 
const {user , id}  = props; 
const [review,setReview] = useState(reviewpost);
const { getAccessTokenSilently } = useAuth0();
const navigate = useNavigate();

useEffect(() => {
  setErrors(validate(review));
}, [review]);



const handleChange = (e) => {
  if(e.target.name === "rank"){
    setReview({...review,rank: e.target.value})
  }
  if (e.target.name === "comment"){
    setReview({...review,comment: e.target.value})
  }
  return
};

 async function handleSubmit(e) {
  e.preventDefault();
  const token = await getAccessTokenSilently();
  if(Object.keys(errors).length !== 0) 
    {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Debes completar los datos requeridos",
      });      
    }
    else {  
      dispatch(postReview(token,user[0].id,id,review));
      Swal.fire({
        icon: "success",
        title: "¡Bien!",
        text: "Publicaste una review",
      }); 
      setTimeout(() => {
        navigate('/panel')
      },3000)
    }    
};
    return (
        <> 
    <div className={s.container}>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <div> 
            <div className={s.rankproduct}>
                <p>Puntaje del producto</p>
              <select name="rank"  onChange={(e) => {handleChange(e)}}>
                  <option disabled selected>Seleccionar puntaje</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
              </select>
                
            </div>
            {errors.rank && (
              <p className={s.error}>{errors.rank}</p>
            )}  
              <textarea value={review.comment} name="comment" onChange={(e) => {handleChange(e)}}>
              </textarea>
              {errors.comment && (
              <p className={s.error}>{errors.comment}</p>
            )}            
        </div>
        <button type="submit" className={s.button}>Publicar</button>
      </form>     
    </div>
    </>
    )
}