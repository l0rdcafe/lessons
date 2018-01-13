/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-sequences */

/* Array */

// Lodash
_.compact([0, 1, false, 2, "", 3]);

// Native
[0, 1, false, 2, "", 3].filter(v => v);

// Lodash
const arr = [1];
const other = _.concat(arr, 2, [3], [[4]]);
console.log(other); // [1, 2, 3, [4]]

// Native
const arrNative = [1];
const otherNative = arrNative.concat(2, [3], [[4]]);
console.log(otherNative); // [1, 2, 3, [4]]

// Lodash
const array = [1, 2, 3];
_.fill(array, "a");
console.log(array); // ['a', 'a', 'a']

_.fill(Array(3), 2); // [2, 2, 2]

_.fill([4, 6, 8, 10], "*", 1, 3); // [4, '*', '*', 10]

// Native
const arrayNative = [1, 2, 3];
arrayNative.fill("a");
console.log(arrayNative); // ['a', 'a', 'a']

Array(3).fill(2); // [2, 2, 2]

[4, 6, 8, 10].fill("*", 1, 3); // [4, '*', '*', 10]

// Lodash
const users = [
  { user: "khaled", age: 40, active: true },
  { user: "ayman", age: 18, active: false },
  { user: "sambo", age: 27, active: true }
];

_.find(users, user => user.age < 40); // { user: 'ayman', age: 18, active: true}

// Native
const usersNice = [
  { user: "khaled", age: 40, active: true },
  { user: "ayman", age: 18, active: false },
  { user: "sambo", age: 27, active: true }
];
usersNice.find(user => user.age < 40); // { user: 'ayman', age: 18, active: true}

// Lodash
const dealers = [
  { name: "riyad", age: 32, active: true },
  { name: "mohamed", age: 54, active: false },
  { name: "seif", age: 26, active: true }
];
const dealersIndex = _.findIndex(dealers, dealer => dealer.age < 54);
console.log(dealersIndex); // 0

// Native
const dealersNice = [
  { name: "riyad", age: 32, active: true },
  { name: "mohamed", age: 54, active: false },
  { name: "seif", age: 26, active: true }
];
const indexNice = dealersNice.findIndex(dealer => dealer.age < 54);
console.log(indexNice); // 0

// Lodash
_.first([1, 2, 3, 4, 5]); // 1

_.first([1, 2, 3, 4, 5], 2); // [1, 2]

// Native
[1, 2, 3, 4, 5][0]; // 1

[1, 2, 3, 4, 5].slice(0, 2); // [1, 2]

// Lodash
_.flatten([1, [2, [3, [4]], 5]]); // [1, 2, [3, [4]], 5]

// Native
const flatten = [1, [2, [3, [4]], 5]].reduce((a, b) => a.concat(b), []);
console.log(flatten); // [1, 2, [3, [4]], 5]

// Lodash
_.flattenDeep([1, [2, [3, [4]], 5]]); // [1, 2, 3, 4, 5]

// Native
const flattenDeep = arrEl =>
  Array.isArray(arrEl) ? arrEl.reduce((a, b) => [...flattenDeep(a), ...flattenDeep(b)], []) : [arrEl];

flattenDeep([1, [[2], [3, [4]], 5]]); // [1, 2, 3, 4, 5]

const exArr = [1, 2, 3];

// Lodash
_.head(exArr); // 1

_.tail(exArr); // [2, 3]

// Native
const [head, ...tail] = exArr;
console.log(head); // 1
console.log(tail); // [2, 3]

// Lodash
const arrEx = [2, 9, 9];
const res = _.indexOf(arrEx, 2);
console.log(res); // 0

// Native
const arrExNative = [2, 9, 9];
const resNative = arrExNative.indexOf(2);
console.log(resNative); // 0

// Lodash
const result = _.join(["one", "two", "kofta"], "--");
console.log(result); // 'one--two--kofta'

