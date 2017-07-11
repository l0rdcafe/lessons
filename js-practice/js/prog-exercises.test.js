/* global progEx */

'use strict';

describe('progEx.max', function () {
  it('#max should return 2 when given (2, 1)', function () {
    expect(progEx.max(2, 1)).toEqual(2);
  });
  it('#max should return -0.5 when given (-1, -0.5)', function () {
    expect(progEx.max(-1.5, -0.5)).toEqual(-0.5);
  });
  it('#max should return -5 when given (-10, -5)', function () {
    expect(progEx.max(-10, -5)).toEqual(-5);
  });
  it('#max should return 2.5 when given (2.4, 2.5)', function () {
    expect(progEx.max(2.4, 2.5)).toEqual(2.5);
  });
});

describe('progEx.maxOfThree', function () {
  it('#maxOfThree should return 5 when given (1, 5, 3)', function () {
    expect(progEx.maxOfThree(1, 5, 3)).toEqual(5);
  });
  it('#maxOfThree should return -10 when given (-20, -10, -21)', function () {
    expect(progEx.maxOfThree(-20, -10, -21)).toEqual(-10);
  });
  it('#maxOfThree should return 10.3 when given (10.3, 10.25, 10.1)', function () {
    expect(progEx.maxOfThree(10.3, 10.25, 10.1)).toEqual(10.3);
  });
  it('#maxOfThree should return -0.2 when given (-0.2, -0.5, -0.4)', function () {
    expect(progEx.maxOfThree(-0.2, -0.5, -0.4)).toEqual(-0.2);
  });
});

describe('progEx.length', function () {
  it('#length should return 0 when given ""', function () {
    expect(progEx.length('')).toEqual(0);
  });
  it('#length should return 5 when given "doors"', function () {
    expect(progEx.length('doors')).toEqual(5);
  });
  it('#length should return 4 when given [1, 2, 3, 4]', function () {
    expect(progEx.length([1, 2, 3, 4])).toEqual(4);
  });
});

describe('progEx.isVowel', function () {
  it('#isVowel should return false when given ""', function () {
    expect(progEx.isVowel('')).toEqual(false);
  });

  it('#isVowel should return true when given "u"', function () {
    expect(progEx.isVowel('u')).toEqual(true);
  });
  it('#isVowel should return false when given "y"', function () {
    expect(progEx.isVowel('y')).toEqual(false);
  });
  it('#isVowel should throw new Error "Argument cannot be longer than 1 character" when given "ae"', function () {
    expect(function () {
      progEx.isVowel('ae');
    }).toThrow(new Error('Argument cannot be longer than 1 character'));
  });
});

describe('progEx.translate', function () {
  it('#translate should return "tothohisos isos fofunon" when given "this is fun"', function () {
    expect(progEx.translate('this is fun')).toEqual('tothohisos isos fofunon');
  });
  it('#translate should return "" when given ""', function () {
    expect(progEx.translate('')).toEqual('');
  });
});

describe('progEx.sum', function () {
  it('#sum should return -46 when given [-21, -5, -2, -10, -3, -5]', function () {
    expect(progEx.sum([-21, -5, -2, -10, -3, -5])).toEqual(-46);
  });
  it('#sum should return 10 when given [1, 2, 3, 4]', function () {
    expect(progEx.sum([1, 2, 3, 4])).toEqual(10);
  });
  it('#sum should return 6.75 when given [4.25, 5.25, 3.25, 6.5, 2.5]', function () {
    expect(progEx.sum([4.25, 5.25, 3.25, 6.5, 2.5])).toEqual(21.75);
  });
  it('#sum should return -12.11 when given [-1.2, -2.2, -3.21, -5.5]', function () {
    expect(progEx.sum([-1.2, -2.2, -3.21, -5.5])).toEqual(-12.11);
  });
  it('#sum should throw new Error "Array cannot be empty" when given []', function () {
    expect(function () {
      progEx.sum([]);
    }).toThrow(new Error('Array cannot be empty'));
  });
});

describe('progEx.multiply', function () {
  it('#multiply should return 24 when given [1, 2, 3, 4]', function () {
    expect(progEx.multiply([1, 2, 3, 4])).toEqual(24);
  });
  it('#multiply should return -6 when given [-1, -2, -3]', function () {
    expect(progEx.multiply([-1, -2, -3])).toEqual(-6);
  });
  it('#multiply should return -1.5625 when given [-0.5, -1.25, -2.5]', function () {
    expect(progEx.multiply([-0.5, -1.25, -2.5])).toEqual(-1.5625);
  });
  it('#multiply should return 1.5625 when given [0.5, 1.25, 2.5]', function () {
    expect(progEx.multiply([0.5, 1.25, 2.5])).toEqual(1.5625);
  });
  it('#multiply should throw new Error "Array cannot be empty" when given []', function () {
    expect(function () {
      progEx.multiply([]);
    }).toThrow(new Error('Array cannot be empty'));
  });
});

