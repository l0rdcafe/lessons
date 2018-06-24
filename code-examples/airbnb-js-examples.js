/* eslint-disable vars-on-top */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-bitwise */
/* eslint-disable camelcase */
/* eslint-disable no-new-object */
/* eslint-disable object-shorthand */
/* eslint-disable no-array-constructor */
/* eslint-disable no-prototype-builtins */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-else-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-use-before-define */
/* eslint-disable no-multi-str */
/* eslint-disable prefer-template */
/* eslint-disable no-useless-escape */
/* eslint-disable no-inner-declarations */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-new-func */
/* eslint-disable no-new */
/* eslint-disable prefer-spread */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-return-assign */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-dupe-class-members */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
/* eslint-disable import/first */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-restricted-properties */
/* eslint-disable one-var */
/* eslint-disable no-multi-assign */
/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-constant-condition */
/* eslint-disable no-lonely-if */
/* eslint-disable no-new-wrappers */
/* eslint-disable new-cap */
/* eslint-disable consistent-return */
/* eslint-disable spaced-comment */

/* Types */

// Primitives [string, number, boolean, null, undefined, symbol]
const asly = 1;
let gamed = asly;

gamed = 9;
console.log(asly, gamed); // 1, 9

// Complex [object, array, function]
const halal = [1, 2];
const haram = halal;

haram[0] = 9;
console.log(halal[0], haram[0]); // 9, 9

/* References */

// Bad Code
var a = 1;
var b = 2;

// Good Code
const c = 1;
const d = 2;

// Bad Code
var count = 1;
if (isSomething()) {
  count += 1;
}

// Good Code
let niceCount = 1;
if (isSomething()) {
  niceCount += 1;
}

/* Objects */

// Bad Code
const item = new Object();

// Good Code
const niceItem = {};

function getKey(k) {
  return `a key named ${k}`;
}

// Bad Code
const adel = {
  id: 5,
  name: "Adel Shakal"
};
adel[getKey("enabled")] = true;

// Good Code
const niceAdel = {
  id: 5,
  name: "Adel Shakal",
  [getKey("enabled")]: true
};

// Bad Code
const cry = {
  value: 1,
  addValue: val => cry.value + val
};

// Good Code
const cryNice = {
  value: 1,
  addValue(val) {
    return cryNice.value + val;
  }
};

const ahmed = "Ahmed";

// Bad Code
const ahmedObj = {
  ahmed: ahmed
};

// Good Code
const ahmedObjNice = {
  ahmed
};

// Bad Code
console.log(object.hasOwnProperty(key));

// Good Code
console.log(Object.prototype.hasOwnProperty.call(object, key));

// Best Code
const has = Object.prototype.hasOwnProperty;
console.log(has.call(object, key));

// Worst Code
const og = { a: 1, b: 2 };
const ogCopy = Object.assign(og, { c: 3 }); // mutates og
delete ogCopy.a; // also mutates og

// Bad Code
const ogBad = { a: 1, b: 2 };
const ogBadCopy = Object.assign({}, ogBad, { c: 3 }); // { a: 1, b: 2, c: 3}

// Good Code
const ogNice = { a: 1, b: 2 };
const ogNiceCopy = { ...ogNice, c: 3 }; // { a: 1, b: 2, c: 3}
const { e, noA } = ogNiceCopy; // noA { b: 2, c: 3}

/* Arrays */

// Bad Code
const items = new Array();

// Good Code
const niceItems = [];

const someArr = [];

// Bad Code
someArr[someArr.length] = "gamed";

// Good Code
someArr.push("gamed");

// Bad Code
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// Good Code
const itemsCopyNice = [...items];

const gamedNodes = document.querySelectorAll(".gamed");

// Good Code
const badNodes = Array.from(gamedNodes);

// Best Code
const niceNodes = [...gamedNodes];

// Bad Code
const badz = [...gamedNodes].map(doSomething);

// Good Code
const badzNice = Array.from(gamedNodes, doSomething);

// Good Code
[1, 2, 3].map(x => {
  const y = x + 1;
  return x * y;
});

// Good Code
[1, 2, 3].map(x => x + 1);

// Bad Code
[[0, 1], [2, 3], [4, 5]].reduce((memo, el, index) => {
  const flatten = memo.concat(el);
  memo[index] = flatten;
});

