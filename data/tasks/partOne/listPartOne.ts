import { InterfaceTasks } from '@/data/interface.tasks';
import assert from 'assert';

export const handleEvenOrOdd = (fn: any): boolean => {
  try {
    const number = [2, 7, -42, -7, 0];
    number.forEach((number) => {
      const answer = number % 2 === 0 ? 'Even' : 'Odd';
      const result = fn(number);
      assert.deepEqual(result, answer);
    });
    return true;
  } catch (error: unknown) {
    return false;
  }
};

export const handleOppositeNumber = (fn: any): boolean => {
  try {
    const number = [1, 0, 4.25, 3.3333333, -12525220.3325, -5];
    number.forEach((number) => {
      const answer = -number;
      const result = fn(number);
      assert.deepEqual(result, answer);
    });
    return true;
  } catch (error: unknown) {
    return false;
  }
};

export const listPartOne: InterfaceTasks[] = [
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
];
