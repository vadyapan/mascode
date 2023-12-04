import { MouseEvent, useContext } from 'react';
import { ColorScheme, ThemeContext } from '@/contexts/themeContext';

type UserSchemeResult = {
  userScheme: ColorScheme;
  switchTheme: (e: MouseEvent) => void;
};

export function useScheme(): UserSchemeResult {
  const { userScheme, setUserScheme } = useContext(ThemeContext);

  const switchTheme = (e: MouseEvent): void => {
    e.preventDefault;
    const newScheme = userScheme === 'dark' ? 'light' : 'dark';
    setUserScheme(newScheme);
  };
  return {
    userScheme,
    switchTheme,
  };
}
