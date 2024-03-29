'use client';
import { FC, useContext, useState } from 'react';
import { ThemeContext } from '@/contexts/themeContext';
import { CodeEditor } from '../CodeEditor/CodeEditor';
import { Button } from '../UI/Button/Button';
import { H } from '../UI/H/H';
import { P } from '../UI/P/P';
import { TaskProps } from './Task.props';
import styles from './Task.module.css';
import { LS_FONT_SIZE } from '@/constants/localStorage/localStorage';
import { Console } from '../Console/Console';

export const Task: FC<TaskProps> = ({
  task,
  userCode,
  setUserCode,
  handleCheckCode,
  errorMsg,
}) => {
  const { userScheme } = useContext(ThemeContext);
  const { title, problem, example, problemSecond, exampleSecond } = task;
  const [isConsole, setIsConsole] = useState<boolean>(false);
  const [editorFontSize, setEditorFontSize] = useState<number>(
    Number(window.localStorage.getItem(LS_FONT_SIZE)) || 14,
  );

  const handleDecrement = (): boolean | void => {
    if (editorFontSize <= 10) return;

    setEditorFontSize((prevValue) => {
      const newValue = prevValue - 1;
      window.localStorage.setItem(LS_FONT_SIZE, String(newValue));

      return newValue;
    });
  };

  const handleIncrement = (): boolean | void => {
    if (editorFontSize >= 30) return;

    setEditorFontSize((prevValue) => {
      const newValue = prevValue + 1;
      window.localStorage.setItem(LS_FONT_SIZE, String(newValue));

      return newValue;
    });
  };

  const handleConsole = (): void => {
    setIsConsole((prevValue) => !prevValue);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.problem}>
          {!isConsole && (
            <>
              <H tag="h4">{title}</H>
              <P>{problem}</P>
              {example && <pre className={styles.example}>{example}</pre>}
              {problemSecond && <P>{problemSecond}</P>}
              {exampleSecond && (
                <pre className={styles.example}>{exampleSecond}</pre>
              )}
            </>
          )}
          {isConsole && <Console errorMsg={errorMsg} />}
        </div>
        <div className={styles.workspace}>
          <CodeEditor
            userCode={`${userCode}`}
            setUserCode={setUserCode}
            userScheme={userScheme}
            editorFontSize={editorFontSize}
          />
          <div className={styles.buttonSection}>
            <div className={styles.actionSection}>
              <Button
                className={styles.consoleButton}
                type="button"
                appearance="primary"
                onClick={handleConsole}>
                Консоль
              </Button>
              <div className={styles.editFontSizeSection}>
                <button
                  className={styles.button}
                  type="button"
                  onClick={handleDecrement}>
                  -
                </button>
                <b className={styles.fontSize}>{editorFontSize}px</b>
                <button
                  className={styles.button}
                  type="button"
                  onClick={handleIncrement}>
                  +
                </button>
              </div>
            </div>
            <Button
              type="button"
              appearance="success"
              onClick={handleCheckCode}>
              Проверить решение
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
