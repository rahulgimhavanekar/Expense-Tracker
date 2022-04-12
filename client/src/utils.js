export const incomeCategories = [
  "Salary",
  "Investments",
  "Crypto Profits",
  "Dividend Income",
];

export const expenseCategories = [
  "Food & Drinks",
  "Travel",
  "Entertainment",
  "Rent/Mortgage",
  "Shopping",
  "Bills & Payment",
];

export const symbol = "₹";

export function convertDate(date) {
  const dt = new Date(date);
  return dt.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function countTotal(items) {
  return items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);
}

export function dateRange(startDate, endDate, steps = 1) {
  const dateArray = [];
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    dateArray.push(new Date(currentDate).toString().slice(0, 15));
    // Use UTC date to prevent problems with time zones and DST
    currentDate.setUTCDate(currentDate.getUTCDate() + steps);
  }

  return dateArray;
}

export function generateChartPoints(datesRange, transactionsArray) {
  return datesRange.map((dt) => {
    const allTransactionsOfTheDay = transactionsArray.filter((item) => {
      return dt === new Date(item.date).toString().slice(0, 15);
    });

    const amt = allTransactionsOfTheDay.reduce((currNum, item) => {
      return currNum + item.amount;
    }, 0);

    return {
      label: dt,
      value: amt,
    };
  });
}

export function generatePieData(categories, transactionsArray) {
  return categories.map((ct) => {
    const allTransactionsForCategory = transactionsArray.filter(
      (transaction) => {
        return ct === transaction.category;
      }
    );

    console.log(allTransactionsForCategory, "Hey");

    const amt = allTransactionsForCategory.reduce((currNum, item) => {
      return currNum + item.amount;
    }, 0);

    return {
      category: ct,
      amount: amt,
    };
  });
}
