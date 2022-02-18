import axios from 'axios';

export const GET_IMG_CARRUSEL = 'GET_IMG_CARRUSEL';
export const GET_PRODUCTS_BY_NAME = "GET_PRODUCTS_BY_NAME"
export const ALL_PRODUCTS = 'ALL_PRODUCTS';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const POST_PRODUCT = 'POST_PRODUCT'
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL'
export const CLEAN_PRODUCT_DETAIL = 'CLEAN_PRODUCT_DETAIL'
export const POST_SERVICE = 'POST_SERVICE'
export const PRICE_SORT = 'PRICE_SORT'
export const RATING_SORT = 'RATING_SORT'
export const FILTER_BY_OFFER = 'FILTER_BY_OFFER'

export const getImgCarrusel = () => {
  return async function (dispatch) {
    try {
      let carrusel = await axios.get(`ruta api`)
      dispatch({
        type: GET_IMG_CARRUSEL,
        payload: carrusel.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const allProducts = () => {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/api/product");

    return dispatch({
      type: "ALL_PRODUCTS",
      payload: json.data,
    });
  };
};

export const getProductsbyName = (name) => {
  return async function (dispatch) {
    try {
      let json = await axios.get("ruta productos");
      return dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCategories = () => {
  return async function (dispatch) {
    var info = await axios("http://localhost:3001/api/categories");
    return dispatch({ type: "GET_CATEGORIES", payload: info.data });
  };
};

export const postProduct = (payload) => {
  return async function (dispatch) {
    var response = await axios.post("ruta del post", payload);
    return response;
  };
};

export const getProductDetail = () => {
  return async function (dispatch) {
    let detail = await axios.get("ruta_get_detail");
    return dispatch({ type: GET_PRODUCT_DETAIL, payload: detail.data });
  };
};

export const cleanProductDetail = () => {
  return function (dispatch) {
    return dispatch({ type: CLEAN_PRODUCT_DETAIL });
  };
};

export const postService = (payload) => {
  return async function (dispatch) {
    var response = await axios.post("ruta del post", payload)
    return response;
  }
}
export const priceSort = (payload) => {
  return function (dispatch) {
    return dispatch({ type: PRICE_SORT, payload })
  }
}

export const ratingSort = (payload) => {
  return function (dispatch) {
    return dispatch({ type: RATING_SORT, payload })
  }
}

export const filterByOffer = (payload) => {
  return function (dispatch) {
    return dispatch({ type: FILTER_BY_OFFER, payload })
  }
}
