'use client';
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { NavBarProps, SlugProblem } from './NavBar.props';
import { ArrowLeftIcon } from '@/components/Icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@/components/Icons/ArrowRightIcon';
import supabase from '@/config/supabase/supabaseClient';
import cn from 'classnames';
import styles from './NavBar.module.css';

export const NavBar: FC<NavBarProps> = ({ matchSlug }) => {
  const [fetchSlug, setFetchSlug] = useState<SlugProblem[]>([]);

  useEffect(() => {
    const fetchProblem = async (): Promise<void> => {
      const { data, error } = await supabase.from('problems').select('slug');

      if (error) {
        console.log(error);
      }

      if (data) {
        setFetchSlug(data);
      }
    };

    fetchProblem();
  }, []);

  if (fetchSlug) {
    const problemIndex = fetchSlug.findIndex(
      (problem) => problem.slug === matchSlug,
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
          {fetchSlug[problemIndex + 1] && (
            <Link
              className={cn(styles.link, styles.linkRight)}
              href={`${fetchSlug[problemIndex + 1].slug}`}>
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
