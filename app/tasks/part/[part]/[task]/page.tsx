'use client';
import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from '@/components/Modal/Modal';
import { NavBar } from '@/components/NavBar/NavBar';
import {
  errorNotification,
  successNotification,
} from '@/components/Notifications/Notifications';
import { Button } from '@/components/UI/Button/Button';
import { useSolved } from '@/contexts/useSolved';
import { DataProblems } from '@/types/interfaces';
import { getDataWithOneQueryParam } from '@/utils/getDataWithOneQueryParam';
import { findTask } from '@/utils/findTask';
import { Task } from '@/components/Task/Task';
import { H } from '@/components/UI/H/H';
import styles from './page.module.css';

type Problem = {
  params: {
    part: string;
    task: string
  };
};

const Problem: FC<Problem> = ({
  params
}) => {
  const { part, task } = params;
  const [isSolved, setIsSolved] = useSolved();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [getData, setGetData] = useState<DataProblems>();
  const [userCode, setUserCode] = useState<string>();
  const [errorMsg, setErrorMsg] = useState<string | null>();
  const checkFunction = findTask({ part, task });

  useEffect(() => {
    const getProblem = async (): Promise<void> => {
      try {
        getDataWithOneQueryParam<DataProblems[]>({
          path: 'problems',
          query: 'slug',
          param: task
        })
          .then((data) => {
            setGetData(data[0]);
            setUserCode(data[0].startCode);
          })
          .catch((error) => {
            throw new Error(error);
          });
      } catch (error) {
        console.error(error);
      }
    };

    getProblem();
  }, [task]);

  useEffect(() => {
    setInterval(() => {
      setOpenModal(true);
    }, 600000);
  }, []);

  const handleCheckCode = (): void => {
    try {
      if (checkFunction) {
        const userFn = new Function(`return ${userCode}`)();
        const isSuccessAnswer = checkFunction.handleFunction(userFn);

        if (getData && isSuccessAnswer) {
          setIsSolved({ ...isSolved, [getData.slug]: true });
          successNotification();
          setErrorMsg('Задача решена!');
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMsg(error.message);
        errorNotification();
      }
    }
  };

  return (
    <>
      {getData && (
        <>
          <NavBar part={params.part} task={params.task} />
          <Task
            task={getData}
            userCode={userCode}
            setUserCode={setUserCode}
            handleCheckCode={handleCheckCode}
            errorMsg={errorMsg}
          />
        </>
      )}
      {openModal &&
        createPortal(
          <Modal open={openModal} onClose={() => setOpenModal(false)}>
            <H tag="h3">Не можешь решить задачу? 🤔</H>
            <H tag="h3">Занимайся с ментором!</H>
            <Button className={styles.messageBtn} appearance="primary">
              <a href="https://t.me/vadyapan" target="_blank">
                Написать ментору
              </a>
            </Button>
          </Modal>,
          document.getElementById('modal-window') as Element,
        )}
    </>
  );
};

export default Problem;
