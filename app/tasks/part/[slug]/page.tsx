'use client';
import { H } from '@/components/UI/H/H';
import Link from 'next/link';
import { listProblems } from '@/data/listProblems';
import { useSolved } from '@/contexts/useSolved';
import cn from 'classnames';
import styles from '../page.module.css';

export default function Tasks({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  const [isSolved] = useSolved();
  const isMatch = listProblems.filter((task) => task.partSlug === params.slug);
  const [{ partSlug, tasks }] = isMatch;

  return (
    <div className={styles.wrapper}>
      <H tag="h5" className={styles.title}>
        Выберите задачу:
      </H>
      <div className={styles.listTask}>
        <ul className={styles.links}>
          {tasks.map(({ slug, title }) => (
            <li key={slug}>
              {!isSolved[slug] && <div className={cn(styles.circle)} />}
              {isSolved[slug] && (
                <div className={cn(styles.circle, styles.active)} />
              )}
              <Link className={styles.link} href={`${partSlug}/${slug}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
