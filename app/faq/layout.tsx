import { Metadata } from 'next';
import { FC, ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Mascode | FAQ',
};

type FaqLayout = {
  children: ReactNode;
};

const FaqLayout: FC<FaqLayout> = ({
  children,
}) => {
  return <div>{children}</div>;
};

export default FaqLayout;
