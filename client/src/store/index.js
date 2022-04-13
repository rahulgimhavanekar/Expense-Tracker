import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import transactionReducer from "./transactionReducer";

const store = createStore(
  transactionReducer,
  compose(applyMiddleware(logger, thunk))
);

export default store;
