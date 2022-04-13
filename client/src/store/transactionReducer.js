import {
  FETCH_ALL,
  CREATE_TRANSACTION,
  DELETE_TRANSACTION,
} from "../actions/actionTypes";

const initalState = {
  transactions: [],
  totalTransactions: 0,
};

const transactionReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        transactions: action.payload || [],
        totalTransactions: state.transactions.length || 0,
      };
    case CREATE_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        totalTransactions: state.totalTransactions + 1,
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
        totalTransactions: state.totalTransactions - 1,
      };
    default:
      return state;
  }
};

export default transactionReducer;
