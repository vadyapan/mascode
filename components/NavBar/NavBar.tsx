'use client';
import Link from 'next/link';
import { NavBarProps } from './NavBar.props';
import { ArrowLeft } from '..';
import { ArrowRight } from '../Icons/ArrowRight';
import cn from 'classnames';
import styles from './BreadcrumbBar.module.css';

export const NavBar = ({ tasksArray, taskMatch }: NavBarProps): JSX.Element => {
  const taskIndex = tasksArray.findIndex(
    (task) => task.slug === taskMatch[0].slug,
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <Link className={cn(styles.link, styles.linkLeft)} href={'.'}>
          <div className={styles.arrowLeft}>
            <ArrowLeft />
          </div>
          Вернуться к списку задач
        </Link>
        {tasksArray[taskIndex + 1] && (
          <Link
            className={cn(styles.link, styles.linkRight)}
            href={`${tasksArray[taskIndex + 1].slug}`}>
            Следующая задача
            <div className={styles.arrowRight}>
              <ArrowRight />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
