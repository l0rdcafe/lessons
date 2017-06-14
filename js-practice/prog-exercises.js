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

// #6
function reverse(string) {
  return string.split('').reverse().join('');
}

// #7
function isPalindrome(string) {
  if (string.split('').reverse().join('') === string) {
    return true;
  }
  return false;
}

// #8
function isMember(x, a) {
  var result = false;
  a.forEach(function (b) {
    if (x === b) {
      result = true;
    }
  });
  return result;
}

// #9
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

// #10
function generateNChars(n, char) {
  var result = '';
  for (i = 0; i < n; i += 1) {
    result += char;
  }
  return result;
}

// #11
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

// #12
function maxInList(array) {
  return array.reduce(function (a, b) {
    return (b > a) ? b : a;
  }, 0);
}

// #13
function wordsIntoLengths(array) {
  var lengthsArray = [];
  array.map(function (a) {
    return lengthsArray.push(a.length);
  });
  return lengthsArray;
}

// #14
function findLongestWord(array) {
  var lengthsArray = [];
  array.map(function (a) {
    return lengthsArray.push(a.length);
  });
  return lengthsArray.reduce(function (a, b) {
    return (b > a) ? b : a;
  }, 0);
}

// #15
function filterLongWords(n, array) {
  return array.filter(function (a) {
    if (a.length > n) {
      return a;
    }
  });
}

// #16
function phrasePalindrome(string) {
    // To be Continued...
}

// #17
function pangram(string) {
  var result = true;
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var sentence = string.split('');
  sentence.filter(function (a) {

  });

  return result;
}

// #18
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
