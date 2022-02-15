
import axios from 'axios'; 

export const GET_IMG_CARRUSEL= 'GET_IMG_CARRUSEL'



export const getImgCarrusel = ()=>{
    return async function (dispatch){
      try{
        let carrusel= await axios.get (`ruta del Back`)
        dispatch ({
          type: GET_IMG_CARRUSEL,
          payload:carrusel.data
        })
      }catch (err){
        console.log (err)
      }
    }



}