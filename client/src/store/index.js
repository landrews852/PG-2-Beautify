import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, initialState } from "../redux/reducer/index";
import persistState from "redux-localstorage";

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk),
    persistState(null, {
      key: "cart",
      slicer: () => (state) => state["cart"],
      merge: (initialState, persistedState) => {
        return { ...initialState, cart: persistedState ? persistedState : [] };
      },
    })
  )
);
