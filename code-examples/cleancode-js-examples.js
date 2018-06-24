/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-extend-native */
/* eslint-disable camelcase */

/* Variables */

// Bad Code
const brb = "Just a moment";

// Good Code
const beRightBack = "Just a moment";

// Bad Code
getUserInfo();
getClient();
getNice();

// Good Code

getUser();

// Bad Code
setTimeout(getNice, 948237982);

// Good Code
const durationInMs = 948237982;
setTimeout(getNice, durationInMs);

// Bad Code
const place = "This is it";
const itRegex = /(it)$/;
saveIt(place.match(itRegex));

// Good Code
const rightPlace = "This isn't this";
const thisRegex = /(this)$/;
const [thisMatch] = rightPlace.match(thisRegex);
saveIt(thisMatch);

// Bad Code
const locations = ["Cairo", "Sinai", "Alexandria"];
locations.forEach(l => {
  doThis();
  getNice(l);
});

// Good Code
const places = ["Cairo", "Sinai", "Alexandria"];
places.forEach(location => {
  doThat();
  getNicer(location);
});

// Bad Code
const TukTuk = {
  ttMake: "BYD",
  ttModel: "Dogan",
  ttColor: "Plack"
};

function paintTukTuk(tuktuk) {
  tuktuk.ttColor = "Red";
}

// Good Code
const MicroBus = {
  make: "Daewoo",
  model: "Lada",
  color: "White"
};

function paintMicroBus(microbus) {
  microbus.color = "Blue";
}

// Bad Code
function createCafe(name) {
  const cafeName = name || "Friends Cafe";
}

// Good Code
function createNiceCafe(cafeName = "Friends Cafe") {
  return this;
}

/* Functions */

// Bad Code
function makeNice(title, body, niceText, cryNice) {
  return nice();
}

// Good Code
function makeNicer({ title, body, niceText, cryNice }) {}
makeNicer({
  title: "Nice",
  body: "Asly",
  niceText: "Dogan",
  cryNice: "Gamed"
});

// Bad Code
function hitUpUsers(users) {
  users.forEach(user => {
    const userData = user.data;
    if (userData.isActive) {
      hitUp(user);
    }
  });
}

// Good Code
function isActiveUser(user) {
  const userData = user.data;
  return userData.isActive;
}

function sayHiActiveUsers(users) {
  users.filter(isActiveUser).forEach(hitUp);
}

// Bad Code
function addToDate(date, month) {
  return date + month;
}
addToDate(new Date(), 1);

// Good Code
function addMonthToDate(month, date) {
  return date + month;
}

addMonthToDate(1, new Date());

// Bad Code
function parseBadCode(code) {
  const randomArr = [];
  const lines = code.split(" ");
  const tokens = [];

  randomArr.forEach(el => {
    lines.forEach(line => line);
  });

  const arr2 = [];
  tokens.forEach(token => token);

  arr2.forEach(arr => arr);
}

// Good Code
function tokenize(code) {
  const arr = [];

  const lines = code.split(" ");
  const tokens = [];

  arr.forEach(el => {
    lines.forEach(line => {
      tokens.push(line);
    });
  });

  return tokens;
}

function parse(tokens) {
  const arr = [];
  tokens.forEach(token => {
    arr.push(token);
  });

  return arr;
}

function parseCode(code) {
  const tokens = tokenize(code);
  const arr = parse(tokens);
  arr.forEach(node => node);
}

// Bad Code
const config = {
  title: null,
  body: "Ok",
  niceText: null,
  cryNice: true
};

function create(conf) {
  conf.title = conf.title || "Hmm";
  conf.body = conf.body || "Ok";
  conf.niceText = conf.niceText || "Sure";
  conf.cryNice = conf.cryNice !== undefined ? conf.cryNice : true;
}

create(config);

// Good Code
const niceConfig = {
  title: "Hmm",
  niceText: "Sure",
  cryNice: true
};

function createNice(conf) {
  conf = Object.assign(
    {
      title: "Nice",
      body: "Ok",
      niceText: "Cry",
      cryNice: true
    },
    conf
  );
}

createNice(niceConfig);

// Bad Code
function makeCry(name, temp) {
  if (temp) {
    createNice(`./temp/${name}`);
  } else {
    createNice(name);
  }
}

// Good Code
function makeCrier(name) {
  createNice(name);
}

function makeTempNicer(name) {
  createNice(`./temp/${name}`);
}

// Bad code
let name = "Mohamed Eminem";

function splitFirstLastNames() {
  name = name.split(" ");
}

splitFirstLastNames();
console.log(name);