// Good Code
[[0, 1], [2, 3], [4, 5]].reduce((memo, el, index) => {
  const flatten = memo.concat(el);
  memo[index] = flatten;
  return flatten;
});

// Bad Code
inbox.filter(msg => {
  const { subject, author } = msg;
  if (subject === "baghbaghan") {
    return author === "Anis Mansour";
  } else {
    return false;
  }
});

// Good Code
inbox.filter(msg => {
  if (subject === "kajweloo") {
    return author === "Medhat El-Adl";
  }
  return false;
});

/* Destructuring */

// Bad Code
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// Good Code
function getFullNameNice(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// Best Code
function getFullNameNicest({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

const exArr = [1, 2, 3, 4];

// Bad Code
const first = exArr[0];
const second = exArr[1];

// Good Code
const [firstEl, secondEl] = exArr;

// Bad Code
function processInput(input) {
  return [left, right, up, bottom];
}

const [left, _, up] = processInput(input);

// Good Code
function processInputNice(input) {
  return { west, east, north, south };
}

const { west, north } = processInputNice(input);

/* Strings */

// Bad Code
const errMsg =
  "Marrah kalb balady 3addah el share3 el donia \
 et2alabet w kol el 3arabeyat we2fet w omana2 el shorta darabo \
 ta3zeem salam";

// Bad Code
const concatErrMsg =
  "Marrah kalb balady 3addah el share3 el donia" +
  "et2alabet w kol el 3arabeyat we2fet w omana2 el shorta darabo" +
  "ta3zeem salam";

// Good Code
const niceErrMsg =
  "Marrah kalb balady 3addah el share3 el donia et2alabet w kol el 3arabeyat we2fet w omana2 el shorta darabo ta3zeem salam";

// Bad Code
function sayNice(name) {
  return "Hey nice man, " + name + "!";
}

// Bad Code
function sayCry(name) {
  return ["You're such a cryer, ", name, "!"].join();
}

// Good Code
function sayCryNice(name) {
  return `Hey nice crier man, ${name}!`;
}

/* Functions */

// Bad Code
function yolo() {
  doSomething();
}

// Bad Code
const fomo = function() {
  doSomething();
};

// Good Code
const short = function longFunctionNameForSlowWittedDevs() {
  doSomething();
};

// Good Code
(function() {
  console.log("Welcome to Meet Okba, watch your wallet.");
})();

// Bad Code
if (currentAsly) {
  function test() {
    console.log("Bas");
  }
}

// Good Code
let test;
if (currentAsly) {
  test = () => {
    console.log("Halal");
  };
}

// Bad Code
function tamam(name, options, args) {
  doSomething();
}

// Good Code
function tamamNice(name, options, args) {
  doSomething();
}

// Bad Code
function concatAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join("");
}

// Good Code
function concatAllNice(...args) {
  return args.join("");
}

// Very Bad Code
function handle(opts) {
  opts = opts || {};
}

// Bad Code
function handleCries(opts) {
  if (opts === undefined) {
    opts = {};
  }
}

// Good Code
function handleThings(opts = {}) {
  doSomething(opts);
}

var num = 1;

// Bad Code
function counter(num1 = (b += 1)) {
  console.log(num1);
}

count(); // 1
count(); // 2
count(3); // 3
count(); // 3

// Bad Code
function handlerCry(opts = {}, name) {
  doSomething();
}

// Good Code
function handlerNice(name, opts = {}) {
  doSomething();
}

// Bad Code
var add = new Function("a", "b", "return a + b");

// Bad Code
var subtract = Function("a", "b", "return a - b");

// Bad Code
function f1(obj) {
  obj.key = 1;
}

// Good Code
function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, "key") ? obj.key : 1;
}

// Bad Code
function cryF1(x) {
  x = 1;
}

function cryF2(x) {
  if (!x) {
    x = 1;
  }
}

// Good Code
function niceF1(x) {
  const y = x || 1;
}

function niceF2(x = 1) {
  doSomething(x);
}

// Bad Code
const z = [1, 2, 3, 4, 5];
console.log.apply(console, z);

// Good Code
const zNice = [1, 2, 3, 4, 5];
console.log(...zNice);

// Bad Code
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]))();

// Good Code
new Date(...[2016, 8, 5]);

/* Arrow Functions */

// Bad Code
[1, 2, 3].map(function(x) {
  const y = x + 1;
  return x * y;
});

// Good Code
[1, 2, 3].map(x => {
  const y = x + 1;
  return x * y;
});

