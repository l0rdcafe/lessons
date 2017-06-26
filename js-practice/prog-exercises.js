var i;
// #1
function max(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

// #2
function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  }
  return c;
}

// #3
function length(item) {
  return item.length;
}

// #4
function isVowel(char) {
  var result = false;
  var vowels = ['a', 'e', 'i', 'u', 'o', 'y'];
  vowels.forEach(function (v) {
    if (char === v) {
      result = true;
    }
  });
  return result;
}

// #5
function translate(string) {
  var pattern = /([^aeiouAEIOU\s\d])/g;
  if (pattern.test(string)) {
    return string.replace(pattern, '$1' + 'o' + '$1');
  }
}

// #6
function sum(array) {
  var addz = array.reduce(function (a, b) {
    return a + b;
  });
  return addz;
}

function multiply(array) {
  var product = array.reduce(function (a, b) {
    return a * b;
  });
  return product;
}

// #7
function reverse(string) {
  return string.split('').reverse().join('');
}

// #8
function isPalindrome(string) {
  if (string.split('').reverse().join('') === string) {
    return true;
  }
  return false;
}

// #9
function isMember(x, a) {
  var result = false;
  a.forEach(function (b) {
    if (x === b) {
      result = true;
    }
  });
  return result;
}

// #10
function overlapping(list1, list2) {
  var result = false;
  list1.forEach(function (a) {
    list2.forEach(function (b) {
      if (a === b) {
        result = true;
      }
    });
  });
  return result;
}

// #11
function generateNChars(n, char) {
  var result = '';
  for (i = 0; i < n; i += 1) {
    result += char;
  }
  return result;
}

// #12
function histogram(array) {
  var result = '';
  array.forEach(function (a) {
    for (i = 0; i < a; i += 1) {
      result += '*';
    }
    result += '\n';
  });
  return result;
}

// #13
function maxInList(array) {
  return array.reduce(function (a, b) {
    return (b > a) ? b : a;
  }, 0);
}

// #14
function wordsIntoLengths(array) {
  var lengthsArray = [];
  array.map(function (a) {
    return lengthsArray.push(a.length);
  });
  return lengthsArray;
}

// #15
function findLongestWord(array) {
  var lengthsArray = [];
  array.map(function (a) {
    return lengthsArray.push(a.length);
  });
  return lengthsArray.reduce(function (a, b) {
    return (b > a) ? b : a;
  }, 0);
}

// #16
function filterLongWords(n, array) {
  return array.filter(function (a) {
    if (a.length > n) {
      return a;
    }
  });
}

// #17
function phrasePalindrome(string) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var charString = [];
  string.toLowerCase().split('').forEach(function (char) {
    if (alphabet.indexOf(char) !== -1) {
      charString.push(char);
    }
  });
  if (charString.join('') === charString.reverse().join('')) {
    return true;
  }
  return false;
}

// #18
function pangram(string) {
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
}

// #19
function beers99() {
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
}

// #20
function swedishTranslate(array) {
    // TBC
}

// #21
function charFreq(string) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var stringChars = {};
  var counter = 1;
  string.toLowerCase().split('').filter(function (c) {
    for (i = 0; i < alphabet.length; i += 1) {
      if (c === alphabet[i]) {
        stringChars[c] = counter;
        counter += 1;
      }
    }
  });
  return stringChars;
}

// #22
function decode(string) {
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
}

// #24
function map(array, a) {
  var mappedArray = [];
  array.forEach(function (b) {
    mappedArray.push(a(b));
  });
  return mappedArray;
}

function filter(array, a) {
  var filteredArray = [];
  array.forEach(function (b) {
    if (a(b)) {
      filteredArray.push(b);
    }
  });
  return filteredArray;
}

function reduce(array, a, start) {
  var result = start;
  array.forEach(function (b) {
    result = a(result, b);
  });
  return result;
}
