'use client';
import { FC, useContext } from 'react';
import styles from './ColorSchemeSwitcher.module.css';
import { Moon } from '@/components/Icons/Moon';
import { Sun } from '@/components/Icons/Sun';
import { UserContext } from '@/context/UserContext';

export const ColorSchemeSwitcher: FC = () => {
  const { userScheme, setUserScheme } = useContext(UserContext);

  return (
    <div className={styles.colorSchemeSwitcher}>
      <button
        className={styles.colorSchemeSwitcherValue}
        id={'changeColorScheme'}
        aria-label={'Поменять тему'}
        onClick={() => {
          userScheme === 'light'
            ? setUserScheme('dark')
            : setUserScheme('light');
        }}>
        {userScheme === 'light' ? <Sun /> : <Moon />}
      </button>
    </div>
  );
};
