import { FC } from 'react';
import { H } from '../UI/H/H';
import Link from 'next/link';
import { Button } from '..';
import styles from './MainInfo.module.css';

export const MainInfo: FC = () => {
  return (
    <>
      <div className={styles.title}>
        <H tag="h2">Получи практику программирования на JavaScript</H>
      </div>
      <div className={styles.line}></div>
      <div className={styles.message}>
        <p className={styles.text}>
          Изучение теории это лишь 10% обучения. Все остальное — практика.
        </p>
        <p className={styles.text}>
          Прокачивай навыки решая задачи. Чтобы овладеть JavaScript на уровне
          junior/junior+, нужно самостоятельно решить около 100-150 задач.
        </p>
      </div>
      <Link href={'/tasks/part'}>
        <Button apperance="present">Начать</Button>
      </Link>
    </>
  );
};
