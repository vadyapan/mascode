type ColorScheme = 'light' | 'dark' | 'auto';

export interface CodeEditorProps {
  userCode: string;
  setUserCode: (code: string) => void;
  userScheme: ColorScheme;
}