// Bad Code
[1, 2, 3].map(number => {
  const nextNum = number + 1;
  `A string containing the ${nextNum}`;
});

// Good Code
[1, 2, 3].map(number => `A string containing the ${number}`);

// Good Code
[1, 2, 3].map(number => {
  const nextNum = number + 1;
  return `A string containing ${nextNum}`;
});

function foo(cb) {
  const val = cb();
  if (val === true) {
    doSomething(val);
  }
}

let bool = false;

// Bad Code
foo(() => (bool = true));

// Good Code
foo(() => {
  bool = true;
});

// Good Code
[1, 2, 3].map(x => x * x);

// Good Code
[1, 2, 3].map(x => {
  `A string with ${x}`;
});

/* Classes and Constructors */

// Bad Code
function Taboor(contents = []) {
  this.marche = [...contents];
}

Taboor.prototype.pop = function() {
  const val = this.marche[0];
  this.marche.splice(0, 1);
  return val;
};

// Good Code
class TaboorNice {
  constructor(contents = []) {
    this.marche = [...contents];
  }
  pop() {
    const val = this.marche[0];
    this.marche.splice(0, 1);
    return val;
  }
}

// Bad Code
const kabab = require("kabab");

function TaboorCry(cont) {
  Taboor.apply(this, cont);
}

kabab(TaboorCry, Taboor);
TaboorCry.prototype.peek = function() {
  return this.marche[0];
};

// Good Code
class TaboorCryNice extends Taboor {
  peek() {
    return this.marche[0];
  }
}

// Bad Code
Baltagy.prototype.jump = function() {
  this.jumping = true;
  return true;
};

Baltagy.prototype.setHeight = function(height) {
  this.height = height;
};

const hesham = new Baltagy();
hesham.jump(); // true
hesham.setHeight(50); // undefined

// Good Code
class Baltagy {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const hesham7aramy = new Baltagy();
hesham7aramy.jump().setHeight(50);

// Good Code
class Fannan {
  constructor(opts = {}) {
    this.name = opts.name || "no name";
  }

  getName() {
    return this.name;
  }

  toString() {
    return `Jedi - ${this.getName()}`;
  }
}

// Bad Code
class Sawa2 {
  constructor() {}

