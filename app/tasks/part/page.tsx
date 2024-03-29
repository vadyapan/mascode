import { FC } from 'react';
import { H } from '@/components/UI/H/H';
import Link from 'next/link';
import { listProblems } from '@/data/listProblems';
import styles from './page.module.css';

const Part: FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <H tag="h5" className={styles.title}>
          Выберите раздел:
        </H>
        <div className={styles.list}>
          <ul className={styles.links}>
            {listProblems.map(({ id, slug, title }) => (
              <li key={id}>
                <Link className={styles.link} href={`part/${slug}`}>
                  {id}. {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Part;
