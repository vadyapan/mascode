'use client';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';

export const successNotification = (): void => {
  notifications.show({
    id: 'success-notifications',
    title: 'Тест пройден!',
    message: 'Отправляйте результат',
    withCloseButton: false,
    icon: <IconCheck />,
    color: 'green',
    radius: 10,
  });
};

export const errorNotification = (): void => {
  notifications.show({
    id: 'failed-notifications',
    title: 'Тест не пройден!',
    message: 'Используйте консоль для отладки',
    withCloseButton: false,
    icon: <IconX />,
    color: 'red',
    radius: 10,
  });
};
