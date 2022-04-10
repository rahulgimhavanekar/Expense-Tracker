import {
  FETCH_ALL,
  CREATE_TRANSACTION,
  DELETE_TRANSACTION,
  LOADING,
  ERROR,
} from "../actions/actionTypes";

const initialState = {
  transactions: [],
  totalTransactions: 0,
  loading: false,
  error: null,
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        transactions: action.payload,
        totalTransactions: action.payload.length,
        loading: false,
        error: null,
      };
    case CREATE_TRANSACTION: {
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        totalTransactions: state.totalTransactions + 1,
        loading: false,
        error: null,
      };
    }
    case DELETE_TRANSACTION: {
      const newList = state.transactions.filter((transaction) => {
        return transaction.id !== action.payload;
      });
      return {
        ...state,
        transactions: newList,
        totalTransactions: state.totalTransactions - 1,
        loading: false,
        error: null,
      };
    }
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default transactionReducer;
