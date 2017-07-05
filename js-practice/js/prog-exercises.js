'use strict';

var i;
var progEx = {};
// #1
progEx.max = function (a, b) {
  if (a > b) {
    return a;
  }
  return b;
};

// #2
progEx.maxOfThree = function (a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  }
  return c;
};

// #3
progEx.length = function (item) {
  return item.length;
};

// #4
progEx.isVowel = function (char) {
  var result = false;
  var vowels = ['a', 'e', 'i', 'u', 'o'];
  vowels.forEach(function (v) {
    if (char === v) {
      result = true;
    }
  });
  return result;
};

// #5
progEx.translate = function (string) {
  var pattern = /((?=\w+)(?:[^aeiouAEIOU\d_]))/g;
  if (pattern.test(string)) {
    return string.replace(pattern, '$1o$1');
  }
  return string;
};

// #6
progEx.sum = function (array) {
  var addz = array.reduce(function (a, b) {
    if (typeof a !== 'number') {
      return NaN;
    }
    return a + b;
  });
  return addz;
};

progEx.multiply = function (array) {
  var product = array.reduce(function (a, b) {
    return a * b;
  });
  return product;
};

// #7
progEx.reverse = function (string) {
  return string.toString().split('').reverse().join('');
};

// #8
progEx.isPalindrome = function (string) {
  return string.split('').reverse().join('') === string;
};

// #9
progEx.isMember = function (x, a) {
  var result = false;
  a.forEach(function (b) {
    if (x === b) {
      result = true;
    }
  });
  return result;
};

// #10
progEx.overlapping = function (list1, list2) {
  var result = false;
  list1.forEach(function (a) {
    list2.forEach(function (b) {
      if (a === b) {
        result = true;
      }
    });
  });
  return result;
};

// #11
progEx.generateNChars = function (n, char) {
  var result = '';
  for (i = 0; i < n; i += 1) {
    result += char;
  }
  return result;
};

// #12
progEx.histogram = function (array) {
  var result = '';
  array.forEach(function (a) {
    if (/[a-zA-Z]+/g.test(a)) {
      throw new Error('Array elements cannot contain alphabets');
    } else {
      for (i = 0; i < a; i += 1) {
        result += '*';
      }
      result += '\n';
    }
  });
  return result;
};

// #13
progEx.maxInList = function (array) {
  return array.reduce(function (a, b) {
    if (typeof b !== 'number') {
      return isNaN;
    }
    return (b > a) ? b : a;
  }, 0);
};

// #14
progEx.wordsIntoLengths = function (array) {
  return array.map(function (a) {
    if (typeof a !== 'string') {
      return a.toString().length;
    }
    return a.length;
  });
};

// #15
progEx.findLongestWord = function (array) {
  var lengthsArray = array.map(function (a) {
    if (a !== 'string') {
      return a.toString().length;
    }
    return a.length;
  });
  return lengthsArray.reduce(function (a, b) {
    return (b > a) ? b : a;
  }, 0);
};

// #16
progEx.filterLongWords = function (n, array) {
  return array.filter(function (a) {
    if (typeof a !== 'string') {
      return a.toString().length > n;
    }
    return a.length > n;
  });
};

// #17
progEx.phrasePalindrome = function (string) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var charString = [];
  string.toString().toLowerCase().split('').forEach(function (char) {
    if (alphabet.indexOf(char) !== -1) {
      charString.push(char);
    }
  });
  return charString.join('') === charString.reverse().join('');
};

// #18
progEx.pangram = function (string) {
  var charLetters;
  var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var stringChars = {};
  string.toLowerCase().split('').forEach(function (c) {
    stringChars[c] = 1;
  });
  for (i = 0; i < letters.length; i += 1) {
    charLetters = letters[i];
    if (stringChars[charLetters] !== 1) {
      return false;
    }
  }
  return true;
};

// #19
progEx.beers99 = function () {
  var beers = 99;
  var lrx1 = ' bottles of beer on the wall, ';
  var lrx2 = ' bottles of beer. \n';
  var lrx3 = 'Take on down, pass it around, ';
  var lrx4 = ' bottles of beer on the wall.';
  var song = '';
  for (i = beers; i > 0; i -= 1) {
    song += beers + lrx1 + beers + lrx2 + lrx3 + (beers - 1) + lrx4;
    beers -= 1;
  }
  return song;
};

