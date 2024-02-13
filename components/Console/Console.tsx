import { FC } from 'react';
import { ConsoleProps } from './Console.prop';
import styles from './Console.module.css';
import { P } from '../UI/P/P';

export const Console: FC<ConsoleProps> = ({
  errorMsg = 'Нажмите "Проверить решение"',
}) => {
  return (
    <pre>
      <P className={styles.msg}>{errorMsg}</P>
    </pre>
  );
};
