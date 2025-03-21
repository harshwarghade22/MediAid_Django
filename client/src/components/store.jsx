import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
// import { authReducer, doctorReducer } from "../reducers/projectReducer";
import { signupProjectReducers ,  loginProjectReducers, userDetailReducers } from "../reducers/projectReducer";

const rootReducer = combineReducers({
  userSignup: signupProjectReducers,
  userLogin:loginProjectReducers,
  userDetails: userDetailReducers
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
