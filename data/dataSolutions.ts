import assert from 'assert';

export const handleEvenOrOdd = (fn: any): boolean => {
  try {
    const number = [2, 7, -42, -7, 0];
    for (const i of number) {
      const answer = i % 2 === 0 ? 'Even' : 'Odd';
      const result = fn(i);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};

export const handleOppositeNumber = (fn: any): boolean => {
  try {
    const number = [1, 0, 4.25, 3.3333333, -12525220.3325, -5];
    for (const i of number) {
      const answer = -i;
      const result = fn(i);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};

export const handleCenturyFromYear = (fn: any): boolean => {
  try {
    const number = [1705, 1900, 1601, 2000, 89];
    for (const i of number) {
      const answer = Math.ceil(i / 100);
      const result = fn(i);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};

export const handleTwoWordName = (fn: any): boolean => {
  try {
    const str = [
      'Sam Harris',
      'Patrick Feenan',
      'Evan Cole',
      'P Favuzzi',
      'David Mendieta',
    ];
    for (const i of str) {
      const answer = i
        .split(' ')
        .map((i) => i[0].toUpperCase())
        .join('.');
      const result = fn(i);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};

export const handleReversedString = (fn: any): boolean => {
  try {
    const str = ['world', 'hello', '', 'h'];
    for (const i of str) {
      const answer = i.split('').reverse().join('');
      const result = fn(i);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};

export const handleCreditCardMask = (fn: any): boolean => {
  try {
    const str = ['4556364607935616', '1', '11111', ''];
    for (const i of str) {
      const answer = i.length <= 4 ? i : '#'.repeat(i.length - 4) + i.slice(-4);
      const result = fn(i);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};

export const handleRemoveFirstAndLastCharacter = (fn: any): boolean => {
  try {
    const str = ['eloquent', 'country', 'person', 'place', 'ooopsss'];
    for (const i of str) {
      const answer = i.slice(1, -1);
      const result = fn(i);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};

export const handleCreatePhoneNumber = (fn: any): boolean => {
  try {
    const numArr = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ];
    for (const i of numArr) {
      const answer = i.reduce(
        (format, number) => format.replace('x', String(number)),
        '(xxx) xxx-xxxx',
      );
      const result = fn(i);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};

export const handleHowManyArguments = (fn: any): boolean => {
  try {
    const argsArr = [[1, 2], [], ['A', 'B', 'C'], [['foo', 'bar']]];
    assert.strictEqual(fn(1, 2), argsArr[0].length);
    assert.strictEqual(fn(), argsArr[1].length);
    assert.strictEqual(fn('A', 'B', 'C'), argsArr[2].length);
    assert.strictEqual(fn(['foo', 'bar']), argsArr[3].length);
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};

export const handleLeapYears = (fn: any): boolean => {
  try {
    const number = [2020, 2000, 2015, 2100];
    for (const i of number) {
      const answer = (i % 4 === 0 && i % 100 !== 0) || i % 400 === 0;
      const result = fn(i);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};

export const handleSheep = (fn: any): boolean => {
  try {
    const number = [0, 1, 2, 3];
    for (const i of number) {
      let answer = '';
      for (let j = 1; j <= i; j++) {
        answer += j + ' sheep...';
      }
      const result = fn(i);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};

export const handleGrowthPopulation = (fn: any): boolean => {
  try {
    assert.strictEqual(fn(1500, 5, 100, 5000), 15);
    assert.strictEqual(fn(1500000, 2.5, 10000, 2000000), 10);
    assert.strictEqual(fn(1500000, 0.25, 1000, 2000000), 94);
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};

export const handleNumberVerifier = (fn: any): boolean => {
  try {
    const numberArr = [
      6, 1, 28, 4986, 10, 496, 8128, 23459879034, 1098, 33550336,
    ];
    const knownPerfectNumbers = [
      6, 28, 496, 8128, 33550336, 8589869056, 137438691328,
    ];
    for (const i of numberArr) {
      const answer = knownPerfectNumbers.includes(i);
      const result = fn(i);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};

export const handleSumPositive = (fn: any): boolean => {
  try {
    assert.strictEqual(fn([1, 2, 3, 4, 5]), 15);
    assert.strictEqual(fn([1, -2, 3, 4, 5]), 13);
    assert.strictEqual(fn([]), 0);
    assert.strictEqual(fn([-1, -2, -3, -4, -5]), 0);
    assert.strictEqual(fn([-1, 2, 3, 4, -5]), 9);
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};

export const handleShortestWord = (fn: any): boolean => {
  try {
    const strArr = [
      'bitcoin take over the world maybe who knows perhaps',
      'turns out random test cases are easier than writing out basic ones',
      "Let's travel abroad shall we",
    ];
    for (const i of strArr) {
      const answer = Math.min(...i.split(' ').map((word) => word.length));
      const result = fn(i);
      assert.strictEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};

export const handleListFiltering = (fn: any): boolean => {
  try {
    assert.strictEqual(fn([1, 2, 'a', 'b']), [1, 2]);
    assert.strictEqual(fn([1, 'a', 'b', 0, 15]), [1, 0, 15]);
    assert.strictEqual(fn([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123]);
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};

export const handleBuildSquare = (fn: any): boolean => {
  try {
    assert.strictEqual(
      fn(8),
      '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++',
    );
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};

export const handlePlayingDigits = (fn: any): boolean => {
  try {
    assert.strictEqual(fn(89, 1), 1);
    assert.strictEqual(fn(92, 1), -1);
    assert.strictEqual(fn(695, 2), 2);
    assert.strictEqual(fn(46288, 3), 51);
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};

export const handleSmallestValue = (fn: any): boolean => {
  try {
    assert.strictEqual(fn([1, 2, 3, 4, 5], 'value'), 1);
    assert.strictEqual(fn([1, 2, 3, 4, 5], 'index'), 0);
    return true;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return false;
  }
};