// Native
const nativeResult = ["one", "two", "kofta"].join("--");
console.log(nativeResult); // 'one--two--kofta'

// Lodash
const numbers = [1, 2, 3, 4, 5];
_.last(numbers); // 5

_.last(numbers, 2); // [4, 5]

// Native
const numbersNative = [1, 2, 3, 4, 5];
numbersNative[numbersNative.length - 1]; // 5
numbersNative.slice(-1)[0]; // 5
numbersNative.slice(-2); // [4, 5]

// Lodash
const arrCry = [2, 9, 9, 4, 3, 6];
const resCry = _.lastIndexOf(arrCry, 9);
console.log(resCry); // 2

// Native
const arrNice = [2, 9, 9, 4, 3, 6];
const resNice = arrNice.lastIndexOf(9);
console.log(resNice); // 2

// Lodash
const arrExample = [1, 2, 3];
console.log(_.reverse(arrExample)); // [3, 2, 1]

// Native
const arrExampleNice = [1, 2, 3];
console.log(arrExampleNice.reverse()); // [3, 2, 1]

// Lodash
const arrWithout = [1, 2, 3];
console.log(_.without(arrWithout, 2)); // [1, 3]

// Native
const arrWithoutNice = [1, 2, 3];
console.log(arrWithoutNice.filter(val => val !== 2)); // [1, 3]

// Lodash
const arrSliceEx = [1, 2, 3, 4];
console.log(_.slice(arrSliceEx, 1, 3)); // [2, 3]

// Native
const arrSliceExNice = [1, 2, 3, 4];
console.log(arrSliceExNice.slice(1, 3)); // [2, 3]

// Lodash
const isArr = [];
console.log(_.isArray(isArr)); // true

// Native
const isArrNice = [];
console.log(Array.isArray(isArrNice)); // true

/* Collection */

// Lodash
_.each([1, 2, 3], val => {
  console.log(val);
}); // 1 2 3

// Native
[1, 2, 3].forEach(val => {
  console.log(val);
}); // 1 2 3

// Lodash
function isLargerThan10(element) {
  return element >= 10;
}
const everyArr = [10, 20, 30];
const resEvery = _.every(everyArr, isLargerThan10);
console.log(resEvery); // true

// Native
function isLargerThanTen(element) {
  return element >= 10;
}

const everyArrNice = [10, 20, 30];
const resEveryNice = everyArrNice.every(isLargerThanTen);
console.log(resEveryNice); // true

// Lodash
function isBigNuff(val) {
  return val >= 10;
}

const bigArr = [12, 5, 8, 130, 44];
const filteredBigArr = _.filter(bigArr, isBigNuff);
console.log(filteredBigArr); // [12, 130, 44]

// Native
function isBigEnough(val) {
  return val >= 10;
}

const bigArrNice = [12, 5, 8, 130, 44];
const filteredBigArrNice = bigArrNice.filter(isBigEnough);
console.log(filteredBigArrNice); // [12, 130, 44]

// Lodash
const grouped = _.groupBy(["one", "two", "kofta"], "length");
console.log(grouped); // {3: ['one', 'two'], 5: 'kofta'}

// Native
const groupedNative = ["one", "two", "kofta"].reduce(
  (r, v, i, b, k = v.length) => ((r[k] || (r[k] = [])).push(v), r),
  {}
);
console.log(groupedNative); // {3: ['one', 'two'], 5: 'kofta'}

// Lodash
const groupedNum = _.groupBy([1.3, 2.1, 2.4], num => Math.floor(num));
console.log(groupedNum); // {1: [1.3], 2: [2.1, 2.4]}

// Native
const groupedNumNice = [1.3, 2.1, 2.4].reduce(
  (r, v, i, b, k = Math.floor(v)) => ((r[k] || (r[k] = [])).push(v), r),
  {}
);
console.log(groupedNumNice); // {1: [1.3], 2: [2.1, 2.4]}

