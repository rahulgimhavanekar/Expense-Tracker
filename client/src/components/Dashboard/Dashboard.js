import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Main from "./Main";
import TransactionForm from "./TransactionForm";
import { getAllTransactions } from "../../actions/transactionActions";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  return (
    <section className={classes.dashboard}>
      <Main />
      <TransactionForm />
    </section>
  );
};

export default Dashboard;
