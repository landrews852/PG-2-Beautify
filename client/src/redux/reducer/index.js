import { GET_IMG_CARRUSEL, GET_PRODUCTS_BY_NAME, ALL_PRODUCTS, GET_CATEGORIES, POST_PRODUCT, FILTER_BY_CAT } from "../actions" 

const initialState = {
  user: [],
  products: [],
  productDetail: [],
  allProducts: [],
  order: [],
  orderDetail: [],
  cart: [],
  carrusel:[],
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

    case FILTER_BY_CAT:
      const allProducts = state.allProducts
            const cat = action.payload.toLowerCase()
            
            const products = allProducts.filter( prod => prod.category.includes(cat) )
            
            return {
                ...state,
                products: products
            };


    default:
      return state
  }
}
//