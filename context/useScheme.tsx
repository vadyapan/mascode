import {MouseEvent, useContext} from "react";
import {ColorScheme, UserContext} from "@/context/UserContext";

type UserSchemeResult = {
  userScheme: ColorScheme
  toggleTheme: (e: MouseEvent) => void
};

export function useScheme(): UserSchemeResult {
 const { userScheme, setUserScheme } = useContext(UserContext);

 const toggleTheme = (e: MouseEvent): void => {
    e.preventDefault;
    const newScheme = userScheme === 'dark' ? 'light' : 'dark';
    setUserScheme(newScheme);
  };
  return {
    userScheme,
    toggleTheme
  };
}