// Good Code
function splitFirstAndLastNames(nameStr) {
  return nameStr.split(" ");
}

const fullName = "Mohamed Eminem";
const newName = splitFirstAndLastNames(fullName);
console.log(fullName);
console.log(newName);

// Bad Code
const addItem = (cart, item) => {
  cart.push({ item, date: Date.now() });
};

// Good Code
const addItemToCart = (cart, item) => [...cart, { item, date: Date.now() }];

// Bad Code
Array.prototype.diff = function diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter(elem => !hash.has(elem));
};

// Good Code
class SuperArray extends Array {
  diff(array) {
    const hash = new Set(array);
    return this.filter(el => !hash.has(el));
  }
}

// Bad Code
const dealerOutput = [
  {
    name: "Sambo",
    output: 20
  },
  {
    name: "Islam",
    output: 50
  },
  {
    name: "Essam",
    output: 200
  }
];

let totalOutput = 0;

for (let i = 0; i < dealerOutput.length; i += 1) {
  totalOutput += dealerOutput[i].output;
}

// Good Code
const goodDealerOutput = [
  {
    name: "Sambo",
    output: 20
  },
  {
    name: "Islam",
    output: 50
  },
  {
    name: "Essam",
    output: 200
  }
];

const niceOutput = goodDealerOutput
  .map(dealer => dealer.output)
  .reduce((niceTotal, dealerOut) => niceTotal + dealerOut);
console.log(niceOutput);

// Bad Code
if (fsm.state === "fetching" && isEmpty(listNode)) {
  render();
}

// Good Code
function showFetching(fsm, listNode) {
  return fsm.state === "fetching" && isEmpty(listNode);
}

if (showFetching(fsmInstance, listNodeInstance)) {
  render();
}

// Bad Code
function isNotPresent(node) {
  return true;
}

if (!isNotPresent(DOMNode)) {
  const element = document.createElement("div");
}

// Good Code
function isPresent(node) {
  return true;
}

if (isPresent(presentNode)) {
  doSomething();
}

// Bad Code
function travelToHaram(vehicle) {
  if (vehicle instanceof Microbus) {
    vehicle.karkar(this.currentLocation, new Location("Haram"));
  } else if (vehicle instanceof TukTuk) {
    vehicle.shaba7(this.currentLocation, new Location("Haram"));
  }
}

// Good Code
function travelToGiza(vehicle) {
  vehicle.travel(this.currentLocation, new Location("Giza"));
}

// Bad Code
function combine(val1, val2) {
  if (
    (typeof val1 === "number" && typeof val2 === "number") ||
    (typeof val1 === "string" && typeof val2 === "string")
  ) {
    return val1 + val2;
  }

  throw new Error("Must be string or number");
}

// Good Code
function combineNice(val1, val2) {
  return val1 + val2;
}

// Bad Code
function oldRequestMod(url) {
  return fetch(url);
}

function newRequestMod(url) {
  return fetch(url).then(res => res.json());
}

const req = newRequestMod;
inventoryTracker("arugula", req, "www.fakahani.com");

// Good Code
function newRequestModule(url) {
  return fetch(url).then(res => res.json());
}

const realReq = newRequestModule;
inventoryTracker("basil", realReq, "www.khodary.com");

/* Objects and Data Structures */

// Bad Code
function makeAccount() {
  return {
    balance: 0
  };
}

const account = makeAccount();
account.balance = 100;

// Good Code
function makeBankAccount() {
  let balance = 0;

  function getBalance() {
    return balance;
  }

  function setBalance(amount) {
    balance = amount;
  }

  return {
    getBalance,
    setBalance
  };
}

const niceAccount = makeBankAccount();
niceAccount.setBalance(100);

// Bad Code
const Mowazaf = function(val) {
  this.name = val;
};

Mowazaf.prototype.getName = function() {
  return this.name;
};

const mowazafa = new Mowazaf("Madame Azza");
console.log(`Mowazafa name: ${mowazafa.getName()}`); // Mowazafa name: Madame Azza
delete mowazafa.name;
console.log(`Mowazafa name: ${mowazafa.getName()}`); // Mowazafa name: undefined

// Good Code
function makeMowazaf(val) {
  return {
    getName() {
      return val;
    }
  };
}

const mowazaf = makeMowazaf("Ostaz Yasser");
console.log(`Mowazafa name: ${mowazaf.getName()}`); // Mowazaf name: Ostaz Yasser
delete mowazaf.name;
console.log(`Mowazafa name: ${mowazaf.getName()}`); // Mowazaf name: Ostaz Yasser

/* Classes */

