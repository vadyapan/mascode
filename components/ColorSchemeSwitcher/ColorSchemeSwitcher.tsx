'use client';
import { FC } from 'react';
import styles from './ColorSchemeSwitcher.module.css';
import { MoonIcon } from '@/components/Icons/MoonIcon';
import { SunIcon } from '@/components/Icons/SunIcon';
import { useScheme } from '@/contexts/useScheme';
import { ColorScheme } from '@/types/interfaces';

export const ColorSchemeSwitcher: FC = () => {
  const { userScheme, switchTheme } = useScheme();

  return (
    <div className={styles.colorSchemeSwitcher}>
      <button
        type={'button'}
        className={styles.colorSchemeSwitcherValue}
        id={'changeColorScheme'}
        title={
          userScheme === ColorScheme.LIGHT
            ? 'Включить темную тему'
            : 'Включить светлую тему'
        }
        aria-label={'Поменять тему'}
        onClick={switchTheme}>
        {userScheme === ColorScheme.LIGHT ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};