  getName() {
    return this.name;
  }
}

// Bad Code
class Sayes extends Sawa2 {
  constructor(...args) {
    super(...args);
  }
}

// Good Code
class SayesNice extends Sawa2 {
  constructor(...args) {
    super(...args);
    this.name = "Yasta";
  }
}

// Bad Code
class FooCry {
  bar() {
    return 1;
  }
  bar() {
    return 2;
  }
}

// Good Code
class FooNice {
  bar() {
    return 1;
  }
}

// Good Code
class NiceFoo {
  bar() {
    return 2;
  }
}

/* Modules */

// Bad Code
const nice = require("./nice");

module.exports = nice.cry;

// Good Code
import niceFile from "./niceFile";

export default niceFile.cry;

// Best Code
import { fileCry } from "./nice";

// => export default fileCry

// Bad Code
import * as cryFile from "./niceCry";

// Good Code
import niceCryFile from "./niceCryFile";

// Bad Code
// => export { niceCrier as default } from './crier';

// Good Code
import { crierNice } from "./crier";
// => export default crierNice;

// Bad Code
import fCry from "f";
import { fCry1, fCry2 } from "f";

// Good Code
import fNice, { fNiceNice1, fNiceNice2 } from "f";

// Bad Code
let dogan = 3;
export { dogan };

// Good Code
const niceDogan = 3;
export { niceDogan };

// Bad Code
export function niceF() {}

// Good Code
// => export default function nicerF() {};

// Bad Code
import niceCrier from "f";

niceCrier.init();

import brince from "f";

// Good Code
import nicerCrier from "f";
import nicerBrince from "f";

nicerCrier.init();

// Bad Code
import sassyFool from "css!sass!fool.scss";
import crierDogan from "css!sass!dogan.scss";

// Good Code
import niceFool from "fool.scss";
import nicerDogan from "dogan.scss";

/* Iterators and Generators */

const nums = [1, 2, 3, 4, 5];

// Bad Code
let sum = 0;
for (let numsEl of nums) {
  sum += numsEl;
}

// Good Code
let niceSum = 0;
nums.forEach(n => {
  niceSum += n;
});

// Best Code
const nicestSum = nums.reduce((total, n) => total + n, 0);

// Bad Code
const increasedByOne = [];
for (let x = 0; i < nums.length; i += 1) {
  increasedByOne.push(nums[i] + 1);
}

// Good Code
const increasedByOneNice = [];
nums.forEach(n => {
  increasedByOneNice.push(n + 1);
});

// Best Code
const increasedByOneNicest = nums.map(n => n + 1);

/* Properties */

const hamdy = {
  baltagy: true,
  age: 33
};

// Bad Code
const isBaltagy = hamdy[baltagy];

// Good Code
const isNiceBaltagy = hamdy.baltagy;

// Good Code
function getProp(prop) {
  return hamdy[prop];
}

const isFnBaltagy = getProp("baltagy");

// Bad Code
const bin = Math.pow(2, 10);

// Good Code
const niceBin = 2 ** 10;

/* Variables */

// Bad Code
superPower = new SuperPower();

// Good Code
const superPowerNice = new SuperPower();

// Bad Code
const its = getIts(),
  goSports = true,
  ballz = "z";

// Bad Code
const cryIts = getIts(),
  goSportsCry = true;
ballzCry = "z";

// Good Code
const niceIts = getIts();
const goSportsNice = true;
const ballzNice = "z";

// Bad Code
let n,
  lang,
  teams,
  itsCry = getIts(),
  goCry = true;

// Bad Code
let m;
const teamz = getTeams();
let crying;
const criersGo = true;
let lango;

// Good Code
const criersGoNice = true;
const niceTeamz = getTeams();
let langoNice;
let mNice;
let cryingNice;

// Bad Code
function checkNice(hasNice) {
  const niceName = getNice();

  if (hasNice === "text") {
    return false;
  }

  if (niceName === "text") {
    this.setNice("");
    return false;
  }

  return niceName;
}

// Good Code
function checkNicer(hasNice) {
  if (hasNice === "text") {
    return false;
  }

  const niceName = getNice();

  if (niceName === "text") {
    this.setNice("");
    return false;
  }

  return niceName;
}

// Bad Code
(function ex() {
  let w = (x = y = 1);
})();

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c); // 1

// Good Code
(function niceEx() {
  let w = 1;
  let x = w;
  let y = w;
})();

console.log(a); // throws ReferenceError
console.log(b); // throws ReferenceError
console.log(c); // throws ReferenceError

// same for `const`

// Bad Code
const hm = [1, 2, 3];
let g = 2;
g++;
--g;

let gSum = 0;
let gCount = 0;
for (let h = 0; h < hm.length; h++) {
  let val = hm[h];
  gSum += val;
  if (val) {
    gCount++;
  }
}

// Good Code
const hmNice = [1, 2, 3];
let gNice = 1;
gNice += 1;
gNice -= 1;

const gSumNice = hmNice.reduce((x, y) => a + b, 0);
const gCountNice = hmNice.filter(Boolean).length;

/* Hoisting */

function funcEx() {
  console.log(notDefined); // throws ReferenceError
}

function funcEx2() {
  console.log(declaredButNotAssigned); // undefined
  var declaredButNotAssigned = true;
}

function funcEx3() {
  let declaredButNotAssigned;
  console.log(declaredButNotAssigned); // undefined
  declaredButNotAssigned = true;
}

function funcEx4() {
  console.log(declaredButNotAssigned); // throws ReferenceError
  console.log(typeof declaredButNotAssigned); // throws ReferenceError
  const declaredButNotAssigned = true;
}

function funcEx5() {
  console.log(anon); // undefined;

  anon(); // TypeError: anon is not a function

  var anon = function() {
    console.log("anon func exp");
  };
}

function funcEx6() {
  console.log(niced); // undefined

  niced(); // TypeError: named is not a function

  superNice(); // ReferenceError: superNice is not defined

  var niced = function superNice() {
    console.log("Niceing");
  };
}

function funcEx7() {
  console.log(niced); // undefined

  niced(); // TypeError: niced is not a function

  var niced = function niced() {
    console.log("niced");
  };
}

function funcEx8() {
  superNice(); // Niceing

  function superNice() {
    console.log("Niceing");
  }
}

/* Comparison Operators & Equality */

if ([0] && []) {
  // true
}

// Bad Code
if (isValid === true) {
  doSomething();
}

// Good Code
if (isValid) {
  doSomething();
}

