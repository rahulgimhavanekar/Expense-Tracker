import React from "react";
import TransactionForm from "./TransactionForm";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <section className={classes.dashboard}>
      <div>Main</div>
      <TransactionForm />
    </section>
  );
};

export default Dashboard;
