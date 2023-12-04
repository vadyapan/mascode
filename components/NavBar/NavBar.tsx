import { FC } from 'react';
import Link from 'next/link';
import { NavBarProps } from './NavBar.props';
import { dataProblems } from '@/data/dataProblems';
import { ArrowLeftIcon } from '@/components/Icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@/components/Icons/ArrowRightIcon';
import cn from 'classnames';
import styles from './NavBar.module.css';

export const NavBar: FC<NavBarProps> = ({ isMatch }) => {
  const taskIndex = dataProblems.findIndex(
    (task) => task.slug === isMatch[0].slug,
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <Link className={cn(styles.link, styles.linkLeft)} href={'.'}>
          <div className={styles.arrowLeft}>
            <ArrowLeftIcon />
          </div>
          Назад в список задач
        </Link>
        {dataProblems[taskIndex + 1] && (
          <Link
            className={cn(styles.link, styles.linkRight)}
            href={`${dataProblems[taskIndex + 1].slug}`}>
            Следующая задача
            <div className={styles.arrowRight}>
              <ArrowRightIcon />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
