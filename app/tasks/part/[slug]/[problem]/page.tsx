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
import { MouseEvent, useContext, useEffect, useState } from 'react';
import { UserContext } from '@/context/UserContext';
import { dataProblems } from '@/data/dataProblems';
import styles from './page.module.css';
import { useSolved } from '@/context/useSolved';
import Modal from '@/components/Modal/Modal';
import { createPortal } from 'react-dom';

export default function Problem({
  params,
}: {
  params: { problem: string };
}): JSX.Element {
  const { userScheme } = useContext(UserContext);
  const [solved, updateSolved] = useSolved();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const isMatch = dataProblems.filter(
    (problem) => problem.slug === params.problem,
  );
  const [codeChange, setCodeChange] = useState(
    isMatch.map((task) => task.startCode).join(''),
  );

  useEffect(() => {
    setInterval(() => {
      setOpenModal(true);
    }, 600000);
  }, []);

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
      {openModal &&
        createPortal(
          <Modal open={openModal} onClose={() => setOpenModal(false)}>
            <H tag="h3">Не можешь решить задачу? 🤔</H>
            <H tag="h3">Занимайся с ментором!</H>
            <Button className={styles.messageBtn} apperance="primary">
              <a href="https://t.me/vadyapan" target="_blank">
                Написать ментору
              </a>
            </Button>
          </Modal>,
          document.getElementById('modal-window') as Element,
        )}
    </>
  );
}
