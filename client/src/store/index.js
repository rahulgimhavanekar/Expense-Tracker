import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import transactionReducer from "./transactionReducer";

const store = createStore(transactionReducer, applyMiddleware(logger, thunk));

export default store;
