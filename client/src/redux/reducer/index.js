import { GET_IMG_CARRUSEL, GET_PRODUCTS_BY_NAME, ALL_PRODUCTS, GET_CATEGORIES, POST_PRODUCT, POST_SERVICE, PRICE_SORT, RATING_SORT, FILTER_BY_OFFER, GET_PRODUCT_DETAIL, CLEAN_PRODUCT_DETAIL, GET_SERVICES } from "../actions"


const initialState = {
  user: [],
  products: [],
  productDetail: {},
  allProducts: [],
  order: [],
  orderDetail: {},
  cart: [],
  carrusel: [],
  categories: [],
  services: [],

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

    case POST_SERVICE:
    return {
      ...state
    }

    case GET_PRODUCT_DETAIL:
    return {
      ...state,
      productDetail : action.payload
    }

    case CLEAN_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail : {}
      }

    case PRICE_SORT:
      const sortedProducts = state.allProducts.sort((a, b) => {
        if (action.payload.asc) {
          return a.price - b.price
        }
        return b.price - a.price
      })
      return {
        ...state,
        products: sortedProducts
      }

    case RATING_SORT:
      const sortedProductsRating = state.allProducts.sort((a, b) => {
        if (action.payload.asc) {
          return a.rating - b.rating
        }
        return b.rating - a.rating
      })
      return {
        ...state,
        products: sortedProductsRating
      }

    case FILTER_BY_OFFER:
      const filteredProducts = state.allProducts.filter(product => {
        return product.offer === action.payload.offer
      })
      return {
        ...state,
        products: filteredProducts
      }
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload 
      }  

    default:
      return state
  }
}
