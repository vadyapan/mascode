'use client';
import { useContext, useState } from 'react';
import { listPartOne } from '@/data/tasks/partOne/listPartOne';
import { InterfaceTasks } from '@/data/interface.tasks';
import { BreadcrumbBar, Button, CodeEditor, H, P } from '@/components';
import styles from './page.module.css';
import cn from 'classnames';
import { UserContext } from '@/context/UserContext';

interface TaskProps {
  params: { slug: string };
}

function isSlugMatch(
  slugToCheck: string,
  tasksArray: InterfaceTasks[],
): InterfaceTasks[] {
  return tasksArray.filter((task) => task.slug === slugToCheck);
}

export default function Task({ params }: TaskProps): JSX.Element {
  const { userScheme } = useContext(UserContext);
  const isMatch = isSlugMatch(params.slug, listPartOne);
  const [codeChange, setCodeChange] = useState(
    isMatch.map((task) => task.startCode).join(''),
  );
  const [isAnswerSuccess, setIsAnswerSuccess] = useState(false);
  const [watchTask, setWatchTask] = useState(true);

  const handleCheckCode = (): void => {
    try {
      const userFn = eval(`(${codeChange})`);
      const currentAnswer = isMatch.map((task) => task.handleFunction(userFn));
      setWatchTask(false);
      setIsAnswerSuccess(currentAnswer[0]);
    } catch (error: unknown) {
      alert(`Вы близки к решению!\n\nИсправьте ошибку: ${error}`);
    }
  };

  const handleBackToTask = (): void => {
    setWatchTask(true);
    setIsAnswerSuccess(false);
  };

  return (
    <>
      <BreadcrumbBar />
      {isMatch.length !== 0 ? (
        isMatch.map((task) => (
          <div className={styles.container} key={task.slug}>
            {isAnswerSuccess && !watchTask && (
              <div className={cn(styles.test, styles.testSuccess)}>
                <H tag="h4">Тест пройден!</H>
              </div>
            )}
            {!isAnswerSuccess && !watchTask && (
              <div className={cn(styles.test, styles.testError)}>
                <H tag="h4">Попробуйте еще раз!</H>
              </div>
            )}
            {!isAnswerSuccess && watchTask && (
              <div className={styles.problem}>
                <H tag="h4">{task.title}</H>
                <P>{task.problem}</P>
                {task.example && (
                  <pre className={styles.example}>{task.example}</pre>
                )}
              </div>
            )}
            <div className={styles.workspace}>
              <CodeEditor
                codeChange={codeChange}
                setCodeChange={setCodeChange}
                userScheme={userScheme}
              />
              <div className={styles.buttonSection}>
                <Button apperance="ghost" onClick={handleBackToTask}>
                  Вернуться к задаче
                </Button>
                <Button apperance="primary" onClick={handleCheckCode}>
                  Тест
                </Button>
                <Button apperance="success">Отправить</Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.noTask}>
          <H tag="h4">Такая задача не найдена!</H>
        </div>
      )}
    </>
  );
}
