type ColorScheme = 'light' | 'dark' | 'auto';

export interface CodeEditorProps {
  codeChange: string
  setCodeChange: (str: string) => void;
  userScheme: ColorScheme
}
