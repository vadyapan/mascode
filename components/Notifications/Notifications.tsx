'use client';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';

export const successNotification = (): void => {
  notifications.show({
    id: 'success-notifications',
    title: 'Тесты пройдены!',
    message: 'Переходите к следующей задаче',
    withCloseButton: false,
    icon: <IconCheck />,
    color: 'green',
    radius: 10,
  });
};

export const errorNotification = (): void => {
  notifications.show({
    id: 'failed-notifications',
    title: 'Тесты не пройдены!',
    message: 'Откройте консоль для отладки',
    withCloseButton: false,
    icon: <IconX />,
    color: 'red',
    radius: 10,
  });
};
