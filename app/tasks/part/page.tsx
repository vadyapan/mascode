import { H } from '@/components/UI/H/H';
import Link from 'next/link';
import { listProblems } from '@/data/listProblems';
import styles from './page.module.css';

export default function Part(): JSX.Element {
  return (
    <>
      <div className={styles.wrapper}>
        <H tag="h5" className={styles.title}>
          Выберите раздел:
        </H>
        <div className={styles.list}>
          <ul className={styles.links}>
            {listProblems.map(({ partId, partSlug, partTitle }) => (
              <li key={partId}>
                <Link className={styles.link} href={`part/${partSlug}`}>
                  {partId}. {partTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
