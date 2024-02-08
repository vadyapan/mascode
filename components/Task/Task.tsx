'use client';
import { FC, useContext, useState } from 'react';
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
  const [editorFontSize, setEditorFontSize] = useState<number>(14);

  const handleDecrement = (): boolean | void => {
    if (editorFontSize <= 10) return;

    setEditorFontSize((prev) => (prev -= 1));
  };

  const handleIncrement = (): boolean | void => {
    if (editorFontSize >= 30) return;

    setEditorFontSize((prev) => (prev += 1));
  };

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
            editorFontSize={editorFontSize}
          />
          <div className={styles.buttonSection}>
            <div className={styles.editFontSizeSection}>
              <button
                className={styles.fontSizeButton}
                type="button"
                onClick={handleDecrement}>
                -
              </button>
              <strong className={styles.fontSize}>{editorFontSize}px</strong>
              <button
                className={styles.fontSizeButton}
                type="button"
                onClick={handleIncrement}>
                +
              </button>
            </div>
            <Button
              className={styles.testButton}
              appearance="primary"
              onClick={handleCheckCode}>
              Проверить решение
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
