import {Context, createContext} from "react";

type ColorScheme = 'light' | 'dark';

interface UserContextType {
  userScheme: ColorScheme;
  setUserScheme: (scheme: ColorScheme) => void;
}

const defaultValue: UserContextType = {
  userScheme: 'light',
  setUserScheme: () => {},
};

export const UserContext: Context<UserContextType> = createContext(defaultValue);