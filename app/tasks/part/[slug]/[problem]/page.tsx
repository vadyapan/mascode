'use client';
import {
  NavBar,
  Button,
  CodeEditor,
  H,
  P,
  successNotification,
  errorNotification,
} from '@/components';
import { MouseEvent, useContext, useState } from 'react';
import { UserContext } from '@/context/UserContext';
import { dataProblems } from '@/data/dataProblems';
import styles from './page.module.css';
import { useSolved } from '@/context/useSolved';

export default function Problem({
  params,
}: {
  params: { problem: string };
}): JSX.Element {
  const { userScheme } = useContext(UserContext);
  const isMatch = dataProblems.filter(
    (problem) => problem.slug === params.problem,
  );

  const [codeChange, setCodeChange] = useState(
    isMatch.map((task) => task.startCode).join(''),
  );
  const [solved, updateSolved] = useSolved();

  const handleCheckCode = async (e: MouseEvent): Promise<void> => {
    e.preventDefault;
    try {
      const userFn = eval(`(${codeChange})`);
      const currentAnswer = await Promise.all(
        isMatch.map((task) => task.handleFunction(userFn)),
      );
      const isSuccessAnswer = currentAnswer[0];

      if (isSuccessAnswer) {
        updateSolved({ ...solved, [isMatch[0].slug]: true });
        successNotification();
      } else {
        errorNotification();
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Исправьте ошибки: ${error.message}`);
        errorNotification();
      }
    }
  };

  return (
    <>
      <NavBar isMatch={isMatch} />
      {isMatch.map((task) => (
        <div className={styles.container} key={task.slug}>
          <div className={styles.problem}>
            <H tag="h4">{task.title}</H>
            <P>{task.problem}</P>
            {task.example && (
              <pre className={styles.example}>{task.example}</pre>
            )}
            {task.problemSecond && <P>{task.problemSecond}</P>}
            {task.exampleSecond && (
              <pre className={styles.example}>{task.exampleSecond}</pre>
            )}
          </div>
          <div className={styles.workspace}>
            <CodeEditor
              codeChange={codeChange}
              setCodeChange={setCodeChange}
              userScheme={userScheme}
            />
            <div className={styles.buttonSection}>
              <Button
                className={styles.testButton}
                apperance="ghost"
                onClick={handleCheckCode}>
                Проверить решение
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
