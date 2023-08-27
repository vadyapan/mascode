interface listFaq {
  question: string;
  answer: string;
  id: number;
}

export const listFaq: listFaq[] = [
  {
    question: 'Сайт полностью бесплатный?',
    answer: 'Да, сайт всегда будет полностью бесплатным!',
    id: 1,
  },
  {
    question: 'Откуда взяты задачи?',
    answer:
      'Задачи подобраны с сайта codewars.com и отсортированы в порядке усложнения',
    id: 2,
  },
  {
    question: 'Планируется ли мобильная версия?',
    answer:
      'Мы не видим необходимости в мобильной версии. Задачи удобнее решать в полной версии сайта',
    id: 3,
  },
];
