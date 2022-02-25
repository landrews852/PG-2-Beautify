import {
  GET_IMG_CARRUSEL,
  GET_PRODUCTS_BY_NAME,
  GET_SERVICES_BY_NAME,
  ALL_PRODUCTS,
  GET_CATEGORIES,
  POST_PRODUCT,
  POST_SERVICE,
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
} from "../actions";

export const initialState = {
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
  brands: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMG_CARRUSEL:
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

    case PRICE_SORT:
      return {
        ...state,
        products: action.payload,
      };

    case NAME_SORT:
      return {
        ...state,
        products: action.payload,
      };

    // case RATING_SORT:
    //   let arraySort1 =
    //   action.payload === "asc"
    //     ? state.allProducts.sort(function (a, b) {
    //       if (a.rating > b.rating) {
    //         return 1;
    //       }
    //       if (b.rating > a.rating) {
    //         return -1;
    //       }
    //       return 0;
    //     })
    //     : state.allProducts.sort(function (a, b) {
    //       if (a.rating > b.rating) {
    //         return -1;
    //       }
    //       if (b.rating > a.rating) {
    //         return 1;
    //       }
    //       return 0;
    //     });
    //   return {
    //     ...state,
    //     products: arraySort1,
    //   };

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

    default:
      return state;
  }
}
