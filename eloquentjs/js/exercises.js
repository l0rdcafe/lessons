'use strict';

/* Chapter 2 */
var ch2 = {};
var ch3 = {};
var ch4 = {};
var ch5 = {};
var ch6 = {};
var ch8 = {};
var ch9 = {};

ch2.hash7 = function () {
  var hash = '';
  var i;
  var j;
  var x;
  for (i = 0; i < 7; i += 1) {
    hash += '#';
    for (j = i; j < i; j += 1) {
      hash += '#';
    }
    for (x = 1; x <= i; x += 1) {
      hash += '#';
    }
    hash += '\n';
  }
  return hash;
};

ch2.fizzBuzz = function () {
  var result = '';
  var i;
  for (i = 0; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
      result += 'Fizzbuzz\n';
    } else if (i % 3 === 0 && i !== 0) {
      result += 'Fizz\n';
    } else if (i % 5 === 0 && i !== 0) {
      result += 'Buzz\n';
    } else if ((i % 3 !== 0 && i % 5 !== 0) || (i % 3 !== 0) || (i % 5 !== 0)) {
      result += i + '\n';
    }
  }
  return result;
};

ch2.chessBoard = function () {
  var size = 8;
  var board = '';
  var i;
  var j;
  for (i = 0; i < size; i += 1) {
    for (j = 0; j < size; j += 1) {
      if ((i + j) % 2 === 0) {
        board += '#';
      } else {
        board += ' ';
      }
    }
    board += '\n';
  }
  return board;
};

/* Chapter 3 */

ch3.min = function (x, y) {
  if (x > y) {
    return y;
  }
  return x;
};

ch3.isEven = function (z) {
  if (z % 2 === 0) {
    return true;
  } else if (z === 0) {
    return true;
  }
  return false;
};

ch3.countBs = function (string) {
  var numberBs = 0;
  var i;
  for (i = 0; i < string.length; i += 1) {
    if (string.charAt(i) === 'B') {
      numberBs += 1;
    }
  }
  return numberBs;
};

ch3.countChar = function (string, char) {
  var numberChar = 0;
  var i;
  if (char.length > 1) {
    throw new Error('Second argument cannot be longer than a single character');
  }
  for (i = 0; i < string.length; i += 1) {
    if (string.charAt(i) === char.toString()) {
      numberChar += 1;
    }
  }
  return numberChar;
};

/* Chapter 4 */

ch4.range = function (start, end, step) {
  var rangeArray = [];
  var i;
  if (step < 0) {
    throw new Error('Negative values are invalid for the third argument');
  } else if (start > end) {
    throw new Error('The first argument has to be less than or equal the second');
  }
  for (i = start; i <= end; i += step) {
    rangeArray.push(start);
    start += step;
  }
  return rangeArray;
};

ch4.sum = function (array) {
  var arraySum = 0;
  var arrElm;
  var i;
  for (i = 0; i < array.length; i += 1) {
    arrElm = array[i];
    if (typeof arrElm !== 'number' && arrElm !== '') {
      throw new Error('String values are not accepted');
    } else if (arrElm === '') {
      arrElm = 0;
    }
    arraySum += arrElm;
  }
  return arraySum;
};

ch4.reverseArray = function (array) {
  var reversedArray = [];
  var i;
  if (!Array.isArray(array)) {
    throw new Error('Argument must be an array');
  }
  for (i = 0; i < array.length; i += 1) {
    reversedArray.unshift(array[i]);
  }
  return reversedArray;
};

ch4.arrayToList = function (array) {
  var list = {};
  var i;
  if (!Array.isArray(array)) {
    throw new Error('Argument must be an array');
  }
  for (i = array.length - 1; i >= 0; i -= 1) {
    list = {
      value: array[i],
      rest: list
    };
    if (list.value === array[array.length - 1]) {
      list.rest = null;
    }
  }
  return list;
};

ch4.listToArray = function (list) {
  var listArray;
  var i;
  if (typeof list !== 'object' || Array.isArray(list)) {
    throw new Error('Argument can only be an object');
  }
  listArray = [];
  for (i = list; i; i = i.rest) {
    listArray.push(i.value);
  }
  return listArray;
};

ch4.prepend = function (element, list) {
  var returnList;
  if ((typeof list !== 'object' || Array.isArray(list))) {
    throw new Error('Second argument can only be an object');
  }
  returnList = {
    value: element,
    rest: list
  };
  return returnList;
};

ch4.nth = function (list, number) {
  var tempList;
  var i;
  if ((typeof list !== 'object' || Array.isArray(list)) || typeof number !== 'number') {
    throw new Error('First argument can only be an object and second a number');
  }
  tempList = list;
  for (i = 0; i < number; i += 1) {
    tempList = tempList.rest;
  }
  return tempList.value;
};

