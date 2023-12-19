type ColorScheme = 'light' | 'dark' | 'auto';

export interface CodeEditorProps {
  userCode: string;
  setUserCode: (str: string) => void;
  userScheme: ColorScheme;
}
