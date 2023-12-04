import { Spinner } from '@/components/Icons/Spinner/Spinner';
import { FC } from 'react';
import styles from './UILoading.module.css';

export const UILoading: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Spinner />
    </div>
  );
};
