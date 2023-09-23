import { FC } from 'react';
import Link from 'next/link';
import { NavBarProps } from './NavBar.props';
import { ArrowLeft } from '..';
import { ArrowRight } from '../Icons/ArrowRight';
import cn from 'classnames';
import styles from './NavBar.module.css';
import { dataProblems } from '@/data/dataProblems';

export const NavBar: FC<NavBarProps> = ({ isMatch }) => {
  const taskIndex = dataProblems.findIndex(
    (task) => task.slug === isMatch[0].slug,
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <Link className={cn(styles.link, styles.linkLeft)} href={'.'}>
          <div className={styles.arrowLeft}>
            <ArrowLeft />
          </div>
          Назад в список задач
        </Link>
        {dataProblems[taskIndex + 1] && (
          <Link
            className={cn(styles.link, styles.linkRight)}
            href={`${dataProblems[taskIndex + 1].slug}`}>
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
