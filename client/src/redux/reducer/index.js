import { GET_IMG_CARRUSEL, GET_PRODUCTS_BY_NAME, ALL_PRODUCTS } from "../actions" 

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
    
    case ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload
      }

    case GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        products: action.payload
      }


    default:
      return state
  }
}
