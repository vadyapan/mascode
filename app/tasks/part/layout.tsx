import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Mascode | Задачи',
};

export default function PartLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <>{children}</>;
}
