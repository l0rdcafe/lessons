'use strict';

/* global ch2, ch3, ch4, ch5, ch6, ch8, ch9 */

describe('ch2.hash7', function () {
  it('#hash7 should return "#\n##\n###\n####\n#####\n######\n#######\n" when called', function () {
    expect(ch2.hash7()).toEqual('#\n##\n###\n####\n#####\n######\n#######\n');
  });
});

describe('ch3.min', function () {
  it('#min should return 1 when given (2, 1)', function () {
    expect(ch3.min(2, 1)).toEqual(1);
  });
  it('#min should return -1 when given (-1, 0)', function () {
    expect(ch3.min(-2, -1)).toEqual(-2);
  });
  it('#min should return 0 when given (0, 0)', function () {
    expect(ch3.min(0, 0)).toEqual(0);
  });
  it('#min should return 0.5 when given (0.5, 0.6)', function () {
    expect(ch3.min(0.5, 0.6)).toEqual(0.5);
  });
  it('#min should return -0.6 when given (-0.5, -0.6)', function () {
    expect(ch3.min(-0.5, -0.6)).toEqual(-0.6);
  });
});

describe('ch3.isEven', function () {
  it('#isEven should return true when given 28294', function () {
    expect(ch3.isEven(28294)).toEqual(true);
  });
  it('#isEven should return false when given -131', function () {
    expect(ch3.isEven(-131)).toEqual(false);
  });
});

describe('ch3.countBs', function () {
  it('#countBs should return 6 when given "BBB-BB-Best!"', function () {
    expect(ch3.countBs('BBB-BB-Best!')).toEqual(6);
  });
  it('#countBs should return 0 when given ""', function () {
    expect(ch3.countBs('')).toEqual(0);
  });
});

describe('ch3.countChar', function () {
  it('#countChar should return 4 when given ("grrrrahhh!", "r")', function () {
    expect(ch3.countChar('grrrrahhh!', 'r')).toEqual(4);
  });
  it('#countChar should throw a new Error "Second argument cannot be longer than a single character" when given (123, "break")', function () {
    expect(function () {
      ch3.countChar(123, 'break');
    }).toThrow(new Error('Second argument cannot be longer than a single character'));
  });
  it('#countChar should return 2 when given ("1992", 9)', function () {
    expect(ch3.countChar('1992', 9)).toEqual(2);
  });
});

describe('ch4.range', function () {
  it('#range should return [1, 2, 3, 4] when given (1, 4, 1)', function () {
    expect(ch4.range(1, 4, 1)).toEqual([1, 2, 3, 4]);
  });
  it('#range should return [0] when given (0, 0, 1)', function () {
    expect(ch4.range(0, 0, 1)).toEqual([0]);
  });
  it('#range should return [-5, -3, -1] when given (-5, 0, 2)', function () {
    expect(ch4.range(-5, 0, 2)).toEqual([-5, -3, -1]);
  });
  it('#range should throw new Error "Negative values are invalid for the third argument" when given (2, -2, -1)', function () {
    expect(function () {
      ch4.range(2, -2, -1);
    }).toThrow(new Error('Negative values are invalid for the third argument'));
  });
  it('#range should throw new Error "The first argument has to be less than or equal the second" when given (3, 1, 1)', function () {
    expect(function () {
      ch4.range(3, 1, 1);
    }).toThrow(new Error('The first argument has to be less than or equal the second'));
  });
});

describe('ch4.sum', function () {
  it('#sum should return 10 when given [1, 2, 3, 4]', function () {
    expect(ch4.sum([1, 2, 3, 4])).toEqual(10);
  });
  it('#sum should return -10 when given [-1, -2, -3, -4]', function () {
    expect(ch4.sum([-1, -2, -3, -4])).toEqual(-10);
  });
  it('#sum should return 1.25 when given [0.25, 0.75, .25]', function () {
    expect(ch4.sum([0.25, 0.75, 0.25])).toEqual(1.25);
  });
  it('#sum should return -1.25 when given [-0.25, -0.75, -.25]', function () {
    expect(ch4.sum([-0.25, -0.75, -0.25])).toEqual(-1.25);
  });
});

