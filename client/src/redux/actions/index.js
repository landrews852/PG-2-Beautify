import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const GET_IMG_CAROUSEL = "GET_IMG_CAROUSEL";
export const POST_IMG_CAROUSEL = "POST_IMG_CAROUSEL";
export const DELETE_IMG_CARRUSEL = "DELETE_IMG_CARRUSEL";
export const PUT_IMG_CARRUSEL = "PUT_IMG_CARRUSEL";
//const apiRoute = "http://localhost:3001";
const apiRoute = process.env.REACT_APP_APP_ROOT
export const GET_PRODUCTS_BY_NAME = "GET_PRODUCTS_BY_NAME";
export const GET_SERVICES_BY_NAME = "GET_SERVICES_BY_NAME";
export const ALL_PRODUCTS = "ALL_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const POST_PRODUCT = "POST_PRODUCT";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const CLEAN_PRODUCT_DETAIL = "CLEAN_PRODUCT_DETAIL";
export const POST_SERVICE = "POST_SERVICE";
export const PRICE_SORT = "PRICE_SORT";
export const NAME_SORT = "NAME_SORT";
export const FILTER_BY_OFFER = "FILTER_BY_OFFER";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const FILTER_BY_BRAND = "FILTER_BY_BRAND";
export const GET_SERVICES = "GET_SERVICES";
export const GET_BRANDS = "GET_BRANDS";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_ITEM = "DELETE_ITEM";
export const UPDATE_CART = "UPDATE_CART";
export const GET_CLIENT = "GET_CLIENT";
export const POST_CLIENT = "POST_CLIENT";
export const EDIT_CLIENT = "EDIT_CLIENT";
export const EDIT_ABOUT = "EDIT_ABOUT";

export const getImgCarousel = () => {
  return async function (dispatch) {
    try {
      let carrusel = await axios.get(`${apiRoute}/api/carousel`);
      dispatch({
        type: GET_IMG_CAROUSEL,
        payload: carrusel.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const postImgCarousel = (payload) => {
  return async function (dispatch) {
    try {
      let response = await axios.post(
        `${apiRoute}/api/carousel/`,
        payload
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteImgCarousel = (id) => {
  return async function (dispatch) {
    try {
      let response = await axios.delete(
        `${apiRoute}/api/carousel/${id}`
      );
      dispatch(getImgCarousel());
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
};

export const putImgCarousel = (data) => {
  return async function (dispatch) {
    try {
      let response = await axios.put(
        `${apiRoute}/api/carousel/${data.id}`,
        data
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
};

export const allProducts = () => {
  return async function (dispatch) {
    var json = await axios.get(`${apiRoute}/api/product`);

    return dispatch({
      type: "ALL_PRODUCTS",
      payload: json.data,
    });
  };
};

export const getProductsbyName = (name) => {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${apiRoute}/api/product?name=${name}`);
      return dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getServicesbyName = (name) => {
  return async function (dispatch) {
    try {
      let json = await axios.get(
        `${apiRoute}/api/service?name=${name}`
      );
      return dispatch({
        type: GET_SERVICES_BY_NAME,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getCategories = () => {
  return async function (dispatch) {
    var info = await axios(`${apiRoute}/api/categories`);
    return dispatch({ type: "GET_CATEGORIES", payload: info.data });
  };
};

export const postProduct = (payload) => {
  return async function (dispatch) {
    var response = await axios.post(`${apiRoute}/api/product/`, payload);
    return response;
  };
};

export const getProductDetail = (id) => {
  return async function (dispatch) {
    let detail = await axios.get(`${apiRoute}/api/product/${id}`);
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
    var response = await axios.post(`${apiRoute}/api/service/`, payload);
    return response;
  };
};

export const nameSort = (payload) => {
  // return async function (dispatch) {
  //   let sort = await axios.get(
  //     `http://${apiRoute}/api/product?orderName=${payload}`
  //   );
  //   return dispatch({ type: NAME_SORT, payload: sort.data });
  // };
  return {
    type: NAME_SORT,
    payload,
  };
};

export const priceSort = (payload) => {
  // return async function (dispatch) {
  //   let sort = await axios.get(
  //     `http://${apiRoute}/api/product?orderPrice=${payload}`
  //   );
  //   return dispatch({ type: PRICE_SORT, payload: sort.data });
  // };
  return {
    type: PRICE_SORT,
    payload,
  };
};

export const filterCategory = (payload) => {
  return async function (dispatch) {
    let filter = await axios.get(
      `${apiRoute}/api/product?categoryId=${payload}`
    );
    return dispatch({ type: FILTER_BY_CATEGORY, payload: filter.data });
  };
};

export const filterBrand = (payload) => {
  return async function (dispatch) {
    let filter = await axios.get(
      `${apiRoute}/api/product?brand=${payload}`
    );
    return dispatch({ type: FILTER_BY_BRAND, payload: filter.data });
  };
};

export const filterByOffer = (payload) => {
  return async function (dispatch) {
    let filter = await axios.get(`${apiRoute}/api/product/discounts`);
    return dispatch({ type: FILTER_BY_OFFER, payload: filter.data });
  };
};

export const getServices = () => {
  return async function (dispatch) {
    const services = await axios.get(`${apiRoute}/api/service`);
    return dispatch({
      type: GET_SERVICES,
      payload: services.data,
    });
  };
};

export function getBrands() {
  return async function (dispatch) {
    var json = await axios.get(`${apiRoute}/api/product`);

    dispatch({
      type: GET_BRANDS,
      payload: json.data,
    });
  };
}

export function addToCart(payload) {
  return {
    type: ADD_TO_CART,
    payload,
  };
}

export function updateCart(payload) {
  return {
    type: UPDATE_CART,
    payload,
  };
}

export function deleteItem(payload) {
  return {
    type: DELETE_ITEM,
    payload,
  };
}

export function getUserInfo(token) {
  return async function (dispatch) {
    const user = await axios.get(`${apiRoute}/api/client/info`, {
            headers: {
              authorization: `Bearer ${token}`
            }
    })  
    dispatch({
      type: GET_CLIENT,
      payload: user.data,
    });
  }
}

export function editUserInfo(id,token,payload) {
  return async function (dispatch) {
    const userupdate = await axios.put(`${apiRoute}/api/client/` + id, payload, {
            headers: {
              authorization: `Bearer ${token}`
            }
    })  
    dispatch({
      type: EDIT_CLIENT,
      payload: [payload],
    });
  }
}

export function editAbout(payload) {
  return async function (dispatch) {
    const aboutupdate = await axios.put(`${apiRoute}/api/about`, payload)  
    dispatch({
      type: EDIT_ABOUT,
      payload: payload
    });
  }
}
