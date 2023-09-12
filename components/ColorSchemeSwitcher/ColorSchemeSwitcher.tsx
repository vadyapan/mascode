'use client';
import { FC, MouseEvent, useContext } from 'react';
import styles from './ColorSchemeSwitcher.module.css';
import { Moon } from '@/components/Icons/Moon';
import { Sun } from '@/components/Icons/Sun';
import { UserContext } from '@/context/UserContext';

export const ColorSchemeSwitcher: FC = () => {
  const { userScheme, setUserScheme } = useContext(UserContext);

  const handleColorScheme = (e: MouseEvent): void => {
    e.preventDefault;
    if (userScheme === 'light') {
      setUserScheme('dark');
    } else {
      setUserScheme('light');
    }
  };

  return (
    <div className={styles.colorSchemeSwitcher}>
      <button
        className={styles.colorSchemeSwitcherValue}
        id={'changeColorScheme'}
        title={
          userScheme === 'light'
            ? 'Включить темную тему'
            : 'Включить светлую тему'
        }
        aria-label={'Поменять тему'}
        onClick={handleColorScheme}>
        {userScheme === 'light' ? <Moon /> : <Sun />}
      </button>
    </div>
  );
};
