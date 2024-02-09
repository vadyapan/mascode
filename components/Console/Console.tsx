import { FC } from 'react';
import { ConsoleProps } from './Console.prop';
import styles from './Console.module.css';

export const Console: FC<ConsoleProps> = ({
  errorMsg = `Нажмите "Проверить решение", 
  \nчтобы получить первую ошибку`,
}) => {
  return <h4 className={styles.msg}>{errorMsg}</h4>;
};
