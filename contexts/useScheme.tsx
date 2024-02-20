import { useContext } from 'react';
import { ThemeContext } from '@/contexts/themeContext';
import { ColorScheme } from '@/types/interfaces';

type UserScheme = {
  userScheme: ColorScheme;
  switchTheme: () => void;
};

export function useScheme(): UserScheme {
  const { userScheme, setUserScheme } = useContext(ThemeContext);

  const switchTheme = (): void => {
    const newScheme = userScheme === ColorScheme.LIGHT ? ColorScheme.DARK : ColorScheme.LIGHT;
    setUserScheme(newScheme);
  };

  return {
    userScheme,
    switchTheme,
  };
}
