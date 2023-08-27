import { H } from '@/components';
import Link from 'next/link';
import { listParts } from '@/data/listParts';
import styles from '../List.module.css';

export const ListParts = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <H tag="h5" className={styles.title}>
        Выберите раздел:
      </H>
      <div className={styles.list}>
        <ul className={styles.links}>
          {listParts.map((part) => (
            <li key={part.id}>
              <Link className={styles.link} href={`tasks/part-${part.id}`}>
                {part.id}. {part.desc}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
