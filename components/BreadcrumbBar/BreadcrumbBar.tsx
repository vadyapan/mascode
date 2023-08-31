'use client';
import styles from './BreadcrumbBar.module.css';
import { useEffect, useState } from 'react';

export const BreadcrumbBar = (): JSX.Element => {
  const [clickBack, setClickBack] = useState(false);

  useEffect(() => {
    if (clickBack) {
      window.history.back();
    }
  }, [clickBack]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.breadcrumb}>
        <button className={styles.button} onClick={() => setClickBack(true)}>
          Вернуться к списку задач
        </button>
      </div>
    </div>
  );
};
