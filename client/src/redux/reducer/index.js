import { GET_IMG_CARRUSEL } from "../actions" 

const initialState = {
  user: [],
  products: [],
  productDetail: [],
  allProducts: [],
  order: [],
  orderDetail: [],
  cart: [],
  carrusel:[]
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMG_CARRUSEL:
      return {
        ...state,
        carrusel: action.payload
      }


    default:
      return state
  }
}
