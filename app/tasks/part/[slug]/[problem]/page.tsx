'use client';
import { MouseEvent, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ThemeContext } from '@/contexts/themeContext';
import { dataProblems } from '@/data/dataProblems';
import Modal from '@/components/Modal/Modal';
import { NavBar } from '@/components/NavBar/NavBar';
import {
  errorNotification,
  successNotification,
} from '@/components/Notifications/Notifications';
import { H } from '@/components/UI/H/H';
import { P } from '@/components/UI/P/P';
import { CodeEditor } from '@/components/CodeEditor/CodeEditor';
import { Button } from '@/components/UI/Button/Button';
import { useSolved } from '@/contexts/useSolved';
import styles from './page.module.css';

export default function Problem({
  params,
}: {
  params: { problem: string };
}): JSX.Element {
  const { userScheme } = useContext(ThemeContext);
  const [isSolved, setIsSolved] = useSolved();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const isMatch = dataProblems.filter(
    (problem) => problem.slug === params.problem,
  );
  const [
    {
      slug,
      title,
      problem,
      example,
      exampleSecond,
      problemSecond,
      startCode,
      handleFunction,
    },
  ] = isMatch;
  const [userCode, setUserCode] = useState(startCode);

  useEffect(() => {
    setInterval(() => {
      setOpenModal(true);
    }, 600000);
  }, []);

  const handleCheckCode = async (e: MouseEvent): Promise<void> => {
    e.preventDefault;
    try {
      const userFn = new Function(`return ${userCode}`)();
      const isSuccessAnswer = handleFunction(userFn);

      if (isSuccessAnswer) {
        setIsSolved({ ...isSolved, [slug]: true });
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
      <NavBar matchSlug={slug} />
      <div className={styles.container} key={slug}>
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
            userCode={userCode}
            setUserCode={setUserCode}
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