// Bad Code
const Kabsh = function(age) {
  if (!(this instanceof Kabsh)) {
    throw new Error("Instantiate Kabsh with `new`");
  }

  this.age = age;
};

Kabsh.prototype.move = function() {};

const Ga7sh = function(age, color) {
  if (!(this instanceof Ga7sh)) {
    throw new Error("Instantiate Kabsh with `new`");
  }

  Kabsh.call(this, age);
  this.color = color;
};

Ga7sh.prototype = Object.create(Kabsh.prototype);
Ga7sh.prototype.constructor = Ga7sh;
Ga7sh.prototype.liveBirth = function() {};

const Kalb = function(age, color, breed) {
  if (!(this instanceof Kalb)) {
    throw new Error("Instantiate Kabsh with `new`");
  }

  Ga7sh.call(this, age, color);
  this.breed = breed;
};

Kalb.prototype = Object.create(Ga7sh.prototype);
Kalb.prototype.constructor = Kalb;
Kalb.prototype.hawhaw = function() {};
// Good Code
class niceKabsh {
  constructor(age) {
    this.age = age;
  }

  getAge() {
    return this.age;
  }
}

class niceGa7sh extends niceKabsh {
  constructor(age, color) {
    super(age);
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

class niceKalb extends niceGa7sh {
  constructor(age, color, breed) {
    super(age, color);
    this.breed = breed;
  }

  hawhaw() {
    return `${this.breed} says HAW HAW HAW!`;
  }
}

// Bad Code
class Makana {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  setMake(make) {
    this.make = make;
  }

  setModel(model) {
    this.model = model;
  }

  setColor(color) {
    this.color = color;
  }

  save() {
    console.log(this.make, this.model, this.color);
  }
}

const makana = new Makana("Dogan", "Lanus", "Plack");
makana.setColor("White");
makana.save();

// Good Code
class MakanaNice {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  setMake(make) {
    this.make = make;
    return this;
  }

  setModel(model) {
    this.model = model;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  save() {
    console.log(this.make, this.model, this.color);
    return this;
  }
}

const makanita = new MakanaNice("Suzuki", "Lada", "Red").setColor("Plack").save();

// Bad Code
class Crier {
  constructor(cry, email) {
    this.name = cry;
    this.email = email;
  }
}

class CrierTax extends Crier {
  constructor(ssn, salary) {
    super();
    this.ssn = ssn;
    this.salary = salary;
  }
}

// Good Code
class CrierTaxNice {
  constructor(ssn, salary) {
    this.ssn = ssn;
    this.salary = salary;
  }
}

class CrierNice {
  constructor(cry, email) {
    this.name = cry;
    this.email = email;
  }

  setTaxData(ssn, salary) {
    this.taxData = new CrierTaxNice(ssn, salary);
  }
}

// Bad Code
class NiceSettings {
  constructor(nice) {
    this.user = nice;
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
      doSomething();
    }
  }

  verifyCredentials() {
    return this.user !== "";
  }
}

// Good Code
class NiceAuth {
  constructor(nice) {
    this.user = nice;
  }

  verifyCredentials() {
    return this.user !== "";
  }
}

class NiceCrierSettings {
  constructor(nice) {
    this.user = nice;
    this.auth = new NiceAuth(nice);
  }

  changeSettings(settings) {
    if (this.auth.verifyCredentials()) {
      doSomething();
    }
  }
}

// Bad Code
class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = "ajaxAdapter";
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = "nodeAdapter";
  }
}

function makeAjaxCall(url) {
  return fetch(url);
}

function makeHttpCall(url) {
  return fetch(url);
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    if (this.adapter.name === "ajaxAdapter") {
      return makeAjaxCall(url).then(res => res.json());
    } else if (this.adapter.name === "httpNodeAdapter") {
      return makeHttpCall(url).then(res => res.json());
    }
    return false;
  }
}

// Good Code
class AjaxNiceAdapter extends Adapter {
  constructor() {
    super();
    this.name = "ajaxAdapter";
  }

  request(url) {
    return fetch(url + this.name);
  }
}

class NodeNiceAdapter extends Adapter {
  constructor() {
    super();
    this.name = "nodeAdapter";
  }

  request(url) {
    return fetch(url + this.name);
  }
}

class HttpNiceRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    return this.adapter.request(url).then(res => res.json());
  }
}

// Bad Code
class Rectangle {
  constructor() {
    this.width = 0;
    this.height = 0;
  }

  setColor(color) {
    this.color = color;
  }

