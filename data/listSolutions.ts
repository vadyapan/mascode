import { ListSolutions } from '@/data/interfaces';
import {
  handleCenturyFromYear,
  handleEvenOrOdd,
  handleOppositeNumber,
} from '@/data/dataSolutions';

export const listSolutions: ListSolutions[] = [
  {
    slug: 'even-or-odd',
    handleFunction: handleEvenOrOdd,
  },
  {
    slug: 'opposite-number',
    handleFunction: handleOppositeNumber,
  },
  {
    slug: 'century-from-year',
    handleFunction: handleCenturyFromYear,
  },
];