// Lodash
const incArr = [1, 2, 3];
_.includes(incArr, 1); // true

// Native
const incArrNice = [1, 2, 3];
incArrNice.indexOf(1) > -1; // true

// Lodash
const mapArr1 = [1, 2, 3];
const mapArr2 = _.map(mapArr1, val => val * 2);
console.log(mapArr2); // [2, 4, 6]

// Native
const mapArr1Nice = [1, 2, 3];
const mapArr2Nice = mapArr1Nice.map(val => val * 2);
console.log(mapArr2Nice); // [2, 4, 6]

// Lodash
const data = [{ value: 6 }, { value: 2 }, { value: 4 }];
const minItem = _.minBy(data, "value");
const maxItem = _.maxBy(data, "value");
console.log(minItem, maxItem); // { value: 2 } { value: 6 }

// Native
const dataNice = [{ value: 6 }, { value: 2 }, { value: 4 }];
const minItemNice = dataNice.reduce((a, b) => (a.value <= b.value ? a : b), {});
const maxItemNice = dataNice.reduce((a, b) => (a.value >= b.value ? a : b), {});
console.log(minItemNice, maxItemNice); // { value: 2 } { value: 6 }

// Lodash
const arr1 = [{ name: "ahmed" }, { name: "tarek" }, { name: "bombo" }];
const names = _.pluck(arr1, "name");
console.log(names); // ['ahmed', 'tarek', 'bombo']

// Native
const arr1Nice = [{ name: "ahmed" }, { name: "tarek" }, { name: "bombo" }];
const namesNice = arr1Nice.map(x => x.name);
console.log(namesNice); // ['ahmed', 'tarek', 'bombo']

// Lodash
const redArr = [0, 1, 2, 3, 4];
const redRes = _.reduce(redArr, (prevVal, currVal) => prevVal + currVal);
console.log(redRes); // 10

// Native
const redArrNice = [0, 1, 2, 3, 4];
const redResNice = redArrNice.reduce((prevVal, currVal) => prevVal + currVal);
console.log(redResNice); // 10

// Lodash
_.range(4); // [0, 1, 2, 3]
_.range(-4); // [0, -1, -2, -3]
_.range(1, 5); // [1, 2, 3, 4]
_.range(0, 20, 5); // [0, 5, 10, 15]

// Native
Array.from({ length: 4 }, (_, i) => i); // [0, 1, 2, 3]
Array.from({ length: 4 }, (_, i) => i); // [0, -1, -2, -3]
Array.from({ length: 4 }, (_, i) => i + 1); // [1, 2, 3, 4]
Array.from({ length: 4 }, (_, i) => i * 5); // [0, 5, 10, 15]

[...Array(4).keys()]; // [0, 1, 2, 3]

// Lodash
const arrRightRed = [0, 1, 2, 3, 4];
const resRightRed = _.reduceRight(arrRightRed, (prevVal, currVal) => prevVal - currVal);
console.log(resRightRed); // -2

// Native
const arrRightRedNice = [0, 1, 2, 3, 4];
const resRightRedNice = arrRightRedNice.reduceRight((prevVal, currVal) => prevVal - currVal);
console.log(resRightRedNice); // -2

// Lodash
const resSize = _.size({ one: 1, two: 2, kofta: true });
console.log(resSize); // 3

// Native
const resSizeNice = Object.keys({ one: 1, two: 2, kofta: true }).length;
console.log(resSizeNice);

// Lodash
function isLargerThan9(element) {
  return element >= 9;
}

const someArr = [10, 9, 8];
const someRes = _.some(someArr, isLargerThan9);
console.log(someRes); // true

// Native
function isLargerThanNine(element) {
  return element >= 9;
}

const someNiceArr = [10, 9, 8];
const someNiceRes = someNiceArr.some(isLargerThanNine);
console.log(someNiceRes); // true

/* Function */

const notes = ["hello", "nice"];

