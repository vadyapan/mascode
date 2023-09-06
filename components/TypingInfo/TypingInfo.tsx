'use client';
import { FC } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { H } from '../UI/H/H';
import { P } from '../UI/P/P';
import styles from './TypingInfo.module.css';

export const TypingInfo: FC = () => {
  return (
    <>
      <div className={styles.typingTitle}>
        <H tag="h2">Получи практику программирования на JavaScript</H>
      </div>
      <div className={styles.line}></div>
      <div className={styles.typingText}>
        <P>
          <Typewriter
            words={[
              'Изучение теории это лишь 10% обучения. Все остальное — практика. Прокачивай навыки решая задачи.',
              'Чтобы овладеть JavaScript на уровне junior/junior+, нужно самостоятельно решить около 100-150 задач.',
            ]}
            deleteSpeed={15}
            typeSpeed={40}
          />
        </P>
      </div>
    </>
  );
};
