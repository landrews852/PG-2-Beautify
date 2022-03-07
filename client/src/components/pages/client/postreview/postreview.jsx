import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postReview } from '../../../../redux/actions';
import s from './postreview.module.css'
import { useAuth0 } from '@auth0/auth0-react';
import Swal from 'sweetalert2';

export default function PostReview(props) {
const dispatch = useDispatch();
const reviewpost = {
  rank: "",
  comment: "",
} 
const {user , id}  = props; 
const [review,setReview] = useState(reviewpost);
const { getAccessTokenSilently } = useAuth0();

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
  dispatch(postReview(token,user[0].id,id,review));
  Swal.fire({
    icon: "success",
    title: "¡Bien!",
    text: "Publicaste una review",
  });  
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
              <textarea value={review.comment} name="comment" onChange={(e) => {handleChange(e)}}>
              </textarea>            
        </div>
        <button type="submit" className={s.button}>Publicar</button>
      </form>     
    </div>
    </>
    )
}