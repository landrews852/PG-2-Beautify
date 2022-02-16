import { GET_IMG_CARRUSEL, GET_PRODUCTS_BY_NAME, ALL_PRODUCTS, GET_CATEGORIES, POST_PRODUCT } from "../actions"
import * as types from '../actions'

const initialState = {
  user: [],
  products: [],
  productDetail: {}, // Los detalles son objetos
  allProducts: [],
  order: [],
  orderDetail: {}, // Los detalles son objetos
  cart: [],
  carrusel: [],
  categories: []
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
        products: action.payload,
        allProducts: action.payload
      }

    case GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        products: action.payload
      }

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }

    case POST_PRODUCT:
      return {
        ...state
      }

    case types.GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail : action.payload
      }

    case types.CLEAN_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail : {}
      }

    default:
      return state
  }
}
