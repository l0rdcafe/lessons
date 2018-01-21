const progEx = {};
// #1
progEx.max = function(a, b) {
  if (a > b) {
    return a;
  }
  return b;
};

// #2
progEx.maxOfThree = function(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  }
  return c;
};

// #3
progEx.length = function(item) {
  return item.length;
};

// #4
progEx.isVowel = function(char) {
  let result = false;
  const vowels = ["a", "e", "i", "u", "o"];
  if (char.length > 1) {
    throw new Error("Argument cannot be longer than 1 character");
  }
  vowels.forEach(v => {
    if (char === v) {
      result = true;
    }
  });
  return result;
};

// #5
progEx.translate = function(string) {
  const pattern = /((?=\w+)(?:[^aeiouAEIOU\d_]))/g;
  if (pattern.test(string)) {
    return string.replace(pattern, "$1o$1");
  }
  return string;
};

// #6
progEx.sum = function(array) {
  if (array.length === 0) {
    throw new Error("Array cannot be empty");
  }
  return array.reduce((a, b) => a + b);
};

progEx.multiply = function(array) {
  if (array.length === 0) {
    throw new Error("Array cannot be empty");
  }
  return array.reduce((a, b) => a * b);
};

// #7
progEx.reverse = function(string) {
  return string
    .toString()
    .split("")
    .reverse()
    .join("");
};

// #8
progEx.isPalindrome = function(string) {
  return (
    string
      .split("")
      .reverse()
      .join("") === string
  );
};

// #9
progEx.isMember = function(x, a) {
  let result = false;
  a.forEach(b => {
    if (x === b) {
      result = true;
    }
  });
  return result;
};

// #10
progEx.overlapping = function(list1, list2) {
  let result = false;
  list1.forEach(a => {
    list2.forEach(b => {
      if (a === b) {
        result = true;
      }
    });
  });
  return result;
};

// #11
progEx.generateNChars = function(n, char) {
  let result = "";
  for (let i = 0; i < n; i += 1) {
    result += char;
  }
  return result;
};

// #12
progEx.histogram = function(array) {
  let result = "";
  array.forEach(a => {
    for (let i = 0; i < a; i += 1) {
      result += "*";
    }
    result += "\n";
  });
  return result;
};

// #13
progEx.maxInList = function(array) {
  return array.reduce((a, b) => (b > a ? b : a), Number.NEGATIVE_INFINITY);
};

// #14
progEx.wordsIntoLengths = function(array) {
  return array.map(a => {
    if (typeof a !== "string") {
      return a.toString().length;
    }
    return a.length;
  });
};

// #15
progEx.findLongestWord = function(array) {
  if (array.length === 0) {
    throw new Error("Array cannot be empty");
  }
  const lengthsArray = array.map(a => {
    if (a !== "string") {
      return a.toString().length;
    }
    return a.length;
  });
  return lengthsArray.reduce((a, b) => (b > a ? b : a), 0);
};

// #16
progEx.filterLongWords = function(n, array) {
  if (array.length === 0) {
    throw new Error("Array cannot be empty");
  }
  return array.filter(a => {
    if (typeof a !== "string") {
      return a.toString().length > n;
    }
    return a.length > n;
  });
};

// #17
progEx.phrasePalindrome = function(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const charString = [];
  string
    .toString()
    .toLowerCase()
    .split("")
    .forEach(char => {
      if (alphabet.indexOf(char) !== -1) {
        charString.push(char);
      }
    });
  return charString.join("") === charString.reverse().join("");
};

// #18
progEx.pangram = function(string) {
  let charLetters;
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const stringChars = {};
  string
    .toLowerCase()
    .split("")
    .forEach(c => {
      stringChars[c] = 1;
    });
  for (let i = 0; i < letters.length; i += 1) {
    charLetters = letters[i];
    if (stringChars[charLetters] !== 1) {
      return false;
    }
  }
  return true;
};