describe('progEx.reverse', function () {
  it('#reverse should return "gnitset ma I" when given "I am testing"', function () {
    expect(progEx.reverse('I am testing')).toEqual('gnitset ma I');
  });
  it('#reverse should return "691" when given 196', function () {
    expect(progEx.reverse(196)).toEqual("691");
  });
  it('#reverse should return "" when given ""', function () {
    expect(progEx.reverse('')).toEqual('');
  });
  it('#reverse should return "eslaf" when given false', function () {
    expect(progEx.reverse(false)).toEqual('eslaf');
  });
});

describe('progEx.isPalindrome', function () {
  it('#isPalindrome should return true when given "racecar"', function () {
    expect(progEx.isPalindrome('racecar')).toEqual(true);
  });
  it('#isPalindrome should return false when given "radars"', function () {
    expect(progEx.isPalindrome('radars')).toEqual(false);
  });
  it('#isPalindrome should return true when given ""', function () {
    expect(progEx.isPalindrome('')).toEqual(true);
  });
});

describe('progEx.isMember', function () {
  it('#isMember should return true when given (1, [2, -3, -1, 1.00])', function () {
    expect(progEx.isMember(1, [2, -3, -1, 1.00])).toEqual(true);
  });
  it('#isMember should return false when given ("yea", ["yeah", "maybe", "okay", "ye"])', function () {
    expect(progEx.isMember('yea', ['yeah', 'maybe', 'okay', 'ye'])).toEqual(false);
  });
  it('#isMember should return false when given (0, [])', function () {
    expect(progEx.isMember(0, [])).toEqual(false);
  });
  it('#isMember should return true when given ("", ["", NaN, 2])', function () {
    expect(progEx.isMember('', ['', NaN, 2])).toEqual(true);
  });
});

describe('progEx.overlapping', function () {
  it('#overlapping should return true when given ([1, 2, 3], [1])', function () {
    expect(progEx.overlapping([1, 2, 3], [1])).toEqual(true);
  });
  it('#overlapping should return false when given (["hey", "there", "you"], ["your", "friend", ""])', function () {
    expect(progEx.overlapping(["hey", "there", "you"], ["your", "friend", ""])).toEqual(false);
  });
  it('#overlapping should return true when given ["", "good", 12, "20.2"], ["great", "goodie", ""]', function () {
    expect(progEx.overlapping(['', 'good', 12, '20.2'], ['great', 'goodie', ''])).toEqual(true);
  });
});

describe('progEx.generateNChars', function () {
  it('#generateNChars should return "xxxxx" when given (5, "x")', function () {
    expect(progEx.generateNChars(5, 'x')).toEqual('xxxxx');
  });
  it('#generateNChars should return "" when given (0, "a")', function () {
    expect(progEx.generateNChars(0, "a")).toEqual('');
  });
  it('#generateNChars should return "696969" when given (3, 69)', function () {
    expect(progEx.generateNChars(3, 69)).toEqual('696969');
  });
});

describe('progEx.histogram', function () {
  it('#histogram should return "****\n*********\n*******\n" when given [4, 9, 7]', function () {
    expect(progEx.histogram([4, 9, 7])).toEqual('****\n*********\n*******\n');
  });
  it('#histogram should return "\n***\n**\n" when given [3, 0, 2]', function () {
    expect(progEx.histogram([3, 0, 2])).toEqual('***\n\n**\n');
  });
  it('#histogram should return "" when given []',
    function () {
      expect(progEx.histogram([])).toEqual('');
    });
});

describe('progEx.maxInList', function () {
  it('#maxInList should return -0.5 when given [-2, -0.5, -2.9]', function () {
    expect(progEx.maxInList([-2.22, -0.5, -2.9])).toEqual(-0.5);
  });
  it('#maxInList should return 20 when [2, 5, 20]', function () {
    expect(progEx.maxInList([2, 5, 20])).toEqual(20);
  });
  it('#maxInList should return -2 when given [-5, -3, -2]', function () {
    expect(progEx.maxInList([-5, -3, -2])).toEqual(-2);
  });
  it('#maxInList should return 1.5 when given [0.5, 1.5, 1.4]', function () {
    expect(progEx.maxInList([0.5, 1.5, 1.4])).toEqual(1.5);
  });
});