// Lodash
const renderNotes = _.after(notes.length, render);
notes.forEach(note => {
  console.log(note);
  renderNotes();
});

// Native
notes.forEach((note, i) => {
  console.log(note);
  if (notes.length === i + 1) {
    render();
  }
});

/* Lang */

// Lodash
console.log(_.isNaN(NaN)); // true

// Native
console.log(isNaN(NaN)); // true

// ES6
console.log(Number.isNaN(NaN)); // true

/* Object */

// Lodash
function Fool() {
  this.c = 3;
}

function Baltagy() {
  this.e = 5;
}

Fool.prototype.d = 4;
Baltagy.prototype.f = 6;
const resultBoth = _.assign(new Fool(), new Baltagy());
console.log(resultBoth); // { c: 3, e: 5}

// Native
function FoolNice() {
  this.c = 3;
}

function BaltagyNice() {
  this.e = 5;
}

FoolNice.prototype.d = 4;
BaltagyNice.prototype.f = 6;
const resultBothNice = Object.assign(new FoolNice(), new BaltagyNice());
console.log(resultBothNice); // { c: 3, e: 5}

// Lodash
const resKeys = _.keys({ one: 1, two: 2, kofta: true });
console.log(resKeys); // ['one', 'two', 'kofta']

// Native
const resKeysNice = Object.keys({ one: 1, two: 2, kofta: true });
console.log(resKeysNice); // ['one', 'two', 'kofta']

// Lodash
const resPairs = _.toPairs({ one: 1, two: 2, kofta: true });
console.log(resPairs); // [['one', 1], ['two', 2], ['kofta', true]]

// Native
const resPairsNice = Object.entries({ one: 1, two: 2, kofta: true });
console.log(resPairsNice); // [['one', 1], ['two', 2], ['kofta', true]]

// Lodash
const resVals = _.values({ one: 1, two: 2, kofta: true });
console.log(resVals); // [1, 2, true]

// Native
const resValsNice = Object.values({ one: 1, two: 2, kofta: true });
console.log(resValsNice); // [1, 2, true]

/* String */

// Lodash
const resRep = _.repeat("kabab", 2);
console.log(resRep); // 'kababkabab'

// Native
const resRepNice = "kabab".repeat(2);
console.log(resRepNice); // 'kababkabab'

// Lodash
const compiled = _.template("hello <%= user %>!");
compiled({ user: "nice" });

// Native
const compiledNice = value => `hello ${value.user}`;
compiledNice({ user: "nice" });

// Lodash
const lowerRes = _.toLower("BAS YALA");
console.log(lowerRes); // 'bas yala'

// Native
const lowerResNice = "BAS YALA".toLowerCase();
console.log(lowerResNice); // 'bas yala'

// Lodash
const upperRes = _.toUpper("bas yala");
console.log(upperRes); // 'BAS YALA'

// Native
const upperResNice = "bas yala".toUpperCase();
console.log(upperResNice); // 'BAS YALA'

// Lodash
const resTrim = _.trim("      kabab       ");
console.log(resTrim); // 'kabab'

// Native
const resTrimNice = "      kabab        ".trim();
console.log(resTrimNice); // 'kabab'

// Lodash
const regex = /apples/gi;
const str = "Apples are nice, and also criers";
const newStr = _.replace(str, regex, "rappers");
console.log(newStr); // 'rappers are nice, and also criers'

// Native
const regexNice = /apples/gi;
const strNice = "Apples are nice, and also criers";
const newStrNice = strNice.replace(regexNice, "rappers");
console.log(newStrNice); // 'rappers are nice, and also criers'

// Lodash
const resUniq = _.uniq([1, 2, 1, 4, 1, 3]);
console.log(resUniq); // [1, 2, 4, 3]

// Native
const resUniqNice = [...new Set([1, 2, 1, 4, 1, 3])];
console.log(resUniqNice); // [1, 2, 4, 3]
