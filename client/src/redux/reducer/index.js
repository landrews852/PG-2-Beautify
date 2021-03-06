import axios from "axios";
import {
  GET_IMG_CAROUSEL,
  GET_PRODUCTS_BY_NAME,
  GET_SERVICES_BY_NAME,
  ALL_PRODUCTS,
  GET_CATEGORIES,
  POST_PRODUCT,
  POST_SERVICE,
  POST_CLIENT,
  PRICE_SORT,
  NAME_SORT,
  FILTER_BY_OFFER,
  GET_PRODUCT_DETAIL,
  CLEAN_PRODUCT_DETAIL,
  GET_SERVICES,
  FILTER_BY_CATEGORY,
  FILTER_BY_BRAND,
  GET_BRANDS,
  ADD_TO_CART,
  DELETE_ITEM,
  UPDATE_CART,
  GET_CLIENT,
  EDIT_CLIENT,
  EDIT_ABOUT,
  IS_LOADING,
  EDIT_SERVICE,
  GET_SOCIAL,
  UPDATE_SOCIAL,
  GET_REVIEWS,
  CLEAN_CART,
  GET_ORDERS,
} from "../actions";

export const initialState = {
  user: [],
  products: [],
  productDetail: {},
  allProducts: [],
  orders: [],
  orderDetail: {},
  cart: [],
  carrusel: [],
  categories: [],
  services: [],
  brands: [],
  about: {},
  reviews: [],
  isLoading : false,
  social: {facebook:"",instagram:"",email:""}
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMG_CAROUSEL:
      return {
        ...state,
        carrusel: action.payload,
      };

    case ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      };

    case GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        products: action.payload,
      };

    case GET_SERVICES_BY_NAME:
      return {
        ...state,
        services: action.payload,
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case POST_PRODUCT:
      return {
        ...state,
      };

    case POST_SERVICE:
      return {
        ...state,
      };

    case POST_CLIENT:
      return {
        ...state,
      };

    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };

    case CLEAN_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: {},
      };

    // case NAME_SORT:
    //   return {
    //     ...state,
    //     products: action.payload,
    //   };

    // case PRICE_SORT:
    //   return {
    //     ...state,
    //     products: action.payload,
    //   };

    case NAME_SORT:
      const asc = action.payload;
      return {
        ...state,
        products: state.products.slice().sort((a, b) => {
          if (asc === "ASC") {
            return a.product_name.localeCompare(b.product_name);
          }
          return b.product_name.localeCompare(a.product_name);
        }),
      };

    case PRICE_SORT:
      let arraySort1 =
        action.payload === "ASC"
          ? state.products.slice().sort(function (a, b) {
              if (a.cost_by_unit > b.cost_by_unit) {
                return 1;
              }
              if (b.cost_by_unit > a.cost_by_unit) {
                return -1;
              }
              return 0;
            })
          : state.products.slice().sort(function (a, b) {
              if (a.cost_by_unit > b.cost_by_unit) {
                return -1;
              }
              if (b.cost_by_unit > a.cost_by_unit) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        products: arraySort1,
      };

    case FILTER_BY_CATEGORY:
      return {
        ...state,
        products: action.payload,
      };

    case FILTER_BY_BRAND:
      return {
        ...state,
        products: action.payload,
      };

    case GET_BRANDS:
      const brand = action.payload.map((e) => e.brand).flat();
      const brandsUnique = [...new Set(brand)];
      return {
        ...state,
        brands: brandsUnique,
      };

    case FILTER_BY_OFFER:
      return {
        ...state,
        products: action.payload,
      };

    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
      };

    case ADD_TO_CART:
      let exists = state.cart.find((p, index) => {
        if (p.id === action.payload.id) {
          state.cart[index].amount =
            action.payload.amount + state.cart[index].amount;
          return true;
        }
      });
      if (!exists) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    case UPDATE_CART:
      state.cart.find((p, index) => {
        if (p.id === action.payload.id) {
          state.cart[index].amount = action.payload.amount;
          return true;
        }
      });

    case DELETE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((p) => p.id !== action.payload),
      };

    case GET_CLIENT:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };

    case EDIT_CLIENT:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    case EDIT_ABOUT:
      return {
        ...state,
        about: action.payload,
      };

    case EDIT_SERVICE:
      return {
        ...state,
      };

    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_SOCIAL:
      return {
        ...state,
        social: action.payload,
      };

    case UPDATE_SOCIAL:
      return {
        ...state,
        social: action.payload
      }
    case GET_REVIEWS:
        return {
          ...state,
          reviews: action.payload
      }
    case CLEAN_CART:
      return {
        ...state,
        cart: [],
      };

    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return state;
  }
}
