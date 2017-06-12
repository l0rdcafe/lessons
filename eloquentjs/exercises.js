/* Chapter 2 */
var i;
var j;

function hash7() {
  var hash = '#';
  for (i = 0; i < 7; i += 1) {
    console.log(hash);
    hash += '#';
  }
}

function fizzBuzz() {
  for (i = 0; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('Fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

function chessBoard() {
  var size = 8;
  var board = '';
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
  console.log(board);
}

/* Chapter 3 */

function min(x, y) {
  if (x === y) {
    console.log(false);
  } else if (x > y) {
    console.log(y);
  } else {
    console.log(x);
  }
}

function isEven(z) {
  if (z % 2 === 0) {
    console.log(true);
  } else if (z === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function countBs(string) {
  var numberBs = 0;
  for (i = 0; i < string.length; i += 1) {
    if (string.charAt(i) === 'B') {
      numberBs += 1;
    }
  }
  return numberBs;
}

function countChar(string, char) {
  var numberChar = 0;
  for (i = 0; i < string.length; i += 1) {
    if (string.charAt(i) === char) {
      numberChar += 1;
    }
  }
  return numberChar;
}

/* Chapter 4 */

function range(start, end, step) {
  if (step === undefined) {
    step = 1;
  }
  for (start; start <= end; start + step) {
    var rangeArray = [];
    rangeArray.push(start);
  }
  return rangeArray;
}

function sum(array) {
  var arraySum = 0;
  for (i = 0; i < array.length; i += 1) {
    arraySum += array[i];
  }
  return arraySum;
}

function reverseArray(array) {
  var reversedArray = [];
  for (i = 0; i < array.length; i += 1) {
    reversedArray.unshift(array[i]);
  }
  return reversedArray;
}

function arrayToList(array) {
  for (i = array.length - 1; i >= 0; i -= 1) {
    var list = {
      value: array[i],
      rest: list
    };
  }
  return list;
}

function listToArray(list) {
  var listArray = [];
  for (i = list; i; i = i.rest) {
    listArray.push(i.value);
  }
  return listArray;
}

function prepend(element, list) {
  var returnList = {
    value: element,
    rest: list
  };
  return returnList;
}

function nth(list, number) {
  var tempList = list;
  for (i = 0; i < number; i += 1) {
    tempList = tempList.rest;
  }
  return tempList.value;
}

function deepEqual(obj1, obj2) {
  var comparisonResults = [];
  var isSame;
  for (prop in obj1) {
    isSame = obj1[prop] == obj2[prop];
    comparisonResults.push(isSame);
  }
  isSameObj = true;
  comparisonResults.forEach(function (isSame) {
    if (!isSame || Object.getOwnPropertyNames(obj1).length !== Object.getOwnPropertyNames(obj2).length) {
      isSameObj = false;
    }
  });
  return isSameObj;
}

/* Chapter 5 */

var arrays = [
    [1, 2, 3],
    [4, 5],
    [6]
];
arrays.reduce(function (a, b) {
  return a.concat(b);
});


function average(array) {
  function plus(a, b) {
    return a + b;
  }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function (person) {
  byName[person.mother] = person.died - person.born;
});

ancestry.filter(function hasKnownMother(person) {
  var momAges = [];
  momAges.push(byName[person.mother]);
  console.log(momAges);
});
