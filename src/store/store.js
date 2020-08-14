import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const middleware = [thunk];

const store = createStore(
  rootReducer,

  applyMiddleware(...middleware)
);

export default store;
// "react-redux": "^6.0.1",