// #19
progEx.beers99 = function() {
  let beers = 99;
  const lrx1 = " bottles of beer on the wall, ";
  const lrx2 = " bottles of beer. \n";
  const lrx3 = "Take on down, pass it around, ";
  const lrx4 = " bottles of beer on the wall.";
  let song = "";
  for (let i = beers; i > 0; i -= 1) {
    song += beers + lrx1 + beers + lrx2 + lrx3 + (beers - 1) + lrx4;
    beers -= 1;
  }
  return song;
};

// #20
progEx.swedishTranslate = function(array) {
  const xmasDict = {
    merry: "god",
    christmas: "jul",
    and: "och",
    happy: "gott",
    new: "nytt",
    year: "år"
  };
  return array.map(item => (xmasDict[item] ? xmasDict[item] : item)).join(" ");
};

// #21
progEx.charFreq = function(string) {
  const chars = "abcdefghijklmnopqrstuvwxyz".split("");
  const stringChars = {};
  let counter = 1;
  string
    .toString()
    .toLowerCase()
    .split("")
    .forEach(c => {
      for (let i = 0; i < chars.length; i += 1) {
        if (c === chars[i]) {
          stringChars[c] = counter;
          counter += 1;
        }
      }
    });
  return stringChars;
};

// #22
progEx.decode = function(string) {
  const key = {
    a: "n",
    b: "o",
    c: "p",
    d: "q",
    e: "r",
    f: "s",
    g: "t",
    h: "u",
    i: "v",
    j: "w",
    k: "x",
    l: "y",
    m: "z",
    n: "a",
    o: "b",
    p: "c",
    q: "d",
    r: "e",
    s: "f",
    t: "g",
    u: "h",
    v: "i",
    w: "j",
    x: "k",
    y: "l",
    z: "m",
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
    " ": " ",
    "!": "!",
    "?": "?",
    ",": ",",
    ";": ";",
    ":": ":"
  };
  let message = "";
  string.split("").forEach(c => {
    if (c in key) {
      message += key[c];
    }
  });
  return message;
};

// #22
progEx.correct = function(string) {
  const pattern = /(\s+)|([.,;:])/g;
  return string.replace(pattern, "$2 ");
};

// #23
progEx.make3sgForm = function(string) {
  const pattern1 = /([(sh)o(ch)sxz]+$)/g;
  const pattern2 = /(y)$/g;
  if (pattern1.test(string)) {
    return string.replace(pattern1, "$1es");
  } else if (pattern2.test(string)) {
    return string.replace(pattern2, "ies");
  }
  if (string === "") {
    return string;
  }
  return `${string}s`;
};

// #24
progEx.makeIngForm = function(string) {
  const pattern1 = /[^(be|see|flee|knee)]/g;
  const pattern2 = /(ie$)/g;
  const pattern3 = /([^aeiouAEIOU][aeiouAEIOU]([^aeiouAEIOU]$))/g;
  if (string.endsWith("e") && !pattern1.test(string)) {
    return string.replace(/(e$)/g, "$1ing");
  } else if (pattern2.test(string)) {
    return string.replace(pattern2, "ying");
  } else if (pattern3.test(string)) {
    return string.replace(pattern3, "$1$2ing");
  }
  if (string === "") {
    return string;
  }
  return `${string}ing`;
};

// #25
progEx.map = function(array, func) {
  const mappedArray = [];
  if (array.length === 0) {
    throw new Error("Array cannot be empty");
  }
  array.forEach(item => {
    mappedArray.push(func(item));
  });
  return mappedArray;
};

progEx.filter = function(array, func) {
  const filteredArray = [];
  if (array.length === 0) {
    throw new Error("Array cannot be empty");
  }
  array.forEach(item => {
    if (func(item)) {
      filteredArray.push(item);
    }
  });
  return filteredArray;
};

progEx.reduce = function(array, func, start) {
  let result = start;
  if (array.length === 0) {
    throw new Error("Array cannot be empty");
  }
  array.forEach(item => {
    result = func(result, item);
  });
  return result;
};

module.exports = progEx;
