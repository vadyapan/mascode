interface listFaq {
  question: string;
  answer: string;
  id: number;
}

export const listFaq: listFaq[] = [
  {
    question: 'Как выполнить отладку кода?',
    answer: 'Запустите инструменты разработчика, вкладка Сonsole',
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
