import { Metadata } from 'next';
import { FC, ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Mascode | Задачи',
};

type PartLayout = {
  children: ReactNode;
};

const PartLayout: FC<PartLayout>  = ({
  children
}) => {
  return <>{children}</>;
};

export default PartLayout;
