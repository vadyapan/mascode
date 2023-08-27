import { H } from '@/components';
import { listPartOne } from '@/data/tasks/partOne/listPartOne';
import Link from 'next/link';
import styles from '../List.module.css';

export const ListTasks = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <H tag="h5" className={styles.title}>
        Выберите задачу:
      </H>
      <div className={styles.listTask}>
        <ul className={styles.links}>
          {listPartOne.map((task) => (
            <li key={task.slug}>
              <div className={styles.circle}></div>
              <Link className={styles.link} href={`part-1/${task.slug}`}>
                {task.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