// #20
progEx.swedishTranslate = function (array) {
  var xmasDict = {
    merry: 'god',
    christmas: 'jul',
    and: 'och',
    happy: 'gott',
    new: 'nytt',
    year: 'år'
  };
  return array.map(function (item) {
    return xmasDict[item] ? xmasDict[item] : item;
  }).join(' ');
};

// #21
progEx.charFreq = function (string) {
  var chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var stringChars = {};
  var counter = 1;
  string.toString().toLowerCase().split('').forEach(function (c) {
    for (i = 0; i < chars.length; i += 1) {
      if (c === chars[i]) {
        stringChars[c] = counter;
        counter += 1;
      }
    }
  });
  return stringChars;
};

// #22
progEx.decode = function (string) {
  var key = {
    a: 'n',
    b: 'o',
    c: 'p',
    d: 'q',
    e: 'r',
    f: 's',
    g: 't',
    h: 'u',
    i: 'v',
    j: 'w',
    k: 'x',
    l: 'y',
    m: 'z',
    n: 'a',
    o: 'b',
    p: 'c',
    q: 'd',
    r: 'e',
    s: 'f',
    t: 'g',
    u: 'h',
    v: 'i',
    w: 'j',
    x: 'k',
    y: 'l',
    z: 'm',
    A: 'N',
    B: 'O',
    C: 'P',
    D: 'Q',
    E: 'R',
    F: 'S',
    G: 'T',
    H: 'U',
    I: 'V',
    J: 'W',
    K: 'X',
    L: 'Y',
    M: 'Z',
    N: 'A',
    O: 'B',
    P: 'C',
    Q: 'D',
    R: 'E',
    S: 'F',
    T: 'G',
    U: 'H',
    V: 'I',
    W: 'J',
    X: 'K',
    Y: 'L',
    Z: 'M',
    ' ': ' ',
    '!': '!',
    '?': '?',
    ',': ',',
    ';': ';',
    ':': ':'
  };
  var message = '';
  string.split('').forEach(function (c) {
    if (c in key) {
      message += (key[c]);
    }
  });
  return message;
};

// #22
progEx.correct = function (string) {
  var pattern = /(\s+)|([.,;:])/g;
  return string.replace(pattern, '$2 ');
};

// #23
progEx.make3sgForm = function (string) {
  var pattern1 = /([(sh)o(ch)sxz]+$)/g;
  var pattern2 = /(y)$/g;
  if (pattern1.test(string)) {
    return string.replace(pattern1, '$1es');
  } else if (pattern2.test(string)) {
    return string.replace(pattern2, 'ies');
  }
  if (string === '') {
    return string;
  }
  return string + 's';
};

// #24
progEx.makeIngForm = function (string) {
  var pattern1 = /[^(be|see|flee|knee)]/g;
  var pattern2 = /(ie$)/g;
  var pattern3 = /([^aeiouAEIOU][aeiouAEIOU]([^aeiouAEIOU]$))/g;
  if (string.endsWith('e') && !(pattern1.test(string))) {
    return string.replace(/(e$)/g, '$1ing');
  } else if (pattern2.test(string)) {
    return string.replace(pattern2, 'ying');
  } else if (pattern3.test(string)) {
    return string.replace(pattern3, '$1$2ing');
  }
  if (string === '') {
    return string;
  }
  return string + 'ing';
};

// #25
progEx.map = function (array, func) {
  var mappedArray = [];
  if (!Array.isArray(array) || typeof func !== 'function') {
    throw new Error('First argument must be an array and second a function');
  }
  array.forEach(function (item) {
    mappedArray.push(func(item));
  });
  return mappedArray;
};

progEx.filter = function (array, func) {
  var filteredArray = [];
  if (!Array.isArray(array) || typeof func !== 'function') {
    throw new Error('First argument must be an array and second a function');
  }
  array.forEach(function (item) {
    if (func(item)) {
      filteredArray.push(item);
    }
  });
  return filteredArray;
};

progEx.reduce = function (array, func, start) {
  var result = start;
  if (!Array.isArray(array) || typeof func !== 'function' || typeof start !== 'number') {
    throw new Error('First argument must be an array, second a function and third a number');
  }
  array.forEach(function (item) {
    result = func(result, item);
  });
  return result;
};
