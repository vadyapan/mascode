'use client';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';

export const successNotification = (): void => {
  notifications.show({
    id: 'success-notifications',
    title: 'Тест пройден! 👏',
    message: 'Отправляйте результат',
    withCloseButton: false,
    color: 'green',
    icon: <IconCheck />,
    radius: 10,
  });
};

export const errorNotification = (): void => {
  notifications.show({
    id: 'failed-notifications',
    title: 'Тест не пройден! 🤔',
    message: 'Воспользуйтесь консолью для отладки',
    withCloseButton: false,
    color: 'red',
    icon: <IconX />,
    radius: 10,
  });
};