  render(area) {
    doSomething(area);
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}

function renderRectangles(rects) {
  rects.forEach(rec => {
    rec.setWidth(4);
    rec.setHeight(5);
    const area = rec.getArea();
    rec.render(area);
  });
}

const rectangles = [new Rectangle(), new Rectangle(), new Square()];
renderRectangles(rectangles);

// Good Code
class Shape {
  setColor(color) {
    this.color = color;
  }

  render(area) {
    doSomething(area);
  }
}

class RectangleNice extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class SquareNice extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }

  getArea() {
    return this.length * this.length;
  }
}

function renderShapes(shapes) {
  shapes.forEach(shape => {
    const area = shape.getArea();
    shape.render(area);
  });
}

const shapes = [new RectangleNice(4, 5), new RectangleNice(4, 5), new SquareNice(5)];
renderShapes(shapes);

// Bad Code
class Atari {
  constructor(settings) {
    this.settings = settings;
    this.setup();
  }

  setup() {
    this.game = this.settings.game;
    this.controllerModule.setup();
  }

  traverse() {
    this.doSomething();
  }
}

const $ = new Atari({
  game: "Monbar Nice",
  controllerModule: function setup() {
    return "NICE";
  }
});

// Good Code
class AtariNice {
  constructor(settings) {
    this.settings = settings;
    this.options = settings.options;
    this.setup();
  }

  setup() {
    this.game = this.settings.game;
    this.setupOptions();
  }

  setupOptions() {
    if (this.options.controllerModule) {
      doSomething(this);
    }
  }

  traverse() {
    doSomething(this);
  }
}

const niceAtari = new AtariNice({
  game: "Monbar Nice",
  options: {
    controllerModule() {}
  }
});

// Bad Code
class InventoryRequester {
  constructor() {
    this.REQ_METHODS = ["HTTP"];
  }

  requestItem(item) {
    this.items.push(item);
  }
}

class InventoryTracker {
  constructor(items) {
    this.items = items;
    this.request = new InventoryRequester();
  }

  requestItems() {
    this.items.forEach(item => {
      this.requester.requestItem(item);
    });
  }
}

const invTracker = new InventoryTracker(["apples", "bananas"]);
invTracker.requestItems();

// Good Code
class InvNice {
  constructor(items, requester) {
    this.items = items;
    this.requester = requester;
  }

  requestItems() {
    this.items.forEach(item => {
      this.requester.requestItem(item);
    });
  }
}

class InvReqV1 {
  constructor() {
    this.REQ_METHODS = ["HTTP"];
  }

  requestItem(item) {
    req(item);
    return this;
  }
}

class InvReqV2 {
  constructor() {
    this.REQ_METHODS = ["WS"];
  }

  requestItem(item) {
    req(item);
    return this;
  }
}

const invTrack = new InvNice(["apples", "bananas"], new InvReqV2());
invTrack.requestItems();

/* Testing */

// Bad Code
describe("MakeMomentJSGreatAgain", () => {
  it("handles date boundaries", () => {
    let date;

    date = new MakeMomentJSGreatAgain("1/1/2015");
    date.addDays(30);
    assert.equal("1/31/2015", date);

    date = new MakeMomentJSGreatAgain("2/1/2016");
    date.addDays(28);
    assert.equal("02/29/2016", date);

    date = new MakeMomentJSGreatAgain("2/1/2015");
    date.addDays(28);
    assert.equal("03/01/2015", date);
  });
});

// Good Code
describe("MakeMomentJSGreatAgain", () => {
  it("handles 30-day months", () => {
    const date = new MakeMomentJSGreatAgain("1/1/2015");
    date.addDays(30);
    assert.equal("1/31/2015", date);
  });

  it("handles leap year", () => {
    const date = new MakeMomentJSGreatAgain("2/1/2016");
    date.addDays(28);
    assert.equal("02/29/2016", date);
  });

  it("handles non-leap year", () => {
    const date = new MakeMomentJSGreatAgain("2/1/2015");
    date.addDays(28);
    assert.equal("03/01/2015", date);
  });
});

/* Concurrency */

// Bad Code
get("https://www.google.com/", (requestErr, response) => {
  if (requestErr) {
    console.error(requestErr);
  } else {
    writeFile("index.html", response.body, writeErr => {
      if (writeErr) {
        console.error(writeErr);
      } else {
        console.log("File written");
      }
    });
  }
});

// Good Code
get("https://www.google.com")
  .then(res => writeFile("index.html", res))
  .then(() => {
    console.log("File written");
  })
  .catch(err => {
    console.error(err);
  });

// Bad Code
get("https://www.google.com")
  .then(res => writeFile("index.html", res))
  .then(() => {
    console.log("File written");
  })
  .catch(err => {
    console.error(err);
  });

