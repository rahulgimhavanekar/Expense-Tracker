const express = require("express");
const router = express.Router();
const {
  getTransactions,
  createTransaction,
  getTransactionById,
  deleteTransaction,
} = require("../controllers/transactionController");

router.get("/transactions", getTransactions);
router.get("/transactions/:id", getTransactionById);
router.post("/create-transaction", createTransaction);
router.delete("/transactions/:id", deleteTransaction);

module.exports = router;
