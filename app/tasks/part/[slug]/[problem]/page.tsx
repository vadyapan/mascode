'use client';
import { MouseEvent, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ThemeContext } from '@/contexts/themeContext';
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
import { DataProblems } from '@/data/interfaces';
import supabase from '@/config/supabase/supabaseClient';
import { listSolutions } from '@/data/listSolutions';
import styles from './page.module.css';

export default function Problem({
  params,
}: {
  params: { problem: string };
}): JSX.Element {
  const { userScheme } = useContext(ThemeContext);
  const [isSolved, setIsSolved] = useSolved();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [getData, setGetData] = useState<DataProblems>();
  const [userCode, setUserCode] = useState<string>();
  const checkFunction = listSolutions.filter(
    (problem) => problem.slug === params.problem,
  )[0].handleFunction;

  useEffect(() => {
    const getProblem = async (): Promise<void> => {
      try {
        const { data, error } = await supabase
          .from('problems')
          .select()
          .textSearch('slug', `${params.problem}`);

        if (data) {
          setGetData(data[0]);
          setUserCode(data[0].startCode);
        } else if (error) {
          throw new Error();
        }
      } catch (error) {
        console.error(error);
      }
    };

    getProblem();
  }, [params.problem]);

  // useEffect(() => {
  //   setInterval(() => {
  //     setOpenModal(true);
  //   }, 600000);
  // }, []);

  const handleCheckCode = async (e: MouseEvent): Promise<void> => {
    e.preventDefault;
    try {
      const userFn = new Function(`return ${userCode}`)();
      const isSuccessAnswer = checkFunction(userFn);

      if (getData && isSuccessAnswer) {
        setIsSolved({ ...isSolved, [getData.slug]: true });
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
      {getData && (
        <>
          <NavBar matchSlug={getData.slug} />
          <div className={styles.container} key={getData.slug}>
            <div className={styles.problem}>
              <H tag="h4">{getData.title}</H>
              <P>{getData.problem}</P>
              {getData.example && (
                <pre className={styles.example}>{getData.example}</pre>
              )}
              {getData.problemSecond && <P>{getData.problemSecond}</P>}
              {getData.exampleSecond && (
                <pre className={styles.example}>{getData.exampleSecond}</pre>
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
                  apperance="ghost"
                  onClick={handleCheckCode}>
                  Проверить решение
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
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
