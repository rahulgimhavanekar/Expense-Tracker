import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-date-picker";
import { createTransaction } from "../../actions/transactionActions";
import { incomeCategories, expenseCategories } from "../../utils";
import classes from "./TransactionForm.module.css";

const TransactionForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [transactionDate, setTransactionDate] = useState();

  const dispatch = useDispatch();

  const selectedCategories =
    type === "Income" ? incomeCategories : expenseCategories;

  const submitHandler = (e) => {
    e.preventDefault();

    const newTransaction = {
      title: title,
      amount: +amount,
      type: type,
      category: category,
      date: transactionDate,
    };

    dispatch(createTransaction(newTransaction));

    console.log(newTransaction);
    setTitle("");
    setAmount("");
    setType("");
    setCategory("");
    setTransactionDate();
  };

  return (
    <section className={classes.container}>
      <form className={classes.transaction_form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="type">Type</label>
          <select
            id="type"
            value={type}
            className={classes.select}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            className={classes.select}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {selectedCategories.map((sc, idx) => {
              return (
                <option key={idx} value={sc}>
                  {sc}
                </option>
              );
            })}
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Date</label>
          <DatePicker onChange={setTransactionDate} value={transactionDate} />
        </div>
        <div className={classes.actions}>
          <button>Add New</button>
        </div>
      </form>
    </section>
  );
};

export default TransactionForm;
