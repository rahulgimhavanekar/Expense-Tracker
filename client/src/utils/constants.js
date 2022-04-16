export const symbol = "₹";

const incomeColors = ["#b50d12", "#a50052", "#722e76", "#313f77", "#003f5c"];

const expenseColors = [
  "#00ff9d",
  "#63f67b",
  "#8aec5b",
  "#a8e03d",
  "#c2d41e",
  "#d9c600",
  "#edb700",
  "#ffa600",
];

export const incomeCategories = [
  { type: "Business", amount: 0, color: incomeColors[0] },
  { type: "Investments", amount: 0, color: incomeColors[1] },
  { type: "Salary", amount: 0, color: incomeColors[3] },
  { type: "Savings", amount: 0, color: incomeColors[4] },
  { type: "Secondary Income", amount: 0, color: incomeColors[5] },
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
