import { ColorScheme } from '@/types/interfaces';

export interface CodeEditorProps {
  userCode: string;
  setUserCode: (userCode: string) => void;
  userScheme: ColorScheme;
  editorFontSize: number;
}
