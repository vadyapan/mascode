import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Mascode | Часть 1',
  description: 'Примитивы и циклы',
};

export default function TasksLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <>{children}</>;
}
