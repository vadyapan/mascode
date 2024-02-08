type ColorScheme = 'light' | 'dark' | 'auto';

export interface CodeEditorProps {
  userCode: string;
  setUserCode: (userCode: string) => void;
  userScheme: ColorScheme;
  editorFontSize: number;
}
