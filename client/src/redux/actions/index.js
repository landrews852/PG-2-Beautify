
import axios from 'axios'; 

export const GET_IMG_CARRUSEL= 'GET_IMG_CARRUSEL';
export const GET_PRODUCTS_BY_NAME = "GET_PRODUCTS_BY_NAME"
export const ALL_PRODUCTS= 'ALL_PRODUCTS';



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

export const allProducts = () => {
  return async function (dispatch) {
    var json = await axios("ruta de productos", {

    });

    return dispatch({
        type: 'ALL_PRODUCTS',
        payload: json.data

    })
}
}


export const getProductsbyName = (name) => {
  return async function(dispatch) {
    try {
      let json = await axios.get("ruta productos")
    return dispatch ({
      type: GET_PRODUCTS_BY_NAME,
      payload: json.data
    })
  } catch (error) {
    console.log(error)
  }
}
}