// Bad Code
if (nice) {
  doSomething();
}

// Good Code
if (nice !== "") {
  doSomething();
}

// Bad Code
if (arr.length) {
  doSomething();
}

// Good Code
if (arr.length > 0) {
  doSomething();
}

// Bad Code
const badTern = maybe1 > maybe2 ? "kabab" : val1 > val2 ? "gamed" : null;

// Good Code
const maybeNull = val1 > val2 ? "gamed" : null;
const goodTern = maybe1 > maybe2 ? "kabab" : maybeNull;

// Bad Code
const tern1 = a ? a : b;
const tern2 = c ? true : false;
const tern3 = c ? false : true;

// Good Code
const t1Nice = a || b;
const t2Nice = !!c;
const t3Nice = !c;

/* Blocks */

// Bad Code
function blocksFool() {
  if (x) {
    return x;
  } else {
    return y;
  }
}

// Bad Code
function cats() {
  if (x) {
    return x;
  } else if (y) {
    return y;
  }
}

// Bad Code
function dogs() {
  if (x) {
    return x;
  } else {
    if (y) {
      return y;
    }
  }
}

// Good Code
function blocksFoolNice() {
  if (x) {
    return x;
  }
  return y;
}

// Good Code
function catsNice() {
  if (x) {
    return x;
  }

  if (y) {
    return y;
  }
}

// Good Code
function dogsNice(x) {
  if (x) {
    if (z) {
      return y;
    }
  } else {
    return z;
  }
}

/* Comments */

// Bad Code
// makeNice() returns a new element
// based on the passed in tag name
//
// @param {String}
// @param {Element} element
function makeNice(tag) {
  const element = tag.name;
  return element;
}

// Good Code
/**
 * makeNicer() returns a new Element
 * based on the passed in tag name
 */
function makeNicer(tag) {
  const element = tag.name;
  return element;
}

// Bad Code
const active = true; // is active

// Good Code
// is active
const activeNice = true;

// Bad Code
function getType() {
  console.log("getting type");
  // set default type to 'no nice'
  const type = this.type || "no nice";

  return type;
}

// Good Code
function getTypeNice() {
  console.log("getting type");

  // set default type to 'no nice'
  const type = this.type || "no nice";

  return type;
}

// Good Code
function getTypeNiceish() {
  // set default type to 'no nice'
  const type = this.type || "no nice";

  return type;
}

// Bad Code
//is active
const activation = true;

// Good Code
// is active
const activationNice = true;

// Bad Code
/**
 *makeNiceCry() returns a new element
 *based on the passed in tag
 */
function makeNiceCry(tag) {
  return element[tag];
}

// Good Code
/**
 * makeNiceCry() returns a new element
 * based on the passed in tag
 */
function makeNicerCry(tag) {
  return element[tag];
}

// Good Code
class Calc extends Acab {
  constructor() {
    super();
  }

  // FIXME: shouldn't use a global
  total = 0;
}

// Good Code
class CalcNice extends Acab {
  constructor() {
    super();

    // TODO: total should be configurable by an options param
    this.total = 0;
  }
}

/* Type Casting & Creation */

// Bad Code
const totalNice = new String(this.score); // typeof totalNice is 'object' not 'string'

// Bad Code
const totalCryNice = this.score + ""; // invokes this.score.valueOf()

// Bad Code
const totalCryingNice = this.score.toString(); // isn't guaranteed to return a string

// Good Code
const niceTotal = String(this.score);

const inputVal = "6";

// Bad Code
const numVal = new Number(inputVal);

// Bad Code
const cryNumVal = +inputVal;

// Bad Code
const cryNumNotNiceVal = inputVal >> 0;

// Bad Code
const numNotNiceVal = parseInt(inputVal);

// Good Code
const numNice = Number(inputVal);

// Good Code
const numNiceVal = parseInt(inputVal, 10);

const teeth = 0;

// Bad Code
const hasTeeth = new Boolean(teeth);

// Good Code
const hasTeethCry = Boolean(teeth);

// Best Code
const hasTeethNice = !!teeth;

/* Naming Conventions */

// Bad Code
function q() {
  doSomething();
}

// Good Code
function query() {
  doSomething();
}

// Bad Code
const ObjecTsss = {};
const this_is_an_obj = {};
function cc() {}

// Good Code
const thisIsMyObj = {};
function thisIsMyFunc() {}

