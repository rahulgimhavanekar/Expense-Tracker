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

export function dateRange(month, year) {
  const dateArray = [];
  let date = new Date(year, month, 1);

  while (date.getMonth() === month) {
    dateArray.push(new Date(date).toString().slice(0, 15));
    // Use UTC date to prevent problems with time zones and DST
    date.setUTCDate(date.getUTCDate() + 1);
  }

  return dateArray;
}

export function generateChartPoints(datesRange, transactionsArray) {
  return datesRange.map((dt) => {
    const allTransactionsOfTheDay = transactionsArray.filter((item) => {
      return dt === new Date(item.date).toString().slice(0, 15);
    });

    const total = allTransactionsOfTheDay.reduce((currNum, item) => {
      return currNum + item.amount;
    }, 0);

    return {
      label: dt,
      amount: total,
    };
  });
}

export function generatePieData(categories, transactionsArray) {
  transactionsArray.forEach((t) => {
    const category = categories.find((ct) => ct.type === t.category);

    if (category) {
      category.amount += t.amount;
    }
  });

  return categories.filter((c) => c.amount > 0);
  // return categories.map((ct) => {
  // const allTransactionsForCategory = transactionsArray.filter(
  //   (transaction) => {
  //     return ct === transaction.category;
  //   }
  // );

  // const total = allTransactionsForCategory.reduce((currNum, item) => {
  //   return currNum + item.amount;
  // }, 0);

  // return {
  //   category: ct,
  //   amount: total,
  // };
  // });
}
