'use client';
import { H } from '@/components';
import Link from 'next/link';
import { listProblems } from '@/data/listProblems';
import { useSolved } from '@/context/useSolved';
import cn from 'classnames';
import styles from '../page.module.css';

export default function Tasks({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  const isMatch = listProblems.filter((task) => task.partSlug === params.slug);
  const [{ partSlug, tasks }] = isMatch;

  const [solved] = useSolved();

  return (
    <>
      <div className={styles.wrapper}>
        <H tag="h5" className={styles.title}>
          Выберите задачу:
        </H>
        <div className={styles.listTask}>
          <ul className={styles.links}>
            {tasks.map((task) => (
              <li key={task.slug}>
                {!solved[task.slug] && (
                  <div className={cn(styles.circle)}></div>
                )}
                {solved[task.slug] && (
                  <div className={cn(styles.circle, styles.active)}></div>
                )}
                <Link className={styles.link} href={`${partSlug}/${task.slug}`}>
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
