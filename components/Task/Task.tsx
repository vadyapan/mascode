'use client';
import { FC, useContext } from 'react';
import { ThemeContext } from '@/contexts/themeContext';
import { CodeEditor } from '../CodeEditor/CodeEditor';
import { Button } from '../UI/Button/Button';
import { H } from '../UI/H/H';
import { P } from '../UI/P/P';
import { TaskProps } from './Task.props';
import styles from './Task.module.css';

export const Task: FC<TaskProps> = ({
  task,
  userCode,
  setUserCode,
  handleCheckCode,
}) => {
  const { userScheme } = useContext(ThemeContext);
  const { title, problem, example, problemSecond, exampleSecond } = task;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.problem}>
          <H tag="h4">{title}</H>
          <P>{problem}</P>
          {example && <pre className={styles.example}>{example}</pre>}
          {problemSecond && <P>{problemSecond}</P>}
          {exampleSecond && (
            <pre className={styles.example}>{exampleSecond}</pre>
          )}
        </div>
        <div className={styles.workspace}>
          <CodeEditor
            userCode={`${userCode}`}
            setUserCode={setUserCode}
            userScheme={userScheme}
          />
          <div className={styles.buttonSection}>
            <Button
              className={styles.testButton}
              appearance="ghost"
              onClick={handleCheckCode}>
              Проверить решение
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