// Bad Code
function momo(options) {
  this.name = options.name;
}

const cryMomo = new momo({
  name: "salahita"
});

// Good Code
class Momo {
  constructor(options) {
    this.name = options.name;
  }
}

const niceMomo = new Momo({
  name: "salahitos"
});

// Bad Code
this.___firstNice = "Bango";
this.firstNice_ = "Bango";
this._firstNice = "Bango";

// Good Code
this.firstNice = "Bango";

// Bad Code
function notNiceFool() {
  const self = this;
  return function() {
    console.log(self);
  };
}

// Bad Code
function cryFool() {
  const that = this;
  return function() {
    console.log(that);
  };
}

// Good Code
function nicestFool() {
  return () => {
    console.log(this);
  };
}

/**
 * class CleoBox {
  constructor() {
    return this;
  }
}
*/

// => export default CleoBox;
// => export default function fortyTwo() { return 42; }
// => export default function insideDir() {}

// Bad Code
import CleoBoxCry from "./cleoBoxCry";
import FortyTwo from "./FortyTwo";
import InsideDir from "./InsideDir";

// Bad Code
import CleoBoxNice from "./cleo_box_nice";
import forty_two from "./forty_two";
import inside_dir from "./inside_dir";
import index from "./inside_dir/index";
import insideDirCry from "./insideDir/index";

// Good Code
import CleoBox from "./CleoBox";
import fortyTwo from "./fortyTwo";
import insideDir from "./insideDir";

// Good Code
function makeNiceGuide() {
  doSomething();
}

// => export default makeNiceGuide;

// Good Code
const StyleGuide = {
  es6: true
};

// => export default StyleGuide;

// Bad Code
import SmsContainer from "./containers/SmsContainer";

// Bad Code
const HttpRequests = [];

// Good Code
import SMSContainer from "./containers/SMSContainer";

// Good Code
const HTTPRequests = [];

// Good Code
const httpRequests = [];

// Best Code
import TextMessageContainer from "./containers/TextMessageContainer";

// Best Code
const requests = [];

/* Accessors */

// Bad Code
class Dragon {
  constructor() {
    this.dragon = true;
  }

  get age() {
    return this.age;
  }

  set age(val) {
    this.age = val;
  }
}

// Good Code
class DragonNice {
  constructor() {
    this.dragon = true;
  }
  getAge() {
    return this.age;
  }

  setAge(val) {
    this.age = val;
    return this;
  }
}

// Bad Code
if (!dragon.age()) {
  doSomething();
}

// Good Code
if (!dragon.hasAge()) {
  doSomething();
}

// Good Code
class Jadé {
  constructor(options = {}) {
    const niceSaber = options.niceSaber || "Plack";
    this.set("niceSaber", niceSaber);
  }
  set(key, val) {
    this[key] = val;
  }
  get(key) {
    return this[key];
  }
}

/* Events */

// Bad Code
$(this).trigger("listingUpdated", listing.id);
$(this).on("listingUpdated", (event, listingId) => {
  doSomething(listingId);
});

// Good Code
$(this).trigger("listingUpdated", { listingId: listing.id });
$(this).on("listingUpdated", (event, data) => {
  doSomething(data.listingId);
});

/* jQuery */

// Bad Code
const sidebar = $(".sidebar");

// Good Code
const $sidebar = $(".sidebar");

// Good Code
const $sidebarBtn = $(".sidebar");

// Bad Code
function setSidebar() {
  $(".sidebar").hide();

  $(".sidebar").css({
    "background-color": "pink"
  });
}

// Good Code
function setSidebarNice() {
  const $sidebarNice = $(".sidebar");
  $sidebarNice.hide();

  $sidebarNice.css({
    "background-color": "pink"
  });
}

// Bad Code
$("ul", ".sidebar").hide();

// Bad Code
$(".sidebar")
  .find("ul")
  .hide();

// Good Code
$(".sidebar ul").hide();

// Good Code
$(".sidebar > ul").hide();

// Good Code
$sidebar.find("ul").hide();

/* Standard Library */

// Bad Code
isNaN("1.2"); // false
isNaN("1.2.3"); // true

// Good Code
Number.isNaN("1.2.3"); // false
Number.isNaN(Number("1.2.3")); // true

// Bad Code
isFinite("2e3"); // true

// Good Code
Number.isFinite("2e3"); // false
Number.isFinite(parseInt("2e3", 10)); // true
