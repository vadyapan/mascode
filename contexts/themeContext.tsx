'use client';
import {
  useEffect,
  useState,
  Context,
  createContext,
  FC,
  ReactNode,
} from 'react';
import { applyScheme, getSavedScheme } from '@/utils/colorScheme';

export type ColorScheme = 'light' | 'dark';

interface ThemeContextType {
  userScheme: ColorScheme;
  setUserScheme: (scheme: ColorScheme) => void;
}

const initialValue: ThemeContextType = {
  userScheme: 'light',
  setUserScheme: () => {},
};

export const ThemeContext: Context<ThemeContextType> =
  createContext(initialValue);

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userScheme, setUserScheme] = useState<ColorScheme>('light');

  useEffect(() => {
    const getScheme = getSavedScheme();
    if (getScheme !== null) setUserScheme(JSON.parse(getScheme));
  }, []);

  useEffect(() => {
    applyScheme(userScheme);
  }, [userScheme]);

  const defaultValue = {
    userScheme: userScheme,
    setUserScheme: setUserScheme,
  };

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};
