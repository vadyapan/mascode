'use client';
import { FC } from 'react';
import Link from 'next/link';
import { NavBarProps } from './NavBar.props';
import { ArrowLeftIcon } from '@/components/Icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@/components/Icons/ArrowRightIcon';
import { listProblems } from '@/data/listProblems';
import cn from 'classnames';
import { ListTasks } from '@/types/interfaces';
import styles from './NavBar.module.css';

export const NavBar: FC<NavBarProps> = ({ part, task }) => {
  let listTasks: ListTasks[] = [];
  let taskIndex: number = -1;

  for (let i = 0; i < listProblems.length; i++) {
    if (listProblems[i].slug === part) {
      listTasks = listProblems[i].tasks;
      taskIndex = listProblems[i].tasks.findIndex(
        (problem) => problem.slug === task,
      );
      if (taskIndex !== -1) {
        break;
      }
    }
  }

  if (listTasks) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.navbar}>
          <Link className={cn(styles.link, styles.linkLeft)} href={'.'}>
            <div className={styles.arrowLeft}>
              <ArrowLeftIcon />
            </div>
            Назад в список задач
          </Link>
          {listTasks[taskIndex + 1] && (
            <Link
              className={cn(styles.link, styles.linkRight)}
              href={`${listTasks[taskIndex + 1].slug}`}>
              Следующая задача
              <div className={styles.arrowRight}>
                <ArrowRightIcon />
              </div>
            </Link>
          )}
        </div>
      </div>
    );
  }
};
