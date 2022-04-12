export const symbol = "₹";

const incomeColors = [
  "#123123",
  "#154731",
  "#165f40",
  "#14915f",
  "#0bc77e",
  "#00ff9d",
];
const expenseColors = [
  "#b50d12",
  "#bf2f1f",
  "#c9452c",
  "#d3583a",
  "#dc6a48",
  "#e57c58",
  "#f79d79",
  "#f55b5f",
];

export const incomeCategories = [
  { type: "Business", amount: 0, color: incomeColors[0] },
  { type: "Investments", amount: 0, color: incomeColors[1] },
  { type: "Crypto Profits", amount: 0, color: incomeColors[2] },
  { type: "Salary", amount: 0, color: incomeColors[3] },
  { type: "Savings", amount: 0, color: incomeColors[4] },
  { type: "Other", amount: 0, color: incomeColors[5] },
];

export const expenseCategories = [
  { type: "Bills", amount: 0, color: expenseColors[0] },
  { type: "Clothes", amount: 0, color: expenseColors[1] },
  { type: "Travel", amount: 0, color: expenseColors[2] },
  { type: "Food & Drinks", amount: 0, color: expenseColors[3] },
  { type: "Shopping", amount: 0, color: expenseColors[4] },
  { type: "Rent/Mortgage", amount: 0, color: expenseColors[5] },
  { type: "Entertainment", amount: 0, color: expenseColors[6] },
  { type: "Other", amount: 0, color: expenseColors[7] },
];
