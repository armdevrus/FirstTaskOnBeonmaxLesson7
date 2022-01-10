'use strict'
let money = +prompt('Ваш бюджет на месяц?', ''),
  time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: false
};

let b1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
  b2 = +prompt('Во сколько обойдется?', ''),
  b3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
  b4 = +prompt('Во сколько обойдется?', '');

appData.expenses.b1 = b2,
appData.expenses.b3 = b4;

alert(appData.budget/30);


