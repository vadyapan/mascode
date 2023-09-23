import assert from 'assert';
import { InterfaceDataProblems } from './interfaces';

export const handleEvenOrOdd = (fn: any): boolean => {
  try {
    const number = [2, 7, -42, -7, 0];
    for (const i of number) {
      const answer = i % 2 === 0 ? 'Even' : 'Odd';
      const result = fn(i);
      assert.deepEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Исправьте ошибки: ${error.message}`);
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
      assert.deepEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Исправьте ошибки: ${error.message}`);
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
      assert.deepEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Исправьте ошибки: ${error.message}`);
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
      assert.deepEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Исправьте ошибки: ${error.message}`);
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
      assert.deepEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Исправьте ошибки: ${error.message}`);
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
      assert.deepEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Исправьте ошибки: ${error.message}`);
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
      assert.deepEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Исправьте ошибки: ${error.message}`);
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
      assert.deepEqual(result, answer);
    }
    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Исправьте ошибки: ${error.message}`);
    }
    return false;
  }
};

export const handleHowManyArguments = (fn: any): boolean => {
  try {
    const argsArr = [[1, 2], [], ['A', 'B', 'C'], [['foo', 'bar']]];
    assert.deepEqual(fn(1, 2), argsArr[0].length);
    assert.deepEqual(fn(), argsArr[1].length);
    assert.deepEqual(fn('A', 'B', 'C'), argsArr[2].length);
    assert.deepEqual(fn(['foo', 'bar']), argsArr[3].length);
    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Исправьте ошибки: ${error.message}`);
    }
    return false;
  }
};

export const dataProblems: InterfaceDataProblems[] = [
  {
    slug: 'even-or-odd',
    title: 'Четное или нечетное',
    problem: `Создать функцию, принимающую в качестве аргумента целое число 
    и возвращающую значение "Even" для четных чисел или "Odd" для нечетных.`,
    startCode: `function evenOrOdd(number) {\n  // Ваш код...\n}`,
    handleFunction: handleEvenOrOdd,
  },
  {
    slug: 'opposite-number',
    title: 'Противоположное число',
    problem: `Очень просто: задано целое число или число с плавающей точкой, 
    найдите его противоположность.`,
    example: `1: -1\n14: -14\n-34: 34`,
    startCode: `function opposite(number) {\n  // Ваш код...\n}`,
    handleFunction: handleOppositeNumber,
  },
  {
    slug: 'century-from-year',
    title: 'Век за веком',
    problem: `Первый век охватывает период с 1-го по 100-й год включительно, 
    второй век - с 101-го по 200-й год включительно и т.д. Задав год, верните век, 
    в котором он находится.`,
    example: `1705 --> 18\n1900 --> 19\n1601 --> 17\n2000 --> 20`,
    startCode: `function century(year) {\n  // Ваш код...\n}`,
    handleFunction: handleCenturyFromYear,
  },
  {
    slug: 'two-word-name',
    title: 'Инициалы имени',
    problem: `Напишите функцию для преобразования имени в инициалы.
    На выходе должны получиться две заглавные буквы с точкой, разделяющей их.`,
    example: `Sam Harris --> S.H\npatrick feeney --> P.F`,
    startCode: `function abbrevName(name) {\n  // Ваш код...\n}`,
    handleFunction: handleTwoWordName,
  },
  {
    slug: 'reversed-string',
    title: 'Перевернутая строка',
    problem: `Напишите решение так, чтобы оно меняло переданную строку на противоположную.`,
    example: `'world' --> 'dlrow'\n'word' --> 'drow'`,
    startCode: `function solution(str) {\n  // Ваш код...\n}`,
    handleFunction: handleReversedString,
  },
  {
    slug: 'credit-card-mask',
    title: 'Маска для кредитных карт',
    problem: `Обычно, когда вы что-то покупаете, вас спрашивают, верен ли номер вашей кредитной карты, 
    номер телефона или ответ на ваш самый секретный вопрос. Однако, поскольку кто-то может заглянуть 
    вам через плечо, вы не хотите, чтобы это было показано на экране. Вместо этого мы маскируем его.
    Ваша задача - написать функцию maskify, которая меняет все символы, кроме последних четырех, на '#'.`,
    example: `maskify('4556364607935616') --> '############5616'\nmaskify('64607935616') --> '#######5616'\nmaskify('1') --> '1'\n'' --> ''`,
    startCode: `function maskify(cc) {\n  // Ваш код...\n}`,
    handleFunction: handleCreditCardMask,
  },
  {
    slug: 'remove-first-and-last-character',
    title: 'Удалить первый и последний символ',
    problem: `Все довольно просто. Ваша задача - создать функцию, удаляющую первый и 
    последний символы строки. Вам дан один параметр - исходная строка. Не нужно беспокоиться о строках, 
    содержащих менее двух символов.`,
    startCode: `function removeChar(str) {\n  // Ваш код...\n}`,
    handleFunction: handleRemoveFirstAndLastCharacter,
  },
  {
    slug: 'create-phone-number',
    title: 'Создайте номер телефона',
    problem: `Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает 
    строку из этих чисел в виде телефонного номера. Для выполнения этого задания необходимо правильно
    указать возвращаемый формат. Не забудьте пробел после закрывающих скобок!`,
    example: `createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) --> '(123) 456-7890'`,
    startCode: `function createPhoneNumber(numbers) {\n  // Ваш код...\n}`,
    handleFunction: handleCreatePhoneNumber,
  },
  {
    slug: 'how-many-arguments',
    title: 'Сколько аргументов',
    problem: `Напишите функцию, которая определяет сколько аргументов передано в функцию.`,
    example: `argsCount(1, 2, 3) -> 3\nargsCount(1, 2, 3, 10) -> 4\nargsCount(['foo', 'bar']) -> 1`,
    startCode: `function argsCount(params) {\n  // Ваш код...\n}`,
    handleFunction: handleHowManyArguments,
  },
];
