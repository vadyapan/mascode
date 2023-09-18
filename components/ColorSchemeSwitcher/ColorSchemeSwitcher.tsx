'use client';
import { FC } from 'react';
import styles from './ColorSchemeSwitcher.module.css';
import { Moon } from '@/components/Icons/Moon';
import { Sun } from '@/components/Icons/Sun';
import {useScheme} from "@/context/useScheme";

export const ColorSchemeSwitcher: FC = () => {
 const {userScheme, toggleTheme} = useScheme();

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
        onClick={toggleTheme}>
        {userScheme === 'light' ? <Moon /> : <Sun />}
      </button>
    </div>
  );
};