describe('ch4.reverseArray', function () {
  it('#reverseArray should return ["k", "c", "a", "b"] when given ["b", "a", "c", "k"]', function () {
    expect(ch4.reverseArray(['b', 'a', 'c', 'k'])).toEqual(['k', 'c', 'a', 'b']);
  });
  it('#reverseArray should return [] when given []', function () {
    expect(ch4.reverseArray([])).toEqual([]);
  });
});

describe('ch4.arrayToList', function () {
  it('#arrayToList should return {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}} when given [10, 20, 30]', function () {
    expect(ch4.arrayToList([10, 20, 30])).toEqual({
      value: 10,
      rest: {
        value: 20,
        rest: {
          value: 30,
          rest: null
        }
      }
    });
  });
  it('#arrayToList should return {} when given []', function () {
    expect(ch4.arrayToList([])).toEqual({});
  });
});

describe('ch4.listToArray', function () {
  it('#listToArray should return [10, 20, 30] when given {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}', function () {
    expect(ch4.listToArray({
      value: 10,
      rest: {
        value: 20,
        rest: {
          value: 30,
          rest: null
        }
      }
    })).toEqual([10, 20, 30]);
  });
  it('#listToArray should not return [] when given {}', function () {
    expect(ch4.listToArray({})).not.toEqual([]);
  });
});

describe('ch4.prepend', function () {
  it('#prepend should return {value: 10, rest: {value: 20, rest: null}} when given (10, prepend(20, null))', function () {
    expect(ch4.prepend(10, ch4.prepend(20, null))).toEqual({
      value: 10,
      rest: {
        value: 20,
        rest: null
      }
    });
  });
});

describe('ch4.nth', function () {
  it('#nth should return 20 when given ({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}, 1)', function () {
    expect(ch4.nth({
      value: 10,
      rest: {
        value: 20,
        rest: {
          value: 30,
          rest: null
        }
      }
    }, 1)).toEqual(20);
  });
  it('#nth should return "" when given ({value: "", rest: {}}, 0)', function () {
    expect(ch4.nth({
      value: '',
      rest: {}
    }, 0)).toEqual('');
  });
});

describe('ch4.deepEqual', function () {
  it('#deepEqual should return true when given ({here: {is: "an"}, object: 2}, {here: {is: "an"}, object: 2})', function () {
    expect(ch4.deepEqual({
      here: {
        is: "an"
      },
      object: 2
    }, {
      here: {
        is: "an"
      },
      object: 2
    })).toEqual(true);
  });
  it('#deepEqual should return false when given ({here: {is: "an"}, object: 2}, {here: {is: "an"}, object: 1})', function () {
    expect(ch4.deepEqual({
      here: {
        is: 'an'
      },
      object: 2
    }, {
      here: {
        is: 'an'
      },
      object: 1
    })).toEqual(false);
  });
});

