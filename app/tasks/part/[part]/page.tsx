'use client';
import { FC } from 'react';
import { H } from '@/components/UI/H/H';
import Link from 'next/link';
import { listProblems } from '@/data/listProblems';
import { useSolved } from '@/contexts/useSolved';
import cn from 'classnames';
import styles from '../page.module.css';

type Tasks = {
  params: {
    part: string
  };
};

const Tasks: FC<Tasks> = ({
  params
}) => {
  const [isSolved] = useSolved();
  const isMatch = listProblems.filter((part) => part.slug === params.part);

  if (isMatch) {
    return (
      <div className={styles.wrapper}>
        <H tag="h5" className={styles.title}>
          Выберите задачу:
        </H>
        <div className={styles.listTask}>
          <ul className={styles.links}>
            {isMatch[0].tasks.map(({ slug, title }) => (
              <li key={slug}>
                {!isSolved[slug] && <div className={cn(styles.circle)} />}
                {isSolved[slug] && (
                  <div className={cn(styles.circle, styles.active)} />
                )}
                <Link
                  className={styles.link}
                  href={`${isMatch[0].slug}/${slug}`}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return <h2>В этом разделе пока нет задач</h2>;
};

export default Tasks;
