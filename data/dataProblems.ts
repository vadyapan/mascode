import {
  handleBuildSquare,
  handleCenturyFromYear,
  handleCreatePhoneNumber,
  handleCreditCardMask,
  handleEvenOrOdd,
  handleGrowthPopulation,
  handleHowManyArguments,
  handleLeapYears,
  handleListFiltering,
  handleNumberVerifier,
  handleOppositeNumber,
  handlePlayingDigits,
  handleRemoveFirstAndLastCharacter,
  handleReversedString,
  handleSheep,
  handleShortestWord,
  handleSumPositive,
  handleTwoWordName,
} from './dataSolutions';
import { InterfaceDataProblems } from './interfaces';

export const dataProblems: InterfaceDataProblems[] = [
  {
    slug: 'even-or-odd',
    title: 'Четное или нечетное',
    problem: `Создайте функцию, принимающую в качестве аргумента целое число 
    и возвращающую значение "Even" для четных чисел или "Odd" для нечетных.`,
    startCode: `function evenOrOdd(number) {\n  // Ваш код...\n\t\n}`,
    handleFunction: handleEvenOrOdd,
  },
  {
    slug: 'opposite-number',
    title: 'Противоположное число',
    problem: `Очень просто: задано целое число или число с плавающей точкой, 
    найдите его противоположность.`,
    example: `1: -1\n14: -14\n-34: 34`,
    startCode: `function opposite(number) {\n  // Ваш код...\n\t\n}`,
    handleFunction: handleOppositeNumber,
  },
  {
    slug: 'century-from-year',
    title: 'Век за веком',
    problem: `Первый век охватывает период с 1-го по 100-й год включительно, 
    второй век - с 101-го по 200-й год включительно и т.д. Задав год, верните век, 
    в котором он находится.`,
    example: `1705 --> 18\n1900 --> 19\n1601 --> 17\n2000 --> 20`,
    startCode: `function century(year) {\n  // Ваш код...\n\t\n}`,
    handleFunction: handleCenturyFromYear,
  },
  {
    slug: 'two-word-name',
    title: 'Инициалы имени',
    problem: `Напишите функцию для преобразования имени в инициалы.
    На выходе должны получиться две заглавные буквы с точкой, разделяющей их.`,
    example: `Sam Harris --> S.H\npatrick feeney --> P.F`,
    startCode: `function abbrevName(name) {\n  // Ваш код...\n\t\n}`,
    handleFunction: handleTwoWordName,
  },
  {
    slug: 'reversed-string',
    title: 'Перевернутая строка',
    problem: `Напишите решение так, чтобы оно меняло переданную строку на противоположную.`,
    example: `'world' --> 'dlrow'\n'word' --> 'drow'`,
    startCode: `function solution(str) {\n  // Ваш код...\n\t\n}`,
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
    startCode: `function maskify(cc) {\n  // Ваш код...\n\t\n}`,
    handleFunction: handleCreditCardMask,
  },
  {
    slug: 'remove-first-and-last-character',
    title: 'Удалить первый и последний символ',
    problem: `Все довольно просто. Ваша задача - создать функцию, удаляющую первый и 
    последний символы строки. Вам дан один параметр - исходная строка. Не нужно беспокоиться о строках, 
    содержащих менее двух символов.`,
    startCode: `function removeChar(str) {\n  // Ваш код...\n\t\n}`,
    handleFunction: handleRemoveFirstAndLastCharacter,
  },
  {
    slug: 'create-phone-number',
    title: 'Создайте номер телефона',
    problem: `Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает 
    строку из этих чисел в виде телефонного номера. Для выполнения этого задания необходимо правильно
    указать возвращаемый формат. Не забудьте пробел после закрывающих скобок!`,
    example: `createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) --> '(123) 456-7890'`,
    startCode: `function createPhoneNumber(numbers) {\n  // Ваш код...\n\t\n}`,
    handleFunction: handleCreatePhoneNumber,
  },
  {
    slug: 'how-many-arguments',
    title: 'Сколько аргументов',
    problem: `Напишите функцию, которая определяет сколько аргументов передано в функцию.`,
    example: `argsCount(1, 2, 3) -> 3\nargsCount(1, 2, 3, 10) -> 4\nargsCount(['foo', 'bar']) -> 1`,
    startCode: `function argsCount(params) {\n  // Ваш код...\n\t\n}`,
    handleFunction: handleHowManyArguments,
  },
  {
    slug: 'leap-years',
    title: 'Високосные года',
    problem: `В этой задаче нужно просто определить, является ли данный год високосным или нет. 
    Если вы не знаете правил, то вот они: Года, кратные 4, являются високосными. 
    Но года, кратные 100, не являются високосными. Года, кратные 400, являются високосными.
    Дополнительные примечания: проверяться будут только действительные года 
    (целые положительные числа), поэтому их валидация не требуется.`,
    startCode: `function isLeapYear(year) {\n  // Ваш код...\n\t\n}`,
    handleFunction: handleLeapYears,
  },
  {
    slug: 'sheep',
    title: 'Просто считай овец',
    problem: `При задании целого неотрицательного числа, например, 3, вернуть строку: 
    "1 sheep...2 sheep...3 sheep...". Входные данные всегда будут корректными, т.е. 
    не будут содержать отрицательных целых чисел.`,
    startCode: `function countSheep(num) {\n  // Ваш код...\n\t\n}`,
    handleFunction: handleSheep,
  },
  {
    slug: 'growth-of-a-population',
    title: 'Рост численности населения',
    problem: `В небольшом городе численность населения в начале года составляет p0 = 1000 человек. 
    Население регулярно увеличивается на 2% в год, кроме того, в город ежегодно прибывает 
    50 новых жителей. Сколько лет необходимо городу, чтобы его население стало больше или 
    равно p = 1200 жителей?`,
    example: `В конце первого года будет:\n1000 + 1000 * 0.02 + 50 -> 1070 жителей\n\nВ конце 2-го года будет:\n1070 + 1070 * 0.02 + 50 -> 1141 жителей (** количество жителей - целое число **)\n\nВ конце 3-го года будет:\n1141 + 1141 * 0.02 + 50 -> 1213\n\nНа это потребуется целых 3 года.`,
    problemSecond: `Общие заданные параметры: "p0, percent, aug (количество жителей, 
    прибывающих или убывающих каждый год), p (численность населения, которая должна 
    быть равна или превышена)" функция "nbYear" должна возвращать "n" количество целых 
    лет, необходимых для того, чтобы численность населения была больше или равна "p".
    aug - целое число, percent - положительное или нулевое плавающее число, p0 и p - 
    положительные целые числа (> 0). Примечание: не забудьте преобразовать параметр percent 
    в проценты в теле функции: если параметр percent равен 2, то его нужно преобразовать в 0,02.`,
    exampleSecond: `nbYear(1500, 5, 100, 5000) -> 15\nnbYear(1500000, 2.5, 10000, 2000000) -> 10`,
    startCode: `function nbYear(p0, percent, aug, p) {\n  // Ваш код...\n\t\n}`,
    handleFunction: handleGrowthPopulation,
  },
  {
    slug: 'number-verifier',
    title: 'Верификатор идеальных чисел',
    problem: `Совершенным числом называется число, у которого сумма делителей (за исключением самого 
    себя) равна самому себе. Напишите функцию, которая может проверить, является ли заданное 
    целое число "n" совершенным числом, и вернуть "True", если да, или "False", если нет.`,
    example: `n = 28 имеет следующие делители: 1, 2, 4, 7, 14, 28\n1 + 2 + 4 + 7 + 14 = 28, следовательно,\n28 - совершенное число, поэтому следует вернуть True.\n\nДругой пример:\nn = 25 имеет следующие делители: 1, 5, 25\n1 + 5 = 6, следовательно, 25 не является совершенным числом,\nпоэтому следует вернуть False`,
    startCode: `function isPerfect(n) {\n  // Ваш код...\n\t\n}`,
    handleFunction: handleNumberVerifier,
  },
  {
    slug: 'sum-of-positive',
    title: 'Сумма положительных',
    problem: `Вы получаете массив чисел, возвращаете сумму всех положительных чисел. 
    Примечание: если суммировать нечего, то сумма по умолчанию равна 0.`,
    example: `[1, -4, 7, 12] -> 1 + 7 + 12 = 20`,
    startCode: `function positiveSum(arr) {\n  // Ваш код...\n\t\n}`,
    handleFunction: handleSumPositive,
  },
  {
    slug: 'shortest-word',
    title: 'Самое короткое слово',
    problem: `Простая, заданная строка слов, возвращает длину самого короткого слова (слов).
    Строка никогда не будет пустой, и вам не нужно учитывать различные типы данных.`,
    startCode: `function findShort(s) {\n  // Ваш код...\n\t\n}`,
    handleFunction: handleShortestWord,
  },
  {
    slug: 'list-filtering',
    title: 'Фильтрация списков',
    problem: `В этом задании вы создадите функцию, которая принимает список чисел и строк, 
    и возвращает новый отфильтрованный список с числами.`,
    example: `[1, 2, 'a', 'b'] -> [1, 2]\n[1, 'a', 'b', 0, 15] -> [1, 0, 15]\n[1, 2, 'abc', '1', '123', 123]) -> [1, 2, 123]`,
    startCode: `function filterList(list) {\n  // Ваш код...\n\t\n}`,
    handleFunction: handleListFiltering,
  },
  {
    slug: 'build-a-square',
    title: 'Построить квадрат',
    problem: `Дано целое число. Верните фигуру, длина и ширина которой равны целому числу.`,
    example: `n = 3, поэтому ожидается, что квадрат 3x3 будет возвращен,\nкак и ниже, в виде строки:\n\n+++\n+++\n+++`,
    startCode: `function generateShape(integer) {\n  // Ваш код...\n\t\n}`,
    handleFunction: handleBuildSquare,
  },
  {
    slug: 'playing-with-digits',
    title: 'Игра с числами',
    problem: `Некоторые числа обладают забавными свойствами. Например:
    [89 --> 8¹ + 9² = 89 * 1]
    [695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2]
    [46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51]
    Дано целое положительное число n, записанное в виде abcd... (a, b, c, d... - цифры), 
    и целое положительное число p. Мы хотим найти целое положительное число k, если оно 
    существует, такое, что сумма цифр n, возведенных в последовательные степени p, равна k * n.
    Другими словами: Существует ли целое число k такое, что : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
    Если это так, то мы вернем k, если нет, то вернем -1.
    Примечание: n и p всегда задаются как строго положительные целые числа.`,
    example: `digPow(89, 1) должен вернуть 1,\nтак как 8¹ + 9² = 89 = 89 * 1\n\ndigPow(92, 1) должен вернуть -1,\nтак как не существует k, например, 9¹ + 2² = 92 * k\n\ndigPow(695, 2) должен вернуть 2,\nтак как 6² + 9³ + 5⁴= 1390 = 695 * 2\n\ndigPow(46288, 3) должен вернуть 51,\nтак как 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51`,
    startCode: `function digPow(n, p) {\n  // Ваш код...\n\t\n}`,
    handleFunction: handlePlayingDigits,
  },
];
