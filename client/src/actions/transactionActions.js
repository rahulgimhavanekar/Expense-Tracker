import axios from "axios";
import {
  FETCH_ALL,
  CREATE_TRANSACTION,
  DELETE_TRANSACTION,
} from "./actionTypes";

export const getAllTransactions = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/transactions"
      );
      const data = response.data.data;
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error);
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
      console.log(error);
    }
  };
};

export const deleteTransaction = (transactionId) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/transactions/${transactionId}`
      );
      dispatch({ type: DELETE_TRANSACTION, payload: transactionId });
    } catch (error) {
      console.log(error);
    }
  };
};
