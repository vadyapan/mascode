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

type ColorScheme = 'light' | 'dark';

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

  return (
    <UserContext.Provider
      value={{ userScheme: userScheme, setUserScheme: setUserScheme }}>
      {children}
    </UserContext.Provider>
  );
};
