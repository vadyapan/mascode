import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Mascode | FAQ',
};

export default function FaqLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <div>{children}</div>;
}
