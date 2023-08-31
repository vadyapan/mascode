import { H } from '@/components';
import styles from './page.module.css';
import Link from 'next/link';
import { listProblems } from '@/data/listProblems';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mascode | Задачи',
};

export default function Part(): JSX.Element {
  return (
    <>
      <div className={styles.wrapper}>
        <H tag="h5" className={styles.title}>
          Выберите раздел:
        </H>
        <div className={styles.list}>
          <ul className={styles.links}>
            {listProblems.map((problemPart) => (
              <li key={problemPart.partId}>
                <Link
                  className={styles.link}
                  href={`part/${problemPart.partSlug}`}>
                  {problemPart.partId}. {problemPart.partTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
