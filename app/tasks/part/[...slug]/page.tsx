'use client';
import { NavBar, Button, CodeEditor, H, P } from '@/components';
import styles from './page.module.css';
import stylesLink from '../page.module.css';
import Link from 'next/link';
import { listProblems } from '@/data/listProblems';
import { InterfaceListProblems } from '@/data/interface.listProblems';
import { useContext, useState } from 'react';
import { UserContext } from '@/context/UserContext';
import cn from 'classnames';

function isTasksSlugMatch(
  slugToCheck: string,
  tasksArray: InterfaceListProblems[],
): InterfaceListProblems[] {
  return tasksArray.filter((task) => task.partSlug === slugToCheck);
}

export default function Tasks({
  params,
}: {
  params: { slug: string[] };
}): JSX.Element {
  const isMatch = isTasksSlugMatch(params.slug[0], listProblems);
  const partMatch = isMatch[0];
  const tasksArray = isMatch[0].tasks;
  const taskMatch = tasksArray.filter((task) => task.slug === params.slug[1]);
  const { userScheme } = useContext(UserContext);
  const [codeChange, setCodeChange] = useState(
    taskMatch.map((task) => task.startCode).join(''),
  );
  const [isAnswerSuccess, setIsAnswerSuccess] = useState(false);
  const [watchTask, setWatchTask] = useState(true);

  const handleCheckCode = (): void => {
    try {
      const userFn = eval(`(${codeChange})`);
      const currentAnswer = taskMatch.map((task) =>
        task.handleFunction(userFn),
      );
      setWatchTask(false);
      setIsAnswerSuccess(currentAnswer[0]);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Исправьте ошибки: ${error.message}`);
      }
    }
  };

  const handleBackToTask = (): void => {
    setWatchTask(true);
    setIsAnswerSuccess(false);
  };

  try {
    if (params.slug.length === 1 && partMatch.partSlug === params.slug[0]) {
      return (
        <>
          <div className={stylesLink.wrapper}>
            <H tag="h5" className={stylesLink.title}>
              Выберите задачу:
            </H>
            <div className={stylesLink.listTask}>
              <ul className={stylesLink.links}>
                {tasksArray.map((task) => (
                  <li key={task.slug}>
                    <div className={stylesLink.circle}></div>
                    <Link
                      className={stylesLink.link}
                      href={`${partMatch.partSlug}/${task.slug}`}>
                      {task.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      );
    } else if (
      params.slug.length === 2 &&
      taskMatch[0].slug === params.slug[1]
    ) {
      return (
        <>
          <NavBar tasksArray={tasksArray} taskMatch={taskMatch} />
          {taskMatch.map((task) => (
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
                  <Button
                    className={styles.backToTask}
                    apperance="ghost"
                    onClick={handleBackToTask}>
                    Вернуться к задаче
                  </Button>
                  <Button apperance="primary" onClick={handleCheckCode}>
                    Тест
                  </Button>
                  <Button apperance="success">Отправить</Button>
                </div>
              </div>
            </div>
          ))}
        </>
      );
    }
  } catch (error) {
    return (
      <div className={styles.noTask}>
        <H tag="h4">Такая задача не найдена 😧</H>
      </div>
    );
  }
  return (
    <div className={styles.noTask}>
      <H tag="h4">Такая страница не найдена 😧</H>
    </div>
  );
}
