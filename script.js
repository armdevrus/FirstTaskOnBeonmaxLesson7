let money, time;

function start() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while(isNaN(money) || money == '' || money == null) {
      money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++){
      let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
          b = +prompt('Во сколько обойдется?', '');
      if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null 
        && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
      } else {
        console.log('bad result');
        i--;
      }
    };
  },
  detectDayBubget: function () {
    if (appData.budget) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ваш дневной бюджет составляет: '+ appData.moneyPerDay);
      }
    },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
      } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
      } else {
        console.log('Произошла ошибка');
      }
  },
  checkSaving: function () {
    if (appData.saving == true) {
      let save = +prompt('Какова сумма накоплений?', ''),
        percent = +prompt('Под какой процент?', '');
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: '+ appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for(let i = 0; i < 3; i++){
      let questionOptExpenses = prompt('Статья необязательных расходов?', '');
      if (typeof(questionOptExpenses) === 'string' && questionOptExpenses != '' && questionOptExpenses != null && questionOptExpenses.length < 40) {
        console.log('succes');
        appData.optionalExpenses[i + 1] = questionOptExpenses;
      } else {
        console.log('bad result');
        i--;
      }
    }
  },
  chooseInCome: function () {
    for (let i = 0; i < 1; i++) {
      let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', 'Например: car, house, bussines');
      if (items == null || items == '' || !isNaN(items)) {
        console.log('wasted');
        i--;
      } else {
        appData.income = items.split(',');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();
      };
      appData.income.forEach(function(item, i) {
          alert('Способы дополнительного заработка: ' + (i + 1) + ' - ' + item);
        });
    }
  }
};


for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}

appData.chooseInCome();




