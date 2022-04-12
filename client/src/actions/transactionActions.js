import axios from "axios";
import {
  FETCH_ALL,
  CREATE_TRANSACTION,
  DELETE_TRANSACTION,
  LOADING,
  ERROR,
} from "./actionTypes";

export const getAllTransactions = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const response = await axios.get(
        "http://localhost:5000/api/transactions"
      );
      const data = response.data.data;
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};

export const createTransaction = (transactionData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/create-transaction",
        transactionData
      );
      const data = response.data.data;
      dispatch({ type: CREATE_TRANSACTION, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};

export const deleteTransaction = (transactionId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/transactions/${transactionId}`
      );
      const data = response.data.data;
      dispatch({ type: DELETE_TRANSACTION, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};
