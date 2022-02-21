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
export const NAME_SORT = 'NAME_SORT'
export const FILTER_BY_OFFER = 'FILTER_BY_OFFER'
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'
export const FILTER_BY_BRAND = 'FILTER_BY_BRAND'
export const GET_SERVICES = 'GET_SERVICES'
export const GET_BRANDS = 'GET_BRANDS'
export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_ITEM = 'DELETE_ITEM'


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
      let json = await axios.get(`http://localhost:3001/api/product?name=${name}`);
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
    var response = await axios.post("http://localhost:3001/api/product/", payload);
    return response;
  };
};

export const getProductDetail = (id) => {
  return async function (dispatch) {
    let detail = await axios.get(`http://localhost:3001/api/product/${id}`);
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
    var response = await axios.post("http://localhost:3001/api/service/", payload)
    return response;
  }
}

export const nameSort = (payload) => {
  return async function (dispatch) {
    let sort = await axios.get(`http://localhost:3001/api/product?orderName=${payload}`);
    return dispatch({ type: NAME_SORT, payload: sort.data });
  };
};

export const priceSort = (payload) => {
  return async function (dispatch) {
    let sort = await axios.get(`http://localhost:3001/api/product?orderPrice=${payload}`);
    return dispatch({ type: PRICE_SORT, payload: sort.data });
  };
};

export const filterCategory = (payload) => {
  return async function (dispatch) {
    let filter = await axios.get(`http://localhost:3001/api/product?categoryId=${payload}`);
    return dispatch({ type: FILTER_BY_CATEGORY, payload: filter.data });
  };
};

export const filterBrand = (payload) => {
  return async function (dispatch) {
    let filter = await axios.get(`http://localhost:3001/api/product?brand=${payload}`);
    return dispatch({ type: FILTER_BY_BRAND, payload: filter.data });
  };
};

export const filterByOffer = (payload) => {
  return function (dispatch) {
    return dispatch({ type: FILTER_BY_OFFER, payload })
  }
}

export const getServices = ()=>{
  return async function (dispatch) {
    const services = await axios.get (`http://localhost:3001/api/service`)
    return dispatch ({ 
      type: GET_SERVICES,
      payload: services.data
    }) 
  }
}

export function getBrands() {
  return async function (dispatch) {
    var json = await axios.get('http://localhost:3001/api/product');

    dispatch({
      type: GET_BRANDS,
      payload: json.data,
    });
  };
}

export function addToCart (payload) {
  return {
    type: ADD_TO_CART,
    payload
  }
}

export function deleteItem (payload) {
  return {
    type: DELETE_ITEM,
    payload
  }
}