describe('progEx.wordsIntoLengths', function () {
  it('#wordsIntoLengths should return [4, 5, 6] when given ["door", "opens", "slowly"]', function () {
    expect(progEx.wordsIntoLengths(['door', 'opens', 'slowly'])).toEqual([4, 5, 6]);
  });
  it('#wordsIntoLengths should return [4, 4, 3] when given ["good", "luck", 180]', function () {
    expect(progEx.wordsIntoLengths(['good', 'luck', 180])).toEqual([4, 4, 3]);
  });
  it('#wordsIntoLengths should return [5, 0, 6] when given ["super", "", "cooper"]', function () {
    expect(progEx.wordsIntoLengths(['super', '', 'cooper'])).toEqual([5, 0, 6]);
  });
  it('#wordsIntoLengths should return [] when given []', function () {
    expect(progEx.wordsIntoLengths([])).toEqual([]);
  });
});

describe('progEx.findLongestWord', function () {
  it('#findLongestWord should return 13 when given ["extraordinary", "apathy", "sauvignon"]', function () {
    expect(progEx.findLongestWord(['extraordinary', 'apathy', 'sauvignon'])).toEqual(13);
  });
  it('#findLongestWord should return 4 when given ["", 2001, 1992, 182]', function () {
    expect(progEx.findLongestWord(['', 2001, 1992, 182])).toEqual(4);
  });
  it('#findLongestWord should return 5 when given [true, false, NaN]', function () {
    expect(progEx.findLongestWord([true, false, NaN])).toEqual(5);
  });
  it('#findLongestWord should throw new Error "Array cannot be empty" when given []', function () {
    expect(function () {
      progEx.findLongestWord([]);
    }).toThrow(new Error('Array cannot be empty'));
  });
});

describe('progEx.filterLongWords', function () {
  it('#filterLongWords should return ["doors", "because", "traitor"] when given (4, ["doors", "bin", "it", because", "a", "traitor"])', function () {
    expect(progEx.filterLongWords(4, ['doors', 'bin', 'it', 'because', 'a', 'traitor'])).toEqual(['doors', 'because', 'traitor']);
  });
  it('#filterLongWords should return ["and", 1992, 2109123, "program"] when given (2, ["an", "and", 12, 1992, 2109123, "program", "it"])', function () {
    expect(progEx.filterLongWords(2, ['an', 'and', 12, 1992, 2109123, 'program', 'it'])).toEqual(['and', 1992, 2109123, 'program']);
  });
  it('#filterLongWords should throw new Error "Array cannot be empty" when given (10, [])', function () {
    expect(function () {
      progEx.filterLongWords(10, []);
    }).toThrow(new Error('Array cannot be empty'));
  });
  it('#filterLongWords should return ["this", "is", "a", "full", "array"] when given (0, ["this", "is", "a", "full", "array"])', function () {
    expect(progEx.filterLongWords(0, ['this', 'is', 'a', 'full', 'array'])).toEqual(['this', 'is', 'a', 'full', 'array']);
  });
});

describe('progEx.phrasePalindrome', function () {
  it('#phrasePalindrome should return true when given "Go hang a salami I\'m a lasagna hog."', function () {
    expect(progEx.phrasePalindrome('Go hang a salami I\'m a lasagna hog.')).toEqual(true);
  });
  it('#phrasePalindrome should return true when given "ra  c, e; c a. r!"', function () {
    expect(progEx.phrasePalindrome('ra  c, e; c a. r!')).toEqual(true);
  });
  it('#phrasePalindrome should return false when given "Days are long and nights are cold."', function () {
    expect(progEx.phrasePalindrome('Days are long and nights are cold.')).toEqual(false);
  });
  it('#phrasePalindrome should return true when given "010010"', function () {
    expect(progEx.phrasePalindrome('010010')).toEqual(true);
  });
  it('#phrasePalindrome should return true when given ""', function () {
    expect(progEx.phrasePalindrome('')).toEqual(true);
  });
});

describe('progEx.pangram', function () {
  it('#pangram should return false when given ""', function () {
    expect(progEx.pangram('')).toEqual(false);
  });
  it('#pangram should return true when given "The quick brown fox jumps over the lazy dog."', function () {
    expect(progEx.pangram('The quick brown fox jumps over the lazy dog.')).toEqual(true);
  });
  it('#pangram should return false when given "The Buick brown fox jumps over the lazy dog."', function () {
    expect(progEx.pangram('The Buick brown fox jumps over the lazy dog.')).toEqual(false);
  });
});

describe('progEx.swedishTranslate', function () {
  it('#swedishTranslate should return "god jul" when given ["merry", "christmas"]', function () {
    expect(progEx.swedishTranslate(['merry', 'christmas'])).toEqual('god jul');
  });
  it('#swedishTranslate should return "gott nytt decade" when given ["happy", "new", "decade"]', function () {
    expect(progEx.swedishTranslate(['happy', 'new', 'decade'])).toEqual('gott nytt decade');
  });
});