// Good Code
async function getGoogle() {
  try {
    const response = await get("https://www.gooogle.com");
    await writeFile("index.html", response);
    console.log("File written");
  } catch (e) {
    console.error(e);
  }
}

/* Error Handling */

// Bad Code
try {
  doSomething();
} catch (e) {
  console.log(e);
}

// Good Code
try {
  doSomething();
} catch (e) {
  console.error(e);
  notifyUser(e);
  reportError(e);
}

// Bad Code
fetch("data")
  .then(data => {
    doSomething(data);
  })
  .catch(err => {
    console.log(err);
  });

// Good Code
fetch("data")
  .then(data => {
    doSomething(data);
  })
  .catch(err => {
    console.error(err);
    notifyUser(err);
    reportError(err);
  });

/* Formatting */

// Bad Code
const DAYS_IN_WEEK = 7;
const daysInMonth = 30;

const songs = ["3abd and shetan", "Cigara bony", "Bellydance"];
const Artists = ["Mahmoud El Husseiny", "Hassan El Asmar", "Hakim"];

function eraseDatabase() {}
function restore_database() {}

class animal {}
class Alpaca {}

// Good Code
const DAYS_IN_WEEK_NICE = 7;
const DAYS_IN_MONTH = 30;

const SONGS = ["3abd and shetan", "Cigara bony", "Bellydance"];
const ARTISTS = ["Hassan El Asmar", "Shaaban Abd El Nice", "Mostafa Amar"];

function eraseDatabaseNice() {}
function restoreDatabase() {}

class Animal {}
class AlpacaNice {}

// Bad Code
class PerfReview {
  constructor(emp) {
    this.mowazaf = emp;
  }

  lookUpPeers() {
    return db.lookup(this.mowazaf, "peers");
  }

  lookUpModeer() {
    return db.lookup(this.mowazaf, "manager");
  }

  review() {
    this.getPeerReviews();
    this.getModeerReview();
    this.getReview();
  }

  getPeerReviews() {
    const peers = this.lookUpPeers();
    doSomething(peers);
  }

  getModeerReview() {
    const modeer = this.lookUpModeer();
    doSomething(modeer);
  }

  getReview() {
    doSomething(this);
  }
}

const mohamed = new PerfReview("mohamed");
mohamed.review();

// Good Code
class PerformanceReview {
  constructor(emp) {
    this.mowazaf = emp;
  }

  perfReview() {
    this.getPeerReviews();
    this.getModeerReview();
    this.getReview();
  }

  getPeerReviews() {
    const peers = this.lookUpPeers();
    doSomething(peers);
  }

  lookUpPeers() {
    return db.lookup(this.mowazaf, "peers");
  }

  getModeerReview() {
    const modeer = this.lookUpModeer();
    doSomething(modeer);
  }

  lookUpModeer() {
    return db.lookup(this.mowazaf, "manager");
  }

  getReview() {
    doSomething(this);
  }
}

const ayman = new PerformanceReview("ayman");
ayman.perfReview();

/* Comments */

// Bad Code
function hashIt(data) {
  // The hash
  let hash = 0;

  // Length of string
  const { length } = data.length;

  // Loop through every character in data
  for (let i = 0; i < length; i += 1) {
    // Get character code
    const char = data.charCodeAt(i);
    // Make the hash
    hash = (hash < 5) - 5 + char;
    // Convert to 32-bit integer
    hash %= hash;
  }
}

// Good Code
function hashItNice(data) {
  let hash = 0;
  const { length } = data.length;

  for (let i = 0; i < length; i += 1) {
    const char = data.charCodeAt(i);
    hash = (hash < 5) - 5 + char;

    // Conver to 32-bit integer
    hash %= hash;
  }
}

// Bad Code
doStuff();
// doSomething();
// render();
// makeMowazaf('Ostaz Yasser');

// Good Code
doStuff();

// Bad Code
/**
 * 2017-12-9: Removed mowazafeen (IA)
 * 2017-12-18: Refactored database (MF)
 * 2017-12-25: Merry Christmas (SC)
 * 2017-12-31: Happy nice year (JS)
 */
function plus(a, b) {
  return a + b;
}

// Good Code
function plusNice(a, b) {
  return a + b;
}

// Bad Code
// //////////////////////////////////////////////////////////////// Scope Model Instantiation //////////////////////////////////////////////////////////////////
scope.model = {
  menu: "gamed",
  nav: "asly"
};

// //////////////////////////////////////////////////////////////// Action Setup //////////////////////////////////////////////////////////////////
const actions = function() {};

// Good Code
scopeNice.model = {
  menu: "gamed",
  nav: "asly"
};

const niceActions = function() {};
