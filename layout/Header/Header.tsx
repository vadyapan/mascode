'use client';
import { FC, useContext } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ThemeContext } from '@/contexts/themeContext';
import { ColorSchemeSwitcher } from '@/components/ColorSchemeSwitcher/ColorSchemeSwitcher';
import { LogoLight } from '@/components/Logo/LogoLight';
import { LogoDark } from '@/components/Logo/LogoDark';
import { ColorScheme } from '@/types/interfaces';
import styles from './Header.module.css';

export const Header: FC = () => {
  const { userScheme } = useContext(ThemeContext);
  const currentRoute = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.header__info}>
        <div className={styles.logo}>
          <Link href={'/'} aria-label="Mascode">
            {userScheme === ColorScheme.LIGHT ? <LogoLight /> : <LogoDark />}
          </Link>
        </div>
        <nav className={styles.menu}>
          <ul className={styles.menu__list}>
            <li>
              <Link
                href={'/'}
                className={currentRoute === '/' ? styles.activeLink : ''}>
                Главная
              </Link>
            </li>
            <li>
              <Link
                href={'/tasks/part'}
                className={
                  currentRoute === '/tasks/part' ? styles.activeLink : ''
                }>
                Задачи
              </Link>
            </li>
            <li>
              <Link
                href={'/faq'}
                className={currentRoute === '/faq' ? styles.activeLink : ''}>
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.theme}>
        <span className={styles.theme__title}>поменять тему</span>
        <ColorSchemeSwitcher />
      </div>
    </header>
  );
};