describe('progEx.charFreq', function () {
  it('#charFreq should return {a: 26, b: 27, c: 24, d: 14} when given "abbabcbdbabdbdbabababcbcbab"', function () {
    expect(progEx.charFreq('abbabcbdbabdbdbabababcbcbab')).toEqual({
      a: 26,
      b: 27,
      c: 24,
      d: 14
    });
  });
});

describe('progEx.decode', function () {
  it('#decode should return "Caesar cipher? I much prefer Caesar salad!" when given "Pnrfne pvcure? V zhpu cersre Pnrfne fnynq!"', function () {
    expect(progEx.decode('Pnrfne pvcure? V zhpu cersre Pnrfne fnynq!')).toEqual('Caesar cipher? I much prefer Caesar salad!');
  });
});

describe('progEx.correct', function () {
  it('#correct should return "This is very funny and cool. Indeed! when given "This   is  very funny  and    cool.Indeed!"', function () {
    expect(progEx.correct('This   is  very funny  and    cool.Indeed!')).toEqual('This is very funny and cool. Indeed!');
  });
  it('#correct should return "Help me, I\'m stuck!" when given "Help\nme,I\'m\n   \nstuck!"', function () {
    expect(progEx.correct('Help\nme,I\'m\n   \nstuck!')).toEqual('Help me, I\'m stuck!');
  });
});

describe('progEx.make3sgForm', function () {
  it('#make3sgForm should return "brushes" when given "brush"', function () {
    expect(progEx.make3sgForm('brush')).toEqual('brushes');
  });
  it('#make3sgForm should return "" when given ""', function () {
    expect(progEx.make3sgForm('')).toEqual('');
  });
  it('#make3sgForm should return "cries" when given "cry"', function () {
    expect(progEx.make3sgForm('cry')).toEqual('cries');
  });
  it('#make3sgForm should return "digs" when given "dig"', function () {
    expect(progEx.make3sgForm('dig')).toEqual('digs');
  });
});

describe('progEx.makeIngForm', function () {
  it('#makeIngForm should return "going" when given "go"', function () {
    expect(progEx.makeIngForm('go')).toEqual('going');
  });
  it('#makeIngForm should return "fleeing" when given "flee"', function () {
    expect(progEx.makeIngForm('flee')).toEqual('fleeing');
  });
  it('#makeIngForm should return "lying" when given "lie"', function () {
    expect(progEx.makeIngForm('lie')).toEqual('lying');
  });
  it('#makeIngForm should return "cracking" when given "crack"', function () {
    expect(progEx.makeIngForm('crack')).toEqual('cracking');
  });
  it('#makeIngForm should return "digging" when given "dig"', function () {
    expect(progEx.makeIngForm('dig')).toEqual('digging');
  });
  it('#makeIngForm should return "" when given ""', function () {
    expect(progEx.makeIngForm('')).toEqual('');
  });
});

describe('progEx.map', function () {
  it('#map should return [2, 4, 6, 8] when given ([1, 2, 3, 4], function (a) {return a * 2;})', function () {
    expect(progEx.map([1, 2, 3, 4], function (a) {
      return a * 2;
    })).toEqual([2, 4, 6, 8]);
  });
  it('#map should return [4, 5, 6] when given (["door", "doors", "couple"], function (a) {return a.length;})', function () {
    expect(progEx.map(['door', 'doors', 'couple'], function (a) {
      return a.length;
    })).toEqual([4, 5, 6]);
  });
  it('#map should throw new Error "Array cannot be empty" when given ([], function () {return a;})', function () {
    expect(function () {
      progEx.map([], function (a) {
        return a;
      });
    }).toThrow(new Error('Array cannot be empty'));
  });
});

describe('progEx.filter', function () {
  it('#filter should return ["opening", "closing", "ceremony"] when given (["guest", "opening", "very", "good", "ceremony", "closing"], function (a) {return a.length > 5;})', function () {
    expect(progEx.filter(['guest', 'opening', 'very', 'good', 'ceremony', 'closing'], function (a) {
      return a.length > 5;
    })).toEqual(['opening', 'ceremony', 'closing']);
  });
  it('#filter should throw new Error "Array cannot be empty" when given ([], function (a) {return a;})', function () {
    expect(function () {
      progEx.filter([], function (a) {
        return a;
      });
    }).toThrow(new Error('Array cannot be empty'));
  });
});

describe('progEx.reduce', function () {
  it('#reduce should return 10 when given ([1, 2, 3, 4], function (a, b) {return a + b;}, 0)', function () {
    expect(progEx.reduce([1, 2, 3, 4], function (a, b) {
      return a + b;
    }, 0)).toEqual(10);
  });
  it('#reduce should throw new Error "Array cannot be empty" when given ([], function (a) {return a;}, 0))', function () {
    expect(function () {
      progEx.reduce([], function (a) {
        return a;
      }, 0);
    }).toThrow(new Error('Array cannot be empty'));
  });
});
