'use client';
import { Context, createContext, FC, ReactNode, useEffect, useState } from 'react';
import { applyScheme, getSavedScheme } from '@/utils/colorScheme';
import { ColorScheme } from '@/types/interfaces';

interface ThemeContextType {
  userScheme: ColorScheme;
  setUserScheme: (scheme: ColorScheme) => void;
}

const initialValue: ThemeContextType = {
  userScheme: ColorScheme.LIGHT,
  setUserScheme: () => {},
};

export const ThemeContext: Context<ThemeContextType> =
  createContext(initialValue);

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userScheme, setUserScheme] = useState<ColorScheme>(ColorScheme.LIGHT);

  useEffect(() => {
    const getScheme = getSavedScheme();
    if (getScheme !== null) setUserScheme(JSON.parse(getScheme));
  }, []);

  useEffect(() => {
    applyScheme(userScheme);
  }, [userScheme]);

  const defaultValue = {
    userScheme,
    setUserScheme,
  };

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};