describe('ch5.arraysReduce', function () {
  it('#arraysReduce should [1, 2, 3, 4, 5, 6] when given [[1, 2, 3][4, 5][6]]', function () {
    expect(ch5.arraysReduce([
      [1, 2, 3],
      [4, 5],
      [6]
    ])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('#arraysReduce should return [] when given [[], [], []]', function () {
    expect(ch5.arraysReduce([
      [],
      [],
      []
    ])).toEqual([]);
  });
  it('#arraysReduce should throw new Error "Array cannot be empty" when given []', function () {
    expect(function () {
      ch5.arraysReduce([]);
    }).toThrow(new Error('Array cannot be empty'));
  });
});

describe('ch5.average', function () {
  it('#average should return 2.5 when given [1, 2, 3, 4]', function () {
    expect(ch5.average([1, 2, 3, 4])).toEqual(2.5);
  });
  it('#average should return  when given [-1, -2, -3, -4]', function () {
    expect(ch5.average([-1, -2, -3, -4])).toEqual(-2.5);
  });
  it('#average should return when -0.56 given [-0.34, -0.5, -.2, -1.2]', function () {
    expect(ch5.average([-0.34, -0.5, -0.2, -1.2])).toEqual(-0.56);
  });
  it('#average should return 0.56 when given [0.34, 0.5, .2, 1.2]', function () {
    expect(ch5.average([0.34, 0.5, 0.2, 1.2])).toEqual(0.56);
  });
});


describe('ch5.every', function () {
  it('#every should return true when given ([1, 1, 1], 1)', function () {
    expect(ch5.every([1, 1, 1], 1)).toEqual(true);
  });
  it('#every should return false when given ([1, 2, 1], 1)', function () {
    expect(ch5.every([1, 2, 1], 1)).toEqual(false);
  });
  it('#every should return false when given ([], "")', function () {
    expect(ch5.every([], 0)).toEqual(false);
  });
});

describe('ch5.some', function () {
  it('#some should return true when given ([1, 2, 2], 1)', function () {
    expect(ch5.some([1, 2, 2], 1)).toEqual(true);
  });
  it('#some should return false when given (["keep", "keys", "key"], "ke")', function () {
    expect(ch5.some(['keep', 'keys', 'key'], 'ke')).toEqual(false);
  });
  it('#some should return false when given ([], "")', function () {
    expect(ch5.some([], '')).toEqual(false);
  });
});

describe('ch6.Vector', function () {
  it('#Vector should return a new vector object when called with the new keyword', function () {
    expect(new ch6.Vector(1, 2)).toEqual({
      x: 1,
      y: 2
    });
  });
  it('#Vector should return {x: 3, y: 5} when given new Vector(1, 2).plus(new Vector(2, 3))', function () {
    expect(new ch6.Vector(1, 2).plus(new ch6.Vector(2, 3))).toEqual({
      x: 3,
      y: 5
    });
  });
  it('#Vector should return {x: -1, y: -1} when given new Vector(1, 2).minus(new Vector(2, 3))', function () {
    expect(new ch6.Vector(1, 2).minus(new ch6.Vector(2, 3))).toEqual({
      x: -1,
      y: -1
    });
  });
  it('#Vector should return 5 when given new Vector(3, 4).length', function () {
    expect(new ch6.Vector(3, 4).length).toEqual(5);
  });
});

describe('ch6.ArraySeq, ch6.logFive, ch6.RangeSeq, ch6.doubleSeq', function () {
  it('#logFive should return "" when given new ch6.ArraySeq([])', function () {
    expect(ch6.logFive(new ch6.ArraySeq([]))).toEqual('');
  });
  it('#logFive should return "1\n2\n3\n4\n5\n" when given new ch6.RangeSeq(1, 6)', function () {
    expect(ch6.logFive(new ch6.RangeSeq(1, 6))).toEqual('1\n2\n3\n4\n5\n');
  });
  it('#doubleSeq should return "2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n" when given new ch6.RangeSeq(1, 12)', function () {
    expect(ch6.doubleSeq(new ch6.RangeSeq(1, 12))).toEqual('2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n');
  });
});

describe('ch8.withBoxUnlocked, ch8.box', function () {
  it('#box.unlock().locked should return false when called', function () {
    expect(ch8.box.unlock().locked).toEqual(false);
  });
  it('#box.lock().locked should return true when called', function () {
    expect(ch8.box.lock().locked).toEqual(true);
  });
  it('#withBoxUnlocked.locked should return true when given function () {ch8.box.content.push("cigars")}', function () {
    expect(ch8.withBoxUnlocked(function () {
      ch8.box.content.push('cigars');
    }).locked).toEqual(true);
  });
});
