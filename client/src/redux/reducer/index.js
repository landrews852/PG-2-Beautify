initialState = {
  user: [],
  products: [],
  productDetail: [],
  allProducts: [],
  order: [],
  orderDetail: [],
  cart: [],
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case '':
      return {
        ...state,
        user: action.payload
      }


    default:
      return state
  }
}
