'use client';
import { H } from '@/components';
import Link from 'next/link';
import { listProblems } from '@/data/listProblems';
import styles from '../page.module.css';
import { useSolved } from '@/context/useSolved';
import cn from 'classnames';

export default function Tasks({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  const isMatch = listProblems.filter((task) => task.partSlug === params.slug);
  const partMatch = isMatch[0];
  const tasksArray = isMatch[0].tasks;
  
  const [solved] = useSolved();

  return (
    <>
      <div className={styles.wrapper}>
        <H tag="h5" className={styles.title}>
          Выберите задачу:
        </H>
        <div className={styles.listTask}>
          <ul className={styles.links}>
            {tasksArray.map((task) => (
              <li key={task.slug}>
                {!solved[task.slug] && (
                  <div className={cn(styles.circle)}></div>
                )}
                {solved[task.slug] && (
                  <div className={cn(styles.circle, styles.active)}></div>
                )}
                <Link
                  className={styles.link}
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
}