ch4.deepEqual = function (obj1, obj2) {
  var comparisonResults = [];
  var isSameObj = true;
  var isSame;
  var prop;
  if (Object.getOwnPropertyNames(obj1).length !== Object.getOwnPropertyNames(obj2).length) {
    isSameObj = false;
  }
  for (prop in obj1) {
    if (typeof obj1[prop] === 'object' && typeof obj2[prop] === 'object') {
      isSame = this.deepEqual(obj1[prop], obj2[prop]);
    } else {
      isSame = obj1[prop] === obj2[prop];
    }
    comparisonResults.push(isSame);
  }
  comparisonResults.forEach(function (isSame) {
    if (!isSame) {
      isSameObj = false;
    }
  });
  return isSameObj;
};

/* Chapter 5 */

ch5.arraysReduce = function (array) {
  if (!Array.isArray(array)) {
    throw new Error('Argument can only be an array');
  }
  return array.reduce(function (a, b) {
    return a.concat(b);
  });
};

ch5.average = function (array) {
  function plus(a, b) {
    if (typeof a !== 'number' && a !== '') {
      return NaN;
    } else if (b === '') {
      return a + 0;
    }
    return a + b;
  }
  return array.reduce(plus) / array.length;
};

ch5.every = function (array, condition) {
  var result = true;
  array.forEach(function (value) {
    if (value !== condition) {
      result = false;
    }
  });
  return result;
};

ch5.some = function (array, condition) {
  var result = false;
  array.forEach(function (value) {
    if (value === condition) {
      result = true;
    }
  });
  return result;
};

/* Chapter 6 */

ch6.Vector = function (x, y) {
  this.x = x;
  this.y = y;
};

ch6.Vector.prototype = {
  plus: function (vec) {
    return {
      x: this.x + vec.x,
      y: this.y + vec.y
    };
  },
  minus: function (vec) {
    return {
      x: this.x - vec.x,
      y: this.y - vec.y
    };
  },
  get length() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }
};

ch6.ArraySeq = function (arr) {
  this.input = arr;
  this.currIndx = 0;
  this.next = function () {
    var elem = arr[this.currIndx];
    if (this.currIndx < this.input.length) {
      this.currIndx += 1;
      return elem;
    }
    return null;
  };
  this.done = function () {
    return this.currIndx === this.input.length;
  };
};

ch6.RangeSeq = function (from, to) {
  this.start = from;
  this.end = to;
  this.next = function () {
    var counter;
    if (this.start <= this.end) {
      counter = this.start;
      this.start += 1;
      return counter;
    }
  };
  this.done = function () {
    return this.start > this.end;
  };
};

ch6.InfiniteRandSeq = function (ceil) {
  this.next = function () {
    return Math.floor(Math.random() * ceil);
  };
  this.done = function () {
    return false;
  };
};

ch6.logFive = function (seq) {
  var i;
  var result = '';
  for (i = 0; i < 5; i += 1) {
    if (seq.done()) {
      break;
    }
    result += seq.next() + '\n';
  }
  return result;
};

ch6.doubleSeq = function (seq) {
  var i;
  var result = '';
  for (i = 0; i < 10; i += 1) {
    if (seq.done()) {
      break;
    } else {
      result += (seq.next() * 2) + '\n';
    }
  }
  return result;
};

/* Chapter 8 */

ch8.MultiplicatorUnitFailure = function () {};

ch8.primitiveMultiply = function (a, b) {
  if (Math.random() < 0.5) {
    return a * b;
  }
  throw new MultiplicatorUnitFailure();
};

ch8.reliableMultiply = function (a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
      break;
    } catch (error) {
      if (!(error instanceof MultiplicatorUnitFailure)) {
        throw error;
      }
    }
  }
};

ch8.box = {
  locked: true,
  unlock: function () {
    this.locked = false;
    return this;
  },
  lock: function () {
    this.locked = true;
    return this;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Locked!');
    return this._content;
  }
};

ch8.withBoxUnlocked = function (body) {
  var unlocked = this.box;
  if (this.box.locked) {
    this.box.unlock();
  }
  try {
    body();
  } finally {
    this.box.lock();
  }
  return unlocked;
};

ch8.test = this.withBoxUnlocked(function () {
  this.box.content.push('gold piece');
});

try {
  this.withBoxUnlocked(function () {
    throw new Error('Pirates on the horizon! Abort!');
  });
} catch (e) {
  console.log('Error raised:', e);
}

/* Chapter 9 */

ch9.ex1 = /(ca)(r|t)/g;
ch9.ex2 = /(pr?op)/g;
ch9.ex3 = /(ferr)(ari|et|y)/g;
ch9.ex4 = /(ious(?=(?:\W)|(\1$)))/g;
ch9.ex5 = / [,:;.]/g;
ch9.ex6 = /[a-z]{7,}/g;
ch9.ex7 = /\b([^e\s]+)\b/g;
ch9.reg2 = /\W'|'\W|^[']/g;
ch9.regNum = /^([\-+]?\d+(\.\d*)?([eE][\-+]?\d+)?|\.\d+)$/g;
