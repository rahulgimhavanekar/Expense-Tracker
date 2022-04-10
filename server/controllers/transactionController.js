const Transaction = require("../models/transaction");

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();

    if (!transactions.length) {
      return res.status(404).json({
        message: "No transactions found!",
      });
    }

    res.status(200).json({
      data: transactions,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong Please try again later!",
    });
  }
};

const createTransaction = async (req, res) => {
  const transaction = new Transaction(req.body);

  try {
    await transaction.save();
    res.status(201).json({
      data: transaction,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong Please try again later!",
    });
    console.log(error);
  }
};

const getTransactionById = async (req, res) => {
  const id = req.params.id;
  try {
    const transaction = await Transaction.findById(id);

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction doesn't exist",
      });
    }

    res.status(200).json({
      data: transaction,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong Please try again later!",
    });
  }
};

const deleteTransaction = async (req, res) => {
  const id = req.params.id;

  try {
    const transaction = await Transaction.findByIdAndDelete(id);

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction doesn't exist",
      });
    }
    res.status(200).json({
      data: transaction,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong Please try again later!",
    });
  }
};

module.exports = {
  getTransactions,
  createTransaction,
  getTransactionById,
  deleteTransaction,
};
