'use client';
import {
  useEffect,
  useState,
  Context,
  createContext,
  FC,
  ReactNode, useMemo,
} from 'react';
import { applyScheme, getSavedScheme } from '@/utils/colorScheme';

export type ColorScheme = 'light' | 'dark';

interface UserContextType {
  userScheme: ColorScheme;
  setUserScheme: (scheme: ColorScheme) => void;
}

const defaultValue: UserContextType = {
  userScheme: 'light',
  setUserScheme: () => {},
};

export const UserContext: Context<UserContextType> =
  createContext(defaultValue);

export const UserContextProvider: FC<{ children: ReactNode }> = ({
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

  const defaultScheme = useMemo(() => ({
    userScheme: userScheme,
    setUserScheme: setUserScheme
  }), [userScheme]);

  return (
    <UserContext.Provider
      value={defaultScheme}>
      {children}
    </UserContext.Provider>
  );
};
