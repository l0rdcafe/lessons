function filterArr() {
  var users = [
          { id: 22, username: "martin", active: true },
          { id: 23, username: "max", active: false },
          { id: 24, username: "linda", active: false }
  ];

  return _.filter(users, { active: true });
}

function sortObj() {
  var users = [{ article: 41, quantity: 24 },
     { article: 2323, quantity: 2 },
     { article: 655, quantity: 23 }];

  return _.sortBy(users, 'quantity');
}

function addProp() {
  var cities = { Hamburg: { population: 1.698 },
    Strasbourg: { population: 0.272 },
    Rome: { population: 2.753 },
    Dublin: { population: 0.528 } };

  return _.forEach(cities, function (item) {
    if (item.population >= 1) {
      item.size = 'big';
    } else if (item.population >= 0.5) {
      item.size = 'med';
    } else {
      item.size = 'small';
    }
  });
}

function hotOrWarm() {
  var cityTemps = { Hamburg: [14, 15, 16, 14, 18, 17, 20, 22, 21, 18, 19, 23],
    Munich: [16, 17, 19, 20, 21, 23, 22, 21, 20, 19, 24, 23],
    Madrid: [24, 23, 20, 24, 24, 23, 21, 22, 24, 20, 24, 22],
    Stockholm: [16, 14, 12, 15, 13, 14, 14, 12, 11, 14, 15, 14],
    Warsaw: [17, 15, 16, 18, 20, 20, 21, 18, 19, 18, 17, 20] };
  var hots = [];
  var warms = [];

  _.forEach(cityTemps, function (temps, city) {
    if (_.every(temps, function (t) { return t > 19; })) {
      hots.push(city);
    } else if (_.some(temps, function (t) { return t > 19; })) {
      warms.push(city);
    }
  });
  return { hot: hots, warm: warms };
}

function chained() {
  var list = ['Test', 'Hello', 'World', 'Node', 'JavaScript'];

  return _.chain(list)
    .map(function (i) { return _.upperCase(i + 'chained'); })
    .sortBy()
    .value();
}

function grouped() {
  var users = [
        { username: "tim", comment: "you are doing a great job!" },
        { username: "tim", comment: "when you have new workshoppers?" },
        { username: "cat_lover", comment: "wtf? where are all the cats gone?" },
        { username: "max", comment: "where have you been on friday? we missed you!" },
        { username: "max", comment: "You don't answer anymore - why?" },
        { username: "cat_lover", comment: "MORE cats!!!" },
        { username: "max", comment: "i really love your site" }
  ];

  return _.chain(users)
    .groupBy('username')
    .map(function (coms, name) {
      return { username: name,
        comment_count: _.size(coms)
      };
    })
    .sortBy('comment_count')
    .reverse()
    .value();
}

function redu() {
  var orders = [{ article: 1, quantity: 4 },
      { article: 2, quantity: 2 },
      { article: 1, quantity: 5 }];

  return _.chain(orders)
    .groupBy('article')
    .map(function (art, qu) {
      var total = 0;
      if (art.length > 1) {
        total = _.reduce(art, function (a, q) {
          return a + q.quantity;
        }, 0);
      } else {
        total = _.reduce(art, function (a, q) {
          return q.quantity;
        }, 0);
      }
      return {
        article: parseInt(qu, 10),
        total_orders: total
      };
    })
    .sortBy('total_orders')
    .reverse()
    .value();
}

function freelance() {
  var workers = [{ name: "mike", income: 2563 },
      { name: "kim", income: 1587 },
      { name: "liz", income: 3541 },
      { name: "tom", income: 2475 },
      { name: "bello", income: 987 },
      { name: "frank", income: 2975 }];

  var average = _.chain(workers)
    .sortBy('income')
    .reduce(function (sum, num) {
      return sum + num.income;
    }, 0)
    .divide(_.size(workers))
    .value();

  var overperform = _.filter(workers, function (worker) {
    return worker.income >= average;
  });

  var underperform = _.filter(workers, function (worker) {
    return worker.income < average;
  });

  return {
    average: average,
    overperform: overperform,
    underperform: underperform
  };
}

function temp() {
  var user = { name: "Foo",
    login: [1407574431, 140753421]
  };

  return _.template('Hello <%= name %> (logins: <%= num %>)')({ name: user.name, num: _.size(user.login) });
}
